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
    title: "Асистент пошуку фестивалів та грантів",
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
   Global State
   =================================== */
let favorites = [];
let allRecommendations = [];
let currentFilter = "all";
let currentLanguage = "en";

const STORAGE_KEY = "fgia_favorites";

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

  // Initialize new features
  initBurgerMenu();
  initLanguageSwitcher();
  initSearch();
  initFavorites();
  initFilters();
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
    displayResultsWithFavorites(recommendations);
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

  // Return top 5 recommendations
  return recommendations.slice(0, 5);
}

/* ===================================
   Display Results with Favorites
   =================================== */
function displayResultsWithFavorites(recommendations) {
  allRecommendations = recommendations;
  resultElements.loading.classList.add("hidden");

  const filterSection = document.getElementById("filterSection");
  if (filterSection) filterSection.classList.remove("hidden");

  resultElements.container.innerHTML = "";

  if (recommendations.length === 0) {
    resultElements.container.innerHTML = `
            <div class="results-placeholder">
                <p>${UI_TEXT[currentLanguage].noResults}</p>
            </div>
        `;
  } else {
    recommendations.forEach((recommendation) => {
      const card = createResultCardWithSave(recommendation);
      resultElements.container.appendChild(card);
    });
  }

  resultElements.container.classList.remove("hidden");

  // Show export button if favorites exist
  if (favorites.length > 0) {
    initExportPDF();
  }
}

