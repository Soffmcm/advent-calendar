// 24 messages for each day (edit these to whatever you want!)
const content = [
  "<strong>Day 1:</strong> Hi babyyy, as the first note of this calendar i thought i’d just explain what this is all about. <br> After that  time u told me that you wanted an advent calendar, i thought “omg let me look for a lipgloss one online and try to get it for her” but unfortunately i don’t have 60€ (as the cheapest option), but then i thought “wait why don’t i try do something else?” And i came up with the idea of making this kind of calendar :) which i thought could be sweet too :) <br><strong>But how does it work?</strong> <br> Well every day a new “day” will unlock and you can see a little note that i left for you for that day :) and don’t even try to open future days because i made sure that they are locked until its time to open them :))",
  "<strong>Day 2:</strong> Today i just wanted to let you know that I genuinely never loved someone and felt like someone loved me so truthfully and genuinly as i do about you. Just a reminder that i love you more than anything❤️",
 `<strong>Day 3:</strong> <em>I still remember, third of December, 
  me in your sweater<br>
  You said it looked better on me than it did you<br>
  Only if you knew how much I like you...<br></em>
  <img src="me-in-blue-hoodie.jpeg" alt="Me in blue hoodie" style="max-width:100%; border-radius:10px; margin-top:10px;">
  <img src="her-in-my-sweater.jpeg" alt="Me in blue hoodie" style="max-width:100%; border-radius:10px; margin-top:10px;">`,
  "<strong>Day 4:</strong> Mini-challenge: Text me 3 things you like about yourself.",
  "<strong>Day 5:</strong> Your smile is literally my favourite thing in the universe.",
  "<strong>Day 6:</strong> If kisses were snowflakes, I’d send you a blizzard ",
  "<strong>Day 7:</strong> Tiny dare: Send me a selfie right now ",
  "<strong>Day 8:</strong> I’m proud of you. More than you know.",
  "<strong>Day 9:</strong> Pickup line: Are you Christmas? Because I wait all year for you ",
  "<strong>Day 10:</strong> Challenge: Guess a number between 1–10. If you're right, you get a reward ;)",
  "<strong>Day 11:</strong> You make everything feel warmer.",
  "<strong>Day 12:</strong> Halfway to Christmas!! I love you ❤️",
  "<strong>Day 13:</strong> Pickup line: If you were a tree, you’d be a fineapple 🎍😂",
  "<strong>Day 14:</strong> I miss you more than Santa misses summer.",
  "<strong>Day 15:</strong> Tiny game: Name 3 things you want for Christmas.",
  "<strong>Day 16:</strong> I hope your day is as beautiful as you.",
  "<strong>Day 17:</strong> Pickup line: Are you my wifi? Because I'm feeling a connection.",
  "<strong>Day 18:</strong> You make my heart do little cartwheels.",
  "<strong>Day 19:</strong> Game: Send me a voice note saying something cute <3",
  "<strong>Day 20:</strong> You're my favourite person. Ever.",
  "<strong>Day 21:</strong> Countdown: 3 days to Christmas!!",
  "<strong>Day 22:</strong> You are my happy place.",
  "<strong>Day 23:</strong> Almost Christmas… I can’t wait to hug you again ❤️",
  "<strong>Day 24:</strong> Merry Christmas Eve baby 🎄❤️ I love you more than words."
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
