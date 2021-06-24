const filmBody = document.getElementById('film-form');
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');
const secondCardBody = document.querySelectorAll('.card-body')[1];
const clearFilms = document.getElementById('clear-films')


eventListeners();

function eventListeners() {
  filmBody.addEventListener('submit', createNewFilm);
  document.addEventListener('DOMContentLoaded', function () {
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
  });

  secondCardBody.addEventListener('click', deleteFilm);
  clearFilms.addEventListener('click', clearAllFilms);
}


function createNewFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === '' || director === '' || url === '') {
    //hata
    UI.alertMessage('Inputlar boş bırakılamaz', 'danger');
  } else {
    const newFilm = new Film(title, director, url);

    UI.addtoNewFilm(newFilm);
    Storage.addFilmsStorage(newFilm);
    UI.alertMessage('Film başarılı şekilde eklendi', 'success');
  }

  UI.clearInputs(titleElement, directorElement, urlElement);


  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === 'delete-film') {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    UI.alertMessage('Film Başarıyla Silindi...', 'success');
  }
}

function clearAllFilms() {
  UI.clearAllFimsFromUI();
  Storage.clearAllFimsFromStorage();
}