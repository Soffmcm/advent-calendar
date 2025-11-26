// 24 messages for each day (edit these to whatever you want!)
const content = [
  "Day 1: Hey love, ready for a month of surprises? ❤️",
  "Day 2: Mini-challenge: Send me a cute selfie 😘",
  "Day 3: Pickup line: Are you a magician? Because whenever I look at you, everyone else disappears.",
  "Day 4: Mini-challenge: Text me 3 things you like about yourself.",
  "Day 5: Your smile is literally my favourite thing in the universe.",
  "Day 6: If kisses were snowflakes, I’d send you a blizzard ",
  "Day 7: Tiny dare: Send me a selfie right now ",
  "Day 8: I’m proud of you. More than you know.",
  "Day 9: Pickup line: Are you Christmas? Because I wait all year for you ",
  "Day 10: Challenge: Guess a number between 1–10. If you're right, you get a reward ;)",
  "Day 11: You make everything feel warmer.",
  "Day 12: Halfway to Christmas!! I love you ❤️",
  "Day 13: Pickup line: If you were a tree, you’d be a fineapple 🎍😂",
  "Day 14: I miss you more than Santa misses summer.",
  "Day 15: Tiny game: Name 3 things you want for Christmas.",
  "Day 16: I hope your day is as beautiful as you.",
  "Day 17: Pickup line: Are you my wifi? Because I'm feeling a connection.",
  "Day 18: You make my heart do little cartwheels.",
  "Day 19: Game: Send me a voice note saying something cute <3",
  "Day 20: You're my favourite person. Ever.",
  "Day 21: Countdown: 3 days to Christmas!!",
  "Day 22: You are my happy place.",
  "Day 23: Almost Christmas… I can’t wait to hug you again ❤️",
  "Day 24: Merry Christmas Eve baby 🎄❤️ I love you more than words."
];

document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("calendar");
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");
  const closeBtn = document.getElementById("close");

  // Create array of days 1..24 and shuffle it
  let days = Array.from({ length: 24 }, (_, i) => i + 1);
  shuffle(days);

  // TEMP: unlock everything for testing
  const today = 24;

  // Render doors in shuffled order
  for (let day of days) {
    const door = document.createElement("div");
    door.classList.add("door");
    door.innerText = day;
    door.dataset.day = day;

    // click behavior: show popup with the correct message
    door.addEventListener("click", () => {
      // TEMP: all doors unlocked for testing
      const message = content[day - 1] || "No content yet for this day.";
      popupText.innerHTML = `<strong>Day ${day}</strong><br><br>${message}`;
      door.classList.add("opened"); // mark door as opened
      popup.classList.remove("hidden");
    });

    calendar.appendChild(door);
  }

  // Close button
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  // Optional: close popup when clicking outside the content box
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.classList.add("hidden");
  });
});

/**
 * Fisher–Yates shuffle
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
