/* =========================================================
   KANAN CLASSES — CONFIGURATION
   Edit everything below to update the whole website.
   ========================================================= */
const CONFIG = {
  // Google Forms — replace with your real form links
  demoForm:   "https://docs.google.com/forms/d/e/1FAIpQLSdpJ4mzuC_vOhsML5DBqQGYkgAV-XCZOKz1oE8aOEWnwMr5rA/viewform?usp=publish-editor",
  studentForm: "GOOGLE_STUDENT_FORM_URLhttps://docs.google.com/forms/d/e/1FAIpQLSdpJ4mzuC_vOhsML5DBqQGYkgAV-XCZOKz1oE8aOEWnwMr5rA/viewform?usp=publish-editor",
  tutorForm:  "https://docs.google.com/forms/d/e/1FAIpQLSdpJ4mzuC_vOhsML5DBqQGYkgAV-XCZOKz1oE8aOEWnwMr5rA/viewform?usp=publish-editor",

  // Contact details — replace placeholders with real information
  phone:     "YOUR_PHONE_NUMBER",     // e.g. "+917982466953"
  whatsapp:  "YOUR_WHATSAPP_NUMBER",  // e.g. "+917982466953" (no + or spaces)
  email:     "chanchalchoudhary1993us@gmail.com",
  location:  "YOUR_LOCATION",

  // Social links — leave empty ("") to auto-hide the icon
  instagram:      "",
  facebook:        "",
  youtube:         "",
  googleBusiness:  "",

  // Trust strip stats — placeholders, update with verified numbers
  stats: [
    { num: "500+", label: "Students Guided" },
    { num: "50+",  label: "Tutors" },
    { num: "10+",  label: "Subjects" },
    { num: "1–12", label: "Classes Covered" }
  ],

  // Service areas — edit freely, only list areas actually served
  locations: [
    "Delhi", "Noida", "Greater Noida", "Ghaziabad",
    "Gurugram", "Faridabad", "Online — All India"
  ]
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
  { initials:"PS", name:"Dr. Priya Sharma", subject:"Mathematics", classes:"Classes 11–12, IIT JEE", experience:"12 years", location:"Delhi", mode:"Home & Online", rating:"4.9", reviews:38 },
  { initials:"RV", name:"Rahul Verma",       subject:"Physics",     classes:"Classes 9–12, NEET",     experience:"8 years",  location:"Bangalore", mode:"Online", rating:"4.8", reviews:24 },
  { initials:"AD", name:"Anjali Desai",      subject:"Chemistry",   classes:"Classes 11–12, JEE",     experience:"10 years", location:"Mumbai", mode:"Home & Online", rating:"4.9", reviews:31 },
  { initials:"VS", name:"Vikram Singh",      subject:"English",     classes:"Classes 6–12",           experience:"6 years",  location:"Hyderabad", mode:"Online", rating:"4.7", reviews:19 },
  { initials:"MK", name:"Meera Krishnan",    subject:"Biology",     classes:"Classes 9–12, NEET",     experience:"9 years",  location:"Chennai", mode:"Home & Online", rating:"4.8", reviews:27 },
  { initials:"AP", name:"Arjun Patel",       subject:"Computer Science", classes:"Classes 11–12, College", experience:"7 years", location:"Pune", mode:"Online", rating:"4.9", reviews:22 }
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
  if (!url || url.startsWith("GOOGLE_")) {
    console.warn("Kanan Classes: form URL not configured yet.");
    alert("This form link hasn't been set up yet. Please add your Google Form URL in CONFIG (script.js).");
    return;
  }
  window.open(url, "_blank", "noopener");
}

function buildWhatsAppLink(){
  const message = encodeURIComponent("Hello Kanan Classes, I am interested in a free demo class.");
  const number = CONFIG.whatsapp && !CONFIG.whatsapp.startsWith("YOUR_") ? CONFIG.whatsapp : "";
  return `https://wa.me/${number}?text=${message}`;
}

function buildCallLink(){
  const num = CONFIG.phone && !CONFIG.phone.startsWith("YOUR_") ? CONFIG.phone : "";
  return `tel:${num}`;
}

/* =========================================================
   WIRE UP CTA BUTTONS
   ========================================================= */
function wireCTAs(){
  const demoIds   = ["demoBtnNav","demoBtnMobile","demoBtnHero","getStartedBtn","demoBtnBand","demoBtnContact","demoLinkFooter"];
  const studentIds= ["findTutorBtnHero","findTutorBtnAudience","findTutorBtnLocation","findTutorBtnBand","findTutorLinkFooter"];
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
   RENDER: Trust strip
   ========================================================= */
function renderTrustStrip(){
  const grid = document.getElementById("trustStripGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.stats.map(s => `
    <div class="trust-stat">
      <span class="trust-stat__num">${s.num}</span>
      <span class="trust-stat__label">${s.label}</span>
    </div>
  `).join("");
}

/* =========================================================
   RENDER: Subjects
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

/* =========================================================
   RENDER: Tutors
   ========================================================= */
function renderTutors(){
  const grid = document.getElementById("tutorGrid");
  if (!grid) return;
  grid.innerHTML = TUTORS.map(t => `
    <div class="tutor-card">
      <div class="tutor-card__head">
        <div class="tutor-card__avatar" aria-hidden="true">${t.initials}</div>
        <div>
          <div class="tutor-card__name">${t.name} <span class="badge badge--verified">Verified*</span></div>
          <div class="tutor-card__subject">${t.subject}</div>
        </div>
      </div>
      <div class="tutor-card__details">
        <div class="tutor-card__detail"><span>Classes</span><span>${t.classes}</span></div>
        <div class="tutor-card__detail"><span>Experience</span><span>${t.experience}</span></div>
        <div class="tutor-card__detail"><span>Location</span><span>${t.location}</span></div>
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

/* =========================================================
   RENDER: Locations
   ========================================================= */
function renderLocations(){
  const grid = document.getElementById("locationGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.locations.map(loc => `<div class="location-card">${loc}</div>`).join("");
}

/* =========================================================
   RENDER: Footer socials
   ========================================================= */
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
    { key:"whatsapp", url: CONFIG.whatsapp && !CONFIG.whatsapp.startsWith("YOUR_") ? buildWhatsAppLink() : "", label:"WhatsApp" },
    { key:"googleBusiness", url: CONFIG.googleBusiness, label:"Google Business Profile" }
  ].filter(l => l.url);

  wrap.innerHTML = links.map(l => `
    <a class="social-icon" href="${l.url}" target="_blank" rel="noopener" aria-label="${l.label}">${icons[l.key]}</a>
  `).join("");
}

/* =========================================================
   RENDER: Contact info
   ========================================================= */
function renderContactInfo(){
  const phone = document.getElementById("contactPhone");
  const wa = document.getElementById("contactWhatsapp");
  const email = document.getElementById("contactEmail");
  const loc = document.getElementById("contactLocation");
  if (phone) phone.textContent = `Phone: ${CONFIG.phone}`;
  if (wa) wa.textContent = `WhatsApp: ${CONFIG.whatsapp}`;
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
   NAVBAR: mobile menu, sticky, active link
   ========================================================= */
function setupNavbar(){
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  function closeMenu(){
    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }
  function toggleMenu(){
    const open = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
  }

  hamburger.addEventListener("click", toggleMenu);

  mobileMenu.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) closeMenu();
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink(){
    let current = "";
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }
  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
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
  renderLocations();
  renderTestimonials();
  renderSocials();
  renderContactInfo();

  wireCTAs();
  setupNavbar();
  setupBackToTop();
  setupScrollReveal();
});
