/**
 * Sabari Hospital - Core Application Logic
 * Domain: sabarihospital.com
 */

import { 
  hospitalInfo, 
  hospitalStats, 
  quickInfoCards, 
  departments, 
  doctors, 
  medicalServices, 
  facilitiesList, 
  testimonials, 
  healthArticles, 
  faqs 
} from './data.js';

import { getIcon } from './icons.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initStatsCounter();
  initDynamicPlaceholders();
  initAppointmentForm();
  initFacilitiesModal();
  initSearchAndFilters();
  initFaqAccordion();
});

/* --------------------------------------------------------------------------
   Sticky Header & Scroll Behavior
-------------------------------------------------------------------------- */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   Mobile Navigation Drawer
-------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!toggleBtn || !mobileNav) return;

  const toggle = (force) => {
    const isOpen = typeof force === 'boolean' ? force : !toggleBtn.classList.contains('open');
    toggleBtn.classList.toggle('open', isOpen);
    mobileNav.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen.toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', () => toggle());

  // Close when clicking mobile links
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.classList.contains('open')) {
      toggle(false);
    }
  });
}

/* --------------------------------------------------------------------------
   Animated Statistics Counter (Intersection Observer)
-------------------------------------------------------------------------- */
function initStatsCounter() {
  const statElements = document.querySelectorAll('.stat-number[data-target]');
  if (!statElements.length) return;

  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const startTimestamp = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTimestamp) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      el.innerHTML = `${current.toLocaleString()}<span class="stat-suffix">${suffix}</span>`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.innerHTML = `${target.toLocaleString()}<span class="stat-suffix">${suffix}</span>`;
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   Dynamic Content Population from Centralized Data
-------------------------------------------------------------------------- */
function initDynamicPlaceholders() {
  // Populate Quick Info Cards on Home
  const quickInfoContainer = document.getElementById('quick-info-grid');
  if (quickInfoContainer) {
    quickInfoContainer.innerHTML = quickInfoCards.map(card => `
      <div class="quick-card">
        <div class="quick-card-top">
          <div class="quick-icon-box" aria-hidden="true">
            ${getIcon(card.icon)}
          </div>
          <span class="quick-card-badge">${card.badge}</span>
        </div>
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <a href="${card.linkHref}" class="quick-card-link">
          ${card.linkText} ${getIcon('arrow-right', 'icon-sm')}
        </a>
      </div>
    `).join('');
  }

  // Populate Department Grid (Home or Departments page)
  const deptContainer = document.getElementById('departments-grid');
  if (deptContainer) {
    const isFullPage = deptContainer.dataset.full === 'true';
    const list = isFullPage ? departments : departments.slice(0, 8);

    deptContainer.innerHTML = list.map(dept => `
      <article class="department-card" data-dept="${dept.id}">
        <span class="dept-badge">${dept.badge}</span>
        <div class="dept-icon-box" aria-hidden="true">
          ${getIcon(dept.icon)}
        </div>
        <h3>${dept.name}</h3>
        <p>${dept.shortDesc}</p>
        <div class="dept-footer">
          <a href="appointment.html?dept=${dept.id}" class="dept-link">
            Book Specialist ${getIcon('chevron-right')}
          </a>
          <a href="departments.html#${dept.id}" class="btn btn-secondary btn-sm">
            View Details
          </a>
        </div>
      </article>
    `).join('');
  }

  // Populate Doctor Cards (Home or Doctors page)
  const doctorsContainer = document.getElementById('doctors-grid');
  if (doctorsContainer) {
    const isFullPage = doctorsContainer.dataset.full === 'true';
    const list = isFullPage ? doctors : doctors.slice(0, 3);

    doctorsContainer.innerHTML = list.map(doc => `
      <article class="doctor-card" data-dept="${doc.departmentId}">
        <div class="doctor-image-container">
          <img src="${doc.image}" alt="${doc.name} - ${doc.specialization}" loading="lazy" />
          <span class="doctor-exp-badge">${doc.experience}</span>
        </div>
        <div class="doctor-body">
          <span class="doctor-dept-tag">${doc.department}</span>
          <h3 class="doctor-name">${doc.name}</h3>
          <div class="doctor-qualification">${doc.qualification}</div>
          <p class="doctor-specialization">${doc.specialization}</p>
          
          <div class="doctor-meta">
            <div class="doctor-meta-row">
              ${getIcon('calendar', 'icon-sm')} <span>Available: <strong>${doc.availableDays}</strong></span>
            </div>
            <div class="doctor-meta-row">
              ${getIcon('clock', 'icon-sm')} <span>Timings: ${doc.timing}</span>
            </div>
          </div>

          <div class="doctor-actions">
            <a href="appointment.html?doctor=${encodeURIComponent(doc.name)}&dept=${doc.departmentId}" class="btn btn-primary btn-sm" style="flex:1">
              Book Appointment
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Populate Medical Services Grid
  const servicesContainer = document.getElementById('services-grid');
  if (servicesContainer) {
    servicesContainer.innerHTML = medicalServices.map(srv => `
      <div class="service-card">
        <div class="service-icon-box" aria-hidden="true">
          ${getIcon(srv.icon)}
        </div>
        <h3>${srv.title}</h3>
        <p>${srv.description}</p>
        <ul class="service-features-list">
          ${srv.features.map(f => `<li>${getIcon('check', 'icon-sm')} <span>${f}</span></li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  // Populate Facilities Grid
  const facilitiesContainer = document.getElementById('facilities-grid');
  if (facilitiesContainer) {
    const isFullPage = facilitiesContainer.dataset.full === 'true';
    const list = isFullPage ? facilitiesList : facilitiesList.slice(0, 4);

    facilitiesContainer.innerHTML = list.map(fac => `
      <article class="facility-card">
        <div class="facility-image-container">
          <img src="${fac.image}" alt="${fac.title}" loading="lazy" />
          <span class="facility-category-badge">${fac.category}</span>
        </div>
        <div class="facility-body">
          <h3>${fac.title}</h3>
          <p>${fac.description}</p>
          <div class="facility-features">
            ${fac.highlights.map(h => `<span class="facility-pill">${h}</span>`).join('')}
          </div>
        </div>
      </article>
    `).join('');
  }

  // Populate Testimonials
  const testimonialsContainer = document.getElementById('testimonials-grid');
  if (testimonialsContainer) {
    testimonialsContainer.innerHTML = testimonials.map(test => `
      <article class="testimonial-card">
        <div class="testimonial-quote-icon" aria-hidden="true">${getIcon('quote')}</div>
        <div class="star-rating" aria-label="${test.rating} out of 5 stars">
          ${Array(test.rating).fill(getIcon('star')).join('')}
        </div>
        <p class="testimonial-comment">"${test.comment}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar" aria-hidden="true">${test.name.charAt(0)}</div>
          <div class="author-info">
            <span class="author-name">${test.name}</span>
            <span class="author-treatment">${test.treatment}</span>
            <span class="author-verified">${getIcon('shield-check', 'icon-xs')} Verified Patient Review</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Populate Health Blog Articles
  const blogContainer = document.getElementById('blog-grid');
  if (blogContainer) {
    blogContainer.innerHTML = healthArticles.map(article => `
      <article class="blog-card">
        <div class="blog-image-wrapper">
          <img src="${article.image}" alt="${article.title}" loading="lazy" />
          <span class="blog-category-badge">${article.category}</span>
        </div>
        <div class="blog-body">
          <div class="blog-meta-top">
            <span>${article.date}</span> • <span>${article.readTime}</span>
          </div>
          <h3>${article.title}</h3>
          <p>${article.excerpt}</p>
          <a href="#" class="blog-read-link" onclick="alert('Full health article view. Additional wellness insights will be published here.'); return false;">
            Read Health Article ${getIcon('chevron-right', 'icon-sm')}
          </a>
        </div>
      </article>
    `).join('');
  }

  // Populate dynamic select options for department and doctor in appointment forms
  populateFormDropdowns();
}

function populateFormDropdowns() {
  const deptSelect = document.getElementById('appointment-dept');
  const doctorSelect = document.getElementById('appointment-doctor');

  if (deptSelect) {
    deptSelect.innerHTML = `<option value="">Select Department *</option>` + 
      departments.map(d => `<option value="${d.id}">${d.name}</option>`).join('');

    // Pre-select if URL has ?dept=
    const params = new URLSearchParams(window.location.search);
    const deptParam = params.get('dept');
    if (deptParam) {
      deptSelect.value = deptParam;
    }
  }

  if (doctorSelect) {
    const updateDoctors = (deptId) => {
      const filtered = deptId ? doctors.filter(doc => doc.departmentId === deptId) : doctors;
      doctorSelect.innerHTML = `<option value="">Select Preferred Doctor (Optional)</option>` +
        filtered.map(doc => `<option value="${doc.name}">${doc.name} (${doc.department})</option>`).join('');
      
      const params = new URLSearchParams(window.location.search);
      const docParam = params.get('doctor');
      if (docParam) {
        doctorSelect.value = decodeURIComponent(docParam);
      }
    };

    if (deptSelect) {
      deptSelect.addEventListener('change', (e) => updateDoctors(e.target.value));
    }
    updateDoctors(deptSelect ? deptSelect.value : '');
  }
}

/* --------------------------------------------------------------------------
   Appointment Form Validation & Submission
-------------------------------------------------------------------------- */
function initAppointmentForm() {
  const form = document.getElementById('appointment-form');
  if (!form) return;

  const alertBox = document.getElementById('appointment-alert');
  const submitBtn = form.querySelector('button[type="submit"]');

  // Enforce minimum date as today
  const dateInput = form.querySelector('input[type="date"]');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const requiredInputs = form.querySelectorAll('[required]');

    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('is-invalid');
        isValid = false;
      } else {
        input.classList.remove('is-invalid');
      }

      // Specific email validation
      if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          input.classList.add('is-invalid');
          isValid = false;
        }
      }

      // Phone validation
      if (input.name === 'phone' && input.value) {
        const digits = input.value.replace(/\D/g, '');
        if (digits.length < 10) {
          input.classList.add('is-invalid');
          isValid = false;
        }
      }
    });

    if (!isValid) {
      if (alertBox) {
        alertBox.className = 'form-alert error show';
        alertBox.innerHTML = `
          ${getIcon('alert-circle')}
          <div><strong>Please check the form:</strong> Fill in all required fields accurately.</div>
        `;
      }
      return;
    }

    // Submit state simulation
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Processing Request...</span>`;
    }

    setTimeout(() => {
      if (alertBox) {
        alertBox.className = 'form-alert success show';
        alertBox.innerHTML = `
          ${getIcon('check')}
          <div>
            <strong>Thank you.</strong> Your appointment request has been received. Our team will contact you shortly.
            <div style="font-size: 0.8rem; margin-top: 0.35rem; color: #065f46;">
              Please note: Online requests are processed by our hospital reception desk. In case of acute medical emergencies, please call our 24/7 hotline directly.
            </div>
          </div>
        `;
      }

      form.reset();
      populateFormDropdowns();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Request Appointment`;
      }

      alertBox?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 800);
  });

  // Remove invalid state on input
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('is-invalid');
    });
  });
}

