// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.classList.add('active');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.classList.toggle('active');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ===== MOBILE NAVIGATION =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// ===== STATUS BADGE TYPING ANIMATION =====
const statusFlipText = document.getElementById('statusFlipText');
const statusSentence = 'Available for internships and challenging projects.';
const typingSpeed = 35;   // ms per character (fast typing)
const holdDuration = 3000; // pause once fully typed before restarting

if (statusFlipText) {
  let charIndex = 0;

  function typeStatusChar() {
    if (charIndex < statusSentence.length) {
      statusFlipText.textContent += statusSentence.charAt(charIndex);
      charIndex++;
      setTimeout(typeStatusChar, typingSpeed);
    } else {
      // Fully typed: hold for a few seconds, then clear and restart
      setTimeout(() => {
        charIndex = 0;
        statusFlipText.textContent = '';
        typeStatusChar();
      }, holdDuration);
    }
  }

  typeStatusChar();
}

// ===== FLOATING SHORTCUTS =====
const emailBtn = document.getElementById('emailBtn');
const githubBtn = document.getElementById('githubBtn');
const linkedinBtn = document.getElementById('linkedinBtn');
const phoneBtn = document.getElementById('phoneBtn');

if (emailBtn) {
  emailBtn.addEventListener('click', () => {
    window.location.href = 'mailto:josephyammine06@gmail.com';
  });
}

if (githubBtn) {
  githubBtn.addEventListener('click', () => {
    window.open('https://github.com/ZuzuYamn', '_blank');
  });
}

if (linkedinBtn) {
  linkedinBtn.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/joseph-yammine06', '_blank');
  });
}

if (phoneBtn) {
  phoneBtn.addEventListener('click', () => {
    window.location.href = 'tel:+96181275199';
  });
}

// ===== PROJECT MODAL =====
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const projectCards = document.querySelectorAll('.project-card');

