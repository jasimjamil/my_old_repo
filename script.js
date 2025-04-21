/*=======================
  Preloader
========================*/
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.classList.add("hide");
    // Animate elements after preloader
    document.querySelectorAll(".fade-in, .hero-content, .hero-image").forEach(el => {
      el.classList.add("animate");
    });
  }, 2000);
});

/*=======================
  Theme Toggle
========================*/
const themeToggle = document.querySelector(".theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Check for saved theme preference or use the system preference
if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDarkScheme.matches)) {
  document.body.classList.add("dark-theme");
}

// Toggle theme when the theme toggle is clicked
themeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  }
});

/*=======================
  Custom Cursor
========================*/
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");
const links = document.querySelectorAll("a, button, .filter-btn, .theme-toggle");

// Show cursor only on desktop
if (window.innerWidth > 1024) {
  cursor.style.opacity = "1";
  cursorFollower.style.opacity = "1";
  
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px";
      cursorFollower.style.top = e.clientY + "px";
    }, 80);
  });
  
  // Custom cursor effects for interactive elements
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-active");
      cursorFollower.classList.add("cursor-active");
    });
    
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-active");
      cursorFollower.classList.remove("cursor-active");
    });
  });
  
  // Hide cursor when leaving window
  document.addEventListener("mouseout", () => {
    cursor.style.opacity = "0";
    cursorFollower.style.opacity = "0";
  });
  
  document.addEventListener("mouseover", () => {
    cursor.style.opacity = "1";
    cursorFollower.style.opacity = "1";
  });
}

/*=======================
  Sticky Header & Back to Top
========================*/
const header = document.querySelector("header");
const backToTop = document.querySelector(".back-to-top");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Sticky header with hide on scroll down, show on scroll up
  if (scrollTop > 100) {
    header.classList.add("scrolled");
    if (scrollTop > lastScrollTop) {
      header.classList.add("header-hidden");
    } else {
      header.classList.remove("header-hidden");
    }
  } else {
    header.classList.remove("scrolled");
    header.classList.remove("header-hidden");
  }
  
  // Show/hide back to top button
  if (scrollTop > 600) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
  
  lastScrollTop = scrollTop;
});

// Back to top functionality
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/*=======================
  Mobile Menu Toggle
========================*/
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// Close menu when clicking on a link on mobile
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 992) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
});

/*=======================
  Active Navigation Links
========================*/
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = sectionId;
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

/*=======================
  Typed.js Animation - Customized for AI/ML Engineer
========================*/
if (document.querySelector(".auto-type")) {
  const typed = new Typed(".auto-type", {
    strings: ["Engineer", "Solution Architect", "Chatbot Developer", "Python Expert"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
}

/*=======================
  Particles.js Background - AI/ML Themed
========================*/
if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#6366f1"
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 6
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#6366f1",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
}

/*=======================
  Project Filtering
========================*/
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// Initialize Isotope if available
let iso;
if (window.Isotope) {
  const projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid) {
    iso = new Isotope(projectsGrid, {
      itemSelector: '.project-card',
      layoutMode: 'fitRows'
    });
  }
}

// Filter projects
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    
    // Filter using Isotope if available, otherwise use basic filtering
    if (iso) {
      if (filterValue === '*') {
        iso.arrange({ filter: '*' });
      } else {
        iso.arrange({ filter: `.${filterValue}` });
      }
    } else {
      projectCards.forEach(card => {
        if (filterValue === '*') {
          card.style.display = 'block';
        } else if (card.classList.contains(filterValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  });
});

/*=======================
  Skills Progress Animation
========================*/
const progressBars = document.querySelectorAll('.progress');

const animateProgress = () => {
  progressBars.forEach(progress => {
    const progressValue = progress.getAttribute('data-progress');
    progress.style.width = 0;
    
    setTimeout(() => {
      progress.style.width = `${progressValue}%`;
    }, 100);
  });
};

// Animate on scroll into view
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgress();
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  skillsObserver.observe(skillsSection);
}

/*=======================
  3D Tilt Effect for Cards
========================*/
if (window.VanillaTilt) {
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.3
  });
  
  // Special settings for AI/ML tech icons
  VanillaTilt.init(document.querySelectorAll(".tech-icon"), {
    max: 15,
    speed: 400,
    scale: 1.05,
    glare: true,
    "max-glare": 0.2
  });
}

