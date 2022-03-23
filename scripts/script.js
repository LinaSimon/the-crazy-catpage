//

window.addEventListener("load", (event) => {
  const catGreen = document.getElementById("index_paw_button");
  const catGreenTextElement = document.getElementById("startText");

  catGreen.addEventListener("click", function () {
    // getPostFromId();
    catGreenTextElement.innerHTML =
      "<p>This is a portfolio that turned into a mini-website with cats. Please visit the link *Projects* for random cat images. :D</p>";
  });

  // Fetch cat images from api
});

function getCats() {
  console.log("data");
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((catList) => {
      renderHtml(catList);
    });
}

// Render all html needed for cat images
function renderHtml(catList) {
  var catWrapper = document.getElementById("catWrapper");

  for (let i = 0; i < catList.length; i++) {
    var imageUrl = catList[i].url;
    var imageWidth = catList[i].width;
    var imageHeight = catList[i].height;

    catWrapper.innerHTML = `<img class="catImage" src="${imageUrl}" alt="A random image" style="width:${imageWidth}px; height:${imageHeight}px" />`;
  }
}
