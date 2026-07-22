
function showTimelineFact() {
  const facts = [
    "The Wright Flyer flew for only 12 seconds in 1903.",
    "Apollo 11 traveled about 240,000 miles to reach the Moon.",
    "The Bell X-1 was the first aircraft to break the sound barrier.",
    "Modern reusable rockets can land and be launched again."
  ];

  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("timelineFact").textContent = randomFact;
}

function showEvent(event) {
  const info = {
    wright: {
      title: "1903 — Wright Flyer",
      text: "The Wright Flyer completed the first powered flight and opened the age of aviation."
    },
    bell: {
      title: "1947 — Bell X-1",
      text: "The Bell X-1 became the first aircraft to break the sound barrier."
    },
    apollo: {
      title: "1969 — Apollo 11",
      text: "Apollo 11 landed the first humans on the Moon."
    },
    shuttle: {
      title: "1981 — Space Shuttle",
      text: "The Space Shuttle introduced reusable spacecraft missions."
    },
    future: {
      title: "Today — Future Aerospace",
      text: "AI, reusable rockets, drones, and electric aircraft are shaping aerospace engineering today."
    }
  };

  document.getElementById("timelineInfo").innerHTML =
    `<h3>${info[event].title}</h3><p>${info[event].text}</p>`;
}

function searchTopics() {
  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

  const topics = [
    { name: "Wright Flyer", page: "history.html" },
    { name: "Bell X-1", page: "aircraft.html" },
    { name: "Apollo 11", page: "history.html" },
    { name: "Space Shuttle", page: "spacecraft.html" },
    { name: "Falcon 9", page: "spacecraft.html" },
    { name: "Saturn V", page: "spacecraft.html" },
    { name: "Aerodynamics", page: "engineering.html" },
    { name: "Propulsion", page: "engineering.html" },
    { name: "Satellites", page: "spacecraft.html" },
    { name: "AI Flight Systems", page: "research.html" }
  ];

  const searchResults = document.getElementById("searchResults");

  if (input === "") {
    searchResults.innerHTML = "";
    return;
  }

  const results = topics.filter(topic =>
    topic.name.toLowerCase().includes(input)
  );

  if (results.length === 0) {
    searchResults.innerHTML = "<p>No topics found.</p>";
    return;
  }

  searchResults.innerHTML = results
    .map(topic => `
      <a class="search-result" href="${topic.page}">
        ${topic.name}
      </a>
    `)
    .join("");
}

const galleryImages = Array.from(
  document.querySelectorAll(".gallery-card img")
);

let currentImageIndex = 0;

function openImage(image) {
  currentImageIndex = galleryImages.indexOf(image);
  updateModalImage();

  document.getElementById("imageModal").style.display = "flex";
}

function updateModalImage() {
  const selectedImage = galleryImages[currentImageIndex];
  const modalImage = document.getElementById("modalImage");

  modalImage.src = selectedImage.src;
  modalImage.alt = selectedImage.alt;
}

function previousImage(event) {
  event.stopPropagation();

  currentImageIndex =
    (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;

  updateModalImage();
}

function nextImage(event) {
  event.stopPropagation();

  currentImageIndex =
    (currentImageIndex + 1) % galleryImages.length;

  updateModalImage();
}

function closeImage(event) {
  if (
    event.target.id === "imageModal" ||
    event.target.classList.contains("close-modal")
  ) {
    document.getElementById("imageModal").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const statisticsSection = document.getElementById("statistics");
  const counters = document.querySelectorAll(".counter");
  let animationStarted = false;

  function startCounters() {
    if (animationStarted) {
      return;
    }

    animationStarted = true;

    counters.forEach(function (counter) {
      const target = Number(counter.getAttribute("data-target"));
      let current = 0;
      const increment = Math.max(1, Math.ceil(target / 50));

      const timer = setInterval(function () {
        current += increment;

        if (current >= target) {
          counter.textContent = target + "+";
          clearInterval(timer);
        } else {
          counter.textContent = current + "+";
        }
      }, 30);
    });
  }

  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        startCounters();
        observer.disconnect();
      }
    },
    {
      threshold: 0.2
    }
  );

  observer.observe(statisticsSection);
});

const aircraftData = {
  boeing747: {
    name: "Boeing 747",
    speed: "Mach 0.85",
    range: "8,000 nautical miles",
    wingspan: "224 ft",
    engines: "4",
    firstFlight: "1969"
  },

  airbusA380: {
    name: "Airbus A380",
    speed: "Mach 0.85",
    range: "8,000 nautical miles",
    wingspan: "261 ft",
    engines: "4",
    firstFlight: "2005"
  },

  sr71: {
    name: "SR-71 Blackbird",
    speed: "Mach 3.3",
    range: "2,900 nautical miles",
    wingspan: "56 ft",
    engines: "2",
    firstFlight: "1964"
  },

  concorde: {
    name: "Concorde",
    speed: "Mach 2.04",
    range: "3,900 nautical miles",
    wingspan: "84 ft",
    engines: "4",
    firstFlight: "1969"
  }
};

function compareAircraft() {
  const firstChoice = document.getElementById("aircraftOne").value;
  const secondChoice = document.getElementById("aircraftTwo").value;

  displayAircraft("aircraftOneData", aircraftData[firstChoice]);
  displayAircraft("aircraftTwoData", aircraftData[secondChoice]);
}

function displayAircraft(elementId, aircraft) {
  document.getElementById(elementId).innerHTML = `
    <h2>${aircraft.name}</h2>
    <p><strong>Maximum Speed:</strong> ${aircraft.speed}</p>
    <p><strong>Range:</strong> ${aircraft.range}</p>
    <p><strong>Wingspan:</strong> ${aircraft.wingspan}</p>
    <p><strong>Engines:</strong> ${aircraft.engines}</p>
    <p><strong>First Flight:</strong> ${aircraft.firstFlight}</p>
  `;
}

