import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY && process.env.NODE_ENV === 'production') {
  console.error('⚠️ RESEND_API_KEY n\'est pas configurée dans les variables d\'environnement')
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {

    if (!process.env.RESEND_API_KEY || !resend) {
      if (process.env.NODE_ENV === 'development') {
        return NextResponse.json({
          success: true,
          skipped: true,
          message: 'Notification désactivée en local (RESEND_API_KEY absente)',
        })
      }

      console.error('❌ RESEND_API_KEY manquante - Email non envoyé')
      return NextResponse.json(
        {
          error: 'Configuration manquante',
          message: 'RESEND_API_KEY n\'est pas configurée. Veuillez l\'ajouter dans les variables d\'environnement sur Render.'
        },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { userAgent, referer, timestamp } = body

    const forwarded = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ip = forwarded?.split(',')[0] || realIp || 'Non disponible'

    console.log('📧 Tentative d\'envoi d\'email de notification...')
    console.log('📧 Destinataire: andriatafitasoa203@gmail.com')
    console.log('📧 Date: ', new Date(timestamp).toLocaleString('fr-FR', { timeZone: 'Indian/Antananarivo' }))

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Notification <onboarding@resend.dev>',
      to: ['andriatafitasoa203@gmail.com'],
      subject: '🎯 Nouvelle visite sur votre portfolio !',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouvelle visite détectée sur votre portfolio</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Date et heure :</strong> ${new Date(timestamp).toLocaleString('fr-FR', { timeZone: 'Indian/Antananarivo' })}</p>
            <p><strong>Adresse IP :</strong> ${ip || 'Non disponible'}</p>
            <p><strong>User Agent :</strong> ${userAgent || 'Non disponible'}</p>
            <p><strong>Referer :</strong> ${referer || 'Accès direct'}</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            Quelqu'un a visité votre portfolio sur <a href="https://porfolio-me.onrender.com">porfolio-me.onrender.com</a>
          </p>
        </div>
      `,
      text: `
Nouvelle visite détectée sur votre portfolio

Date et heure : ${new Date(timestamp).toLocaleString('fr-FR', { timeZone: 'Indian/Antananarivo' })}
Adresse IP : ${ip || 'Non disponible'}
User Agent : ${userAgent || 'Non disponible'}
Referer : ${referer || 'Accès direct'}

Quelqu'un a visité votre portfolio sur https://porfolio-me.onrender.com
      `,
    })

    if (error) {
      console.error('❌ Erreur lors de l\'envoi de l\'email:', JSON.stringify(error, null, 2))
      return NextResponse.json(
        {
          error: 'Erreur lors de l\'envoi de l\'email',
          details: error,
          message: 'L\'email n\'a pas pu être envoyé. Vérifiez votre clé API Resend et les logs pour plus de détails.'
        },
        { status: 500 }
      )
    }

    if (data?.id) {
      console.log('✅ Email envoyé avec succès!')
      console.log('✅ Message ID:', data.id)
      return NextResponse.json({
        success: true,
        messageId: data.id,
        message: 'Email envoyé avec succès à andriatafitasoa203@gmail.com'
      })
    } else {
      console.error('⚠️ Email envoyé mais pas de message ID retourné')
      return NextResponse.json({
        success: false,
        message: 'Email peut-être envoyé mais confirmation incertaine'
      }, { status: 200 })
    }

  } catch (error) {
    console.error('❌ Erreur dans l\'API notify-visit:', error)
    return NextResponse.json(
      {
        error: 'Erreur serveur',
        message: error instanceof Error ? error.message : 'Erreur inconnue',
        details: error
      },
      { status: 500 }
    )
  }
}

