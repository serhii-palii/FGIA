// ===================================
// FGIA - Complete JavaScript
// ===================================

// Taxonomy Data
const TAXONOMY = {
  projectStage: [
    { value: "development", label: "Development" },
    { value: "pre-production", label: "Pre-Production" },
    { value: "production", label: "Production" },
    { value: "post-production", label: "Post-Production" },
    { value: "distribution", label: "Distribution" },
  ],
  projectType: [
    { value: "feature-film", label: "Feature Film" },
    { value: "documentary", label: "Documentary" },
    { value: "short-film", label: "Short Film" },
    { value: "series", label: "Series / TV" },
    { value: "animation", label: "Animation" },
    { value: "experimental", label: "Experimental" },
  ],
  nationality: [
    { value: "ukraine", label: "Ukraine" },
    { value: "poland", label: "Poland" },
    { value: "germany", label: "Germany" },
    { value: "france", label: "France" },
    { value: "italy", label: "Italy" },
    { value: "spain", label: "Spain" },
    { value: "uk", label: "United Kingdom" },
    { value: "netherlands", label: "Netherlands" },
    { value: "belgium", label: "Belgium" },
    { value: "czech-republic", label: "Czech Republic" },
    { value: "other-eu", label: "Other EU" },
    { value: "co-production", label: "Co-Production" },
  ],
  genre: [
    { value: "drama", label: "Drama" },
    { value: "documentary", label: "Documentary" },
    { value: "thriller", label: "Thriller" },
    { value: "comedy", label: "Comedy" },
    { value: "historical", label: "Historical" },
    { value: "social-issue", label: "Social Issue" },
    { value: "art-house", label: "Art House" },
    { value: "family", label: "Family / Children" },
    { value: "war", label: "War / Conflict" },
    { value: "cultural", label: "Cultural / Heritage" },
  ],
  language: [
    { value: "ukrainian", label: "Ukrainian" },
    { value: "english", label: "English" },
    { value: "polish", label: "Polish" },
    { value: "german", label: "German" },
    { value: "french", label: "French" },
    { value: "spanish", label: "Spanish" },
    { value: "italian", label: "Italian" },
    { value: "multilingual", label: "Multilingual" },
    { value: "other", label: "Other" },
  ],
};

// Mock Funds Database
const FUNDS = [
  {
    name: "Creative Europe MEDIA",
    type: "fund",
    urgency: "moderate",
    criteria: [
      "feature-film",
      "documentary",
      "series",
      "development",
      "distribution",
      "co-production",
    ],
    reason:
      "Supports European co-productions and cross-border distribution with strong emphasis on cultural diversity.",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=200&fit=crop",
  },
  {
    name: "Eurimages",
    type: "fund",
    urgency: "flexible",
    criteria: [
      "feature-film",
      "documentary",
      "co-production",
      "production",
      "drama",
      "art-house",
    ],
    reason:
      "Focuses on European co-production films with artistic and cultural value.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=200&fit=crop",
  },
  {
    name: "Aide aux Cinémas du Monde (CNC)",
    type: "fund",
    urgency: "urgent",
    criteria: [
      "development",
      "production",
      "post-production",
      "documentary",
      "feature-film",
      "ukraine",
    ],
    reason:
      "French support for films from developing countries. Special attention to Ukrainian cinema since 2022.",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=200&fit=crop",
  },
  {
    name: "German Federal Film Fund",
    type: "fund",
    urgency: "flexible",
    criteria: ["germany", "production", "feature-film", "co-production"],
    reason:
      "Production incentive for films shot in Germany with cultural test requirements.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=200&fit=crop",
  },
  {
    name: "Polish Film Institute",
    type: "fund",
    urgency: "moderate",
    criteria: [
      "poland",
      "feature-film",
      "documentary",
      "development",
      "production",
      "co-production",
    ],
    reason:
      "Supports Polish cinema and international co-productions. Active supporter of Ukrainian projects.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=200&fit=crop",
  },
  {
    name: "Visegrad Film Forum",
    type: "fund",
    urgency: "urgent",
    criteria: [
      "ukraine",
      "poland",
      "czech-republic",
      "feature-film",
      "documentary",
      "development",
    ],
    reason:
      "Regional fund supporting Central European collaboration (V4 + Ukraine).",
    image:
      "https://images.unsplash.com/photo-1574267432644-f02b85200e1c?w=400&h=200&fit=crop",
  },
  {
    name: "Cannes Film Festival",
    type: "festival",
    urgency: "urgent",
    criteria: [
      "feature-film",
      "short-film",
      "development",
      "drama",
      "art-house",
    ],
    reason:
      "Prestigious festival supporting emerging filmmakers through residency programs.",
    image:
      "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=200&fit=crop",
  },
  {
    name: "Berlinale Talents",
    type: "festival",
    urgency: "urgent",
    criteria: ["feature-film", "documentary", "development", "experimental"],
    reason:
      "Berlin Film Festival summit and networking platform for emerging professionals.",
    image:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=200&fit=crop",
  },
  {
    name: "Venice Biennale College",
    type: "festival",
    urgency: "moderate",
    criteria: [
      "feature-film",
      "development",
      "production",
      "drama",
      "art-house",
    ],
    reason:
      "International workshop for micro-budget films by emerging directors.",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400&h=200&fit=crop",
  },
  {
    name: "IDFA Bertha Fund",
    type: "fund",
    urgency: "moderate",
    criteria: ["documentary", "development", "production", "social-issue"],
    reason:
      "For creative documentaries addressing human rights and social justice topics.",
    image:
      "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?w=400&h=200&fit=crop",
  },
  {
    name: "Sundance Institute Fund",
    type: "fund",
    urgency: "urgent",
    criteria: [
      "documentary",
      "development",
      "production",
      "social-issue",
      "cultural",
    ],
    reason:
      "Supports feature-length documentaries on contemporary themes and social justice.",
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=400&h=200&fit=crop",
  },
  {
    name: "Rotterdam Lab",
    type: "festival",
    urgency: "flexible",
    criteria: ["feature-film", "experimental", "development", "art-house"],
    reason: "Talent development program for innovative filmmakers at IFFR.",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=200&fit=crop",
  },
];

