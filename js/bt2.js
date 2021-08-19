const giaKW50Dau = 500;
const giaKW50_100 = 650;
const giaKW100_200 = 850;
const giaKW200_350 = 1100;
const giatren350 = 1300;

function tinhTienTheoSoKW(soKW, giaKW50Dau, giaKW50_100, giaKW100_200, giaKW200_350, giatren350) {
    var tientheoKW = 0;
    if (0 < soKW && soKW <= 50) {
        tientheoKW = soKW * giaKW50Dau;
        console.log(tientheoKW);

    } else if (50 < soKW && soKW <= 100) {
        tientheoKW = 50 * giaKW50Dau + (soKW - 50) * giaKW50_100;
        console.log(tientheoKW);

    } else if (100 < soKW && soKW <= 200) {
        tientheoKW = 50 * giaKW50Dau + 50 * giaKW50_100 + (soKW - 100);
        console.log(tientheoKW);
    } else if (200 < soKW && soKW <= 350) {
        tientheoKW = 50 * giaKW50Dau + 50 * giaKW50_100 + 100 * giaKW100_200 + (soKW - 200) * giaKW200_350;
        console.log(tientheoKW);
    } else if (soKW > 350) {
        tientheoKW = 50 * giaKW50Dau + 50 * giaKW50_100 + 100 * giaKW100_200 + 150 * giaKW200_350 + (soKW - 350) * giatren350;
    }   
    else {
        console.log("vui lòng nhập lại số KW");
    }
    return tientheoKW;
}

function tinhTien() {
    var name = document.getElementById("inputName").value;
    var soKW = parseInt(document.getElementById("inputKW").value);
    var tienDien = tinhTienTheoSoKW(soKW, giaKW50Dau, giaKW50_100, giaKW100_200, giaKW200_350, giatren350);
    document.getElementById("txtTienDien").innerHTML = "Họ Tên:" + name + "Tiền Điện:" + new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 10 }).format(tienDien);
}

document.getElementById("btnTienDien").onclick = tinhTien;