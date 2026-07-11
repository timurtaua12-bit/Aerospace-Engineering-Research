
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

function openImage(image) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "flex";
  modalImage.src = image.src;
  modalImage.alt = image.alt;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}