// Logo data for carousel
const LOGOS = [
  "Cannes",
  "Berlinale",
  "Creative Europe",
  "Eurimages",
  "Sundance",
  "IDFA",
  "Venice",
  "Rotterdam",
];

// State Management
let favorites = [];
let currentResults = [];
let currentTypeFilter = "all";
let currentDeadlineFilter = "all";

// DOM Elements Cache
const elements = {
  header: null,
  landing: null,
  app: null,
  tryBtn: null,
  heartBtn: null,
  favCount: null,
  accessForm: null,
  projectForm: null,
  resultsGrid: null,
  placeholder: null,
  loading: null,
  favGrid: null,
  favorites: null,
  clearBtn: null,
  typeBtn: null,
  typeMenu: null,
  deadlineBtn: null,
  deadlineMenu: null,
  burger: null,
  navLinks: null,
  typewriter: null,
};

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  initTypewriter();
  initLogoCarousel();
  initNavigation();
  initForms();
  initFilters();
  initFavorites();
  populateSelects();
  loadFavoritesFromStorage();
});

function cacheElements() {
  elements.header = document.getElementById("header");
  elements.landing = document.getElementById("landing");
  elements.app = document.getElementById("app");
  elements.tryBtn = document.getElementById("btnTry");
  elements.heartBtn = document.getElementById("heartBtn");
  elements.favCount = document.getElementById("favCount");
  elements.accessForm = document.getElementById("accessForm");
  elements.projectForm = document.getElementById("projectForm");
  elements.resultsGrid = document.getElementById("resultsGrid");
  elements.placeholder = document.getElementById("placeholder");
  elements.loading = document.getElementById("loading");
  elements.favGrid = document.getElementById("favGrid");
  elements.favorites = document.getElementById("favorites");
  elements.clearBtn = document.getElementById("clearBtn");
  elements.typeBtn = document.getElementById("typeBtn");
  elements.typeMenu = document.getElementById("typeMenu");
  elements.deadlineBtn = document.getElementById("deadlineBtn");
  elements.deadlineMenu = document.getElementById("deadlineMenu");
  elements.burger = document.getElementById("burger");
  elements.navLinks = document.getElementById("navLinks");
  elements.typewriter = document.getElementById("typewriter");
}

// ===================================
// TYPEWRITER ANIMATION
// ===================================

