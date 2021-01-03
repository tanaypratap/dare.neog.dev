let tweet = document.querySelector("#tweet");
let tweet2 = document.querySelector("#tweet2");
tweet.addEventListener("click", function () {
  let message = `I'm publicly committing to the #151daysofcode challenge by @neogcamp.
Join and learn with me 👇
https://151daysofcode.netlify.app/
#neogcamp #151daysofcode`;

  let finalMessage = encodeURIComponent(message);

  let twitterUrl = `https://twitter.com/intent/tweet?text=${finalMessage}`;
  window.open(twitterUrl, "_blank");
});

tweet2.addEventListener("click", function () {
  let message = `I'm publicly committing to the #151daysofcode challenge by @neogcamp.
Join and learn with me 👇
https://151daysofcode.netlify.app/
#neogcamp #151daysofcode`;

  let finalMessage = encodeURIComponent(message);

  let twitterUrl = `https://twitter.com/intent/tweet?text=${finalMessage}`;
  window.open(twitterUrl, "_blank");
});
