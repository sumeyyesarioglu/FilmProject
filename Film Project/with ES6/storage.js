class Storage {
    static addFilmToStorage(newFilm) {
        let films = this.getFilmsFromStorage()
        films.push(newFilm)
        localStorage.setItem('films', JSON.stringify(films)) //String şeklinde storage'a eklemiş olduk
    }
    
    
    //LOCAL STORAGE'A EKLERKEN HER ZAMAN BU İŞLEM YAPILIYOR.
    static getFilmsFromStorage() {
    
        let films;
        if(localStorage.getItem('films')===null){
            films = []
        }
        else {
            films =JSON.parse(localStorage.getItem('films'))
    
        }
        return films;
    }
    static clearAllFilmsFromToStorage() {
        localStorage.removeItem('films')
    }
}
