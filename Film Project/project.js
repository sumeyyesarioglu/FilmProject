const form = document.getElementById('film-form')
const titleElement = document.querySelector('#title')
const urlElement = document.querySelector('#url')
const directorElement = document.querySelector('#director')
const cardBody = document.querySelectorAll('.card-body')[1]
const clear = document.getElementById('clear-films')
//UI Objesini başlatma

const ui = new UI()

//Storage objesi üret
const storage = new Storage()

//Tüm Eventleri Yükleme

eventListeners()
function eventListeners() {
    form.addEventListener('submit' , addFilm)
    //BUNU YAPARAK TÜM YAZDIGIMIZ FİLMLERİN EKRANDA KALMASINI SAĞLADIK
    document.addEventListener('DOMContentLoaded', function() {
        let films = storage.getFilmsFromStorage()
        films.forEach(film => {
            ui.addFilmtoUI(film)
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
        ui.displayMessages('Tüm alanları doldurunuz!', 'danger')
    }
    else {
        //Yeni film 
        const newFilm = new film(title,director,url)

        ui.addFilmtoUI(newFilm)//Arayüze Film ekleme
        storage.addFilmToStorage(newFilm)//Storage film ekleme
        
        ui.displayMessages('Başarıyla eklendi' , 'success')

    }
    ui.clearInputs(title,url,director)


    e.preventDefault()
}


//SİLME İŞLEMİ
function deleteItem(e){
    if(e.target.id ==='delete-film') {
        ui.deleteItemFromToUI(e.target)
      
    }
    // console.log(e.target)//KAÇ TANE PARENT VAR ONU İNCELEMEMİZİ SAĞLIYOR
}
function clearAllFilms(){
    if(confirm('Emin misiniz?')) {
    ui.clearAllFilmsFromToUI()
    storage.clearAllFilmsFromToStorage()
}
}