/*=======================
  Fade-in Animation on Scroll
========================*/
const fadeElements = document.querySelectorAll('.fade-in-element');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe all elements with fade-in-element class
fadeElements.forEach(element => {
  fadeObserver.observe(element);
});

// Add animation classes to elements
document.querySelectorAll(".section-title-container, .project-card, .service-card, .contact-card, .about-image-container, .education-section, .clients-section").forEach(element => {
  element.classList.add('fade-in-element');
  fadeObserver.observe(element);
});

/*=======================
  Glitch Text Effect
========================*/
const glitchTexts = document.querySelectorAll(".glitch");

glitchTexts.forEach(text => {
  let glitchInterval;
  
  const startGlitch = () => {
    text.classList.add("active");
    
    clearInterval(glitchInterval);
    glitchInterval = setInterval(() => {
      text.classList.add("glitching");
      setTimeout(() => {
        text.classList.remove("glitching");
      }, 200);
    }, 3000);
  };
  
  startGlitch();
});

/*=======================
  Smooth Scrolling
========================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = document.querySelector("header").offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});

/*=======================
  Contact Form Validation
========================*/
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    let isValid = true;
    
    // Simple validation
    if (nameInput && !nameInput.value.trim()) {
      showError(nameInput, "Name is required");
      isValid = false;
    } else if (nameInput) {
      removeError(nameInput);
    }
    
    if (emailInput && !emailInput.value.trim()) {
      showError(emailInput, "Email is required");
      isValid = false;
    } else if (emailInput && !isValidEmail(emailInput.value)) {
      showError(emailInput, "Please enter a valid email");
      isValid = false;
    } else if (emailInput) {
      removeError(emailInput);
    }
    
    if (subjectInput && !subjectInput.value.trim()) {
      showError(subjectInput, "Subject is required");
      isValid = false;
    } else if (subjectInput) {
      removeError(subjectInput);
    }
    
    if (messageInput && !messageInput.value.trim()) {
      showError(messageInput, "Message is required");
      isValid = false;
    } else if (messageInput) {
      removeError(messageInput);
    }
    
    if (isValid) {
      // Success message - in real app would send to server
      showFormSuccess();
      this.reset();
    }
  });
  
  // Input focus effects
  document.querySelectorAll(".form-group input, .form-group textarea").forEach(input => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("focused");
    });
    
    input.addEventListener("blur", () => {
      input.parentElement.classList.remove("focused");
      if (input.value.trim() !== "") {
        input.parentElement.classList.add("has-value");
      } else {
        input.parentElement.classList.remove("has-value");
      }
    });
  });
}

// Email validation
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Show error message
function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.add("error");
  
  let errorElement = formGroup.querySelector(".error-message");
  
  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.className = "error-message";
    formGroup.appendChild(errorElement);
  }
  
  errorElement.textContent = message;
}

// Remove error message
function removeError(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("error");
  
  const errorElement = formGroup.querySelector(".error-message");
  if (errorElement) {
    errorElement.remove();
  }
}

// Show form success message
function showFormSuccess() {
  const successMessage = document.createElement("div");
  successMessage.className = "form-success-message";
  successMessage.innerHTML = `
    <div class="success-icon">
      <i class="fas fa-check-circle"></i>
    </div>
    <h3>Message Sent Successfully!</h3>
    <p>Thank you for contacting me. I'll get back to you shortly.</p>
  `;
  
  contactForm.style.display = "none";
  contactForm.parentElement.appendChild(successMessage);
  
  setTimeout(() => {
    successMessage.remove();
    contactForm.style.display = "block";
  }, 5000);
}

/*=======================
  Initialize on Load
========================*/
window.addEventListener("load", () => {
  // Add CSS class to body after load
  document.body.classList.add("loaded");
  
  // Initialize any elements that depend on full page load
  if (document.querySelectorAll(".floating-card")) {
    document.querySelectorAll(".floating-card").forEach(card => {
      card.classList.add("animate");
    });
  }
  
  // Floating animation for AI/ML related elements
  const aiElements = document.querySelectorAll('.tech-icon i');
  aiElements.forEach(element => {
    // Add random floating animation
    element.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite`;
  });
}); 