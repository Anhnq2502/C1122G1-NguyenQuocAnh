function checkMax() {
    let result = document.getElementById("result");
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);
    document.getElementById("result").innerHTML = "Kết quả: " + result;
    let max;
    max = a;
    result.innerText = "số lớn nhất là: " + max;
    if (max < b) {
        max = b;
        result.innerText = "số lớn nhất là: " + max;
    }
    if (max < c) {
        max = c;
        result.innerText = "số lớn nhất là: " + max;
    }
}
