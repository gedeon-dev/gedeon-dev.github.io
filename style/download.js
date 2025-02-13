// Fonction pour télécharger un fichier PDF
function downloadPDF(url, filename) {
    // Crée un élément <a> temporaire
    var a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download.pdf';
    
    // Simule un clic sur l'élément <a> pour déclencher le téléchargement
    var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
    });
    a.dispatchEvent(clickEvent);
}

// Exemple d'utilisation
downloadPDF('lien_vers_votre_fichier.pdf', 'nom_du_fichier.pdf');