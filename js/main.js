/**
 * NEWANDIVHO (PTY) LTD - Interactive Website Script
 * Pure modern vanilla JavaScript (Zero external dependencies).
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPillarTabs();
  initQuoteBuilder();
  initFaqFilter();
  initContactForm();
  initSmoothScroll();
});

/* --- 1. Sticky Navbar & Mobile Drawer with Backdrop --- */
function initNavbar() {
  const header = document.querySelector('.header-nav');
  const toggleBtn = document.getElementById('navToggleBtn');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-links a, .mobile-drawer .btn');

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  function closeDrawer() {
    if (drawer) drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '☰';
    }
    document.body.style.overflow = '';
  }

  function openDrawer() {
    if (drawer) drawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = '✕';
    }
    document.body.style.overflow = 'hidden';
  }

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = drawer.classList.contains('active');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
    }
  }
}

/* --- 2. 3-Pillar Solution Explorer Sub-Navigation --- */
function switchPillarTab(targetPillar) {
  const tabButtons = document.querySelectorAll('.pillar-tab-btn');
  const tabPanes = document.querySelectorAll('.service-card.pillar-tab-pane');

  if (!targetPillar) return;

  // Update tab buttons
  tabButtons.forEach(btn => {
    const isTarget = btn.getAttribute('data-pillar') === targetPillar;
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
  });

  // Update tab panes (service cards)
  tabPanes.forEach(pane => {
    const isTarget = pane.getAttribute('data-pillar') === targetPillar;
    pane.classList.toggle('active', isTarget);
  });
}

function initPillarTabs() {
  const tabButtons = document.querySelectorAll('.pillar-tab-btn');

  // Click listeners for tabs
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPillar = btn.getAttribute('data-pillar');
      switchPillarTab(targetPillar);
    });
  });

  // Hero pillar buttons jumper
  const heroPillarBtns = document.querySelectorAll('.hero-pillar-btn');
  heroPillarBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPillar = btn.getAttribute('data-jump-pillar');
      switchPillarTab(targetPillar);

      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Footer solution links jumper
  const footerPillarLinks = document.querySelectorAll('.footer-pillar-link');
  footerPillarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetPillar = link.getAttribute('data-jump-pillar');
      if (targetPillar) {
        switchPillarTab(targetPillar);
      }
    });
  });
}

