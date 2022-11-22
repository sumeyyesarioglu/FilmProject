//ARAYÜZLERİ BU ALANDA YAPICAZ
class UI  {
  static addFilmtoUI(newFilm) {
    /* <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> -->
*/
  const filmList = document.querySelector('#films')
  
  filmList.innerHTML += `
  <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> -->
  `
}

static clearInputs(element1,element2,element3) {
    element1.value = ''
    element2.value =''
    element3.value = ''
}
static displayMessages(mesage,type) {
    const cardBody = document.querySelectorAll('.card-body')[0]

    const div = document.createElement('div')
    div.className = `alert alert-${type}`
    div.textContent = mesage

    cardBody.append(div)

    setTimeout(() => {
        div.remove()
    },1000);

}
static deleteItemFromToUI(element) { 
    element.parentElement.parentElement.remove()
}
static clearAllFilmsFromToUI() {
  const filmList = document.getElementById('films') 
  filmList.innerHTML = ''
  
}




}
