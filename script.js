/* ===================================
   UI Text - Multi-Language Support
   =================================== */
const UI_TEXT = {
  en: {
    // Header
    title: "Festival & Grant Intelligence Assistant",
    description:
      "Discover European film funds and grants tailored to your project",

    // Navigation
    navFunds: "Funds",
    navFestivals: "Festivals",
    navResources: "Resources",
    navAbout: "About",
    navLogin: "Login",

    // Form Labels
    projectStage: "Project Stage",
    projectType: "Project Type",
    nationality: "Nationality",
    genre: "Genre",
    language: "Language",

    // Form Helpers
    helperProjectStage: "Current development phase of your film project",
    helperProjectType: "Format and category of your production",
    helperNationality: "Primary country of production or co-production",
    helperGenre: "Primary genre or thematic category",
    helperLanguage: "Primary language of the project",

    // Form Placeholders
    placeholderProjectStage: "Select project stage",
    placeholderProjectType: "Select project type",
    placeholderNationality: "Select nationality",
    placeholderGenre: "Select genre",
    placeholderLanguage: "Select language",

    // Buttons
    submitButton: "Get Recommendations",
    saveButton: "Save to Favorites",
    removeFavorite: "Remove from Favorites",

    // Results
    loadingMessage:
      "Analyzing your project and matching with relevant funds...",
    noResults:
      "No specific recommendations found. Please try adjusting your criteria.",
    matchReason: "Why it fits",
    deadline: "Deadline urgency",

    // Deadline Types
    urgent: "Urgent",
    moderate: "Moderate",
    flexible: "Flexible",

    // Messages
    placeholderText:
      "Complete the form above to receive personalized fund recommendations for your project.",
    favoriteAdded: "Added to favorites!",
    favoriteRemoved: "Removed from favorites",

    // Footer
    disclaimer:
      "This tool provides guidance based on general criteria. Recommendations are not guarantees of eligibility or success. Always verify specific requirements and deadlines on official fund websites.",
  },

  es: {
    // Spanish translations
    title: "Asistente de Inteligencia de Festivales y Subvenciones",
    description:
      "Descubre fondos y subvenciones cinematográficas europeas adaptadas a tu proyecto",

    navFunds: "Fondos",
    navFestivals: "Festivales",
    navResources: "Recursos",
    navAbout: "Acerca de",
    navLogin: "Iniciar sesión",

    projectStage: "Etapa del Proyecto",
    projectType: "Tipo de Proyecto",
    nationality: "Nacionalidad",
    genre: "Género",
    language: "Idioma",

    helperProjectStage:
      "Fase actual de desarrollo de tu proyecto cinematográfico",
    helperProjectType: "Formato y categoría de tu producción",
    helperNationality: "País principal de producción o coproducción",
    helperGenre: "Género principal o categoría temática",
    helperLanguage: "Idioma principal del proyecto",

    placeholderProjectStage: "Seleccionar etapa del proyecto",
    placeholderProjectType: "Seleccionar tipo de proyecto",
    placeholderNationality: "Seleccionar nacionalidad",
    placeholderGenre: "Seleccionar género",
    placeholderLanguage: "Seleccionar idioma",

    submitButton: "Obtener Recomendaciones",
    saveButton: "Guardar en Favoritos",
    removeFavorite: "Eliminar de Favoritos",

    loadingMessage: "Analizando tu proyecto y buscando fondos relevantes...",
    noResults:
      "No se encontraron recomendaciones específicas. Por favor, ajusta tus criterios.",
    matchReason: "Por qué encaja",
    deadline: "Urgencia del plazo",

    urgent: "Urgente",
    moderate: "Moderado",
    flexible: "Flexible",

    placeholderText:
      "Completa el formulario arriba para recibir recomendaciones personalizadas de fondos para tu proyecto.",
    favoriteAdded: "¡Añadido a favoritos!",
    favoriteRemoved: "Eliminado de favoritos",

    disclaimer:
      "Esta herramienta proporciona orientación basada en criterios generales. Las recomendaciones no son garantías de elegibilidad o éxito. Siempre verifica los requisitos específicos y plazos en los sitios web oficiales de los fondos.",
  },

  ua: {
    // Ukrainian translations
    title: "Асистент розвідки фестивалів та грантів",
    description: "Знайдіть європейські кіно-фонди та гранти для вашого проєкту",

    navFunds: "Фонди",
    navFestivals: "Фестивалі",
    navResources: "Ресурси",
    navAbout: "Про нас",
    navLogin: "Увійти",

    projectStage: "Етап проєкту",
    projectType: "Тип проєкту",
    nationality: "Національність",
    genre: "Жанр",
    language: "Мова",

    helperProjectStage: "Поточна фаза розробки вашого кінопроєкту",
    helperProjectType: "Формат та категорія вашої продукції",
    helperNationality: "Основна країна виробництва або копродукції",
    helperGenre: "Основний жанр або тематична категорія",
    helperLanguage: "Основна мова проєкту",

    placeholderProjectStage: "Оберіть етап проєкту",
    placeholderProjectType: "Оберіть тип проєкту",
    placeholderNationality: "Оберіть національність",
    placeholderGenre: "Оберіть жанр",
    placeholderLanguage: "Оберіть мову",

    submitButton: "Отримати рекомендації",
    saveButton: "Зберегти в обране",
    removeFavorite: "Видалити з обраного",

    loadingMessage: "Аналізуємо ваш проєкт та шукаємо відповідні фонди...",
    noResults:
      "Конкретних рекомендацій не знайдено. Будь ласка, змініть критерії пошуку.",
    matchReason: "Чому підходить",
    deadline: "Терміновість дедлайну",

    urgent: "Терміново",
    moderate: "Помірно",
    flexible: "Гнучко",

    placeholderText:
      "Заповніть форму вище, щоб отримати персоналізовані рекомендації фондів для вашого проєкту.",
    favoriteAdded: "Додано до обраного!",
    favoriteRemoved: "Видалено з обраного",

    disclaimer:
      "Цей інструмент надає рекомендації на основі загальних критеріїв. Рекомендації не є гарантією відповідності чи успіху. Завжди перевіряйте конкретні вимоги та терміни на офіційних сайтах фондів.",
  },
};