/* ===================================
   Create Result Card with Save Button
   =================================== */
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

  // Mock deadline for calendar (2026)
  const mockDeadlines = {
    urgent: "2026-03-31",
    moderate: "2026-06-30",
    flexible: "2026-09-30",
  };
  const deadline = mockDeadlines[recommendation.urgency];

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
        <div style="display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap;">
            <button class="save-favorite-btn ${saveButtonClass}" data-fund-name="${recommendation.name}">
                ${saveButtonText}
            </button>
            <button class="calendar-btn" data-fund-name="${recommendation.name}" data-deadline="${deadline}" style="padding: 6px 12px; font-size: 0.875rem; background-color: transparent; color: var(--color-accent); border: 1px solid var(--color-accent); border-radius: 8px; cursor: pointer; transition: all 0.2s ease;">
                📅 Add to Calendar
            </button>
        </div>
    `;

  // Save button event listener
  const saveBtn = card.querySelector(".save-favorite-btn");
  saveBtn.addEventListener("click", () => {
    if (isFavorite(recommendation.name)) {
      removeFromFavorites(recommendation.name);
    } else {
      addToFavorites(recommendation);
      saveBtn.textContent = UI_TEXT[currentLanguage].removeFavorite;
      saveBtn.classList.add("saved");
    }
  });

  // Calendar button event listener
  const calendarBtn = card.querySelector(".calendar-btn");
  calendarBtn.addEventListener("click", () => {
    addToGoogleCalendar(recommendation.name, deadline);
  });

  calendarBtn.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "var(--color-accent)";
    this.style.color = "white";
  });

  calendarBtn.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "transparent";
    this.style.color = "var(--color-accent)";
  });

  return card;
}

/* ===================================
   Navigation Functionality
   =================================== */
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
   Language Switcher - Dropdown
   =================================== */
function initLanguageSwitcher() {
  const dropdownBtn = document.getElementById("langDropdownBtn");
  const dropdownContent = document.getElementById("langDropdownContent");
  const currentLangSpan = document.getElementById("currentLang");
  const langItems = document.querySelectorAll(".dropdown-item");

  if (!dropdownBtn || !dropdownContent) return;

  // Toggle dropdown
  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownBtn.classList.toggle("active");
    dropdownContent.classList.toggle("show");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    dropdownBtn.classList.remove("active");
    dropdownContent.classList.remove("show");
  });

  // Prevent closing when clicking inside dropdown
  dropdownContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Handle language selection
  langItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active from all items
      langItems.forEach((i) => i.classList.remove("active"));

      // Add active to clicked item
      item.classList.add("active");

      // Get selected language
      currentLanguage = item.getAttribute("data-lang");
      const langLabel = item.getAttribute("data-label");

      // Update button text
      currentLangSpan.textContent = langLabel;

      // Close dropdown
      dropdownBtn.classList.remove("active");
      dropdownContent.classList.remove("show");

      // Update UI text
      updateUILanguage(currentLanguage);

      // Update existing results if any
      const resultsContainer = document.getElementById("resultsContainer");
      if (
        resultsContainer &&
        !resultsContainer.classList.contains("hidden") &&
        allRecommendations.length > 0
      ) {
        displayResultsWithFavorites(allRecommendations);
      }

      // Update favorites if any
      if (favorites.length > 0) {
        renderFavorites();
      }
    });
  });
}

function updateUILanguage(lang) {
  // Update page title and description
  const title = document.querySelector(".site-title");
  const description = document.querySelector(".site-description");
  if (title) title.textContent = UI_TEXT[lang].title;
  if (description) description.textContent = UI_TEXT[lang].description;

  // Update form labels
  const labels = {
    projectStage: 'label[for="projectStage"]',
    projectType: 'label[for="projectType"]',
    nationality: 'label[for="nationality"]',
    genre: 'label[for="genre"]',
    language: 'label[for="language"]',
  };

  Object.keys(labels).forEach((key) => {
    const label = document.querySelector(labels[key]);
    if (label) label.textContent = UI_TEXT[lang][key];
  });

  // Update helper texts
  const helpers = document.querySelectorAll(".helper-text");
  const helperKeys = [
    "helperProjectStage",
    "helperProjectType",
    "helperNationality",
    "helperGenre",
    "helperLanguage",
  ];
  helpers.forEach((helper, index) => {
    if (helperKeys[index]) {
      helper.textContent = UI_TEXT[lang][helperKeys[index]];
    }
  });

  // Update placeholders
  const selects = {
    projectStage: "placeholderProjectStage",
    projectType: "placeholderProjectType",
    nationality: "placeholderNationality",
    genre: "placeholderGenre",
    language: "placeholderLanguage",
  };

  Object.keys(selects).forEach((key) => {
    const select = document.getElementById(key);
    if (select && select.options[0]) {
      select.options[0].textContent = UI_TEXT[lang][selects[key]];
    }
  });

  // Update button text
  const submitBtn = document.querySelector(".submit-button");
  if (submitBtn) submitBtn.textContent = UI_TEXT[lang].submitButton;

  // Update placeholder text
  const placeholder = document.getElementById("resultsPlaceholder");
  if (placeholder) {
    const p = placeholder.querySelector("p");
    if (p) p.textContent = UI_TEXT[lang].placeholderText;
  }
}

/* ===================================
   Search Functionality
   =================================== */
function initSearch() {
  const searchInput = document.getElementById("navSearchInput");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();

      if (searchTerm.length === 0) {
        // Clear search - show placeholder
        resultElements.container.classList.add("hidden");
        resultElements.placeholder.classList.remove("hidden");
        const filterSection = document.getElementById("filterSection");
        if (filterSection) filterSection.classList.add("hidden");
        return;
      }

      if (searchTerm.length < 2) return;

      // Filter funds by search term
      const filteredFunds = MOCK_FUNDS.filter(
        (fund) =>
          fund.name.toLowerCase().includes(searchTerm) ||
          fund.reason.toLowerCase().includes(searchTerm) ||
          fund.matchCriteria.some((criteria) => criteria.includes(searchTerm))
      );

      // Display filtered results
      if (filteredFunds.length > 0) {
        resultElements.placeholder.classList.add("hidden");
        const filterSection = document.getElementById("filterSection");
        if (filterSection) filterSection.classList.remove("hidden");
        displayResultsWithFavorites(filteredFunds);
      } else {
        resultElements.container.innerHTML = `
                    <div class="results-placeholder">
                        <p>No funds found for "${searchTerm}". Try different keywords.</p>
                    </div>
                `;
        resultElements.container.classList.remove("hidden");
        resultElements.placeholder.classList.add("hidden");
      }
    });
  }
}

/* ===================================
   Favorites Management
   =================================== */
function initFavorites() {
  loadFavoritesFromStorage();
  renderFavorites();

  const clearBtn = document.getElementById("clearFavoritesBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearAllFavorites);
  }
}

function loadFavoritesFromStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      favorites = JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading favorites:", error);
    favorites = [];
  }
}

function saveFavoritesToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Error saving favorites:", error);
  }
}

function addToFavorites(fund) {
  const exists = favorites.find((f) => f.name === fund.name);

  if (!exists) {
    favorites.push(fund);
    saveFavoritesToStorage();
    renderFavorites();
    showNotification(UI_TEXT[currentLanguage].favoriteAdded);
    initExportPDF();
    return true;
  }
  return false;
}

function removeFromFavorites(fundName) {
  favorites = favorites.filter((f) => f.name !== fundName);
  saveFavoritesToStorage();
  renderFavorites();
  updateAllSaveButtons();
  showNotification(UI_TEXT[currentLanguage].favoriteRemoved);
}

function clearAllFavorites() {
  const confirmMsg =
    currentLanguage === "es"
      ? "¿Estás seguro de que quieres borrar todos los favoritos?"
      : currentLanguage === "ua"
      ? "Ви впевнені, що хочете видалити всі обрані фонди?"
      : "Are you sure you want to clear all favorites?";

  if (confirm(confirmMsg)) {
    favorites = [];
    saveFavoritesToStorage();
    renderFavorites();
    updateAllSaveButtons();
  }
}

function updateAllSaveButtons() {
  const saveButtons = document.querySelectorAll(".save-favorite-btn");
  saveButtons.forEach((btn) => {
    const fundName = btn.getAttribute("data-fund-name");
    const isSaved = isFavorite(fundName);

    if (isSaved) {
      btn.textContent = UI_TEXT[currentLanguage].removeFavorite;
      btn.classList.add("saved");
    } else {
      btn.textContent = UI_TEXT[currentLanguage].saveButton;
      btn.classList.remove("saved");
    }
  });
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
        <div class="result-header">
            <h3 class="fund-name">${fund.name}</h3>
            <div style="display: flex; align-items: center; gap: 8px;">
                <span class="deadline-badge ${deadlineClass}">${deadlineText}</span>
                <button class="favorite-remove-btn" data-fund="${fund.name}" aria-label="Remove from favorites">✕</button>
            </div>
        </div>
        <div class="result-content">
            <div class="result-section">
                <div class="result-label">${UI_TEXT[currentLanguage].matchReason}:</div>
                <p class="result-text">${fund.reason}</p>
            </div>
        </div>
    `;

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
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      currentFilter = button.getAttribute("data-filter");
      applyFilter(currentFilter);
    });
  });
}

