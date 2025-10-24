function downloadCV(event) {
  event.preventDefault();

  const cvContent = `
ALEXANDRE DUBOIS
Étudiant MESC - Développeur IA & Transformation Digitale

CONTACT
Email: alexandre.dubois@epitech.eu
Téléphone: +33 6 12 34 56 78
Téléphone: +33 6 12 34 56 78

FORMATION
• Master of Science in Engineering Computer Science (MESC) - Epitech
• Spécialisation Intelligence Artificielle et Systèmes d'Information

COMPÉTENCES TECHNIQUES
• Langages: Python, JavaScript, Node.js
• IA/ML: TensorFlow, Machine Learning, NLP
• Frontend: React, Vue.js, HTML/CSS
• Backend: Express, Flask, MongoDB, PostgreSQL
• DevOps: Docker, AWS
• Outils: Git, Redis, WebSocket

PROJETS RÉALISÉS
• Chatbot IA Intelligent - Traitement du langage naturel
• Système de Prédiction - Analyse prédictive pour processus métier
• API de Transformation - Intégration systèmes legacy
• Dashboard Analytics - Visualisation temps réel des KPIs

PASSION
Transformation digitale des entreprises par l'intelligence artificielle
  `;

  const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'CV_Alexandre_Dubois.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);

  const button = event.target;
  const originalText = button.textContent;
  button.textContent = '✅ Téléchargé !';
  button.style.background = 'linear-gradient(45deg, #7ee787, #64ffda)';

  setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'linear-gradient(45deg, #64ffda, #4fc3f7)';
            }, 2000);
        }