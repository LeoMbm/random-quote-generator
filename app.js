const randomBtn = document.getElementById("generate-btn");
const content = document.getElementById("content");
const author = document.getElementById("author-name");

randomBtn.addEventListener("click", getInfo);

async function getInfo() {
  const req = await fetch(
    "https://programming-quotes-api.herokuapp.com/Quotes/random"
  );
  const data = await req.json();
  displayQuotes(data);
  console.log(data);
}

getInfo();

function displayQuotes(quotes) {
  content.innerHTML = quotes.en;
  author.innerHTML = quotes.author;
}
