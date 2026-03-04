const sections = document.querySelectorAll(".section-movies");

const growcast = movies.filter(movie => movie.category === "Growcast [Episódios]");
const flutter = movies.filter(movie => movie.category === "Webinar em Flutter");
const uxui = movies.filter(movie => movie.category === "Jornada UX/UI");
const diversos = movies.filter(movie => movie.category === "Diversos");

function renderMovies(lista, section, titulo) {
    section.innerHTML = `
        <div class="container mt-5">
        <h2 class="text-white mb-4">${titulo}</h2>
        <div class="row">

      ${lista.map(movie => `
        <div class="col-md-3 mb-4">
          <div class="movie-card">
            
            <img src="${movie.img}" class="movie-img">

            <div class="movie-info">
              <p class="movie-title">${movie.title}</p>
            </div>

          </div>
        </div>
      `).join("")}

    </div>
  </div>
`
};

renderMovies(growcast, sections[0], "Growcast");
renderMovies(flutter, sections[1], "Webinar em Flutter");
renderMovies(uxui, sections[2], "Jornada UX/UI");
renderMovies(diversos, sections[3], "Diversos");