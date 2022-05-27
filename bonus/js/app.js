/* 
Generare una griglia di gioco quadrata , 
in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100


Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


-------  Bonus  -------

L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. 

*/


/* 
//creo una variabile per il pulsante
const submitButton = document.getElementById("submitButton");
// creo una variabile che conterrà il valore scelto dall'utente tramite la select
const selectValue= document.getElementById("difficultLevels");

//creo l'evento click sul pulsante
submitButton.addEventListener("click", function(){
    //
})


// */

// creo variabile per il contenitore della griglia
const gridContainer = document.getElementById("container-grid");

gridContainer.style.width = 'calc(var(--w-cell) * 10)';
//con un ciclo for creo un quadrato generando ad ogni ciclo un div
for (let i = 1; i <= 100; i++) {
    //creo un elemento di tipo div che sarà la singola cella
    const cell = document.createElement("div");
    //Do uno stile al div con le classi precedentemente dichiarate nel file css
    cell.classList.add("cell");
    //inserisco in ogni cella il valore dell'indice i
    cell.append(i.toString());
    //appendo il div al contenitore della griglia
    



    gridContainer.append(cell)
    cell.addEventListener("click", function () {
    this.classList.add("clicked");
})
}   


