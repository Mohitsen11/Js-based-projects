//Variables

let quotes = document.querySelector("#Quote");
let person = document.querySelector("#quotes-person");
let btn = document.querySelector(".next-btn");

const Quotes = [
  {
    quote: `"Young people willing to push super hard to make something happen are among the most powerful forces in the world."`,
    person: `Sam Altman`,
  },
  {
    quote: `"When you see a mob doing something, it should make you less likely to do it yourself, not more likely."`,
    person: `Paul Graham`,
  },
  {
    quote: `"Don't chase people. Be yourself, do your own thing and work hard. The right people - the ones who really belong in your life - will come to you, and stay."`,
    person: `Will Smith`,
  },
  {
    quote: `"You must not be afraid of your uniqueness and you must care less and less what people think of you."`,
    person: `Robert Greene`,
  },
  {
    quote: `"Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious."`,
    person: `Stephen Hawking`,
  },
  {
    quote: `"Ignore those who tell you which way to go without first understanding where you are."`,
    person: `James Pierce`,
  },
  {
    quote: `"Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest."`,
    person: `Sri Chinmoy`,
  }
];

btn.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * Quotes.length);

    quotes.innerText = Quotes[random].quote;
    person.innerText = Quotes[random].person;
});