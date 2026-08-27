/* =========================================================
   KANAN CLASSES — CONFIGURATION
   ========================================================= */
const CONFIG = {
  // Google Forms — replace with your real form links
  demoForm:   "https://docs.google.com/forms/d/e/1FAIpQLSfLKgrwHeawTZ9hCHzoSkhwF5savs_YOzOOeQ2efI4bCQIyVg/viewform?usp=header",
  studentForm: "https://docs.google.com/forms/d/e/1FAIpQLSfLKgrwHeawTZ9hCHzoSkhwF5savs_YOzOOeQ2efI4bCQIyVg/viewform?usp=header",
  tutorForm:  "https://docs.google.com/forms/d/e/1FAIpQLSdpJ4mzuC_vOhsML5DBqQGYkgAV-XCZOKz1oE8aOEWnwMr5rA/viewform?usp=publish-editor",

  // Contact details — replace placeholders with real information
  phone:     "+917982466953",     // e.g. "917982466953"
  whatsapp:  "+917982466953",  // e.g. "917982466953"
  email:     "chanchalchoudhary1993us@gmail.com",
  location:  "Delhi, India",

  // Social links — leave empty ("") to auto-hide the icon
  instagram:      "PASTE_INSTAGRAM_LINK_HERE",
  facebook:       "PASTE_FACEBOOK_LINK_HERE",
  youtube:        "https://www.youtube.com/@kdMasterclasses",
  googleBusiness: "",

  // Statistics for animation
  stats: {
    students: 100,
    tutors: 50,
    subjects: 10,
    satisfaction: 95
  }
};

/* =========================================================
   DEMO DATA — replace with real content when available
   ========================================================= */
const SUBJECTS = [
  { icon: "📐", name: "Mathematics",        desc: "Foundations to advanced problem solving." },
  { icon: "🔬", name: "Science",            desc: "Concept-first learning for young minds." },
  { icon: "📖", name: "English",            desc: "Grammar, writing and comprehension." },
  { icon: "🅰️", name: "Hindi",              desc: "Language, literature and grammar." },
  { icon: "⚛️", name: "Physics",            desc: "Mechanics, optics and modern physics." },
  { icon: "🧪", name: "Chemistry",          desc: "Organic, inorganic and physical chemistry." },
  { icon: "🧬", name: "Biology",            desc: "Life sciences for school and NEET." },
  { icon: "💻", name: "Computer Science",   desc: "Programming fundamentals and theory." },
  { icon: "📊", name: "Accountancy",        desc: "Commerce concepts made practical." },
  { icon: "📈", name: "Economics",          desc: "Micro, macro and applied economics." },
  { icon: "🐍", name: "Python & Programming", desc: "Coding skills for school and beyond." },
  { icon: "🎯", name: "IIT JEE",            desc: "Focused prep for engineering entrance." },
  { icon: "🩺", name: "NEET",               desc: "Focused prep for medical entrance." }
];

const TUTORS = [
  { initials:"PS", name:"Chanchal Chaudhary", subject:"Mathematics", classes:"Classes 6–10", experience:"16 years", location:"Delhi", mode:"Home & Online", rating:"5.0", reviews:68 },
  { initials:"RV", name:"Rahul Verma",       subject:"Physics",     classes:"Classes 9–12",     experience:"8 years",  location:"Noida", mode:"Online", rating:"4.8", reviews:24 },
  { initials:"AD", name:"Anjali Desai",      subject:"Chemistry",   classes:"Classes 11–12, JEE",     experience:"10 years", location:"Ghaziabad", mode:"Home & Online", rating:"4.9", reviews:31 },
  { initials:"VS", name:"Vikram Singh",      subject:"English",     classes:"Classes 6–12",           experience:"6 years",  location:"Delhi", mode:"Home & Online", rating:"4.7", reviews:19 },
  { initials:"MK", name:"Meera Krishnan",    subject:"Biology",     classes:"Classes 9–12, NEET",     experience:"9 years",  location:"Gurgaon", mode:"Home & Online", rating:"4.8", reviews:27 },
  { initials:"AP", name:"Akhil Anand",       subject:"Computer Science", classes:"Classes 9–12", experience:"4 years", location:"Delhi", mode:"Home & Online", rating:"4.9", reviews:22 }
];