/* --- 3. Interactive Multi-Service Quote Request Builder --- */
function initQuoteBuilder() {
  const checkboxes = document.querySelectorAll('.calc-checkbox');
  const selectedListEl = document.getElementById('calcSelectedList');
  const totalCountEl = document.getElementById('calcTotalItemsCount');
  const applyToFormBtn = document.getElementById('applyCalcToFormBtn');
  const directWhatsAppBtn = document.getElementById('directWhatsAppQuoteBtn');
  const resetBtn = document.getElementById('resetCalcBtn');

  function updateQuoteList() {
    const selectedItems = [];

    checkboxes.forEach(cb => {
      if (cb.checked) {
        const name = cb.getAttribute('data-name');
        selectedItems.push(name);
      }
    });

    // Render list
    if (selectedItems.length === 0) {
      if (selectedListEl) {
        selectedListEl.innerHTML = '<li class="calc-empty-note">No items selected yet. Tick the services or supplies above that you need a quote for.</li>';
      }
      if (totalCountEl) totalCountEl.textContent = '0 Services Selected';
      if (directWhatsAppBtn) {
        directWhatsAppBtn.href = "https://wa.me/27680962778?text=Hello%20NEWANDIVHO,%20I%20would%20like%20to%20request%20an%20official%20quotation.";
      }
    } else {
      if (selectedListEl) {
        selectedListEl.innerHTML = selectedItems.map(item => `
          <li class="calc-selected-item">
            <span>✓ ${item}</span>
            <span style="color:var(--accent-light); font-weight:700; font-size:0.75rem;">SELECTED</span>
          </li>
        `).join('');
      }
      if (totalCountEl) {
        totalCountEl.textContent = `${selectedItems.length} Service${selectedItems.length > 1 ? 's' : ''} Selected`;
      }

      if (directWhatsAppBtn) {
        const waMsg = encodeURIComponent(
          `*NEWANDIVHO Quotation Request*\n\nHello NEWANDIVHO (PTY) LTD,\n\nI would like to request an official quotation for the following items:\n${selectedItems.map(i => `• ${i}`).join('\n')}\n\nPlease send the formal quotation to this WhatsApp number.`
        );
        directWhatsAppBtn.href = `https://wa.me/27680962778?text=${waMsg}`;
      }
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', updateQuoteList);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      checkboxes.forEach(cb => cb.checked = false);
      updateQuoteList();
    });
  }

  // Connect "Add to Quote Request" buttons on service cards to the builder
  const addButtons = document.querySelectorAll('.add-to-calc-btn');
  addButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = btn.getAttribute('data-service-id');
      const targetCheckbox = document.getElementById(`calc-${serviceId}`);
      if (targetCheckbox) {
        targetCheckbox.checked = true;
        updateQuoteList();
        
        // Scroll to quote builder
        const calcSection = document.getElementById('quote-builder');
        if (calcSection) {
          calcSection.scrollIntoView({ behavior: 'smooth' });
          targetCheckbox.parentElement.style.outline = '2px solid var(--accent)';
          setTimeout(() => {
            targetCheckbox.parentElement.style.outline = 'none';
          }, 1800);
        }
      }
    });
  });

  // Transfer quotation list to contact form
  if (applyToFormBtn) {
    applyToFormBtn.addEventListener('click', () => {
      const selected = [];
      checkboxes.forEach(cb => {
        if (cb.checked) {
          selected.push(cb.getAttribute('data-name'));
        }
      });

      const messageField = document.getElementById('contactMessage');
      const serviceSelect = document.getElementById('contactService');

      if (messageField) {
        if (selected.length > 0) {
          messageField.value = `Hello NEWANDIVHO Team,\n\nI would like to request an official quotation for the following selected items:\n\n${selected.map(item => `• ${item}`).join('\n')}\n\nPlease review our request and send the official quotation to my WhatsApp and email.`;
        } else {
          messageField.value = `Hello NEWANDIVHO Team,\n\nI would like to request an official quotation for your services. Please send the quote details to my WhatsApp and email.`;
        }
      }

      if (serviceSelect && selected.length > 0) {
        serviceSelect.value = "Custom Multi-Service Package";
      }

      // Smooth scroll to contact form
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        if (messageField) messageField.focus();
      }
    });
  }
}

/* --- 4. FAQ Category Filter --- */
function initFaqFilter() {
  const faqChips = document.querySelectorAll('.faq-chip');
  const faqItems = document.querySelectorAll('.faq-item');

  faqChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const category = chip.getAttribute('data-category');

      faqChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      faqItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* --- 5. Contact Form Validation & Confirmation Dialog with WhatsApp Dispatch --- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('confirmationModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalSummaryText = document.getElementById('modalSummaryText');
  const whatsappBtn = document.getElementById('modalWhatsappBtn');

  if (form && modal) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const service = document.getElementById('contactService').value;
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !phone || !message) {
        alert('Please fill in all required fields (Name, Email, WhatsApp Phone, and Project Details).');
        return;
      }

      // Populate confirmation modal details
      if (modalSummaryText) {
        modalSummaryText.innerHTML = `
          Thank you, <strong>${name}</strong>!<br><br>
          Your quotation request for <strong>${service || 'Business Solutions'}</strong> has been generated.<br>
          Click below to send your request directly to our director on WhatsApp. We will send your official quotation to <strong>${phone}</strong> promptly!
        `;
      }

      // Configure WhatsApp direct dispatch button
      if (whatsappBtn) {
        const waText = encodeURIComponent(
          `*NEWANDIVHO Quotation Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*WhatsApp/Phone:* ${phone}\n*Service Category:* ${service}\n\n*Request Details:*\n${message}\n\n_Please send the official quotation to this WhatsApp number._`
        );
        whatsappBtn.href = `https://wa.me/27680962778?text=${waText}`;
      }

      // Show native dialog modal
      modal.showModal();

      // Reset form
      form.reset();
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', () => {
        modal.close();
      });
    }

    modal.addEventListener('click', (e) => {
      const dialogDimensions = modal.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        modal.close();
      }
    });
  }
}

/* --- 6. Smooth Scroll for Anchor Links --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}
