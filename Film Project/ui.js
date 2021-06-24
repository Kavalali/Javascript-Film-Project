class UI {
  static addtoNewFilm(newFilm) {
    const filmsBody = document.getElementById("films");
    filmsBody.innerHTML +=
      `
    <tr>
    <td>
     <img src=${newFilm.url} class="img-fluid img-thumbnail w-100">
    </td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td>
     <a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a>
    </td>
  </tr>
   `
  }
  
  static clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }
  
  static alertMessage = function(message,type){
    const alertMessagePosition = document.querySelector(".card-body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    alertMessagePosition.appendChild(div); 
    setTimeout(function(){
      div.remove();
    }, 1000);
  }
  
  static loadAllFilms = function(films){
    const filmList = document.getElementById("films");
    films.forEach(function(film){
      filmList.innerHTML += 
      `
      <tr>
      <td>
       <img src=${film.url} class="img-fluid img-thumbnail w-100">
      </td>
      <td>${film.title}</td>
      <td>${film.director}</td>
      <td>
       <a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a>
      </td>
    </tr>
     `;
    })
  }
  
  static deleteFilmFromUI = function(deleteElement){
    deleteElement.parentElement.parentElement.remove();
  }
  
  
  static clearAllFimsFromUI = function(){
    const filmList = document.getElementById("films");
    while(filmList.firstChild !== null) {
      filmList.firstElementChild.remove();
    }
  }
}