const TESTIMONIALS = [
  { text:"Kanan Classes helped us find a tutor who understood our child's learning gaps. The demo class made the decision much easier.", name:"Parent of Class 8 Student", meta:"Mathematics" },
  { text:"The tutor matching felt personal, not generic. Our daughter finally looks forward to her Physics classes.", name:"Parent of Class 11 Student", meta:"Physics · JEE" },
  { text:"We tried two demo classes before settling on the right tutor. Having that option made all the difference.", name:"Parent of Class 6 Student", meta:"English" },
  { text:"As a working parent, the online option was exactly what we needed. Scheduling was simple and transparent.", name:"Parent of Class 9 Student", meta:"Chemistry" },
  { text:"My tutor explains concepts patiently and checks in on my progress every week. It's helped my confidence a lot.", name:"Class 10 Student", meta:"Science" },
  { text:"Kanan Classes was responsive from the first message and followed up until we were matched with a tutor.", name:"Parent of Class 12 Student", meta:"Biology · NEET" }
];


/* =========================================================
   HELPERS
   ========================================================= */
function openForm(url){
  if (!url || url.includes("YOUR_") || url.includes("PASTE_")) {
    console.warn("Kanan Classes: form URL not configured yet.");
    alert("This link hasn't been set up yet. Please add your URL in the script.js CONFIG.");
    return;
  }
  window.open(url, "_blank", "noopener");
}

function buildWhatsAppLink(){
  const message = encodeURIComponent("Hello Kanan Classes, I want to know more about your tuition classes.");
  const number = CONFIG.whatsapp && !CONFIG.whatsapp.includes("YOUR_") && !CONFIG.whatsapp.includes("PASTE_") ? CONFIG.whatsapp : "";
  return number.startsWith("http") ? number : `https://wa.me/${number}?text=${message}`;
}

function buildCallLink(){
  const num = CONFIG.phone && !CONFIG.phone.includes("YOUR_") ? CONFIG.phone : "";
  return `tel:${num}`;
}

/* =========================================================
   WIRE UP CTA BUTTONS
   ========================================================= */
function wireCTAs(){
  const demoIds   = ["demoBtnNav","demoBtnMobile","demoBtnHero","getStartedBtn","demoBtnBand","demoBtnContact","demoLinkFooter"];
  const studentIds= ["findTutorBtnHero","findTutorBtnAudience","findTutorBtnBand","findTutorLinkFooter"];
  const tutorIds  = ["joinTutorLinkHero","joinTutorBtnAudience","joinTutorBtnTutors","joinTutorLinkFooter"];
  const callIds   = ["callBtnNav","callBtnMobile","callBtnContact"];
  const waIds     = ["whatsappBtnBand","whatsappBtnContact","whatsappFab"];

  demoIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", e => { e.preventDefault(); openForm(CONFIG.demoForm); });
  });
  studentIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", e => { e.preventDefault(); openForm(CONFIG.studentForm); });
  });
  tutorIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", e => { e.preventDefault(); openForm(CONFIG.tutorForm); });
  });
  callIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", buildCallLink());
  });
  waIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", buildWhatsAppLink());
  });
}

/* =========================================================
   RENDER & ANIMATE: Trust strip (Counters)
   ========================================================= */
function renderTrustStrip(){
  const grid = document.getElementById("trustStripGrid");
  if (!grid) return;
  
  const statsArray = [
    { target: CONFIG.stats.students, label: "Students", suffix: "+" },
    { target: CONFIG.stats.tutors, label: "Tutors", suffix: "+" },
    { target: CONFIG.stats.subjects, label: "Subjects", suffix: "+" },
    { target: CONFIG.stats.satisfaction, label: "Satisfaction", suffix: "%" }
  ];

  grid.innerHTML = statsArray.map(s => `
    <div class="trust-stat">
      <span class="trust-stat__num counter-val" data-target="${s.target}" data-suffix="${s.suffix}">0${s.suffix}</span>
      <span class="trust-stat__label">${s.label}</span>
    </div>
  `).join("");
}

function animateCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if(!counters.length || !("IntersectionObserver" in window)) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix');
        let count = 0;
        
        // Duration of 1.5s approx
        const speed = Math.ceil(target / 45); 
        
        const updateCount = () => {
          count += speed;
          if (count < target) {
            el.innerText = count + suffix;
            requestAnimationFrame(updateCount);
          } else {
            el.innerText = target + suffix;
          }
        };
        updateCount();
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

/* =========================================================
   RENDER: Subjects, Tutors, Socials, Contact
   ========================================================= */
