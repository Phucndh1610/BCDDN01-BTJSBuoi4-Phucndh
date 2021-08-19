function tinhDiem(a, b, c, khuVuc, doiTuong) {
    diem = (a + b + c) + (khuVuc + doiTuong);
    return diem;
}

function soSanh(diem, diemChuan) {
    if (diem >= diemChuan) {
        document.getElementById("txtKetQua").innerHTML = "Bạn đã đậu. Tổng điểm:" + diem;
    } else {
        document.getElementById("txtKetQua").innerHTML = "Bạn đã trượt. Tổng điểm:" + diem;
    }
}

function kiemTra() {
    var diemChuan = parseFloat(document.getElementById("inputDiemChuan").value);
    var khuVuc = parseFloat(document.getElementById("selectKhuVuc").value);
    var doiTuong = parseFloat(document.getElementById("selectDoiTuong").value);
    var diem1 = parseFloat(document.getElementById("inputDiem1").value);
    var diem2 = parseFloat(document.getElementById("inputDiem2").value);
    var diem3 = parseFloat(document.getElementById("inputDiem3").value);

    if (diemChuan > 30) {
        alert("Điểm chuẩn không được nhập quá 30");
    }
    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        document.getElementById("txtKetQua").innerHTML = "Bạn đã trượt do có môn bằng 0";
        return 0;
    }
    if ((diem1 > 10 || diem1 < 0) || (diem2 > 10 || diem2 < 0) || (diem3 > 10 || diem3 < 0)) {
        alert("điểm chỉ nằm trong khoảng từ 0 - 10");
    }
    else {
        var diem = tinhDiem(diem1, diem2, diem3, khuVuc, doiTuong);
        console.log(diem);
        soSanh(diem, diemChuan);
    }

}
document.getElementById("btnKetQua").onclick = kiemTra;