/* ===================================
   Taxonomy Options - Film Industry Data
   =================================== */
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
    { value: "other-eu", label: "Other European Union" },
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

/* ===================================
   Expanded Mock Fund & Festival Database
   =================================== */
const MOCK_FUNDS = [
  // Major European Funds
  {
    name: "Creative Europe MEDIA",
    matchCriteria: [
      "feature-film",
      "documentary",
      "series",
      "development",
      "distribution",
      "co-production",
    ],
    reason:
      "Supports European co-productions and cross-border distribution with strong emphasis on cultural diversity. Priority for emerging filmmakers and underrepresented regions including Ukraine.",
    urgency: "moderate",
    type: "fund",
  },
  {
    name: "Eurimages",
    matchCriteria: [
      "feature-film",
      "documentary",
      "co-production",
      "production",
      "drama",
      "art-house",
    ],
    reason:
      "Focuses on European co-production films with artistic and cultural value. Strong track record supporting Ukrainian-European collaborations.",
    urgency: "flexible",
    type: "fund",
  },
  {
    name: "Aide aux Cinémas du Monde (CNC)",
    matchCriteria: [
      "development",
      "production",
      "post-production",
      "documentary",
      "feature-film",
      "ukraine",
    ],
    reason:
      "French support for films from developing countries and emerging cinematographies. Special attention to Ukrainian cinema since 2022.",
    urgency: "urgent",
    type: "fund",
  },
  {
    name: "German Federal Film Fund (DFFF)",
    matchCriteria: ["germany", "production", "feature-film", "co-production"],
    reason:
      "Production incentive for films shot in Germany with cultural test requirements. Supports international co-productions.",
    urgency: "flexible",
    type: "fund",
  },

  // Regional & Specialized Funds
  {
    name: "Polish Film Institute",
    matchCriteria: [
      "poland",
      "feature-film",
      "documentary",
      "development",
      "production",
      "co-production",
    ],
    reason:
      "Supports Polish cinema and international co-productions involving Polish partners. Active supporter of Ukrainian projects.",
    urgency: "moderate",
    type: "fund",
  },
  {
    name: "Czech Film Fund",
    matchCriteria: [
      "czech-republic",
      "feature-film",
      "documentary",
      "production",
      "co-production",
    ],
    reason:
      "Provides production incentives and co-production support. Open to Central and Eastern European collaborations.",
    urgency: "moderate",
    type: "fund",
  },
  {
    name: "Visegrad Film Forum",
    matchCriteria: [
      "ukraine",
      "poland",
      "czech-republic",
      "feature-film",
      "documentary",
      "development",
    ],
    reason:
      "Regional fund supporting collaboration between Central European countries (V4 + Ukraine). Focus on emerging talent.",
    urgency: "urgent",
    type: "fund",
  },
  {
    name: "European Documentary Network (EDN)",
    matchCriteria: [
      "documentary",
      "development",
      "distribution",
      "social-issue",
      "cultural",
    ],
    reason:
      "Specialized support for creative documentaries with international potential. Strong network of industry professionals.",
    urgency: "moderate",
    type: "fund",
  },
  {
    name: "Doha Film Institute Grants",
    matchCriteria: [
      "feature-film",
      "documentary",
      "development",
      "production",
      "post-production",
    ],
    reason:
      "International funding for bold, original storytelling from emerging voices. No geographic restrictions.",
    urgency: "flexible",
    type: "fund",
  },
  {
    name: "Sundance Institute Documentary Fund",
    matchCriteria: [
      "documentary",
      "development",
      "production",
      "social-issue",
      "cultural",
    ],
    reason:
      "Supports feature-length documentaries on contemporary themes. Strong focus on social justice and human rights.",
    urgency: "urgent",
    type: "fund",
  },
  {
    name: "IDFA Bertha Fund",
    matchCriteria: ["documentary", "development", "production", "social-issue"],
    reason:
      "For creative documentaries addressing contemporary human rights issues and social justice topics.",
    urgency: "moderate",
    type: "fund",
  },
  {
    name: "Tribeca Film Institute",
    matchCriteria: [
      "documentary",
      "feature-film",
      "development",
      "distribution",
    ],
    reason:
      "Supports storytellers from communities underrepresented in media. Focus on social impact.",
    urgency: "flexible",
    type: "fund",
  },
  {
    name: "Catapult Film Fund",
    matchCriteria: ["documentary", "development", "production", "social-issue"],
    reason:
      "Supports documentary films about specific social issues including human rights and the environment.",
    urgency: "moderate",
    type: "fund",
  },
  {
    name: "Nordisk Film & TV Fond",
    matchCriteria: [
      "feature-film",
      "documentary",
      "series",
      "co-production",
      "production",
    ],
    reason:
      "Nordic fund open to minority co-productions. Strong emphasis on quality and innovation.",
    urgency: "flexible",
    type: "fund",
  },
  {
    name: "Film Fund Luxembourg",
    matchCriteria: [
      "feature-film",
      "documentary",
      "production",
      "co-production",
    ],
    reason:
      "Supports international co-productions with Luxembourgish participation. Competitive tax incentives.",
    urgency: "moderate",
    type: "fund",
  },

  // Major Film Festivals
  {
    name: "Cannes Film Festival - Cinéfondation",
    matchCriteria: [
      "feature-film",
      "short-film",
      "development",
      "drama",
      "art-house",
    ],
    reason:
      "Prestigious festival supporting emerging filmmakers through residency and development programs.",
    urgency: "urgent",
    type: "festival",
  },
  {
    name: "Berlinale Talents",
    matchCriteria: [
      "feature-film",
      "documentary",
      "development",
      "experimental",
    ],
    reason:
      "Berlin Film Festival's summit and networking platform for emerging film professionals.",
    urgency: "urgent",
    type: "festival",
  },
  {
    name: "Venice Biennale College Cinema",
    matchCriteria: [
      "feature-film",
      "development",
      "production",
      "drama",
      "art-house",
    ],
    reason:
      "International workshop for development and production of micro-budget films by emerging directors.",
    urgency: "moderate",
    type: "festival",
  },
  {
    name: "Locarno Open Doors",
    matchCriteria: [
      "feature-film",
      "documentary",
      "development",
      "co-production",
    ],
    reason:
      "Co-production platform focusing on countries with limited film infrastructure, including Ukraine.",
    urgency: "moderate",
    type: "festival",
  },
  {
    name: "Rotterdam Lab",
    matchCriteria: ["feature-film", "experimental", "development", "art-house"],
    reason:
      "International Film Festival Rotterdam's talent development program for innovative filmmakers.",
    urgency: "flexible",
    type: "festival",
  },
  {
    name: "Karlovy Vary Works in Progress",
    matchCriteria: [
      "feature-film",
      "documentary",
      "post-production",
      "co-production",
    ],
    reason:
      "Platform for Central and Eastern European films in post-production seeking completion funds.",
    urgency: "moderate",
    type: "festival",
  },
  {
    name: "Sarajevo CineLink",
    matchCriteria: [
      "feature-film",
      "documentary",
      "development",
      "co-production",
    ],
    reason:
      "Regional co-production market focused on Southeast Europe with strong Ukrainian participation.",
    urgency: "moderate",
    type: "festival",
  },
  {
    name: "Warsaw Film Festival - Polish Days",
    matchCriteria: ["feature-film", "documentary", "poland", "co-production"],
    reason:
      "Industry platform for Polish and international co-productions, active Ukrainian partner.",
    urgency: "flexible",
    type: "festival",
  },
  {
    name: "DOK Leipzig Co-Production Market",
    matchCriteria: [
      "documentary",
      "development",
      "production",
      "co-production",
    ],
    reason:
      "Leading documentary co-production market in Germany, open to international projects.",
    urgency: "moderate",
    type: "festival",
  },
  {
    name: "Hot Docs Forum",
    matchCriteria: ["documentary", "development", "production", "distribution"],
    reason:
      "North America's largest documentary market and conference. Strong international presence.",
    urgency: "urgent",
    type: "festival",
  },
  {
    name: "Sheffield Doc/Fest MeetMarket",
    matchCriteria: ["documentary", "development", "production", "distribution"],
    reason:
      "UK's premier documentary festival with pitching forums and industry marketplace.",
    urgency: "moderate",
    type: "festival",
  },
  {
    name: "Visions du Réel Pitching",
    matchCriteria: ["documentary", "development", "production"],
    reason:
      "Swiss documentary festival with multiple pitching platforms for various documentary formats.",
    urgency: "flexible",
    type: "festival",
  },
];

