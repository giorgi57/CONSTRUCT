// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Burger Menu Toggle
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link, .cta-nav');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !burger.contains(e.target)) {
        navMenu.classList.remove('active');
        burger.classList.remove('toggle');
    }
});

// Dark Mode Logic
const themeBtn = document.getElementById('theme-toggle');
const icon = themeBtn.querySelector('i');

function updateTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

themeBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    updateTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    updateTheme(true);
}

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.style.animation = 'fadeInUp 0.6s ease';
                }, Math.random() * 200);
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// WHATSAPP SEND FUNCTION (ჩამატებულია აქ)
function sendToWhatsApp() {
    const phoneInput = document.getElementById('user-phone');
    const phoneValue = phoneInput.value.trim();
    
    if (phoneValue === "" || phoneValue.length < 9) {
        alert('გთხოვთ შეიყვანოთ სწორი ტელეფონის ნომერი! / Por favor, introduce un número válido.');
        return;
    }

    const myNumber = "34632634646"; 
    const message = `Hola, mi número de teléfono es: ${phoneValue}. Me gustaría solicitar una consulta.`;
    const whatsappUrl = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    phoneInput.value = ''; // ვასუფთავებთ ველს გაგზავნის შემდეგ
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.s-card, .portfolio-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', animateOnScroll);

// Parallax effect
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

console.log('🏗️ CONSTRUCTO საიტი წარმატებით ჩაიტვირთა!');
