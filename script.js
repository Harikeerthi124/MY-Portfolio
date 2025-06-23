// Resume data
const resumeData = {
  "personal": {
    "name": "BIYYAPU HARI KEERTHI",
    "title": "Electronics and Communication Engineering Student",
    "subtitle": "Aspiring Electronics Engineer | ML & FPGA Enthusiast",
    "location": "Sastra University, Thanjavur, Tamil Nadu, India - 613401",
    "phone": "+91 6302339574",
    "email": "harikeerthi124@gmail.com",
    "alternateEmail": "126004054@sastra.ac.in",
    "portfolio": "-",
    "linkedin": "https://www.linkedin.com/in/hari-keerthi-baa8792a9/",
    "github": "-"
  },
  "about": {
    "objective": "Electronics and Communication Engineering student with a strong foundation in programming and analytics, seeking to contribute to software development and risk management initiatives. Passionate about technology, collaboration, and continuous learning.",
    "description": "I'm a dedicated ECE student at SASTRA Deemed University with a passion for AI, ML, and VLSI, maintaining a CGPA of 9.75. I enjoy blending hardware design knowledge with data-driven software development.",
    "interests": ["Artificial Intelligence and Machine Learning", "Data Science and Data Visualization", "FPGA Programming", "VLSI"]
  },
  "experience": [
    {
      "position": "Machine Learning Intern",
      "company": "Self/Academic",
      "location": "Remote",
      "duration": "6/2024 - 7/2024",
      "responsibilities": [
        "Analyzed operational data to predict potential machine failures using a Random Forest model.",
        "Utilized Python, Scikit-learn, NumPy, and Pandas for model development and data preprocessing."
      ]
    }
  ],
  "education": [
    {
      "degree": "B.Tech. in Electronics and Communication Engineering",
      "institution": "SASTRA Deemed University",
      "duration": "2022-2026",
      "grade": "Current CGPA: 9.75",
      "location": "Thanjavur, Tamil Nadu"
    },
    {
      "degree": "12th Standard",
      "institution": "Narayana Junior College",
      "duration": "2020-2022",
      "grade": "97.7%",
      "location": "-"
    },
    {
      "degree": "10th Standard",
      "institution": "Ratnam High School",
      "duration": "2014-2020",
      "grade": "99.33%",
      "location": "-"
    }
  ],
  "skills": {
    "programmingLanguages": ["Python", "C++", "C", "SQL"],
    "dataAnalysisTools": ["Power BI"],
    "frameworks": ["Django"],
    "frontEnd": ["HTML", "CSS"],
    "machineLearning": ["Machine Learning Techniques", "Deep Learning (CNN)", "Linear Regression"],
    "tools": ["ModelSim", "Quartus", "Xilinx Vivado", "Matlab"],
    "softSkills": ["Analytical Thinking", "Team Collaboration", "Continuous Learning"]
  },
  "projects": [
    {
      "title": "Amazon Clone Website",
      "description": "Built a front-end replica of the Amazon website.",
      "technologies": ["HTML", "CSS"],
      "github": "-",
      "featured": false
    },
    {
      "title": "Car Price Prediction using Linear Regression",
      "description": "Predicted car prices using Python-based regression models by integrating various input features.",
      "technologies": ["Python"],
      "github": "-",
      "featured": true
    },
    {
      "title": "Mini Radio Station using Adalm Pluto",
      "description": "Developed a mini radio broadcasting system using Adalm Pluto and Matlab.",
      "technologies": ["Matlab"],
      "github": "-",
      "featured": false
    },
    {
      "title": "Machine Failure Prediction using Random Forest",
      "description": "Predicted potential failures in machines based on operational data with Random Forest.",
      "technologies": ["Python", "Scikit-learn", "NumPy", "Pandas"],
      "github": "-",
      "featured": true
    }
  ],
  "achievements": [
    {
      "title": "3rd Place – Logic Gates Competition",
      "description": "Secured 3rd prize in a logic gates competition held by ASCIEE at SASTRA.",
      "type": "award"
    },
    {
      "title": "Blue Star Scholarship Recipient",
      "description": "Awarded a scholarship by Blue Star for academic excellence.",
      "type": "scholarship"
    },
    {
      "title": "Temenos Scholarship",
      "description": "Received financial support through the Temenos scholarship program.",
      "type": "scholarship"
    },
    {
      "title": "NSP Scholarship",
      "description": "Awarded through the National Scholarship Portal (NSP).",
      "type": "scholarship"
    }
  ],
  "certifications": [
    {
      "name": "Digital Design Prototyping using FPGA",
      "issuer": "ASCIEE, SASTRA / Board: ZED FPGA",
      "year": "2024",
      "url": "-"
    },
    {
      "name": "VLSI for Beginners",
      "issuer": "NIELIT Calicut",
      "year": "2024",
      "url": "-"
    },
    {
      "name": "Verilog Workshop",
      "issuer": "ASCIEE Organisation, SASTRA",
      "year": "2024",
      "url": "-"
    },
    {
      "name": "Machine Learning",
      "issuer": "-",
      "year": "2024",
      "url": "-"
    },
    {
      "name": "Deep Learning: Image Classification using CNN",
      "issuer": "-",
      "year": "2024",
      "url": "-"
    },
    {
      "name": "MATLAB Onramp",
      "issuer": "MathWorks",
      "year": "2024",
      "url": "-"
    }
  ],
  "languages": [
    {
      "language": "English",
      "proficiency": "Fluent"
    },
    {
      "language": "Telugu",
      "proficiency": "Native Speaker"
    }
  ]
};


// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function isElementPartiallyInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.top < windowHeight &&
    rect.left < windowWidth
  );
}

// Animation observer
function createAnimationObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  return observer;
}

// Navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const heroButtons = document.querySelectorAll('[data-section]');
  const sections = document.querySelectorAll('.section');
  
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = document.getElementById('main-nav').offsetHeight;
      const targetPosition = section.offsetTop - navHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
  
  function setActiveNavLink() {
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  // Add click listeners to navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('data-section');
      scrollToSection(sectionId);
    });
  });
  
  // Add click listeners to hero buttons
  heroButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = button.getAttribute('data-section');
      if (sectionId) {
        scrollToSection(sectionId);
      }
    });
  });
  
  // Update active nav link on scroll
  const debouncedSetActiveNavLink = debounce(setActiveNavLink, 10);
  window.addEventListener('scroll', debouncedSetActiveNavLink);
  
  // Set initial active link
  setActiveNavLink();
}

// Populate content functions
function populatePersonalInfo() {
  const elements = {
    'firstName': resumeData.personal.name.split(' ').slice(0, 3).join(' '),
    'lastName': resumeData.personal.name.split(' ').slice(3).join(' '),
    'title': resumeData.personal.title,
    'subtitle': resumeData.personal.subtitle,
    'location': resumeData.personal.location.split(',').slice(-2).join(',').trim(),
    'phone': resumeData.personal.phone,
    'footer-text': `© ${new Date().getFullYear()} ${resumeData.personal.name}. Built with HTML, CSS, and JavaScript.`
  };
  
  Object.entries(elements).forEach(([id, text]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = text;
    }
  });
  
  // Set links
  const links = {
    'github-link': resumeData.personal.github,
    'linkedin-link': resumeData.personal.linkedin,
    'email-link': `mailto:${resumeData.personal.email}`
  };
  
  Object.entries(links).forEach(([id, href]) => {
    const element = document.getElementById(id);
    if (element) {
      element.href = href;
    }
  });
}

function populateAboutSection() {
  document.getElementById('about-description').textContent = resumeData.about.description;
  document.getElementById('about-objective').textContent = resumeData.about.objective;
  
  // Populate interests
  const interestsContainer = document.getElementById('interests-container');
  interestsContainer.innerHTML = '';
  
  resumeData.about.interests.forEach(interest => {
    const badge = document.createElement('div');
    badge.className = 'interest-badge';
    badge.textContent = interest;
    interestsContainer.appendChild(badge);
  });
}

function populateExperience() {
  const experienceContainer = document.getElementById('experience-container');
  experienceContainer.innerHTML = '';
  
  resumeData.experience.forEach((exp, index) => {
    const card = document.createElement('div');
    card.className = 'experience-card';
    
    card.innerHTML = `
      <div class="experience-header">
        <div class="experience-header-content">
          <div>
            <h3 class="experience-title">${exp.position}</h3>
            <p class="experience-company">${exp.company}</p>
            <p class="experience-location">${exp.location}</p>
          </div>
          <div class="experience-duration">${exp.duration}</div>
        </div>
      </div>
      <div class="experience-content">
        <ul class="experience-list">
          ${exp.responsibilities.map(responsibility => `
            <li class="experience-item">
              <span class="experience-bullet"></span>
              <span>${responsibility}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    
    experienceContainer.appendChild(card);
  });
}

