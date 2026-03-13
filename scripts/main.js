// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
for (const link of navLinks) {
    link.addEventListener('click', (e) => {
        // Don't close menu for dropdown toggles
        if (link.classList.contains('nav-link') && link.nextElementSibling) {
            e.preventDefault();
            const dropdownMenu = link.nextElementSibling;
            const parentItem = link.parentElement;
            
            // Toggle dropdown on mobile
            if (window.innerWidth <= 768) {
                parentItem?.classList.toggle('active');
                dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            }
        } else {
            // Close menu for regular links
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Handle dropdown clicks on mobile
const dropdownItems = document.querySelectorAll('.dropdown');
for (const item of dropdownItems) {
    const link = item.querySelector('.nav-link');
    if (link?.nextElementSibling) {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Log the form data (in a real application, you'd send this to a server)
        console.log('Form submitted:', data);
		
		// GA event for measuring conversions
		gtag('event', 'contact_form_submit', {
		  event_category: 'engagement',
		  event_label: 'contact_form'
		});
        
        // Show success message
        alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scroll behavior for anchor links (fallback for older browsers)
for (const anchor of document.querySelectorAll('a[href^="#"]')) {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Add active class to navigation items based on current section
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    for (const section of sections) {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    }
    
    for (const link of navLinks) {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    }
});