document.addEventListener("DOMContentLoaded", compareAircraft);

function calculateFlight() {

    const distance = Number(document.getElementById("distance").value);
    const speed = Number(document.getElementById("speed").value);

    if (distance <= 0 || speed <= 0) {

        document.getElementById("result").textContent =
            "Please enter valid numbers.";

        return;
    }

    const hours = distance / speed;

    document.getElementById("result").textContent =
        "Estimated Flight Time: " + hours.toFixed(2) + " hours";
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");

  const button = document.getElementById("themeToggle");

  if (document.body.classList.contains("light-mode")) {
    button.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    button.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  const button = document.getElementById("themeToggle");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");

    if (button) {
      button.textContent = "🌙 Dark Mode";
    }
  }
});

let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");

  slides[currentSlide].classList.remove("active");

  currentSlide =
    (currentSlide + direction + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
}

const missionData = {
  apollo11: {
    title: "Apollo 11",
    objective: "Land humans on the Moon and return them safely to Earth.",
    engineering:
      "The mission used the Saturn V rocket, command module, service module, and lunar module.",
    impact:
      "Apollo 11 demonstrated advanced navigation, propulsion, computing, and life-support engineering."
  },

  voyager1: {
    title: "Voyager 1",
    objective: "Study Jupiter, Saturn, and the outer solar system.",
    engineering:
      "Voyager 1 uses radioisotope power, long-distance communication, and autonomous spacecraft systems.",
    impact:
      "It became the first human-made spacecraft to enter interstellar space."
  },

  hubble: {
    title: "Hubble Space Telescope",
    objective: "Observe stars, galaxies, planets, and distant regions of the universe.",
    engineering:
      "Hubble combines precision optics, solar power, stabilization systems, and replaceable instruments.",
    impact:
      "Its observations improved scientific understanding of the age and expansion of the universe."
  },

  artemis1: {
    title: "Artemis I",
    objective: "Test the Orion spacecraft and Space Launch System around the Moon.",
    engineering:
      "The mission tested launch, navigation, heat-shield performance, communication, and deep-space operations.",
    impact:
      "It prepared NASA for future crewed lunar missions."
  },

  jwst: {
    title: "James Webb Space Telescope",
    objective: "Study the early universe, stars, galaxies, and planetary systems.",
    engineering:
      "JWST uses a segmented mirror, infrared instruments, and a large multilayer sunshield.",
    impact:
      "It allows scientists to observe extremely distant and faint objects."
  },

  perseverance: {
    title: "Perseverance Rover",
    objective: "Search for evidence of ancient microbial life and study Mars geology.",
    engineering:
      "The rover includes autonomous navigation, scientific instruments, cameras, and a sample-caching system.",
    impact:
      "It supports future Mars exploration and sample-return research."
  }
};

function showMission(missionId) {
  const mission = missionData[missionId];

  document.getElementById("missionInfo").innerHTML = `
    <h3>${mission.title}</h3>
    <p><strong>Objective:</strong> ${mission.objective}</p>
    <p><strong>Engineering:</strong> ${mission.engineering}</p>
    <p><strong>Impact:</strong> ${mission.impact}</p>
  `;

  document.getElementById("mission-details").scrollIntoView({
    behavior: "smooth"
  });
}

const quizQuestions = [
  {
    question: "Which aircraft first broke the sound barrier?",
    answers: ["Concorde", "Bell X-1", "Boeing 747", "SR-71"],
    correct: 1
  },
  {
    question: "Which mission first landed humans on the Moon?",
    answers: ["Apollo 11", "Artemis I", "Voyager 1", "Gemini 4"],
    correct: 0
  },
  {
    question: "What force allows an aircraft to rise?",
    answers: ["Drag", "Weight", "Lift", "Friction"],
    correct: 2
  },
  {
    question: "Which telescope mainly observes infrared light?",
    answers: ["Hubble", "James Webb", "Voyager 1", "Apollo"],
    correct: 1
  },
  {
    question: "Which aircraft could fly faster than Mach 3?",
    answers: ["Boeing 747", "Wright Flyer", "SR-71", "Airbus A380"],
    correct: 2
  }
];

let currentQuestionIndex = 0;
let quizScore = 0;

function displayQuestion() {
  const questionData = quizQuestions[currentQuestionIndex];
  const answerButtons = document.getElementById("answerButtons");

  document.getElementById("question").textContent =
    questionData.question;

  document.getElementById("quizFeedback").textContent = "";
  answerButtons.innerHTML = "";

  questionData.answers.forEach(function (answer, index) {
    const button = document.createElement("button");

    button.textContent = answer;
    button.onclick = function () {
      checkAnswer(index);
    };

    answerButtons.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const questionData = quizQuestions[currentQuestionIndex];
  const feedback = document.getElementById("quizFeedback");
  const buttons = document.querySelectorAll(".answer-buttons button");

  buttons.forEach(function (button) {
    button.disabled = true;
  });

  if (selectedIndex === questionData.correct) {
    feedback.textContent = "Correct!";
    quizScore++;
  } else {
    feedback.textContent =
      "Incorrect. The correct answer is " +
      questionData.answers[questionData.correct] +
      ".";
  }
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    document.querySelector(".quiz-card").innerHTML = `
      <h2>Quiz Complete</h2>
      <p>You scored ${quizScore} out of ${quizQuestions.length}.</p>
      <button onclick="restartQuiz()">Try Again</button>
    `;
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  quizScore = 0;
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("question")) {
    displayQuestion();
  }
});
