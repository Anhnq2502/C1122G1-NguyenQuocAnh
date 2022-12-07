function checkSo() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    if ((a % b) === 0) {
        alert("a chia hết cho b");
    } else {
        alert("a không chia hết cho b");
    }
}