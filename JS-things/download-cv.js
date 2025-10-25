function downloadCV(event) {
  event.preventDefault();

  // Chemin relatif depuis la page (indexx.html) vers le PDF ajouté dans assets/
  const pdfPath = 'assets/Latif-SEBOGO-1.pdf';

  // Crée un lien et déclenche le téléchargement du PDF
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'Latif-SEBOGO-1.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Feedback visuel sur le bouton
  const button = event.target;
  const originalText = button.textContent;
  try {
    button.textContent = '✅ Téléchargé !';
    button.style.background = 'linear-gradient(45deg, #7ee787, #64ffda)';

    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = 'linear-gradient(45deg, #64ffda, #4fc3f7)';
    }, 2000);
  } catch (e) {
    // silent fallback: nothing to do if button not found or style fails
  }
}