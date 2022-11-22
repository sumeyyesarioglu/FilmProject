const form = document.getElementById('film-form')
const titleElement = document.querySelector('#title')
const urlElement = document.querySelector('#url')
const directorElement = document.querySelector('#director')
const cardBody = document.querySelectorAll('.card-body')[1]
const clear = document.getElementById('clear-films')

//Tüm Eventleri Yükleme

eventListeners()
function eventListeners() {
    form.addEventListener('submit' , addFilm)
    //BUNU YAPARAK TÜM YAZDIGIMIZ FİLMLERİN EKRANDA KALMASINI SAĞLADIK
    document.addEventListener('DOMContentLoaded', function() {
        let films = Storage.getFilmsFromStorage()
        films.forEach(film => {
            UI.addFilmtoUI(film)
        });
    })
    cardBody.addEventListener('click', deleteItem)
    clear.addEventListener('click', clearAllFilms)
}
function addFilm(e) {
    const title = titleElement.value
    const url = urlElement.value
    const director = directorElement.value

    if(title === '' || url === '' || director ==='' ) {
        //HATA
        UI.displayMessages('Tüm alanları doldurunuz!', 'danger')
    }
    else {
        //Yeni film 
        const newFilm = new film(title,director,url)

        UI.addFilmtoUI(newFilm)//Arayüze Film ekleme
        Storage.addFilmToStorage(newFilm)//Storage film ekleme
        
        UI.displayMessages('Başarıyla eklendi' , 'success')

    }
    UI.clearInputs(title,url,director)


    e.preventDefault()
}


//SİLME İŞLEMİ
function deleteItem(e){
    if(e.target.id ==='delete-film') {
        UI.deleteItemFromToUI(e.target)
      
    }
    // console.log(e.target)//KAÇ TANE PARENT VAR ONU İNCELEMEMİZİ SAĞLIYOR
}
function clearAllFilms(){
    if(confirm('Emin misiniz?')) {
    UI.clearAllFilmsFromToUI()
    Storage.clearAllFilmsFromToStorage()
}
}
