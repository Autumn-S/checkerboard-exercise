/*function createCheckerboard() {
   
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "800px";
    container.style.height = "800px";
  
    // Append tiles to container
    for (let i = 0; i < 64; i++) {
      const tile = document.createElement("div");
      tile.style.width = "12.5%";
      tile.style.height = "12.5%";
      container.appendChild(tile);
    }
    document.body.appendChild(container);
    return container;
  }
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to change color of each tile to a new random color every 2 seconds
  function changeTileColors(container) {
    setInterval(() => {
      const tiles = container.children;
      for (let i = 0; i < tiles.length; i++) {
        tiles[i].style.backgroundColor = getRandomColor();
      }
    }, 2000);
  }
  
  const checkerboard = createCheckerboard();
  changeTileColors(checkerboard);

// Create audio element
function playAudio(src) {
    
    const audio = new Audio();
    audio.src = src;
    audio.controls = true;
  
    document.body.appendChild(audio);

    // Play audio
    audio.play();
  }
  
  // Call playAudio function with audio source
  playAudio("lofi-study-112191.mp3");*/

// create a container element for the tiles
const container = document.createElement("div");
// set the container styles
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";


// add the container element to the page
document.body.appendChild(container);

// create the tiles and apply styles
for (let i = 0; i < 64; i++) {
  const tile = document.createElement("div");
  tile.style.width = "12.5%";
  tile.style.height = "12.5%";

  // apply alternating background colors
  if ((Math.floor(i / 8) + i) % 2 === 0) {
    tile.style.background = "linear-gradient(#c9fbff 25%, #91f3fc 50%, #2f8189 75%, #3b939b 100%)";
  } else {
    tile.style.background = "linear-gradient(#91f3fc 25%, #2f8189 50%, #3b939b 75%, #2f767d 100%)";
  }

  // apply wave-like gradient background color to each tile
  tile.style.backgroundSize = "400% 400%";
  tile.style.animation = "bounce 3s ease-in-out infinite";
  tile.style.transition = "background-color 2s ease-in-out";
  container.appendChild(tile);
}

// add the animation for the gradient color
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes bounce {
  0% {
    background-position: 20% 20%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 20% 20%;
  }
}
`;
document.head.appendChild(styleSheet);

// Create audio element
const audio = new Audio();
audio.src = "lofi-study-112191.mp3";
audio.controls = true;
document.body.appendChild(audio);

// Play audio
audio.play();