/* ===================================
   DOM Elements
   =================================== */
let formElements = {};
let resultElements = {};

/* ===================================
   Initialize Application
   =================================== */
function initializeApp() {
  // Cache DOM elements
  cacheElements();

  // Populate form dropdowns
  populateDropdowns();

  // Attach event listeners
  attachEventListeners();
}

/* ===================================
   Cache DOM Elements
   =================================== */
function cacheElements() {
  formElements = {
    form: document.getElementById("recommendationForm"),
    projectStage: document.getElementById("projectStage"),
    projectType: document.getElementById("projectType"),
    nationality: document.getElementById("nationality"),
    genre: document.getElementById("genre"),
    language: document.getElementById("language"),
  };

  resultElements = {
    placeholder: document.getElementById("resultsPlaceholder"),
    loading: document.getElementById("loadingState"),
    container: document.getElementById("resultsContainer"),
  };
}

/* ===================================
   Populate Form Dropdowns
   =================================== */
function populateDropdowns() {
  // Iterate through each taxonomy category
  Object.keys(TAXONOMY).forEach((category) => {
    const selectElement = formElements[category];

    // Add options to dropdown
    TAXONOMY[category].forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.label;
      selectElement.appendChild(optionElement);
    });
  });
}

/* ===================================
   Attach Event Listeners
   =================================== */
