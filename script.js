// 24 messages for each day (edit these to whatever you want!)
["Day 4: Mini‑challenge: Text me 3 things you like about yourself.",
"Day 5: Your smile is literally my favourite thing in the universe.",
"Day 6: If kisses were snowflakes, I’d send you a blizzard 💋",
"Day 7: Tiny dare: Send me a selfie right now 😳❤️",
"Day 8: I’m proud of you. More than you know.",
"Day 9: Pickup line: Are you Christmas? Because I wait all year for you 🎄",
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


window.onload = () => {
const calendar = document.getElementById("calendar");
const today = new Date().getDate();


for (let day = 1; day <= 24; day++) {
const door = document.createElement("div");
door.classList.add("door");
door.innerText = day;
door.dataset.day = day;


// Lock future days
if (day > today) {
door.classList.add("locked");
}


// Handle click
door.addEventListener("click", () => handleDoor(day, door, today));


calendar.appendChild(door);
}
};


function handleDoor(day, door, today) {
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");


if (day > today) {
popupText.textContent = "It's too early to open this one, be patient baby and come back another day :)";
} else {
popupText.textContent = content[day];
door.classList.add("opened");
}


popup.classList.remove("hidden");
}


document.getElementById("close").addEventListener("click", () => {
document.getElementById("popup").classList.add("hidden");
});