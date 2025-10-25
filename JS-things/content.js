async function onConfigChange(config) {
  const studentNameEl = document.getElementById('student-name');
  const studentTitleEl = document.getElementById('student-title');
  const aboutTextEl = document.getElementById('about-text');
  const emailEl = document.getElementById('email-address');
  const phoneEl = document.getElementById('phone-number');

  if (studentNameEl) studentNameEl.textContent = config.student_name || defaultConfig.student_name;
  if (studentTitleEl) studentTitleEl.textContent = config.student_title || defaultConfig.student_title;
  if (aboutTextEl) aboutTextEl.textContent = config.about_text || defaultConfig.about_text;
  if (emailEl) {
    const email = config.email_address || defaultConfig.email_address;
    // insert a mailto link so clicking opens the user's mail client
    emailEl.innerHTML = `<a href="mailto:${email}">${email}</a>`;
  }
  if (phoneEl) phoneEl.textContent = config.phone_number || defaultConfig.phone_number;

  document.documentElement.style.setProperty('--primary-color', config.primary_color || defaultConfig.primary_color);
  document.documentElement.style.setProperty('--background-color', config.background_color || defaultConfig.background_color);
  document.documentElement.style.setProperty('--surface-color', config.surface_color || defaultConfig.surface_color);
  document.documentElement.style.setProperty('--text-color', config.text_color || defaultConfig.text_color);
  document.documentElement.style.setProperty('--accent-color', config.accent_color || defaultConfig.accent_color);

  document.body.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, #764ba2 100%)`;

  const primaryElements = document.querySelectorAll('.logo, .section-title, .about-text h2, .contact h2');
  primaryElements.forEach(el => el.style.color = config.primary_color || defaultConfig.primary_color);
}
