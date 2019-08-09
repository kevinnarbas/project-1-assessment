/*----- constants -----*/ 


/*----- app's state (variables) -----*/ 
let mainCounter, inp;


/*----- cached element references -----*/ 
const inputEl = document.querySelector('input')
const mainCounterEl = document.getElementById('counter')

/*----- event listeners -----*/ 
document.getElementById('plus').addEventListener('click', addInp)
document.getElementById('minus').addEventListener('click', subInp)

/*----- functions -----*/
init()

function init() {
    inputEl.value = 1;
    mainCounter = 0;
    render();
}

function render() {
    mainCounterEl.textContent = mainCounter;
    inputEl.value = 1;
    if (mainCounter < 0) {
        mainCounterEl.style.color = 'red'
    } else {
        mainCounterEl.style.color = 'black'
    };
}

function addInp() {
    inp = parseInt(inputEl.value)
    mainCounter += inp;
    render();
    console.log(inp)
    console.log(mainCounter)
};

function subInp() {
    inp = parseInt(inputEl.value)
    mainCounter -= inp;
    render();
    console.log(inp)
    console.log(mainCounter)
};