function attachEventListeners() {
  formElements.form.addEventListener("submit", handleFormSubmit);
}

/* ===================================
   Handle Form Submission
   =================================== */
function handleFormSubmit(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form data
  const formData = getFormData();

  // Show loading state
  showLoading();

  // Simulate AI processing with delay
  setTimeout(() => {
    const recommendations = generateRecommendations(formData);
    displayResults(recommendations);
  }, 2000);
}

/* ===================================
   Get Form Data
   =================================== */
function getFormData() {
  return {
    projectStage: formElements.projectStage.value,
    projectType: formElements.projectType.value,
    nationality: formElements.nationality.value,
    genre: formElements.genre.value,
    language: formElements.language.value,
  };
}

/* ===================================
   Show Loading State
   =================================== */
function showLoading() {
  resultElements.placeholder.classList.add("hidden");
  resultElements.container.classList.add("hidden");
  resultElements.loading.classList.remove("hidden");
}

/* ===================================
   Generate Mock Recommendations
   This simulates AI logic - can be replaced with real API later
   =================================== */
function generateRecommendations(formData) {
  const recommendations = [];

  // Create array of form values for matching
  const formValues = Object.values(formData);

  // Score each fund based on matches
  MOCK_FUNDS.forEach((fund) => {
    let matchScore = 0;

    // Count how many criteria match
    fund.matchCriteria.forEach((criterion) => {
      if (formValues.includes(criterion)) {
        matchScore++;
      }
    });

    // If at least 2 criteria match, include in recommendations
    if (matchScore >= 2) {
      recommendations.push({
        ...fund,
        matchScore,
      });
    }
  });

  // Sort by match score (highest first)
  recommendations.sort((a, b) => b.matchScore - a.matchScore);

  // Return top 3 recommendations
  return recommendations.slice(0, 3);
}

