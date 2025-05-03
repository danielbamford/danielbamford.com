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

    // Hamburger menu for mobile (dynamic overlay)
    const hamburger = document.getElementById('hamburger');
    const topMenu = document.getElementById('top-menu');
    const topMenuUl = topMenu ? topMenu.querySelector('ul') : null;
    let menuOverlay = null;
    let menuOpen = false;

    function createMenuOverlay() {
        if (menuOverlay) return;
        menuOverlay = document.createElement('div');
        menuOverlay.id = 'mobile-menu-overlay';
        menuOverlay.style.position = 'fixed';
        menuOverlay.style.top = '4.5rem';
        menuOverlay.style.left = '0';
        menuOverlay.style.width = '100vw';
        menuOverlay.style.height = 'calc(100vh - 4.5rem)';
        menuOverlay.style.background = 'var(--surface-color, #fff)';
        menuOverlay.style.zIndex = '99999';
        menuOverlay.style.display = 'flex';
        menuOverlay.style.flexDirection = 'column';
        menuOverlay.style.justifyContent = 'center';
        menuOverlay.style.alignItems = 'center';
        // Copy nav links
        if (topMenuUl) {
            const links = topMenuUl.querySelectorAll('li');
            links.forEach(li => {
                const a = li.querySelector('a');
                if (a) {
                    const overlayLink = a.cloneNode(true);
                    overlayLink.style.fontSize = '1.5rem';
                    overlayLink.style.margin = '1.5rem 0';
                    overlayLink.style.display = 'block';
                    overlayLink.addEventListener('click', function() {
                        removeMenuOverlay();
                    });
                    menuOverlay.appendChild(overlayLink);
                }
            });
        } else {
            // fallback: show a message
            menuOverlay.textContent = 'Menu unavailable';
        }
        document.body.appendChild(menuOverlay);
        menuOpen = true;
    }
    function removeMenuOverlay() {
        if (menuOverlay) {
            menuOverlay.remove();
            menuOverlay = null;
        }
        menuOpen = false;
    }
    if (hamburger && topMenuUl) {
        hamburger.addEventListener('click', function() {
            if (window.innerWidth > 768) return;
            if (menuOpen) {
                removeMenuOverlay();
            } else {
                createMenuOverlay();
            }
        });
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                removeMenuOverlay();
            }
        });
    }
}); 