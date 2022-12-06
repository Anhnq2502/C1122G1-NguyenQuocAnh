window.onload = function () {
    getNumberList()
}

function getNumberList() {
    let numberList = document.querySelectorAll(".con_so");
    getNumberFromList(numberList)
}

function getNumberFromList(numberList) {
    for (let i = 0; i < numberList.length; i++) {
        numberList[i].addEventListener("click", function (e) {
            let numberValue = e.target.innerText;
            printNumberToScreen(numberValue)
        })
    }
}

function printNumberToScreen(number) {
    let numberClicked = document.getElementById("gia_tri_xuat")
    numberClicked.innerHTML = numberClicked.innerText + number;

}


function executeOperator() {
    let numberClicked = document.getElementById("gia_tri_xuat");
    let result = eval(numberClicked.innerText)
    numberClicked.innerText = result
    printResultToOldValue(result)
}

function printResultToOldValue(result) {
    let oldValue = document.getElementById("gia_tri_cu");
    oldValue.innerText = result
}

function deleteAll() {
    document.getElementById("gia_tri_xuat").innerText = "";
    document.getElementById("gia_tri_cu").innerText = "";
}

function deleteOneElement() {
    let valueCurrent = document.getElementById("gia_tri_xuat");
    let newResult = valueCurrent.innerText.slice(0, -1)
    valueCurrent.innerText = newResult;

}