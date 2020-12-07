
const quotes = [
  {
    quote: 'I want this adventure that is the context of my life to go on without end.',
    source: 'Simone de Beauvoir'
  },
  {
    quote: "I think that little by little I'll be able to solve my problems and survive.",
    source: 'Frida Kahlo',
    occupation: 'painter'
  },
  {
    quote: 'The beginning is always today.',
    source: 'Mary Shelley'
  },
  {
    quote: 'It is good to have an end to journey toward; but it is the journey that matters, in the end.',
    source: 'Ursula Le Guin'
  },
  {
    quote: 'If you surrendered to the air, you could ride it.',
    source: 'Toni Morrison',
    citation: 'Song of Solomon',
    year: 1977
  },
];

// Returns a random object from the 'quotes' array
function getRandomQuote(arr) {
  let arrIndex = Math.floor(Math.random() * arr.length);
  return arr[arrIndex];
}

// Prints the random object selected via getRandomQuote function
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let generateHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  if (randomQuote.hasOwnProperty('citation')) {
    generateHTML += `
      <span class="citation">${randomQuote.citation}</span>
    `;
  }

  if (randomQuote.hasOwnProperty('year')) {
    generateHTML += `
      <span class="year">${randomQuote.year}</span>
    `;
  }

  if (randomQuote.hasOwnProperty('occupation')) {
    generateHTML += `
      <span class="year">${randomQuote.occupation}</span>
    `;
  }

  generateHTML += `</p>`
  document.getElementById('quote-box').innerHTML = generateHTML;
}


// Randomly select color from array and make it background color
function changeBackground() {
  let colors = ['rgb(58, 193, 98)', 'rgb(139, 58, 193)', 'rgb(36, 53, 209)', 'rgb(209, 154, 36)', 'rgb(209, 36, 36)'];
  let colorsIndex = Math.floor(Math.random() * colors.length);
  document.querySelector('body').style.backgroundColor = (`${colors[colorsIndex]}`);
}

// Displays different random quote and changes background color when button is clicked
document.getElementById('load-quote').addEventListener("click", () => {
  printQuote();
  changeBackground();
});

// Displays different random quote and changes background color at 30 second intervals
setInterval(function () {
  printQuote();
  changeBackground();
}, 30000);