/* ===================================
   Display Results
   =================================== */
function displayResults(recommendations) {
  // Hide loading
  resultElements.loading.classList.add("hidden");

  // Clear previous results
  resultElements.container.innerHTML = "";

  // Check if we have recommendations
  if (recommendations.length === 0) {
    resultElements.container.innerHTML = `
            <div class="results-placeholder">
                <p>${UI_TEXT.en.noResults}</p>
            </div>
        `;
  } else {
    // Create result cards
    recommendations.forEach((recommendation) => {
      const card = createResultCard(recommendation);
      resultElements.container.appendChild(card);
    });
  }

  // Show results
  resultElements.container.classList.remove("hidden");
}

/* ===================================
   Create Result Card Element
   =================================== */
function createResultCard(recommendation) {
  // Create card container
  const card = document.createElement("div");
  card.className = "result-card";

  // Determine deadline badge class
  const deadlineClass = `deadline-${recommendation.urgency}`;
  const deadlineText =
    recommendation.urgency.charAt(0).toUpperCase() +
    recommendation.urgency.slice(1);

  // Build card HTML
  card.innerHTML = `
        <div class="result-header">
            <h3 class="fund-name">${recommendation.name}</h3>
            <span class="deadline-badge ${deadlineClass}">${deadlineText}</span>
        </div>
        <div class="result-content">
            <div class="result-section">
                <div class="result-label">${UI_TEXT.en.matchReason}:</div>
                <p class="result-text">${recommendation.reason}</p>
            </div>
        </div>
    `;

  return card;
}

/* ===================================
   Start Application
   =================================== */
// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", initializeApp);

/* ===================================
   Navigation Functionality
   =================================== */

// Burger Menu Toggle
function initBurgerMenu() {
  const burgerMenu = document.getElementById("burgerMenu");
  const navLinks = document.getElementById("navLinks");

  if (burgerMenu && navLinks) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    const links = navLinks.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
        burgerMenu.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
  }
}

/* ===================================
   Language Switcher
   =================================== */
let currentLanguage = "en";

function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll(".lang-button");

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active from all buttons
      langButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active to clicked button
      button.classList.add("active");

      // Get selected language
      currentLanguage = button.getAttribute("data-lang");

      // Update UI text
      updateUILanguage(currentLanguage);
    });
  });
}

