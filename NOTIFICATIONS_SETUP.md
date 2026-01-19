# Configuration des notifications par email

Ce système envoie automatiquement un email à `andriatafitasoa203@gmail.com` chaque fois qu'un visiteur ouvre votre portfolio.

## Configuration requise

### 1. Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit (100 emails/jour gratuits)
3. Allez dans "API Keys" et créez une nouvelle clé API

### 2. Configurer la variable d'environnement

#### En local (développement)
Créez un fichier `.env` à la racine du projet :

```env
RESEND_API_KEY=re_votre_cle_api_ici
```

#### Sur Render (production)
1. Allez dans votre dashboard Render
2. Sélectionnez votre service
3. Allez dans "Environment"
4. Ajoutez la variable d'environnement :
   - **Key**: `RESEND_API_KEY`
   - **Value**: Votre clé API Resend (commence par `re_`)

### 3. Vérifier votre domaine (optionnel)

Par défaut, le système utilise `onboarding@resend.dev` comme expéditeur. Pour utiliser votre propre domaine :

1. Dans Resend, allez dans "Domains"
2. Ajoutez votre domaine
3. Suivez les instructions pour vérifier votre domaine
4. Modifiez la ligne 18 dans `app/api/notify-visit/route.ts` :
   ```typescript
   from: 'Portfolio Notification <notifications@votre-domaine.com>',
   ```

## Fonctionnement

- Le système envoie un email **une fois par session** (pour éviter le spam)
- L'email contient :
  - Date et heure de la visite
  - Adresse IP du visiteur
  - User Agent (navigateur)
  - Referer (d'où vient le visiteur)

## Test

Pour tester en local :
1. Assurez-vous d'avoir la variable `RESEND_API_KEY` dans votre `.env`
2. Lancez `npm run dev`
3. Ouvrez `http://localhost:3000`
4. Vérifiez votre boîte email après 2 secondes

## Dépannage

Si vous ne recevez pas d'emails :
1. Vérifiez que `RESEND_API_KEY` est bien configurée
2. Vérifiez les logs de votre application (console ou logs Render)
3. Vérifiez votre boîte de réception et les spams
4. Vérifiez que votre compte Resend n'a pas atteint la limite