/* --------------------------------------------------------------------------
   Facilities Modal / Gallery Interaction
-------------------------------------------------------------------------- */
function initFacilitiesModal() {
  const modalBackdrop = document.getElementById('facility-modal');
  if (!modalBackdrop) return;

  const modalImg = modalBackdrop.querySelector('#modal-img');
  const modalTitle = modalBackdrop.querySelector('#modal-title');
  const modalDesc = modalBackdrop.querySelector('#modal-desc');
  const closeBtn = modalBackdrop.querySelector('.modal-close');

  const closeModal = () => {
    modalBackdrop.classList.remove('show');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('show')) closeModal();
  });
}

/* --------------------------------------------------------------------------
   Search & Filter on Directory Pages
-------------------------------------------------------------------------- */
function initSearchAndFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('directory-search');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.dataset.filter;
        applyFilters(filterVal, searchInput ? searchInput.value : '');
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeBtn = document.querySelector('.filter-btn.active');
      const filterVal = activeBtn ? activeBtn.dataset.filter : 'all';
      applyFilters(filterVal, e.target.value);
    });
  }

  function applyFilters(deptFilter, searchTerm) {
    const cards = document.querySelectorAll('.doctor-card, .department-card');
    const term = (searchTerm || '').toLowerCase().trim();

    cards.forEach(card => {
      const cardDept = card.dataset.dept || '';
      const text = card.textContent.toLowerCase();

      const matchesDept = deptFilter === 'all' || cardDept === deptFilter;
      const matchesSearch = !term || text.includes(term);

      card.style.display = matchesDept && matchesSearch ? '' : 'none';
    });
  }
}

/* --------------------------------------------------------------------------
   FAQ Accordion
-------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}
