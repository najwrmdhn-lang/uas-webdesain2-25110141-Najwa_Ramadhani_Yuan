document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.page-section');
    
    function showSection() {
        let hash = window.location.hash || '#home'; // default ke home
        
        sections.forEach(sec => {
            if ('#' + sec.id === hash) {
                sec.style.display = 'block';
            } else {
                sec.style.display = 'none';
            }
        });
    }
    
    window.addEventListener('hashchange', showSection);
    showSection(); // jalan pas pertama load
});
// FILE: js/main.js
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function showSection() {
        let hash = window.location.hash || '#home'; // default ke home
        
        sections.forEach(sec => {
            if ('#' + sec.id === hash) {
                sec.style.display = 'block';
            } else {
                sec.style.display = 'none';
            }
        });

        // Biar menu navbar yg aktif warnanya beda
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === hash){
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('hashchange', showSection);
    showSection(); // jalanin pas pertama load
});
