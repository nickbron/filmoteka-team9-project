import lightFormat from "date-fns/esm/fp/lightFormat/index.js";

export default class {

  constructor() { }

  WATCHED_KEY = 'watched';
  QUEUE_KEY = 'queue'

  filmWatchedArr = [];
  filmQueueArr = [];

  getFilmWatchedArr() {
    return this.filmWatchedArr
  }

  getFilmQueueArr() {
    return this.filmQueueArr
  }

  setToWatchedArr(newMovie) {
    this.filmWatchedArr = newMovie
  }

  setToQueueArr(newMovie) {
    this.filmQueueArr = newMovie
  }

  //---------Save parth-------------

  makeEmptyWatchedArr() {
    if (this.getWatchedFilms()) {
      return
    }
    
    this.saveToWatchedLocal()
  }
  
  makeEmptyQueueArr() {
    if (this.getQueueFilms()) {
      return
    }
    
    this.saveToQueueLocal()
  }

  saveToWatchedLocal() {
    try {
      const jsonFormat = JSON.stringify(this.filmWatchedArr);
      localStorage.setItem(this.WATCHED_KEY, jsonFormat)
    } catch (error) {
      console.error("Set state error: ", error.message)
    }
  }

  saveToQueueLocal() {
    try {
      const jsonFormat = JSON.stringify(this.filmQueueArr);
      localStorage.setItem(this.QUEUE_KEY, jsonFormat)
    } catch (error) {
      console.error("Set state error: ", error.message)
    }
  }

  saveFilmToWatchedArr(film) {
    film.btnValue = 'Delete film from watched'
    const arr = this.getWatchedFilms();
    arr.push(film);
    this.setToWatchedArr(arr);
  }

  saveFilmToQueueArr(film) {
    film.btnValue = 'Delete film from queue'
    const arr = this.getQueueFilms();
    arr.push(film);
    this.setToQueueArr(arr)
  }

  //-----------Delete parth-------------

  removeWatchedFilm(movieId) {
    const lsArr = this.getWatchedFilms();
    const filmIdx = lsArr.findIndex(film => film.id === movieId);

    if (filmIdx !== -1) {
      lsArr.splice(filmIdx, 1);
      this.setToWatchedArr(lsArr);
      this.saveToWatchedLocal();
    }
  }

  removeQueueFilm(movieId) {
    const lsArr = this.getQueueFilms();
    const filmIdx = lsArr.findIndex(film => film.id === movieId);
    if (filmIdx !== -1) {
      lsArr.splice(filmIdx, 1);
      this.setToQueueArr(lsArr);
      this.saveToQueueLocal();
    }
  }

  //---------Get film parth----------

  getWatchedFilms() {
    try {
      const jsonFormat = localStorage.getItem(this.WATCHED_KEY);
      return jsonFormat === null ? undefined : JSON.parse(jsonFormat);
    } catch (error) {
      console.error("Get state error: ", error.message)
    }
  }

  getQueueFilms() {
    try {
      const jsonFormat = localStorage.getItem(this.QUEUE_KEY);
      return jsonFormat === null ? undefined : JSON.parse(jsonFormat);
    } catch (error) {
      console.error("Get state error: ", error.message)
    }
  }

  //--------Is has film?----------

  isHasFilmInWatched(movie) {
    const filmArr = this.getWatchedFilms();
    
    const isFilmInWathed = filmArr.find(filmFromLs => filmFromLs.id === movie.id)

    return isFilmInWathed;
  }

  isHasFilmInQueue(movie) {
    const filmArr = this.getQueueFilms();
    
    const isFilmInQueue = filmArr.find(filmFromLs => filmFromLs.id === movie.id)

    return isFilmInQueue;
  }

}