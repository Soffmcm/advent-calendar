// 24 messages for each day (edit these to whatever you want!)
const content = [
  "<strong>Day 1:</strong> Hi babyyy, as the first note of this calendar i thought i’d just explain what this is all about. <br> After that  time u told me that you wanted an advent calendar, i thought “omg let me look for a lipgloss one online and try to get it for her” but unfortunately i don’t have 60€ (as the cheapest option), but then i thought “wait why don’t i try do something else?” And i came up with the idea of making this kind of calendar :) which i thought could be sweet too :) <br><strong>But how does it work?</strong> <br> Well every day a new “day” will unlock and you can see a little note that i left for you for that day :) and don’t even try to open future days because i made sure that they are locked until its time to open them :))",
  "<strong>Day 2:</strong> Today i just wanted to let you know that I genuinely never loved someone and felt like someone loved me so truthfully and genuinly as i do about you. Just a reminder that i love you more than anything❤️",
 `<strong>Day 3:</strong> <em>I still remember, third of December,<br> 
  me in your sweater<br>
  You said it looked better on me than it did you<br>
  Only if you knew how much I like you...<br></em>
  <img src="me-in-blue-hoodie.JPEG" alt="Me in blue hoodie" style="max-width:25%; border-radius:10px; margin-top:10px;">
  <img src="her-in-my-sweater.JPEG" alt="Me in blue hoodie" style="max-width:25%; border-radius:10px; margin-top:10px;">`,
  "<strong>Day 4:</strong> Today i just wanted to remind you of how much i love your eyes, like they are literally my favourite thing to look into, and it might sound stupid but they genuinely make my heart feel like warm inside. I love you so much baby❤️",
  "<strong>Day 5:</strong> I am still genuinely surprised as to how YOU (a literal goddess look-a-like with the most adorable smile, who is also so fucking smart and sweet to me and treats me so well and has the most loving soul) somehow decided to be with me (an okay person) but i will forever be grateful for it :)",
  "<strong>Day 6:</strong> I don’t know it i mentioned this one before but i genuinely love your smile. Like i know you don’t like it but it’s literally so fucking adorable and cute. I will literally do anything just to see you smile. It literally warms up my soul. ",
  "<strong>Day 7:</strong> I miss you so fucking much. I hope you know that my goal in becoming an engineer is so that i can become talented enough to create the world’s first teleport so that i can see you every single day (have fun getting rid of me then hahah)",
  "<strong>Day 8:</strong> I genuinely cannot wait to go to uni, and i hope you know im the type of person who used to me TERRIFIED of going to uni. The only thing that makes me look forwards to it is the fact that we’ll be seeing each other WAYYYY more often :)",
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
