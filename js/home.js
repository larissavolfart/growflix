const sections = document.querySelectorAll(".section-movies");

const growcast = movies.filter(movie => movie.category === "Growcast [Episódios]");
const flutter = movies.filter(movie => movie.category === "Webinar em Flutter");
const uxui = movies.filter(movie => movie.category === "Jornada UX/UI");
const diversos = movies.filter(movie => movie.category === "Diversos");

function renderMovies(lista, section, titulo) {
    section.innerHTML = `
        <div class="container mt-5">
          <a href="#${section.id}" class="text-decoration-none a-title">
            <h2 id="${section.id}" class="mb-4 render-title">
              ${titulo} <i class="bi bi-caret-right-fill"></i>
            </h2>
          </a>
        <div class="row gx-4">

      ${lista.map((movie,index) => `
        <div class="col-md-3">
          <div class="card movie-card"
               data-index="${index}"
               data-bs-toggle="modal"
               data-bs-target="#videoModal">
            
            <img src="${movie.img}" class="movie-img">

            <div class="card-body">
                <h5 class="card-title">
                  <i class="bi bi-caret-right-fill fi-card"></i> ${movie.title}
                </h5>
            </div>

          </div>
        </div>   
      `).join("")}

    </div>
  </div>
`
};

document.addEventListener("click", function(e) {
  const card = e.target.closest(".movie-card");
  if(!card) return;

  const index = card.dataset.index;
  const movie = movies[index];
  
  document.querySelector("#videoModalBody").innerHTML = movie.iframe;
});

const modal = document.getElementById("videoModal");

modal.addEventListener("hidden.bs.modal", function () {
  document.getElementById("videoModalBody").innerHTML = "";
});

renderMovies(growcast, sections[0], "Growcast [Episódios]");
renderMovies(flutter, sections[1], "Webinar em Flutter");
renderMovies(uxui, sections[2], "Jornada UX/UI");
renderMovies(diversos, sections[3], "Diversos");