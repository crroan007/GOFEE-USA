document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.main-nav');
    
    if(mobileBtn) {
        mobileBtn.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            if(nav.style.display === 'block') {
                nav.style.position = 'absolute';
                nav.style.top = '80px';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'white';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            }
        });
    }

    // Scroll Effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if(window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