function renderSubjects(){
  const grid = document.getElementById("subjectGrid");
  if (!grid) return;
  grid.innerHTML = SUBJECTS.map(s => `
    <div class="subject-card" tabindex="0" role="button" data-subject="${s.name}">
      <div class="subject-card__icon" aria-hidden="true">${s.icon}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <div class="subject-card__footer">
        <span class="subject-card__avail">Tutors available</span>
        <span class="subject-card__arrow" aria-hidden="true">→</span>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".subject-card").forEach(card => {
    const activate = () => openForm(CONFIG.studentForm);
    card.addEventListener("click", activate);
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); } });
  });
}

function renderTutors(){
  const grid = document.getElementById("tutorGrid");
  if (!grid) return;
  grid.innerHTML = TUTORS.map(t => `
    <div class="tutor-card">
      <div class="tutor-card__head">
        <div class="tutor-card__avatar" aria-hidden="true">${t.initials}</div>
        <div>
          <div class="tutor-card__name">${t.name} <span class="badge badge--verified">Verified</span></div>
          <div class="tutor-card__subject">${t.subject}</div>
        </div>
      </div>
      <div class="tutor-card__details">
        <div class="tutor-card__detail"><span>Classes</span><span>${t.classes}</span></div>
        <div class="tutor-card__detail"><span>Experience</span><span>${t.experience}</span></div>
        <div class="tutor-card__detail"><span>Mode</span><span>${t.mode}</span></div>
      </div>
      <div class="tutor-card__rating">★★★★★ <strong>${t.rating}</strong> (${t.reviews} reviews)</div>
      <button class="btn btn--primary btn--block tutor-demo-btn">Book Demo</button>
    </div>
  `).join("");

  grid.querySelectorAll(".tutor-demo-btn").forEach(btn => {
    btn.addEventListener("click", () => openForm(CONFIG.demoForm));
  });
}

function renderSocials(){
  const wrap = document.getElementById("footerSocials");
  if (!wrap) return;

  const icons = {
    instagram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
    facebook: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H8v4h2v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
    youtube: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="12" rx="4" stroke="currentColor" stroke-width="1.6"/><path d="M10 9.5l6 2.5-6 2.5v-5z" fill="currentColor"/></svg>`,
    whatsapp: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M17.5 3.5a8 8 0 10-13.6 8L3 20l8.6-.9a8 8 0 105.9-15.6z" stroke="currentColor" stroke-width="1.6"/></svg>`,
    googleBusiness: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.6"/></svg>`
  };

  const links = [
    { key:"instagram", url: CONFIG.instagram, label:"Instagram" },
    { key:"facebook", url: CONFIG.facebook, label:"Facebook" },
    { key:"youtube", url: CONFIG.youtube, label:"YouTube" },
    { key:"whatsapp", url: CONFIG.whatsapp && !CONFIG.whatsapp.includes("YOUR_") && !CONFIG.whatsapp.includes("PASTE_") ? buildWhatsAppLink() : "", label:"WhatsApp" },
    { key:"googleBusiness", url: CONFIG.googleBusiness, label:"Google Business Profile" }
  ].filter(l => l.url && !l.url.includes("PASTE_"));

  wrap.innerHTML = links.map(l => `
    <a class="social-icon" href="${l.url}" target="_blank" rel="noopener" aria-label="${l.label}">${icons[l.key]}</a>
  `).join("");
}

function renderContactInfo(){
  const phone = document.getElementById("contactPhone");
  const wa = document.getElementById("contactWhatsapp");
  const email = document.getElementById("contactEmail");
  const loc = document.getElementById("contactLocation");
  
  if (phone) phone.textContent = `Phone: ${CONFIG.phone}`;
  // Use plain number for text display if they provided a URL by accident, else just display what is in config
  let cleanWA = CONFIG.whatsapp;
  if(cleanWA.startsWith("http")) cleanWA = "Click button below";
  if (wa) wa.textContent = `WhatsApp: ${cleanWA}`;
  
  if (email) email.textContent = `Email: ${CONFIG.email}`;
  if (loc) loc.textContent = `Location: ${CONFIG.location}`;
}

/* =========================================================
   TESTIMONIALS SLIDER
   ========================================================= */
let testimonialIndex = 0;
let testimonialTimer = null;

