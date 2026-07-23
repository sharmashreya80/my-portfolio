var typed = new Typed('#element', {
    strings: [

           'Data Analyst',
        
        'Web Developer',
        
     
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1200,
    loop: true
});
// Data store holding your exact structural achievements
const projectData = {
    blinkit: {
        title: "Blinkit Business Sales Analysis",
        desc: "Cleaned and analyzed 8,523+ records using MySQL queries and designed an interactive data visualization layout tracking outlet variances and metrics[cite: 2].",
        scope: "8,523+ Retail Rows",
        impact: "Monitored $18.6M Sales",
        link: "https://github.com/sharmashreya80/blinkit-business-analysis",
        img: "images/blinkit-dashboard.png" // Put your dashboard screenshot here
    },
    retail: {
        title: "Retail Performance Tracker",
        desc: "Built a functional analytical matrix manipulating raw structural attributes through Power Query and SQL filters to evaluate real-time profit returns[cite: 2].",
        scope: "SQL Data Modeling",
        impact: "Dynamic Real-Time KPIs",
        link: "https://github.com/sharmashreya80/Sales-Performance-Tracker-",
        img: "images/retail-dashboard.png"
    },
    global: {
        title: "Global Sales Analysis Dashboard",
        desc: "Developed a functional Tableau geographical application mapping worldwide delivery configurations across diverse engineering fields[cite: 2].",
        scope: "Tableau Visualization",
        impact: "Geo-Spatial Mapping",
        link: "https://github.com/sharmashreya80/Global-Sales-Analysis-Dashboard",
        img: "images/global-dashboard.png"
    },
    techbazaar: {
        title: "TechBazaar Marketplace",
        desc: "Developed a full-stack e-commerce web platform for electronics featuring glassmorphic UI, responsive product catalogs, seller onboarding, and dynamic category routing.",
        scope: "Full-Stack App",
        impact: "Spring Boot + MySQL",
        link: "https://github.com/sharmashreya80/TechBazaar-.git",
        img: "images/webtech.png"
    }
};

function switchProject(key) {
    // 1. Update active styling in controls
    const cards = document.querySelectorAll('.control-card');
    cards.forEach(card => card.classList.remove('active'));
    
    // Find clicked card dynamically using the execution path
    event.currentTarget.classList.add('active');

    // 2. Animate and swap stage contents smoothly
    const target = projectData[key];
    
    document.getElementById('stage-title').innerText = target.title;
    document.getElementById('stage-desc').innerText = target.desc;
    document.getElementById('meta-scope').innerText = target.scope;
    document.getElementById('meta-impact').innerText = target.impact;
    document.getElementById('stage-link').href = target.link;
    document.getElementById('stage-img').src = target.img;
}
const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevents the page from reloading
        
        const formData = new FormData(form);
        const button = form.querySelector('.send-btn');
        
        // Change button look to show it's working
        button.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        button.style.pointerEvents = 'none';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                button.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
                button.style.background = '#22c55e'; // Green success color
                form.reset(); // Clear the inputs
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            button.innerHTML = 'Error! Try Again <i class="fas fa-exclamation-triangle"></i>';
            button.style.background = '#ef4444'; // Red error color
            button.style.pointerEvents = 'auto';
        }
    });
}
// Smooth scroll helper for the Hire Me button
document.querySelector('.hire').addEventListener('click', function(e) {
    e.preventDefault(); // Stop default jump
    const target = document.querySelector('#contact');
    
    if (target) {
        // Automatically scroll to the contact element, leaving a gap for the navigation bar
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 90; // Adjusts for your fixed nav height

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});