// Project data
const projectsData = {
  ardana: {
    title: 'Ardana — Agentic AI for Agriculture',
    overview: 'Ardana is an agentic AI "farm manager" built to close the gap between the desire to farm and access to affordable, professional-grade agricultural expertise. It turns raw plant, weather, and diagnostic data into a clear, step-by-step action plan for small-scale and hobbyist farmers, especially in resource-constrained regions who would otherwise rely on trial and error.',
    features: [
      'My Farm module: AI auto-populates growth cycles and care requirements per plant species',
      'Computer-vision plant identification and instant disease diagnosis with treatment guidance',
      'Agentic, weather-aware irrigation alerts that adapt in real time (e.g. pausing reminders during rain)',
      'Personalized scheduling logic factoring in plant species, plant age, and localized weather trends',
      'Multi-lingual interface: Arabic, English, French, Spanish, and Portuguese',
      'High-contrast, accessible design for users regardless of technical background'
    ],
    technologies: 'Gemini API (Gemini Flash), OpenWeather API, Computer Vision, Agentic AI, Prompt Engineering, Full-Stack (Replit)',
    highlights: [
      'Built at the LAU Academy of Continuing Education × Kanz AI Training Hackathon, July 15, 2026',
      'Selected as the AI Showcase Featured Project among a cohort of professionals with 10–20 years of industry experience',
      'Solved Gemini API rate-limiting/connectivity issues by optimizing around the Gemini Flash model for low-latency responses',
      'Implemented full Right-to-Left (RTL) localization for a seamless Arabic user experience',
      'Refined prompt engineering to combine plant species, plant age, and live weather data for accurate, non-generic recommendations',
      'Certified by LAU Academy of Continuing Education & Kanz — Certificate ID: KANZ-ADV-2003'
    ],
    links: {
      github: 'https://github.com/ZuzuYamn/Ardana.git',
      demo: '#',
      portfolio: 'https://try.ka.nz/ai/josephyammine'
    }
  },
  skylux: {
    title: 'SkyLux Airlines',
    overview: 'SkyLux is a modern front-end website for an airline where users can log in and book tickets seamlessly. The platform offers a complete booking experience with intuitive UI and responsive design.',
    features: [
      'User authentication and login flow',
      'Advanced flight search and filtering',
      'Multiple booking options (one-way, round-trip)',
      'Cabin class selection (economy, business, first)',
      'Interactive date pickers with validation',
      'Real-time price calculation',
      'Responsive and accessible design',
      'Modern UI with smooth animations'
    ],
    technologies: 'HTML5, CSS3, JavaScript, Responsive Design',
    highlights: [
      'Built with vanilla HTML, CSS, and JavaScript - no frameworks',
      'Fully responsive design that works on all devices',
      'Accessibility features for keyboard navigation',
      'Clean, maintainable code structure',
      'Professional UI/UX implementation'
    ],
    links: {
      github: 'https://github.com/ZuzuYamn/SkyLux-Web-Development-Project.git',
      demo: '#'
    }
  },
  ums: {
    title: 'University Management System',
    overview: 'A comprehensive desktop application built with Python (Tkinter GUI) and SQLite database. The system manages university operations including student records, course management, GPA tracking, and academic reporting with role-based access control.',
    features: [
      'Role-based user authentication (Admin, Professor, Manager, Student)',
      'Student registration and profile management',
      'Course management and enrollment',
      'GPA calculation per course',
      'Comprehensive reporting and analytics',
      'Database-backed persistence',
      'User-friendly GUI interface',
      'Data validation and error handling'
    ],
    technologies: 'Python, Tkinter, SQLite, OOP, Database Design',
    highlights: [
      'Normalized database schema for optimal data storage',
      'Role-based access control for different user types',
      'Real-time GPA tracking and calculations',
      'Detailed academic reports and statistics',
      'Secure user authentication system'
    ],
    links: {
      github: 'https://github.com/ZuzuYamn/University-Management-System-Project.git',
      demo: '#'
    }
  },
  moviesdb: {
    title: 'Movies Database',
    overview: 'A sophisticated relational database design project for managing comprehensive movie industry data. Includes normalized schemas, complex analytical queries, and insights generation for movies, actors, cinemas, and streaming platforms.',
    features: [
      'Normalized relational database design',
      'Movie information storage and management',
      'Actor and cast management',
      'Cinema and theater information',
      'Streaming platform availability tracking',
      'Pricing information for different platforms',
      'Soundtrack and audio information',
      'Age rating and classification system',
      'Budget and revenue tracking',
      'Complex analytical queries'
    ],
    technologies: 'SQL, Database Design, Entity-Relationship Model, Data Analysis',
    highlights: [
      'Top-10 highest-grossing movies analysis by year',
      'Actor co-starring frequency analysis',
      'Streaming platform ratings and comparisons',
      'Cinema screening schedules and availability',
      'Budget vs. Revenue performance metrics',
      'Age-rating distribution across platforms',
      'Complex JOIN operations and aggregations'
    ],
    links: {
      github: 'https://github.com/ZuzuYamn/Movie-DataBase-Project.git',
      demo: '#'
    }
  }
};

// Open modal with project details
function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  modalBody.innerHTML = `
    <h2>${project.title}</h2>
    ${project.links.portfolio ? `
    <div style="text-align: center; margin: 20px 0;">
      <a href="${project.links.portfolio}" target="_blank" rel="noopener" style="
        display: inline-block;
        padding: 12px 28px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        transition: transform 0.3s ease;
      " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
        Press Here to See Project's Portfolio →
      </a>
    </div>
    ` : ''}
    <h3 style="color: var(--primary); margin-top: 25px; margin-bottom: 10px; font-size: 1.3rem;">Overview</h3>
    <p>${project.overview}</p>
    
    <h3 style="color: var(--primary); margin-top: 25px; margin-bottom: 10px; font-size: 1.3rem;">Key Features</h3>
    <ul>
      ${project.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
    
    <h3 style="color: var(--primary); margin-top: 25px; margin-bottom: 10px; font-size: 1.3rem;">Technologies</h3>
    <p><strong>${project.technologies}</strong></p>
    
    <h3 style="color: var(--primary); margin-top: 25px; margin-bottom: 10px; font-size: 1.3rem;">Highlights</h3>
    <ul>
      ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
    </ul>
    
    <div style="display: flex; gap: 15px; margin-top: 30px;">
      <a href="${project.links.github}" target="_blank" rel="noopener" style="
        flex: 1;
        padding: 12px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        text-align: center;
        font-weight: 600;
        transition: transform 0.3s ease;
      " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
        View on GitHub
      </a>
      <button onclick="document.getElementById('projectModal').classList.remove('active')" style="
        flex: 1;
        padding: 12px;
        background: transparent;
        color: #667eea;
        border: 2px solid #667eea;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Poppins', sans-serif;
      " onmouseover="this.style.backgroundColor='#667eea'; this.style.color='white'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='#667eea'">
        Close
      </button>
    </div>
  `;

  projectModal.classList.add('active');
}

