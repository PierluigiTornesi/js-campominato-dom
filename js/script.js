//ESECUZIONE

//array che contiene le celle cliccate
let clickedCells = [];


//genero l'azione sul bottone quando viene premuto
const buttonPlay = document.getElementById("play");
buttonPlay.addEventListener("click", function() {
    //prendo la scelta del livello di difficoltá
    const sceltaDiff = document.getElementById("livelloDif")
    //prendo il valore del livello
    const diffLiv = parseInt(sceltaDiff.value);
    console.log(diffLiv);
    //verifico il valore del livello
    //se é uno creo una griglia con 100 celle
    if (diffLiv === 1) {

        //genero le bombe
        const bombs = generateBombs(100);

        const maxClicks = 100 - bombs.length;


        //prendo l'elemento con la classe grid per poter aggiungere le celle
        const gridElem = document.querySelector(".grid");
        //svuoto la griglia
        gridElem.innerHTML = "";

        //ciclo per creare 100 celle
        for (let i = 0; i < 100; i++) {
            //il numero corrente é l'indice piú uno cosi da scrivere i numeri da 1 a 100
            const curNumber = i + 1;
            //generare la cella della griglia
            const cell = generateGridCell(curNumber,diffLiv) //cella é elemento html, quindi posso aggiungergli event listener
            cell.addEventListener("click",handleCellClick)

            //debug
            //console.log(cell);
            //inserisco le celle nell'html
            gridElem.append(cell);
        } 
    } else 
        //se il livello scelto é due creo una griglia con 81 celle
        if(diffLiv === 2) {
        //prendo l'elemento con la classe grid per poter aggiungere le celle
        const gridElem = document.querySelector(".grid");
        //svuoto la griglia
        gridElem.innerHTML = "";
        //ciclo per creare 81 celle
        for (let i = 0; i < 81; i++) {
            //il numero corrente é l'indice piú uno cosi da scrivere i numeri da 1 a 81
            const curNumber = i + 1;
            //generare la cella della griglia
            const cell = generateGridCell(curNumber,diffLiv) //cella é elemento html, quindi posso aggiungergli event listener
            cell.addEventListener("click",handleCellClick)

            //debug
            //console.log(cell);
            //inserisco le celle nell'html
            gridElem.append(cell);
        } 
    }else 
        //se il livello scelto é tre creo una griglia con 49 celle
        if(diffLiv === 3){
        //prendo l'elemento con la classe grid per poter aggiungere le celle
        const gridElem = document.querySelector(".grid");
        //svuoto la griglia
        gridElem.innerHTML = "";
        //ciclo per creare 49 celle
        for (let i = 0; i < 49; i++) {
            //il numero corrente é l'indice piú uno cosi da scrivere i numeri da 1 a 49
            const curNumber = i + 1;
            //generare la cella della griglia
            const cell = generateGridCell(curNumber,diffLiv) //cella é elemento html, quindi posso aggiungergli event listener
            cell.addEventListener("click",handleCellClick)

            //debug
            //console.log(cell);
            //inserisco le celle nell'html
            gridElem.append(cell);
        } 
    }
})




//FUNZIONI


/**
 * genera una cella della griglia con un numero all'interno
 * @param {number} innerNumber numero da inserire nella cella
 * @returns {any} elemento html della cella
 */
function generateGridCell(innerNumber,numLiv) {
    const newCell = document.createElement("div");
    if(numLiv === 1){
        newCell.classList.add("cell-10");
    }else if(numLiv === 2){
        newCell.classList.add("cell-9");
    }else if(numLiv === 3){
        newCell.classList.add("cell-7");
    }   
    newCell.innerHTML = innerNumber;
    return newCell;
}


/**
 * funzione che si attiva al click della cella e che aggiunge una classe per lo sfondo blue
 * @returns {any}
 */
function handleCellClick() {
    //aggiungo il colore azzurro
    this.classList.add("azzurro")
    //messaggio in console del numero della cella cliccata
    console.log(this.innerHTML);
} 



/**
 * Genera un numero casuale compreso tra min e max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Genera un array di 16 numeri casuali senza ripetizioni compresi tra 1 e max
 * @param {number} max
 * @returns {Array} 
 */
function generateBombs(max){
    const result = [];
    while(result.length < 16){
        const rndNum = getRndNumber(1,max);
        if(!result.includes(rndNum)){
            result.push(rndNum)
        }
    }
    return result;
}
