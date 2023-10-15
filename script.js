let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Aerosmith'];

// Function to remove articles and format band names
function formatBandName(bandName) {
  const articles = ['the', 'a', 'an'];
  let words = bandName.toLowerCase().split(' ');
  
  // Remove articles from the beginning of the name
  while (articles.includes(words[0])) {
    words.shift();
  }
  
  return words.join(' ');
}

// Sort the band names
bandNames.sort((a, b) => formatBandName(a) > formatBandName(b) ? 1 : -1);

// Get the ul element by id
let ulElement = document.getElementById('band');

// Loop through sorted band names and create li elements
for (let bandName of bandNames) {
  let liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
}