function applyFilter(filter) {
  if (!allRecommendations || allRecommendations.length === 0) return;

  let filteredResults = allRecommendations;

  if (filter !== "all") {
    filteredResults = allRecommendations.filter(
      (fund) => fund.urgency === filter
    );
  }

  resultElements.container.innerHTML = "";

  if (filteredResults.length === 0) {
    resultElements.container.innerHTML = `
            <div class="results-placeholder">
                <p>No funds match this deadline filter.</p>
            </div>
        `;
  } else {
    filteredResults.forEach((recommendation) => {
      const card = createResultCardWithSave(recommendation);
      resultElements.container.appendChild(card);
    });
  }
}

/* ===================================
   Export to PDF
   =================================== */
function initExportPDF() {
  const favoritesSection = document.getElementById("favoritesSection");
  if (favoritesSection && !document.getElementById("exportPdfBtn")) {
    const exportBtn = document.createElement("button");
    exportBtn.id = "exportPdfBtn";
    exportBtn.className = "export-pdf-btn";
    exportBtn.textContent = "📄 Export to PDF";
    exportBtn.style.cssText = `
            margin-top: var(--spacing-md);
            padding: var(--spacing-sm) var(--spacing-lg);
            background-color: var(--color-accent);
            color: white;
            border: none;
            border-radius: var(--border-radius);
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s ease;
        `;

    exportBtn.addEventListener("click", exportToPDF);
    exportBtn.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "var(--color-accent-hover)";
    });
    exportBtn.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "var(--color-accent)";
    });

    favoritesSection.appendChild(exportBtn);
  }
}

function exportToPDF() {
  if (favorites.length === 0) {
    alert("No favorites to export. Please save some funds first.");
    return;
  }

  let pdfContent = "MY FILM FUND RECOMMENDATIONS\n";
  pdfContent += "=".repeat(50) + "\n\n";
  pdfContent += `Generated: ${new Date().toLocaleDateString()}\n\n`;

  favorites.forEach((fund, index) => {
    pdfContent += `${index + 1}. ${fund.name}\n`;
    pdfContent += `   Urgency: ${fund.urgency}\n`;
    pdfContent += `   ${fund.reason}\n\n`;
  });

  const blob = new Blob([pdfContent], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `film-funds-${new Date().toISOString().split("T")[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);

  showNotification("Favorites exported successfully!");
}

/* ===================================
   Calendar Integration
   =================================== */
function addToGoogleCalendar(fundName, deadline) {
  const startDate = deadline.replace(/-/g, "") + "T090000Z";
  const endDate = deadline.replace(/-/g, "") + "T170000Z";

  const title = encodeURIComponent(`Deadline: ${fundName}`);
  const details = encodeURIComponent(
    `Application deadline for ${fundName}. Visit official website to apply.`
  );

  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}`;

  window.open(url, "_blank");
}

/* ===================================
   Notification System
   =================================== */
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;

  notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: var(--color-accent);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

const notificationStyle = document.createElement("style");
notificationStyle.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyle);

/* ===================================
   Start Application
   =================================== */
document.addEventListener("DOMContentLoaded", initializeApp);