projectCards.forEach(card => {
  const projectId = card.getAttribute('data-project');
  const triggers = card.querySelectorAll('.project-link, .view-details-btn');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openProjectModal(projectId);
    });
  });
});

// Close modal
modalClose.addEventListener('click', () => {
  projectModal.classList.remove('active');
});

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) {
    projectModal.classList.remove('active');
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    projectModal.classList.remove('active');
  }
});

// ===== PROJECT IMAGE CAROUSELS =====
const carouselAutoDelay = 4000;   // ms between automatic slides
const carouselTransitionMs = 700; // must match the CSS transition duration

const isTouchDevice = ('ontouchstart' in window) ||
  (navigator.maxTouchPoints > 0) ||
  window.matchMedia('(hover: none), (pointer: coarse)').matches;
const controlsRevealMs = 3000; // how long tapped controls stay visible before hiding again

document.querySelectorAll('.project-image').forEach(container => {
  const slides = Array.from(container.querySelectorAll('.carousel-slide'));
  const dots = Array.from(container.querySelectorAll('.carousel-dot'));
  const prevBtn = container.querySelector('.carousel-arrow.prev');
  const nextBtn = container.querySelector('.carousel-arrow.next');

  if (slides.length === 0) return;

  // ----- Mobile: tap image to reveal arrows/overlay for a few seconds -----
  let hideControlsTimer = null;

  function showControls() {
    container.classList.add('show-controls');
    clearTimeout(hideControlsTimer);
    hideControlsTimer = setTimeout(() => {
      container.classList.remove('show-controls');
    }, controlsRevealMs);
  }

  // Attached unconditionally (not just when isTouchDevice) so this can never
  // silently fail to work on a phone whose browser misreports hover/pointer
  // media features. Harmless on desktop: hover already reveals the overlay,
  // and a click there just also (re)shows it for a few seconds.
  container.addEventListener('click', (e) => {
    // Taps that land on an arrow/dot/details button are handled by their
    // own listeners (which stopPropagation), so this only fires for taps
    // on the raw image/backdrop.
    if (!container.classList.contains('show-controls')) {
      e.preventDefault();
    }
    showControls();
  });

  let currentIndex = slides.findIndex(slide => slide.classList.contains('active'));
  if (currentIndex === -1) currentIndex = 0;
  let autoTimer = null;
  let isAnimating = false;

  // Picks whichever direction is the shorter path between two slide indices
  function directionBetween(from, to) {
    const total = slides.length;
    const forward = (to - from + total) % total;
    const backward = (from - to + total) % total;
    return forward <= backward ? 'next' : 'prev';
  }

  function goToSlide(newIndex, direction) {
    if (newIndex === currentIndex || isAnimating) return;
    isAnimating = true;

    const outgoing = slides[currentIndex];
    const incoming = slides[newIndex];

    // Place the incoming slide just off-screen (right for "next", left for "prev") instantly
    incoming.classList.add('no-transition');
    incoming.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
    incoming.style.zIndex = '2';
    outgoing.style.zIndex = '1';
    void incoming.offsetWidth; // force reflow so the jump registers with no animation
    incoming.classList.remove('no-transition');

    // Next frame: slide the outgoing slide out one side, incoming slide in from the other
    requestAnimationFrame(() => {
      outgoing.style.transform = direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';
      incoming.style.transform = 'translateX(0)';
    });

    outgoing.classList.remove('active');
    incoming.classList.add('active');

    dots[currentIndex] && dots[currentIndex].classList.remove('active');
    dots[newIndex] && dots[newIndex].classList.add('active');

    currentIndex = newIndex;

    setTimeout(() => {
      // Reset the now-hidden slide back to its resting off-screen spot, ready for next use
      outgoing.classList.add('no-transition');
      outgoing.style.transform = 'translateX(100%)';
      outgoing.style.zIndex = '0';
      void outgoing.offsetWidth;
      outgoing.classList.remove('no-transition');

      incoming.style.zIndex = '1';
      isAnimating = false;
    }, carouselTransitionMs);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoTimer = setInterval(() => {
      goToSlide((currentIndex + 1) % slides.length, 'next');
    }, carouselAutoDelay);
  }

  function stopAutoPlay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function manualNavigate(newIndex, direction) {
    goToSlide(newIndex, direction);
    startAutoPlay(); // reset the timer so it doesn't jump right after a manual change
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      manualNavigate((currentIndex - 1 + slides.length) % slides.length, 'prev');
      if (isTouchDevice) showControls();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      manualNavigate((currentIndex + 1) % slides.length, 'next');
      if (isTouchDevice) showControls();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      if (i === currentIndex) return;
      manualNavigate(i, directionBetween(currentIndex, i));
      if (isTouchDevice) showControls();
    });
  });

  startAutoPlay();
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:josephyammine06@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
  });
}

