# Guide de vérification - Notifications par email

Ce guide vous aide à vérifier que les notifications de visite sont bien envoyées à votre email.

## ✅ Checklist de configuration

### 1. Variable d'environnement sur Render

1. Allez sur [https://dashboard.render.com](https://dashboard.render.com)
2. Sélectionnez votre service (portfolio)
3. Cliquez sur "Environment" dans le menu de gauche
4. Vérifiez que `RESEND_API_KEY` existe et commence par `re_`
5. Si elle n'existe pas, ajoutez-la :
   - **Key**: `RESEND_API_KEY`
   - **Value**: Votre clé API Resend (commence par `re_`)

### 2. Clé API Resend valide

1. Allez sur [https://resend.com/api-keys](https://resend.com/api-keys)
2. Vérifiez que votre clé API est active
3. Vérifiez que vous n'avez pas atteint la limite (100 emails/jour gratuit)

## 🔍 Comment vérifier que ça fonctionne

### Méthode 1 : Vérifier les logs Render (RECOMMANDÉ)

1. Allez sur votre dashboard Render
2. Sélectionnez votre service
3. Cliquez sur "Logs"
4. Visitez votre portfolio : https://porfolio-me.onrender.com
5. Attendez 2-3 secondes
6. Regardez les logs, vous devriez voir :

**✅ Si ça fonctionne :**
```
📧 Tentative d'envoi d'email de notification...
📧 Destinataire: andriatafitasoa203@gmail.com
📧 Date: [date et heure]
✅ Email envoyé avec succès!
✅ Message ID: [un ID]
```

**❌ Si ça ne fonctionne pas :**
```
❌ RESEND_API_KEY manquante - Email non envoyé
```
ou
```
❌ Erreur lors de l'envoi de l'email: [détails de l'erreur]
```

### Méthode 2 : Vérifier dans Resend

1. Allez sur [https://resend.com/emails](https://resend.com/emails)
2. Vous verrez l'historique de tous les emails envoyés
3. Vérifiez que les emails sont bien envoyés à `andriatafitasoa203@gmail.com`

### Méthode 3 : Vérifier votre boîte email

1. Ouvrez votre boîte email : `andriatafitasoa203@gmail.com`
2. Vérifiez les emails reçus
3. Vérifiez aussi les **spams/courriers indésirables**
4. Le sujet de l'email sera : **"🎯 Nouvelle visite sur votre portfolio !"**

### Méthode 4 : Console du navigateur (pour test local)

1. Ouvrez votre portfolio en local : `http://localhost:3000`
2. Appuyez sur `F12` pour ouvrir les outils de développement
3. Allez dans l'onglet "Console"
4. Vous devriez voir :
   ```
   🔔 Notification de visite déclenchée
   ✅ Notification envoyée avec succès!
   ✅ Message ID: [un ID]
   ```

## 🐛 Dépannage

### Problème : Pas d'email reçu

**Solutions :**
1. ✅ Vérifiez les logs Render pour voir les erreurs
2. ✅ Vérifiez que `RESEND_API_KEY` est bien configurée sur Render
3. ✅ Vérifiez votre boîte de spams
4. ✅ Vérifiez que votre compte Resend n'a pas atteint la limite
5. ✅ Vérifiez que la clé API commence bien par `re_`

### Problème : Erreur "RESEND_API_KEY manquante"

**Solution :**
1. Allez sur Render → Environment
2. Ajoutez la variable `RESEND_API_KEY` avec votre clé API
3. Redéployez votre service (Render le fait automatiquement)

### Problème : Erreur "Invalid API key"

**Solution :**
1. Vérifiez que votre clé API est correcte sur [resend.com/api-keys](https://resend.com/api-keys)
2. Créez une nouvelle clé API si nécessaire
3. Mettez à jour la variable sur Render

### Problème : Erreur "Rate limit exceeded"

**Solution :**
1. Vous avez atteint la limite de 100 emails/jour
2. Attendez jusqu'au lendemain
3. Ou passez à un plan payant sur Resend

## 📊 Test manuel

Pour tester manuellement :

1. **En local :**
   ```bash
   # Créez un fichier .env avec :
   RESEND_API_KEY=re_votre_cle_ici
   
   # Redémarrez le serveur
   npm run dev
   ```

2. **Visitez votre site** et vérifiez les logs

3. **Vérifiez votre email** après 2-3 secondes

## 📧 Format de l'email reçu

L'email contiendra :
- **Sujet** : 🎯 Nouvelle visite sur votre portfolio !
- **Date et heure** de la visite
- **Adresse IP** du visiteur
- **User Agent** (navigateur utilisé)
- **Referer** (d'où vient le visiteur)

## ✅ Confirmation que tout fonctionne

Vous pouvez confirmer que tout fonctionne si :
1. ✅ Les logs Render montrent "✅ Email envoyé avec succès!"
2. ✅ Vous recevez l'email dans `andriatafitasoa203@gmail.com`
3. ✅ L'email apparaît dans l'historique Resend

---

**Note importante** : Le système envoie **un seul email par session** pour éviter le spam. Si vous testez plusieurs fois, attendez quelques minutes ou utilisez un autre navigateur/onglet privé.