function initTypewriter() {
  const phrases = [
    "Smart funding recommendations",
    "Deadline tracking made easy",
    "AI-powered matching",
    "Your film funding assistant",
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      elements.typewriter.textContent = currentPhrase.substring(
        0,
        charIndex - 1
      );
      charIndex--;
      delay = 50;
    } else {
      elements.typewriter.textContent = currentPhrase.substring(
        0,
        charIndex + 1
      );
      charIndex++;
      delay = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();
}

// ===================================
// LOGO CAROUSEL
// ===================================

function initLogoCarousel() {
  const container = document.getElementById("logos");
  if (!container) return;

  // Create logo elements (duplicate for seamless loop)
  const logosHTML = LOGOS.concat(LOGOS)
    .map(
      (name) =>
        `<div class="logo-item">
      <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#e2e8f0" width="120" height="60" rx="4"/>
        <text x="50%" y="50%" fill="#4a5568" font-family="sans-serif" font-size="12" text-anchor="middle" dy=".35em">${name}</text>
      </svg>
    </div>`
    )
    .join("");

  container.innerHTML = logosHTML;
}

// ===================================
// NAVIGATION
// ===================================

function initNavigation() {
  // Sticky header shrink on scroll
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      elements.header.classList.add("scrolled");
    } else {
      elements.header.classList.remove("scrolled");
    }
    lastScroll = currentScroll;
  });

  // Burger menu toggle
  elements.burger?.addEventListener("click", () => {
    elements.burger.classList.toggle("active");
    elements.navLinks.classList.toggle("active");
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (href === "#" || href === "#login") return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        // Close mobile menu
        elements.burger?.classList.remove("active");
        elements.navLinks?.classList.remove("active");
      }
    });
  });

  // Heart button click
  elements.heartBtn?.addEventListener("click", () => {
    if (favorites.length > 0) {
      elements.favorites?.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// ===================================
// FORMS
// ===================================

function initForms() {
  // Early Access Form
  elements.accessForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    // Show loading state
    const submitBtn = elements.accessForm.querySelector(
      'button[type="submit"]'
    );
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Processing...";
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      switchToAppMode();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;

      // Show all funds by default
      showAllFunds();
    }, 1500);
  });

  // Project Form
  elements.projectForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
      stage: document.getElementById("stage").value,
      type: document.getElementById("type").value,
      nationality: document.getElementById("nationality").value,
      genre: document.getElementById("genre").value,
      language: document.getElementById("language").value,
    };

    findMatches(formData);
  });
}

function switchToAppMode() {
  document.body.classList.remove("landing-mode");
  document.body.classList.add("app-mode");

  elements.landing?.classList.add("hidden");
  elements.app?.classList.remove("hidden");
  elements.tryBtn?.classList.add("hidden");
  elements.heartBtn?.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showAllFunds() {
  currentResults = FUNDS;
  displayResults(FUNDS);
  elements.placeholder?.classList.add("hidden");
}

function findMatches(formData) {
  // Show loading
  elements.placeholder?.classList.add("hidden");
  elements.resultsGrid.classList.add("hidden");
  elements.loading?.classList.remove("hidden");

  setTimeout(() => {
    const formValues = Object.values(formData);
    const matches = FUNDS.filter((fund) => {
      let score = 0;
      fund.criteria.forEach((criterion) => {
        if (formValues.includes(criterion)) score++;
      });
      return score >= 2;
    }).sort((a, b) => {
      let scoreA = 0,
        scoreB = 0;
      a.criteria.forEach((c) => {
        if (formValues.includes(c)) scoreA++;
      });
      b.criteria.forEach((c) => {
        if (formValues.includes(c)) scoreB++;
      });
      return scoreB - scoreA;
    });

    currentResults = matches;
    displayResults(matches);

    elements.loading?.classList.add("hidden");
    elements.resultsGrid?.classList.remove("hidden");
  }, 2000);
}

// ===================================
// FILTERS
// ===================================

function initFilters() {
  // Type filter
  elements.typeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    elements.typeMenu?.classList.toggle("show");
    elements.deadlineMenu?.classList.remove("show");
  });

  elements.typeMenu?.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.val;
      currentTypeFilter = value;

      elements.typeMenu
        .querySelectorAll("button")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const label = btn.textContent;
      elements.typeBtn.querySelector("span").textContent = label;
      elements.typeMenu.classList.remove("show");

      applyFilters();
    });
  });

  // Deadline filter
  elements.deadlineBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    elements.deadlineMenu?.classList.toggle("show");
    elements.typeMenu?.classList.remove("show");
  });

  elements.deadlineMenu?.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.val;
      currentDeadlineFilter = value;

      elements.deadlineMenu
        .querySelectorAll("button")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const label = btn.textContent;
      elements.deadlineBtn.querySelector("span").textContent = label;
      elements.deadlineMenu.classList.remove("show");

      applyFilters();
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    elements.typeMenu?.classList.remove("show");
    elements.deadlineMenu?.classList.remove("show");
  });
}

function applyFilters() {
  let filtered = currentResults;

  if (currentTypeFilter !== "all") {
    filtered = filtered.filter((f) => f.type === currentTypeFilter);
  }

  if (currentDeadlineFilter !== "all") {
    filtered = filtered.filter((f) => f.urgency === currentDeadlineFilter);
  }

  displayResults(filtered);
}

