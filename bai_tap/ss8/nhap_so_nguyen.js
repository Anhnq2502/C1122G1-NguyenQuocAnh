function checkNumber() {
    let result = document.getElementById("result");
    let Number = parseInt(document.getElementById("Number").value);
    document.getElementById("result").innerHTML = "Kết quả: " + result;
    if (Number < 0) {
        result.innerHTML = `<p>Bé hơn 0</p>`;
    } else {
        result.innerHTML = `<p>Lớn hơn 0</p>`;
    }
}