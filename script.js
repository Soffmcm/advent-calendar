// 24 messages for each day (edit these to whatever you want!)
const content = [
  "<strong>Day 1:</strong> Hi babyyy, as the first note of this calendar i thought i’d just explain what this is all about. <br> After that  time u told me that you wanted an advent calendar, i thought “omg let me look for a lipgloss one online and try to get it for her” but unfortunately i don’t have 60€ (as the cheapest option), but then i thought “wait why don’t i try do something else?” And i came up with the idea of making this kind of calendar :) which i thought could be sweet too :) <br><strong>But how does it work?</strong> <br> Well every day a new “day” will unlock and you can see a little note that i left for you for that day :) and don’t even try to open future days because i made sure that they are locked until its time to open them :))",
  "<strong>Day 2:</strong> Today i just wanted to let you know that I genuinely never loved someone and felt like someone loved me so truthfully and genuinly as i do about you. Just a reminder that i love you more than anything❤️",
 
  `<strong>Day 3:</strong> <em>"I still remember, third of December,<br> 
  me in your sweater<br>
  You said it looked better on me than it did you<br>
  Only if you knew how much I like you..."<br></em>

  <div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 10px;">
    <img src="me-in-blue-hoodie.JPEG" 
        alt="Me in blue hoodie" 
        style="max-width:25%; border-radius:10px;">
    <img src="her-in-my-sweater.JPEG" 
        alt="Her in my sweater" 
        style="max-width:25%; border-radius:10px;">
  </div>
  It genuinely does look so much better on you my love :) <3`,

  "<strong>Day 4:</strong> Today i just wanted to remind you of how much i love your eyes, like they are literally my favourite thing to look into, and it might sound stupid but they genuinely make my heart feel like warm inside. I love you so much baby❤️",
  "<strong>Day 5:</strong> I am still genuinely surprised as to how YOU (a literal goddess look-a-like with the most adorable smile, who is also so fucking smart and sweet to me and treats me so well and has the most loving soul) somehow decided to be with me (an okay person) but i will forever be grateful for it :)",
  "<strong>Day 6:</strong> I don’t know it i mentioned this one before but i genuinely love your smile. Like i know you don’t like it but it’s literally so fucking adorable and cute. I will literally do anything just to see you smile. It literally warms up my soul. ",
  "<strong>Day 7:</strong> I miss you so fucking much. I hope you know that my goal in becoming an engineer is so that i can become talented enough to create the world’s first teleport so that i can see you every single day (have fun getting rid of me then hahah)",
  
  `<strong>Day 8:</strong> <br>
   <div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 10px;">
    <img src="guitar-cover.PNG" 
        alt="Guitar cover ticket" 
        style="max-width:25%; border-radius:10px;">
   </div><br> 
  screenshot this ticket, you can use it whenever you want, just name a song and i’ll learn it for you  and send you a video of me playing it:) `,
 
  "<strong>Day 9:</strong> I still find it impressive how you can always calm me down whenever im overwehlmed about anything. Like eventhough you're so far away you always make me feel so safe and actually heard and like you truly care. I am so lucky to have you in my life. ",
  "<strong>Day 10:</strong> I really hope we can travel somewhere together someday. Like i genuinely think we'd have so much fun and actually make a really good team together. Like i feel if we have any sort of issue we could actually help eachother through and get out of it together and not like spiral into the issue. I genuinly love you and being around you so much. I hope one day we get to travel the world together.",
  "<strong>Day 11:</strong> I really like it when we watch movies or series together even far apart. Like it actually makes me feel closer to you and eventhough we don't do it often it just always feels special :) and unlike when we're together we can actually watch and finish the full thing this way! (although yk I really don't mind the interuptions)",
  "<strong>Day 12:</strong> I actually love how smart you are. Like I just really cannot stand being around dumb people, and I am actually so proud of you for all the achievements you've made so far and I just know its nothing compared to what you'll achieve in the future. You're doing an amazing job my love :",
 
  `<strong>Day 13:</strong><br>
    <div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 10px;">
    <img src="anything-you-want.PNG" 
        alt="Anything you want ticket" 
        style="max-width:25%; border-radius:10px;">
   </div><br>
  screenshot this ticket and save it for whenever you want something from me, this can be anything. It can be redeemed ONCE and it doesn't exprire. Use it wisely! `,
 
  "<strong>Day 14:</strong> I genuinely cannot wait to go to uni, and i hope you know im the type of person who used to me TERRIFIED of going to uni. The only thing that makes me look forwards to it is the fact that we’ll be seeing each other WAYYYY more often :)",
  "<strong>Day 15:</strong> .",
  "<strong>Day 16:</strong> HAPPY 1 MONTH BABYYYY, At the moment im writting this it hasn't been a month just yet, but I already know that this last month was already much better than any other just because I got to be yours (yes even with mock exams and everything). I love you so much baby and I'm so grateful to have you in my life❤️❤️",
 
  `<strong>Day 17:</strong><br>  
    <div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 10px;">
      <img src="movie-night-pick.PNG" 
          alt="Movie night pick ticket" 
          style="max-width:25%; border-radius:10px;">
    </div><br> 
  screenshot this ticket, you can use it whenever you want, its valid for you to pick any movie or series you want and we'll watch it together or call or on that website you found :)`,
 
  "<strong>Day 18:</strong> I’d literally give anything in the world to be able to sleep with you every night (I'd even trade my shark for it). I think it would genuinely improve both of our sleep qualities :) also how are you so comfy to cuddle? And you just make me feel do calm too, nothing could be better :)",
  
  `<strong>Day 19:</strong><br> 
    <div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 10px;">
      <img src="unlimited-cuddles.PNG" 
          alt="Unlimited cuddles ticket" 
          style="max-width:25%; border-radius:10px;">
    </div><br>
  screenshot this ticket, its valid forever and never runs out. It can be exchanged for cuddles whenever you want :)  `,

  "<strong>Day 20:</strong>  ONLY 4 MORE DAYS TILL CHRISTMASSSS <br> Today i just wanted to remind you that:<br> I LOVE YOU SO MUCHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
  "<strong>Day 21:</strong> I keep thinking about how good life will be once we both live in the same country. I PROMISE YOU we will be making up for all the lost time. I just always wanna be around you and if we actually both end up in the netherlands in less than a year its literally going to be a dream come true, and considering the amount of luck we’ve had so far i think it’s quite likely it’ll happen :)) i can’t wait ",

  `<strong>Day 22:</strong><br> 
    <div style="display: flex; gap: 10px; justify-content: center; align-items: center; margin-top: 10px;">
      <img src="unlimited-kisses.PNG" 
          alt="Unlimited kisses ticket" 
          style="max-width:25%; border-radius:10px;">
    </div><br> 
  screenshot this ticket, its valid forever and can be used for unlimited kisses whenever you want:)`,
  
  "<strong>Day 23:</strong>I hope you know you really are my favorite person ever on the face of the earth, and this entier universe too tbh, and if there's anything beyond that then you're still my favorite including them too :) Just in general, I love being around you and I never get tierd of you even after being together for days, and usually I can't put up with people for many hours okay so it really does mean alot. I love you so much baby❤️",
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