// ===== YEAR FOOTER =====
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.project-card, .skill-category, .info-card, .timeline-item, .contact-item, .highlight-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ===== SMOOTH SCROLL FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 70; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
  }
  
  lastScroll = currentScroll;
});

// ===== ACTIVE NAVIGATION LINK =====
const sections = document.querySelectorAll('section');
const navLinks2 = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks2.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Add active style to nav links
const style = document.createElement('style');
style.textContent = `
  .nav-link.active::after {
    width: 100% !important;
  }
`;
document.head.appendChild(style);

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual) {
    heroVisual.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ===== FLOATING CARDS CLICK EFFECT =====
document.querySelectorAll('.floating-card').forEach(card => {
  card.addEventListener('click', () => {
    card.style.animation = 'none';
    setTimeout(() => {
      card.style.animation = '';
    }, 10);
  });
});

// ===== FLOATING CARDS HOVER SOUND (Optional) =====
document.querySelectorAll('.floating-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.cursor = 'pointer';
  });
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
  document.body.style.animation = 'fadeIn 0.5s ease';
});

// ===== FORM INPUT FOCUS EFFECTS =====
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
formInputs.forEach(input => {
  input.addEventListener('focus', function() {
    this.style.transform = 'scale(1.02)';
  });
  
  input.addEventListener('blur', function() {
    this.style.transform = 'scale(1)';
  });
});

// ===== SKILL TAGS ANIMATION =====
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', function() {
    this.style.cursor = 'pointer';
    this.style.transform = 'translateY(-3px)';
  });
  
  tag.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// ===== CONSOLE MESSAGE =====
console.log('%c🚀 Welcome to Joseph Yammine\'s Portfolio!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cLooking for an internship? Let\'s connect! 💼', 'font-size: 14px; color: #764ba2;');
console.log('%cEmail: josephyammine06@gmail.com | Phone: +961 81 275 199', 'font-size: 12px; color: #00f2fe;');
console.log('%cGitHub: https://github.com/ZuzuYamn', 'font-size: 12px; color: #00f2fe;');

// ===== TOUCH SUPPORT FOR FLOATING CARDS =====
document.querySelectorAll('.floating-card').forEach(card => {
  card.addEventListener('touchstart', function() {
    this.style.transform = 'scale(1.1)';
  });
  
  card.addEventListener('touchend', function() {
    this.style.transform = 'scale(1)';
  });
});

// ===== BUTTON RIPPLE EFFECT =====
function createRipple(event) {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const radius = Math.max(rect.width, rect.height) / 2;
  const x = event.clientX - rect.left - radius;
  const y = event.clientY - rect.top - radius;
  
  const ripple = document.createElement('span');
  ripple.style.position = 'absolute';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.style.width = ripple.style.height = (radius * 2) + 'px';
  ripple.style.borderRadius = '50%';
  ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
  ripple.style.pointerEvents = 'none';
  ripple.style.animation = 'ripple-animation 0.6s ease-out';
  
  button.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
}

// Add ripple animation
const style2 = document.createElement('style');
style2.textContent = `
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style2);

// ===== RESPONSIVE BEHAVIOR =====
function handleResize() {
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    // Mobile-specific behavior
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  }
}

window.addEventListener('resize', handleResize);

// ===== ERROR HANDLING =====
window.addEventListener('error', function(event) {
  console.error('Error occurred:', event.error);
});

// ===== PERFORMANCE OPTIMIZATION =====
if ('IntersectionObserver' in window) {
  // Use IntersectionObserver for lazy loading and animations
} else {
  // Fallback for older browsers
  console.warn('IntersectionObserver not supported');
}