function updateUILanguage(lang) {
  // Update all text based on selected language
  // This will be used throughout the app
  console.log("Language switched to:", lang);

  // Update page title
  document.querySelector(".site-title").textContent = UI_TEXT[lang].title;
  document.querySelector(".site-description").textContent =
    UI_TEXT[lang].description;

  // Update form labels
  document.querySelector('label[for="projectStage"]').textContent =
    UI_TEXT[lang].projectStage;
  document.querySelector('label[for="projectType"]').textContent =
    UI_TEXT[lang].projectType;
  document.querySelector('label[for="nationality"]').textContent =
    UI_TEXT[lang].nationality;
  document.querySelector('label[for="genre"]').textContent =
    UI_TEXT[lang].genre;
  document.querySelector('label[for="language"]').textContent =
    UI_TEXT[lang].language;

  // Update button text
  document.querySelector(".submit-button").textContent =
    UI_TEXT[lang].submitButton;
}

/* ===================================
   Search Functionality
   =================================== */
function initSearch() {
  const searchInput = document.getElementById("navSearchInput");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      console.log("Searching for:", searchTerm);
      // Search functionality will be implemented later
    });
  }
}

/* ===================================
   Update Initialization with All Features
   =================================== */
const originalInit = initializeApp;

initializeApp = function () {
  originalInit();
  initBurgerMenu();
  initLanguageSwitcher();
  initSearch();
  initFavorites();
  initFilters();
};

/* ===================================
   Favorites Management
   =================================== */
let favorites = [];
let allRecommendations = [];
let currentFilter = "all";

function initFavorites() {
  // Load favorites from browser storage (memory only, no localStorage)
  favorites = [];
  renderFavorites();

  // Clear all favorites button
  const clearBtn = document.getElementById("clearFavoritesBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearAllFavorites);
  }
}

function addToFavorites(fund) {
  // Check if already in favorites
  const exists = favorites.find((f) => f.name === fund.name);

  if (!exists) {
    favorites.push(fund);
    renderFavorites();
    showNotification(UI_TEXT[currentLanguage].favoriteAdded);
  }
}

function removeFromFavorites(fundName) {
  favorites = favorites.filter((f) => f.name !== fundName);
  renderFavorites();
  showNotification(UI_TEXT[currentLanguage].favoriteRemoved);
}

function clearAllFavorites() {
  if (confirm("Are you sure you want to clear all favorites?")) {
    favorites = [];
    renderFavorites();
  }
}

function renderFavorites() {
  const favoritesSection = document.getElementById("favoritesSection");
  const favoritesContainer = document.getElementById("favoritesContainer");
  const favoritesEmpty = document.getElementById("favoritesEmpty");

  if (favorites.length === 0) {
    favoritesSection.classList.add("hidden");
    favoritesContainer.innerHTML = "";
    if (favoritesEmpty) favoritesEmpty.classList.remove("hidden");
  } else {
    favoritesSection.classList.remove("hidden");
    if (favoritesEmpty) favoritesEmpty.classList.add("hidden");

    favoritesContainer.innerHTML = "";

    favorites.forEach((fund) => {
      const item = createFavoriteItem(fund);
      favoritesContainer.appendChild(item);
    });
  }
}

function createFavoriteItem(fund) {
  const item = document.createElement("div");
  item.className = "favorite-item";

  const deadlineClass = `deadline-${fund.urgency}`;
  const deadlineText = UI_TEXT[currentLanguage][fund.urgency] || fund.urgency;

  item.innerHTML = `
        <button class="favorite-remove-btn" data-fund="${fund.name}" aria-label="Remove from favorites">✕</button>
        <div class="result-header">
            <h3 class="fund-name">${fund.name}</h3>
            <span class="deadline-badge ${deadlineClass}">${deadlineText}</span>
        </div>
        <div class="result-content">
            <div class="result-section">
                <div class="result-label">${UI_TEXT[currentLanguage].matchReason}:</div>
                <p class="result-text">${fund.reason}</p>
            </div>
        </div>
    `;

  // Add remove event listener
  const removeBtn = item.querySelector(".favorite-remove-btn");
  removeBtn.addEventListener("click", () => {
    removeFromFavorites(fund.name);
  });

  return item;
}