function renderTestimonials(){
  const track = document.getElementById("testimonialTrack");
  const dotsWrap = document.getElementById("testimonialDots");
  if (!track || !dotsWrap) return;

  track.innerHTML = TESTIMONIALS.map((t, i) => `
    <div class="testimonial ${i === 0 ? "active" : ""}" data-index="${i}">
      <div class="testimonial__stars" aria-hidden="true">★★★★★</div>
      <p class="testimonial__text">"${t.text}"</p>
      <p class="testimonial__author">${t.name}</p>
      <p class="testimonial__meta">${t.meta}</p>
    </div>
  `).join("");

  dotsWrap.innerHTML = TESTIMONIALS.map((_, i) => `
    <button class="dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Show testimonial ${i + 1}"></button>
  `).join("");

  dotsWrap.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener("click", () => goToTestimonial(parseInt(dot.dataset.index, 10)));
  });

  document.getElementById("testimonialPrev").addEventListener("click", () => {
    goToTestimonial((testimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  });
  document.getElementById("testimonialNext").addEventListener("click", () => {
    goToTestimonial((testimonialIndex + 1) % TESTIMONIALS.length);
  });

  startTestimonialAutoplay();
}

function goToTestimonial(index){
  testimonialIndex = index;
  document.querySelectorAll(".testimonial").forEach(el => {
    el.classList.toggle("active", parseInt(el.dataset.index, 10) === index);
  });
  document.querySelectorAll(".dot").forEach(el => {
    el.classList.toggle("active", parseInt(el.dataset.index, 10) === index);
  });
  restartTestimonialAutoplay();
}

function startTestimonialAutoplay(){
  testimonialTimer = setInterval(() => {
    goToTestimonial((testimonialIndex + 1) % TESTIMONIALS.length);
  }, 6000);
}
function restartTestimonialAutoplay(){
  clearInterval(testimonialTimer);
  startTestimonialAutoplay();
}

/* =========================================================
   NAVBAR & SMOOTH SCROLL (With Sticky Header Offset)
   ========================================================= */
function setupNavbar(){
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const navbarHeight = 76; // Match CSS height

  // Mobile menu logic
  function closeMenu(){
    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }
  function toggleMenu(){
    const open = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
  }

  hamburger.addEventListener("click", toggleMenu);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) closeMenu();
  });

  // JS-assisted smooth scroll for accurate offset
  const anchorLinks = document.querySelectorAll('.nav-anchor');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if(targetId.startsWith('#')) {
        e.preventDefault();
        closeMenu();
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink(){
    let current = "";
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= (navbarHeight + 40) && rect.bottom >= (navbarHeight + 40)) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }
  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
}

/* =========================================================
   THEME TOGGLE (light / dark)
   ========================================================= */
function setupThemeToggle(){
  const root = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");
  const toggleBtnMobile = document.getElementById("themeToggleMobile");

  function applyTheme(theme){
    root.setAttribute("data-theme", theme);
    localStorage.setItem("kanan-theme", theme);
    const label = theme === "light" ? "Switch to dark mode" : "Switch to light mode";
    if (toggleBtn) toggleBtn.setAttribute("aria-label", label);
    if (toggleBtnMobile) toggleBtnMobile.setAttribute("aria-label", label);
  }

  function toggleTheme(){
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    applyTheme(current === "light" ? "dark" : "light");
  }

  if (toggleBtn) toggleBtn.addEventListener("click", toggleTheme);
  if (toggleBtnMobile) toggleBtnMobile.addEventListener("click", toggleTheme);

  applyTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");
}

/* =========================================================
   PREMIUM CUSTOM CURSOR (Desktop Only)
   ========================================================= */
function setupCursor() {
  // Only initialize on precise pointers (desktops/mice) to avoid messing up touch interfaces
  if (window.matchMedia("(pointer: coarse)").matches) return;
  
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if(!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isHovering = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const render = () => {
    // Linear interpolation for smooth ring trailing effect
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    
    // Manage ring position without interrupting the CSS transition for scale
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);

  // Hook into interactive elements
  const interactiveElements = document.querySelectorAll("a, button, input, textarea, select, [role='button'], .nav-anchor");
  interactiveElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      isHovering = true;
      ring.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
      isHovering = false;
      ring.classList.remove("hover");
    });
  });
}

/* =========================================================
   BACK TO TOP
   ========================================================= */
function setupBackToTop(){
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
function setupScrollReveal(){
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => observer.observe(el));
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderTrustStrip();
  renderSubjects();
  renderTutors();
  renderTestimonials();
  renderSocials();
  renderContactInfo();

  wireCTAs();
  setupNavbar();
  setupThemeToggle();
  setupBackToTop();
  setupScrollReveal();
  
  // Delayed initialization for effects
  setTimeout(animateCounters, 500);
  setupCursor();
});
