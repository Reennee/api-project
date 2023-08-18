const url = 'https://billboard-api2.p.rapidapi.com/hot-100?date=2019-05-11&range=1-10';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4340e65289msh88d02508fb7bf17p1344f0jsna730ffb73943',
    'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
  }
};

const hot100Element = document.getElementById('hot-100');

async function getHot100 () {
  const response = await fetch(url, options);
  const result = await response.json();

  if (result.songs) {
    const hot100 = Array.from(result.songs);

    hot100Element.innerHTML = '';

    hot100.forEach((song) => {
      const songElement = document.createElement('div');
      songElement.classList.add('song');

      const songTitleElement = document.createElement('h2');
      songTitleElement.textContent = song.title;

      const songArtistElement = document.createElement('p');
      songArtistElement.textContent = song.artist;

      songElement.appendChild(songTitleElement);
      songElement.appendChild(songArtistElement);

      hot100Element.appendChild(songElement);
    });
  }
};

document.getElementById('get-hot-100').addEventListener('click', getHot100);
