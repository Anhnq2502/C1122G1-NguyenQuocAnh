function checkDay() {
    let result = document.getElementById("result");
    let month = parseInt(document.getElementById("month").value);
    document.getElementById("result").innerHTML = "Kết quả: " + result;
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            result.innerHTML = `<p>Tháng ${month} có 30 ngày</p>`;
            break;
        case 2:
            result.innerHTML = `<p>Tháng ${month} có 28 hoặc 29 ngày</p>`;
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result.innerHTML = `<p>Tháng ${month} có 31 ngày</p>`;
            break;
        default:
            result.innerHTML = `<p>Tháng ${month} không có tháng đó</p>`;
    }
}

