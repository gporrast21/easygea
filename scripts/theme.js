const themeSwitch = document.getElementById('themeSwitch');
    const themeIcon = document.getElementById('theme-icon');
    const prefersLight = localStorage.getItem('theme') === 'light';

    function updateIcon(isDark) {
      themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    if (prefersLight) {
      document.body.classList.add('light');
      themeSwitch.checked = false;
      updateIcon(false);
    } else {
      updateIcon(true);
    }

    themeSwitch.addEventListener('change', () => {
      const useDark = themeSwitch.checked;
      document.body.classList.toggle('light', !useDark);
      updateIcon(useDark);
      localStorage.setItem('theme', useDark ? 'dark' : 'light');
    });