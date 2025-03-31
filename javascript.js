const aRef = document.getElementById("a");
const bRef = document.getElementById("b");
const cRef = document.getElementById("c");

const bigRef = document.getElementById("item1");
const medRef = document.getElementById("item2");
const smallRef = document.getElementById("item3");

const btnRef = document.getElementById("start");
const resetRef = document.getElementById("reset");

disableReset();

async function hanoi(n, from, free, dest){
    if(n === 0){
        return;
    }
    else{
        await hanoi(n - 1, from, dest, free);
        await delay(1000);
        moveDiv(n, dest);
        await hanoi(n - 1, free, from, dest);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function moveDiv(num, target){
    let div = document.getElementById(`item${num}`)
    let t = document.getElementById(target);

    t.prepend(div);
}

btnRef.addEventListener("click", () => {
    btnRef.disabled = true;
    btnRef.style.pointerEvents = "none";
    startHanoi();
})

async function startHanoi(){
    disableStart();
    await hanoi(3, "a", "b", "c");
    enableReset();
}

resetRef.addEventListener("click", () => {
    reset();
    enableStart();
    disableReset();
})

function reset(){
    for(let i = 1; i <= 3; i++){
        let div = document.getElementById(`item${i}`)
        aRef.append(div);
    }
}

function disableReset(){
    resetRef.disabled = true;
    resetRef.style.pointerEvents = "none";
}

function enableReset(){
    resetRef.disabled = false;
    resetRef.style.pointerEvents = "auto";
}

function enableStart(){
    btnRef.disabled = false;
    btnRef.style.pointerEvents = "auto";
}

function disableStart(){
    resetRef.disabled = true;
    btnRef.style.pointerEvents = "none";
}
