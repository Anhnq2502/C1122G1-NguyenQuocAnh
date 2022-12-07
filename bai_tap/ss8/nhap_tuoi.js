function checkAge() {
    let result = document.getElementById("result");
    let Age = parseInt(document.getElementById("Age").value);
    document.getElementById("result").innerHTML = "Kết quả: " + result;
    if (Age < 15) {
        result.innerHTML = `<p>không đủ tuổi vào lớp 10</p>`;
    } else {
        result.innerHTML = `<p>đủ tuổi vào lớp 10</p>`;
    }
}