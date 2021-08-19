
const thue60 = 0.05;
const thue60_120 = 0.1;
const thue120_210 = 0.15;
const thue210_384 = 0.2;
const thue384_624 = 0.25;
const thue624_960 = 0.3;
const thuetren960 = 0.35;

function thuNhapChiuThue(tongThuNhap, nguoiPT) {
    if (tongThuNhap > 0 && tongThuNhap > (4000000 + nguoiPT * 1600000)) {
        var thunhapCT = tongThuNhap - 4000000 - nguoiPT * 1600000;
        return thunhapCT;
    } else {
        alert("Số tiền thu nhập không hợp lệ");
        return 0;
    }
}

function tinhThue() {
    var name = document.getElementById("inputName1").value;
    var tongThuNhap = parseInt(document.getElementById("inputMoney").value);
    var nguoiPT = parseInt(document.getElementById("inputPeople").value);

    var thuNhapCT = thuNhapChiuThue(tongThuNhap, nguoiPT);
    var tienThue = 0;

    if (tongThuNhap <= 60000000) {
        tienThue = thuNhapCT * thue60;
    } else if (tongThuNhap > 60000000 && tongThuNhap <= 120000000) {
        tienThue = thuNhapCT * thue60_120;
    } else if (tongThuNhap > 120000000 && tongThuNhap <= 210000000) {
        tienThue = thuNhapCT * thue120_210;
    } else if (tongThuNhap > 210000000 && tongThuNhap <= 384000000) {
        tienThue = thuNhapCT * thue210_384;
    } else if (tongThuNhap > 384000000 && tongThuNhap <= 624000000) {
        tienThue = thuNhapCT * thue384_624;
    } else if (tongThuNhap > 624000000 && tongThuNhap <= 960000000) {
        tienThue = thuNhapCT * thue624_960;
    } else if (tongThuNhap > 960000000) {
        tienThue = thuNhapCT * thuetren960;
    }
    document.getElementById("txtTienThue").innerHTML = "Tên:" + name + " ; Tiền thuế phải chịu là: " + new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 10 }).format(tienThue);

}
document.getElementById("btnTienThue").onclick = tinhThue;