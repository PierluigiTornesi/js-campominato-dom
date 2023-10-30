//ESECUZIONE

//array per le celle cliccate
let clickedCells = [];
//array per le bombe
let bombs = [];
//Variabile che conterrá il messaggio del risultato finale
let message = "";

//genero l'azione sul bottone quando viene premuto
const buttonPlay = document.getElementById("play");
buttonPlay.addEventListener("click", function() {

    //faccio sparire il testo centrale
    document.getElementById("testoCentrale").classList.add("hidden")

    //prendo la scelta del livello di difficoltá
    const sceltaDiff = document.getElementById("livelloDif")
    //prendo il valore del livello
    const diffLiv = parseInt(sceltaDiff.value);
    console.log(diffLiv);
    //verifico il valore del livello
    //se é uno creo una griglia con 100 celle
    if (diffLiv === 1) {
        //genero le bombe
        generateBombs(100);
        console.log("bombe",bombs);
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
        //genero le bombe
        generateBombs(81);
        console.log("bombe",bombs);
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
        //genero le bombe
        generateBombs(49);
        console.log("bombe",bombs);
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
    if(bombs.includes(parseInt(this.innerHTML))){
        this.classList.add("rosso");
        message = `<h2>Hai colpito una bomba dopo ${clickedCells.length} caselle buone </h2>`;
        //restituisco il messaggio
        document.getElementById("message").innerHTML = message;
    }else{
        this.classList.add("azzurro")
        if(!clickedCells.includes(parseInt(this.innerHTML))){
            clickedCells.push(parseInt(this.innerHTML))
        }
    }
} 




/**
 * //funzione che genera un numero random compreso tra min e max
 * @param {number} min numero minimo
 * @param {number} max numero massimo
 * @returns {number} numero casuale
 */
function getRndNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * funzione che crea l'array con i numeri delle bombe, compresi tra 1 e max
 * @param {number} max numero massimo che puó avere una bomba
 * @returns {any} 
 */
function generateBombs(max){
    bombs = [];
    while(bombs.length < 16){
        const rndNum = getRndNumber(1,max);
        if(!bombs.includes(rndNum)){
            bombs.push(rndNum)
        }
    }
}