function isFavorite(fundName) {
  return favorites.some((f) => f.name === fundName);
}

/* ===================================
   Filter Functionality
   =================================== */
function initFilters() {
  const filterButtons = document.querySelectorAll(".filter-button");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active to clicked button
      button.classList.add("active");

      // Get filter value
      currentFilter = button.getAttribute("data-filter");

      // Apply filter
      applyFilter(currentFilter);
    });
  });
}

function applyFilter(filter) {
  const resultCards = document.querySelectorAll(".result-card");

  resultCards.forEach((card) => {
    const badge = card.querySelector(".deadline-badge");

    if (filter === "all") {
      card.style.display = "block";
    } else {
      const cardUrgency = badge.className.includes(filter);
      card.style.display = cardUrgency ? "block" : "none";
    }
  });
}

/* ===================================
   Notification System
   =================================== */
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;

  // Add styles dynamically
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--color-accent);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add animation styles
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ===================================
   Updated Display Results with Save Button
   =================================== */
function displayResultsWithFavorites(recommendations) {
  // Store recommendations globally
  allRecommendations = recommendations;

  // Hide loading
  resultElements.loading.classList.add("hidden");

  // Show filter section
  const filterSection = document.getElementById("filterSection");
  if (filterSection) filterSection.classList.remove("hidden");

  // Clear previous results
  resultElements.container.innerHTML = "";

  // Check if we have recommendations
  if (recommendations.length === 0) {
    resultElements.container.innerHTML = `
            <div class="results-placeholder">
                <p>${UI_TEXT[currentLanguage].noResults}</p>
            </div>
        `;
  } else {
    // Create result cards
    recommendations.forEach((recommendation) => {
      const card = createResultCardWithSave(recommendation);
      resultElements.container.appendChild(card);
    });
  }

  // Show results
  resultElements.container.classList.remove("hidden");
}

function createResultCardWithSave(recommendation) {
  const card = document.createElement("div");
  card.className = "result-card";

  const deadlineClass = `deadline-${recommendation.urgency}`;
  const deadlineText =
    UI_TEXT[currentLanguage][recommendation.urgency] || recommendation.urgency;
  const isSaved = isFavorite(recommendation.name);
  const saveButtonText = isSaved
    ? UI_TEXT[currentLanguage].removeFavorite
    : UI_TEXT[currentLanguage].saveButton;
  const saveButtonClass = isSaved ? "saved" : "";

  card.innerHTML = `
        <div class="result-header">
            <h3 class="fund-name">${recommendation.name}</h3>
            <span class="deadline-badge ${deadlineClass}">${deadlineText}</span>
        </div>
        <div class="result-content">
            <div class="result-section">
                <div class="result-label">${UI_TEXT[currentLanguage].matchReason}:</div>
                <p class="result-text">${recommendation.reason}</p>
            </div>
        </div>
        <button class="save-favorite-btn ${saveButtonClass}" data-fund-name="${recommendation.name}">
            ${saveButtonText}
        </button>
    `;

  // Add save button event listener
  const saveBtn = card.querySelector(".save-favorite-btn");
  saveBtn.addEventListener("click", () => {
    if (isFavorite(recommendation.name)) {
      removeFromFavorites(recommendation.name);
      saveBtn.textContent = UI_TEXT[currentLanguage].saveButton;
      saveBtn.classList.remove("saved");
    } else {
      addToFavorites(recommendation);
      saveBtn.textContent = UI_TEXT[currentLanguage].removeFavorite;
      saveBtn.classList.add("saved");
    }
  });

  return card;
}

/* ===================================
   Update Form Submit Handler
   =================================== */
const originalHandleFormSubmit = handleFormSubmit;

handleFormSubmit = function (event) {
  event.preventDefault();
  const formData = getFormData();
  showLoading();

  setTimeout(() => {
    const recommendations = generateRecommendations(formData);
    displayResultsWithFavorites(recommendations);
  }, 2000);
};
