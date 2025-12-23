/* ===================================
   UI Text - Language Strategy
   =================================== */
const UI_TEXT = {
  en: {
    loadingMessage:
      "Analyzing your project and matching with relevant funds...",
    noResults:
      "No specific recommendations found. Please try adjusting your criteria.",
    matchReason: "Why it fits",
    deadline: "Deadline urgency",
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
   Mock Fund Database
   =================================== */
const MOCK_FUNDS = [
  {
    name: "Creative Europe MEDIA",
    matchCriteria: [
      "feature-film",
      "documentary",
      "series",
      "development",
      "distribution",
    ],
    reason:
      "Supports European co-productions and cross-border distribution with strong emphasis on cultural diversity",
    urgency: "moderate",
  },
  {
    name: "Eurimages",
    matchCriteria: [
      "feature-film",
      "documentary",
      "co-production",
      "production",
    ],
    reason:
      "Focuses on European co-production films with artistic and cultural value",
    urgency: "flexible",
  },
  {
    name: "Polish Film Institute",
    matchCriteria: [
      "poland",
      "feature-film",
      "documentary",
      "development",
      "production",
    ],
    reason:
      "Supports Polish cinema and international co-productions involving Polish partners",
    urgency: "moderate",
  },
  {
    name: "Aide aux Cinémas du Monde (CNC)",
    matchCriteria: [
      "development",
      "production",
      "post-production",
      "documentary",
      "feature-film",
    ],
    reason:
      "French support for films from developing countries and emerging cinematographies, including Ukraine",
    urgency: "urgent",
  },
  {
    name: "German Federal Film Fund (DFFF)",
    matchCriteria: ["germany", "production", "feature-film", "co-production"],
    reason:
      "Production incentive for films shot in Germany with cultural test requirements",
    urgency: "flexible",
  },
  {
    name: "European Documentary Network",
    matchCriteria: ["documentary", "development", "distribution"],
    reason:
      "Specialized support for creative documentaries with international potential",
    urgency: "moderate",
  },
  {
    name: "Visegrad Film Forum",
    matchCriteria: [
      "ukraine",
      "poland",
      "czech-republic",
      "feature-film",
      "documentary",
    ],
    reason:
      "Regional fund supporting collaboration between Central European countries",
    urgency: "urgent",
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
