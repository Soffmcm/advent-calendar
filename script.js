// 24 messages for each day (edit these to whatever you want!)
const content = [
  `<div style="text-align:left;">
    <strong>Hi babyyy,</strong><br>
    As the first note of this calendar i thought i’d just explain what this is all about. <br>
    After that  time u told me that you wanted an advent calendar, i thought “omg let me look for a lipgloss one online and try to get it for her” but unfortunately i don’t have 60€ (as the cheapest option), but then i thought “wait why don’t i try do something else?” And i came up with the idea of making this kind of calendar :) which i thought could be sweet too :) <br>
    <strong>But how does it work?</strong> <br>
    Well, every day a new “day” will unlock and you can see a little note that i left for you for that day :) and don’t even try to open future days because i made sure that they are locked until its time to open them :))<br>
    I hope you like itttt  <br>
    I love you, Sofia :)
  </div>`,
    "Today i just wanted to let you know that I genuinely never loved someone and felt like someone loved me so truthfully and genuinly as i do about you. Just a reminder that i love you more than anything❤️",
 
  `<em>"I still remember, third of December,<br> 
  me in your sweater<br>
  You said it looked better on me than it did you<br>
  Only if you knew how much I like you..."<br></em>

  <div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 10px;">
    <img src="me-in-blue-hoodie.JPEG" 
        alt="Me in blue hoodie" 
        style="max-width:45%; border-radius:10px;">
    <img src="her-in-my-sweater.JPEG" 
        alt="Her in my sweater" 
        style="max-width:45%; border-radius:10px;">
  </div>
  It genuinely does look so much better on you my love :) <3`,

  "Today i just wanted to remind you of how much i love your eyes, like they are literally my favourite thing to look into, and it might sound stupid but they genuinely make my heart feel like warm inside. I love you so much baby❤️",
  "I am still genuinely surprised as to how YOU (a literal goddess look-a-like with the most adorable smile, who is also so fucking smart and sweet to me and treats me so well and has the most loving soul) somehow decided to be with me (an okay person) but i will forever be grateful for it :)",
  "I don’t know it i mentioned this one before but i genuinely love your smile. Like i know you don’t like it but it’s literally so fucking adorable and cute. I will literally do anything just to see you smile. It literally warms up my soul. ",
  "I miss you so fucking much. I hope you know that my goal in becoming an engineer is so that i can become talented enough to create the world’s first teleport so that i can see you every single day (have fun getting rid of me then hahah)",
  
  `<div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 10px;">
    <img src="guitar-cover.png" 
        alt="Guitar cover ticket" 
        style="max-width:100%; border-radius:10px;">
   </div><br> 
  screenshot this ticket, you can use it whenever you want, just name a song and i’ll learn it for you  and send you a video of me playing it:) `,
 
  "I still find it impressive how you can always calm me down whenever im overwehlmed about anything. Like eventhough you're so far away you always make me feel so safe and actually heard and like you truly care. I am so lucky to have you in my life. ",
  "I really hope we can travel somewhere together someday. Like i genuinely think we'd have so much fun and actually make a really good team together. Like i feel if we have any sort of issue we could actually help eachother through and get out of it together and not like spiral into the issue. I genuinly love you and being around you so much. I hope one day we get to travel the world together.",
  "I really like it when we watch movies or series together even far apart. Like it actually makes me feel closer to you and eventhough we don't do it often it just always feels special :) and unlike when we're together we can actually watch and finish the full thing this way! (although yk I really don't mind the interuptions)",
  "I actually love how smart you are. Like I just really cannot stand being around dumb people, and I am actually so proud of you for all the achievements you've made so far and I just know its nothing compared to what you'll achieve in the future. You're doing an amazing job my love :",
 
  `<div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 10px;">
    <img src="anything-you-want.png" 
        alt="Anything you want ticket" 
        style="max-width:100%; border-radius:10px;">
   </div><br>
  screenshot this ticket and save it for whenever you want something from me, this can be anything. It can be redeemed ONCE and it doesn't exprire. Use it wisely! `,
 
  "I genuinely cannot wait to go to uni, and i hope you know im the type of person who used to me TERRIFIED of going to uni. The only thing that makes me look forwards to it is the fact that we’ll be seeing each other WAYYYY more often :)",
  `<div style="text-align:left;">
    <strong>List of things i love:</strong><ol>
      <li>You</li>
      <li>My beautiful girlfriend</li>
      <li>The love of my life</li>
      <li>The prettiest girl on earth</li>
      <li>The girl of my dreams</li>
      <li>The smartest girl on earth</li>
      <li>The sweetest girl on earth</li>
      <li>The most amazing person on this planet</li>
      <li>The comfiest person to cuddle</li>
      <li>My future wife</li>
      <li>Snowboarding</li>
      <li>Guitar</li>
      <li>Sharks</li>
      <li>Spiderman</li>
      <li>Billie Eilish</li>
    </ol>
  (P.S: incase you didn’t notice 1-10 are about you)
  </div>`,
  "<strong>HAPPY 1 MONTH BABYYYY,</strong><br> At the moment im writting this it hasn't been a month just yet, but I already know that this last month was already much better than any other just because I got to be yours (yes even with mock exams and everything). I love you so much baby and I'm so grateful to have you in my life❤️❤️",
 
  `<div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 10px;">
      <img src="movie-night-pick.png" 
          alt="Movie night pick ticket" 
          style="max-width:100%; border-radius:10px;">
    </div><br> 
  screenshot this ticket, you can use it whenever you want, its valid for you to pick any movie or series you want and we'll watch it together or call or on that website you found :)`,
 
  "I’d literally give anything in the world to be able to sleep with you every night (I'd even trade my shark for it). I think it would genuinely improve both of our sleep qualities :) also how are you so comfy to cuddle? And you just make me feel do calm too, nothing could be better :)",
  
  `<div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 10px;">
      <img src="unlimited-cuddles.png" 
          alt="Unlimited cuddles ticket" 
          style="max-width:100%; border-radius:10px;">
    </div><br>
  screenshot this ticket, its valid forever and never runs out. It can be exchanged for cuddles whenever you want :)  `,

  "<strong>ONLY 4 MORE DAYS TILL CHRISTMASSSS</strong><br> Today i just wanted to remind you that:<br> I LOVE YOU SO MUCHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
  "I keep thinking about how good life will be once we both live in the same country. I PROMISE YOU we will be making up for all the lost time. I just always wanna be around you and if we actually both end up in the netherlands in less than a year its literally going to be a dream come true, and considering the amount of luck we’ve had so far i think it’s quite likely it’ll happen :)) i can’t wait ",

  `<div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 10px;">
      <img src="unlimited-kisses.png" 
          alt="Unlimited kisses ticket" 
          style="max-width:100%; border-radius:10px;">
    </div><br> 
  screenshot this ticket, its valid forever and can be used for unlimited kisses whenever you want:)`,
  
  "I hope you know you really are my favorite person ever on the face of the earth, and this entier universe too tbh, and if there's anything beyond that then you're still my favorite including them too :) Just in general, I love being around you and I never get tierd of you even after being together for days, and usually I can't put up with people for many hours okay so it really does mean alot. I love you so much baby❤️",
  "<strong>MERRY CHRISTMAS MY LOVE!!!!</strong><br>I hope you enjoyed the little messages and things I left for you each day :) I really wished that I could be with you specially today, and that we could be celebrating christmas together. I hope you know that my goal is to eventually be able to spend all christmases and holidays and every day by your side (good luck ever getting rid of me :)). So yeah I hope you still have a really amazing christmas no matter where you are or who you are with because you really deserve it. I love you so much baby and I can't wait to see you again, its the only thing on my christmas list❤️ ",
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
  const message = content[day - 1] || "No content yet for this day.";
  if (day > today) {
    // Show locked message instead
    popupText.innerHTML =
      "It's too early to open this one, be patient baby and come back another day :)";
     
     // Add shake class
    door.classList.add("locked-shake");

    // Remove it after the animation ends so it can shake again later
    setTimeout(() => {
      door.classList.remove("locked-shake");
    }, 400);

   } else {
    // Normal open
    popupText.innerHTML = `<strong>Day ${day}</strong><br><br>${message}`;
    door.classList.add("opened");
  }

  // Show popup either way
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