// ===================================
// DISPLAY RESULTS
// ===================================

function displayResults(results) {
  if (!elements.resultsGrid) return;

  if (results.length === 0) {
    elements.resultsGrid.innerHTML =
      '<div class="no-results">No matches found. Try adjusting filters.</div>';
    return;
  }

  elements.resultsGrid.innerHTML = results
    .map((fund) => createFundCard(fund))
    .join("");

  // Attach event listeners to favorite buttons
  elements.resultsGrid.querySelectorAll(".fav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const fundName = btn.dataset.name;
      toggleFavorite(fundName);
    });
  });
}

function createFundCard(fund) {
  const isFav = favorites.some((f) => f.name === fund.name);
  const heartFill = isFav ? "currentColor" : "none";
  const heartClass = isFav ? "saved" : "";

  return `
    <div class="card">
      <img src="${fund.image}" alt="${fund.name}" class="card-img" loading="lazy">
      <div class="card-content">
        <h4>${fund.name}</h4>
        <span class="badge badge-${fund.urgency}">${fund.urgency}</span>
        <p>${fund.reason}</p>
        <div class="card-actions">
          <button class="fav-btn ${heartClass}" data-name="${fund.name}">
            <svg viewBox="0 0 24 24" fill="${heartFill}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button class="action-btn">Learn More</button>
        </div>
      </div>
    </div>
  `;
}

// ===================================
// FAVORITES
// ===================================

function initFavorites() {
  elements.clearBtn?.addEventListener("click", () => {
    if (confirm("Clear all saved funds?")) {
      favorites = [];
      saveFavoritesToStorage();
      updateFavoritesDisplay();
      updateHeartButton();
    }
  });
}

function toggleFavorite(fundName) {
  const fund = FUNDS.find((f) => f.name === fundName);
  if (!fund) return;

  const index = favorites.findIndex((f) => f.name === fundName);

  if (index > -1) {
    favorites.splice(index, 1);
    showNotification("Removed from favorites", "info");
  } else {
    favorites.push(fund);
    showNotification("Added to favorites!", "success");
    animateHeart();
  }

  saveFavoritesToStorage();
  updateFavoritesDisplay();
  updateHeartButton();

  // Update the button in results
  const btn = elements.resultsGrid?.querySelector(`[data-name="${fundName}"]`);
  if (btn) {
    const isFav = favorites.some((f) => f.name === fundName);
    btn.classList.toggle("saved", isFav);
    const svg = btn.querySelector("svg");
    svg.setAttribute("fill", isFav ? "currentColor" : "none");
  }
}

function updateHeartButton() {
  if (!elements.favCount || !elements.heartBtn) return;

  elements.favCount.textContent = favorites.length;

  if (favorites.length > 0) {
    elements.heartBtn.classList.add("has-items");
  } else {
    elements.heartBtn.classList.remove("has-items");
  }
}

function animateHeart() {
  elements.heartBtn?.classList.add("animate");
  setTimeout(() => {
    elements.heartBtn?.classList.remove("animate");
  }, 600);
}

function updateFavoritesDisplay() {
  if (!elements.favGrid) return;

  if (favorites.length === 0) {
    elements.favorites?.classList.add("hidden");
    return;
  }

  elements.favorites?.classList.remove("hidden");
  elements.favGrid.innerHTML = favorites
    .map((fund) => createFundCard(fund))
    .join("");

  // Attach event listeners
  elements.favGrid.querySelectorAll(".fav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const fundName = btn.dataset.name;
      toggleFavorite(fundName);
    });
  });
}

function loadFavoritesFromStorage() {
  try {
    const stored = localStorage.getItem("fgia_favorites");
    if (stored) {
      favorites = JSON.parse(stored);
      updateHeartButton();
      updateFavoritesDisplay();
    }
  } catch (e) {
    console.error("Error loading favorites:", e);
  }
}

function saveFavoritesToStorage() {
  try {
    localStorage.setItem("fgia_favorites", JSON.stringify(favorites));
  } catch (e) {
    console.error("Error saving favorites:", e);
  }
}

// ===================================
// POPULATE SELECTS
// ===================================

function populateSelects() {
  Object.keys(TAXONOMY).forEach((key) => {
    const select = document.getElementById(
      key === "projectStage" ? "stage" : key === "projectType" ? "type" : key
    );
    if (!select) return;

    TAXONOMY[key].forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.label;
      select.appendChild(opt);
    });
  });
}

// ===================================
// NOTIFICATIONS
// ===================================

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => notification.classList.add("show"), 10);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}
