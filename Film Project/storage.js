function Storage () {

}
Storage.prototype.addFilmToStorage= function(newFilm) {
    let films = this.getFilmsFromStorage()
    films.push(newFilm)
    localStorage.setItem('films', JSON.stringify(films)) //String şeklinde storage'a eklemiş olduk
}


//LOCAL STORAGE'A EKLERKEN HER ZAMAN BU İŞLEM YAPILIYOR.
Storage.prototype.getFilmsFromStorage = function() {

    let films;
    if(localStorage.getItem('films')===null){
        films = []
    }
    else {
        films =JSON.parse(localStorage.getItem('films'))

    }
    return films;
}
Storage.prototype.clearAllFilmsFromToStorage= function() {
    localStorage.removeItem('films')
}