function populateSkills() {
  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.innerHTML = '';
  
  const skillCategories = [
    { name: 'Programming Languages', skills: resumeData.skills.programmingLanguages },
    { name: 'Frameworks & Libraries', skills: resumeData.skills.frameworks },
    { name: 'Data & Databases', skills: resumeData.skills.dataAnalysisTools },
    { name: 'Web Technologies', skills: resumeData.skills.frontEnd },
    { name: 'Tools & Platforms', skills: resumeData.skills.tools },
    { name: 'AI & Machine Learning', skills: resumeData.skills.machineLearning }
  ];
  
  skillCategories.forEach(category => {
    const group = document.createElement('div');
    group.className = 'skill-group';
    
    group.innerHTML = `
      <div class="skill-group-header">
        <h3 class="skill-group-title">${category.name}</h3>
      </div>
      <div class="skill-group-content">
        ${category.skills.map(skill => `
          <div class="skill-badge">${skill}</div>
        `).join('')}
      </div>
    `;
    
    skillsGrid.appendChild(group);
  });
  
  // Populate soft skills
  const softSkillsContainer = document.getElementById('soft-skills-container');
  softSkillsContainer.innerHTML = '';
  
  resumeData.skills.softSkills.forEach(skill => {
    const badge = document.createElement('div');
    badge.className = 'soft-skill-badge';
    badge.textContent = skill;
    softSkillsContainer.appendChild(badge);
  });
}

function populateProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  projectsGrid.innerHTML = '';
  
  resumeData.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const achievementHtml = project.achievement ? 
      `<div class="project-achievement">🏆 ${project.achievement}</div>` : '';
    
    card.innerHTML = `
      <div class="project-header">
        <div class="project-header-top">
          <h3 class="project-title">${project.title}</h3>
          <div class="project-links">
            <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="project-link">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        ${achievementHtml}
        <p class="project-description">${project.description}</p>
      </div>
      <div class="project-content">
        <div class="project-technologies">
          ${project.technologies.map(tech => `
            <div class="project-tech">${tech}</div>
          `).join('')}
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(card);
  });
}

function populateEducation() {
  const educationContainer = document.getElementById('education-container');
  educationContainer.innerHTML = '';
  
  resumeData.education.forEach(edu => {
    const card = document.createElement('div');
    card.className = 'education-card';
    
    const locationHtml = edu.location ? 
      `<p class="education-location">${edu.location}</p>` : '';
    
    card.innerHTML = `
      <div class="education-content">
        <div class="education-left">
          <h3>${edu.degree}</h3>
          <p class="education-institution">${edu.institution}</p>
          ${locationHtml}
        </div>
        <div class="education-right">
          <div class="education-duration">${edu.duration}</div>
          <p class="education-grade">${edu.grade}</p>
        </div>
      </div>
    `;
    
    educationContainer.appendChild(card);
  });
}

function populateAchievements() {
  const achievementsContainer = document.getElementById('achievements-container');
  achievementsContainer.innerHTML = '';
  
  resumeData.achievements.forEach(achievement => {
    const item = document.createElement('div');
    item.className = 'achievement-item';
    
    item.innerHTML = `
      <h4 class="achievement-title">🏆 ${achievement.title}</h4>
      <p class="achievement-description">${achievement.description}</p>
    `;
    
    achievementsContainer.appendChild(item);
  });
}

function populateCertifications() {
  const certificationsContainer = document.getElementById('certifications-container');
  certificationsContainer.innerHTML = '';
  
  resumeData.certifications.forEach(cert => {
    const item = document.createElement('a');
    item.href = cert.url;
    item.target = '_blank';
    item.rel = 'noopener noreferrer';
    item.className = 'certification-item';
    
    item.innerHTML = `
      <div class="certification-content">
        <div class="certification-info">
          <h4>${cert.name}</h4>
          <p class="certification-issuer">${cert.issuer} • ${cert.year}</p>
        </div>
        <i class="fas fa-external-link-alt certification-icon"></i>
      </div>
    `;
    
    certificationsContainer.appendChild(item);
  });
}

function populateContact() {
  const contactGrid = document.getElementById('contact-grid');
  contactGrid.innerHTML = '';
  
  const contactInfo = [
    {
      icon: 'fa-envelope',
      iconClass: 'email-icon',
      title: 'Email',
      value: resumeData.personal.email,
      link: `mailto:${resumeData.personal.email}`
    },
    {
      icon: 'fa-phone',
      iconClass: 'phone-icon',
      title: 'Phone',
      value: resumeData.personal.phone,
      link: `tel:${resumeData.personal.phone}`
    },
    {
      icon: 'fa-linkedin',
      iconClass: 'linkedin-icon',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: resumeData.personal.linkedin
    }
  ];
  
  contactInfo.forEach(contact => {
    const card = document.createElement('a');
    card.href = contact.link;
    if (contact.link.startsWith('http')) {
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
    }
    card.className = 'contact-card';
    
    card.innerHTML = `
      <i class="fas ${contact.icon} contact-icon ${contact.iconClass}"></i>
      <h3 class="contact-title">${contact.title}</h3>
      <p class="contact-value">${contact.value}</p>
    `;
    
    contactGrid.appendChild(card);
  });
}

// Initialize animations
function initializeAnimations() {
  const observer = createAnimationObserver();
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll(`
    .section-header,
    .about-text,
    .about-skills,
    .interests-section,
    .experience-card,
    .skill-group,
    .soft-skills-section,
    .project-card,
    .education-card,
    .achievements-column,
    .contact-card
  `);
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// Add staggered animation delays
function addStaggeredAnimations() {
  // Stagger skill groups
  const skillGroups = document.querySelectorAll('.skill-group');
  skillGroups.forEach((group, index) => {
    group.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Stagger project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Stagger education cards
  const educationCards = document.querySelectorAll('.education-card');
  educationCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
  
  // Stagger contact cards
  const contactCards = document.querySelectorAll('.contact-card');
  contactCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
}

// Handle navbar scroll behavior
function initializeNavbarScroll() {
  let lastScrollTop = 0;
  const navbar = document.getElementById('main-nav');
  
  const handleScroll = debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, 10);
  
  window.addEventListener('scroll', handleScroll);
}

// Add smooth hover effects
function initializeHoverEffects() {
  // Add hover effect to skill badges
  document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('skill-badge')) {
      e.target.style.transform = 'scale(1.1)';
    }
    if (e.target.classList.contains('interest-badge')) {
      e.target.style.transform = 'scale(1.1)';
    }
    if (e.target.classList.contains('soft-skill-badge')) {
      e.target.style.transform = 'scale(1.1)';
    }
  });
  
  document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('skill-badge')) {
      e.target.style.transform = 'scale(1)';
    }
    if (e.target.classList.contains('interest-badge')) {
      e.target.style.transform = 'scale(1)';
    }
    if (e.target.classList.contains('soft-skill-badge')) {
      e.target.style.transform = 'scale(1)';
    }
  });
}

// Add typing effect to hero title
function initializeTypingEffect() {
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  
  if (firstName && lastName) {
    const firstNameText = firstName.textContent;
    const lastNameText = lastName.textContent;
    
    firstName.textContent = '';
    lastName.textContent = '';
    
    let i = 0;
    const typeFirstName = () => {
      if (i < firstNameText.length) {
        firstName.textContent += firstNameText.charAt(i);
        i++;
        setTimeout(typeFirstName, 100);
      } else {
        setTimeout(typeLastName, 200);
      }
    };
    
    let j = 0;
    const typeLastName = () => {
      if (j < lastNameText.length) {
        lastName.textContent += lastNameText.charAt(j);
        j++;
        setTimeout(typeLastName, 100);
      }
    };
    
    setTimeout(typeFirstName, 1000);
  }
}

// Add loading state
function showLoadingState() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';
}

function hideLoadingState() {
  document.body.style.opacity = '1';
}

// Error handling
function handleError(error, context) {
  console.error(`Error in ${context}:`, error);
}

// Main initialization function
function initializePortfolio() {
  try {
    showLoadingState();
    
    // Populate all content
    populatePersonalInfo();
    populateAboutSection();
    populateExperience();
    populateSkills();
    populateProjects();
    populateEducation();
    populateAchievements();
    populateCertifications();
    populateContact();
    
    // Initialize functionality
    initializeNavigation();
    initializeAnimations();
    initializeNavbarScroll();
    initializeHoverEffects();
    
    // Add staggered animations after content is loaded
    setTimeout(() => {
      addStaggeredAnimations();
      hideLoadingState();
    }, 100);
    
    // Initialize typing effect after a delay
    setTimeout(initializeTypingEffect, 500);
    
  } catch (error) {
    handleError(error, 'portfolio initialization');
    hideLoadingState();
  }
}

// Performance optimization
function optimizePerformance() {
  // Lazy load images if any are added later
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Add keyboard navigation
function initializeKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
}

// Add print styles handler
function initializePrintHandler() {
  window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
  });
  
  window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializePortfolio();
  optimizePerformance();
  initializeKeyboardNavigation();
  initializePrintHandler();
});

// Handle window resize
window.addEventListener('resize', debounce(() => {
  // Recalculate any position-dependent elements
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    // Trigger any necessary recalculations
  });
}, 250));

// Add smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
  const smoothScrollPolyfill = (target, duration = 1000) => {
    const targetPosition = target.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
    
    requestAnimationFrame(animation);
  };
  
  // Override the scroll behavior for older browsers
  window.smoothScrollTo = smoothScrollPolyfill;
}

// Export functions for potential external use
window.portfolioAPI = {
  updateResumeData: (newData) => {
    Object.assign(resumeData, newData);
    initializePortfolio();
  },
  scrollToSection: (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = document.getElementById('main-nav').offsetHeight;
      const targetPosition = section.offsetTop - navHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  },
  getResumeData: () => resumeData
};