const riga = document.querySelector(".riga");

fetch("https://api.pexels.com/v1/search?query=people", {
  headers: {
    Authorization: "WTQ1srDnY1d0gTqNdwZvvC1fxGMWJdwTWAIPo6o8IczD96fHEsDzyiBP",
  },
})
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.photos.length; i++) {
      const img = data.photos[i].src.medium;
      const titolo = data.photos[i].alt;
      riga.innerHTML += `
      <div class="col-12 col-lg-3 col-md-4 col-sm-6 p-1">
       <div class="card" >
          <img src="${img}" class="card-img-top">
        <div class="card-body">
           <p class="card-text">${titolo}</p>
        </div>
       </div>
       </div>`;
    }
  });
