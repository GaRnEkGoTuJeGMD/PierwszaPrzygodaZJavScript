"use strict";

let counter = 0;

function addPoint(){
    counter = counter + 1;
    document.getElementById("counter-display").textContent = counter;
}

function addPoint5(){
    counter = counter + 5;
    document.getElementById("counter-display").textContent = counter;
}

function addPoint10(){
    counter = counter + 10;
    document.getElementById("counter-display").textContent = counter;
}

function addPoint100(){
    counter = counter + 100;
    document.getElementById("counter-display").textContent = counter;
}

function resetPoint(){
    counter = 0;
    document.getElementById("counter-display").textContent = counter;
}

let items = [
  "kot", "drzewo", "komputer", "chmura", "banan",
  "samochód", "księżyc", "telefon", "pizza", "ocean",
  "kaktus", "robot", "motyl", "zamek", "gitara",
  "truskawka", "kosmos", "okno", "plecak", "delfin",
  "burza", "zegarek", "papuga", "wulkan", "rower",
  "diament", "latarnia", "arbuz", "smok", "poduszka",
  "rakieta", "tęcza", "żaba", "mikrofon", "lodówka",
  "książka", "klawiatura", "mysz", "serce", "góra",
  "rzeka", "las", "piasek", "butelka", "lustro",
  "kwiat", "świeca", "statek", "samolot", "pociąg",
  "krokodyl", "żyrafa", "słoń", "pingwin", "lew",
  "tygrys", "wąż", "orzeł", "sowa", "nietoperz",
  "marchewka", "ogórek", "pomidor", "ziemniak", "cebula",
  "czekolada", "cukierek", "ciastko", "naleśnik", "kanapka",
  "krzesło", "stół", "szafa", "dywan", "lampa",
  "drabina", "młotek", "śrubokręt", "nożyczki", "papier",
  "ołówek", "długopis", "zeszyt", "tablica", "plecionka",
  "wodospad", "jaskinia", "wyspa", "plaża", "pustynia",
  "śnieg", "deszcz", "wiatr", "mgła", "piorun",
  "wiedźmin", "czarodziej", "rycerz", "pirat", "ninja", "elytra",
  "kilof", "ta wiadomość jest rzadka", "możesz wylosować wiele słów",
  "minecraft", "roblox", "gd", "geometry dash to świetna gra!", "SUBSCRIBE TO @GaRnEkGoTuJe ON YOUTUBE!!1!!!11!!1!",
  "PIRACKI TOKENNNNNNNNNNNNNN", "bro odpalaj fortnite po token"
];
function gambling(){
    let index = Math.floor(Math.random() * items.length);
    document.getElementById("random-display").textContent = items[index];
}


// TODO: napisz funkcję addPoint, która zwiększa licznik o 1 i aktualizuje wyświetlacz
// TODO: utwórz tablicę z elementami do losowania
// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
