# Applis EPS Élèves (portail élèves)
Dépôt conseillé : `Applis_EPS_Eleves` → https://vinztoc.github.io/Applis_EPS_Eleves/ (même domaine que Mes Apps EPS ; l'adresse est déclarée dans `config.js` du portail prof).
Portail séparé, à partager aux élèves par lien ou QR code (généré depuis Mes Apps EPS, zone « Applis pour les élèves »).
- Catalogue : `apps.json` (ne contient que des applis élèves).
- Identification : nom, prénom, classe saisis par l'élève, ou aucune (`eleve-core.js`). Aucun import de la liste Pronote.
- Données : base locale « EPSEleves », distincte de celle du professeur. Export .xlsx remis au professeur.
