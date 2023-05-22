class Movie {
  constructor(t, s, r) {
    this.title = t;
    this.studio = s;
    this.rating = r || "PG";
  }
  static getPG(mov) {
    let pgMov = new Array(mov.length);
    let newArrayIndex = 0;
    for (let i = 0; i < mov.length; i++) {
      if (mov[i].rating === "PG") {
        pgMov[newArrayIndex] = mov[i];
        newArrayIndex++;
      }
    }
    return pgMov;
  }
}

let mov = new Movie("Casino Royale", "Eon Productions", "PG-13");
