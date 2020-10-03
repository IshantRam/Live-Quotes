const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newq = document.getElementById("newq");
const Tweetme = document.getElementById("Tweetme");

let realdata = "";
let quotesData = "";

const TweetNow = () => {
  let tweetQuote = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
  window.open(tweetQuote);
};
const getnewQuotes = () => {
  let rnum = Math.floor(Math.random() * 1643);
  quotesData = realdata[rnum];
  quotes.innerText = `${quotesData.text}`;
  quotesData.author == null
    ? (author.innerText = "Anonymous")
    : (author.innerText = `By - ${quotesData.author}`);
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realdata = await data.json();
    getnewQuotes();
  } catch (error) {}
};
Tweetme.addEventListener("click", TweetNow);
newq.addEventListener("click", getnewQuotes);
getQuotes();
