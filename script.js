
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
  const input = document.getElementById("searchInput").value.toLowerCase();

  const topics = [
    "Wright Flyer",
    "Bell X-1",
    "Apollo 11",
    "Space Shuttle",
    "Falcon 9",
    "Saturn V",
    "Aerodynamics",
    "Propulsion",
    "Satellites",
    "AI Flight Systems"
  ];

  const results = topics.filter(topic =>
    topic.toLowerCase().includes(input)
  );

  document.getElementById("searchResults").innerHTML =
    results.map(result => `<p>${result}</p>`).join("");
}
