// Empty JavaScript file 

document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    let isDarkMode = false;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        switchTheme();
    }

    themeSwitcher.addEventListener('click', function() {
        switchTheme();
        // Save theme preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    function switchTheme() {
        isDarkMode = !isDarkMode;
        themeStylesheet.href = isDarkMode ? 'assets/css/dark.css' : 'assets/css/light.css';
        
        // Toggle icon visibility
        if (isDarkMode) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }

    // Set initial icon visibility
    if (isDarkMode) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}); 