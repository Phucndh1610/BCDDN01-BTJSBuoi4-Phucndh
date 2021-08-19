// Nhà dân
const ND_XLHD = 4.5;
const ND_DVCB = 20.5;
const ND_KCC = 7.5;
// Doanh nghiệp
const DN_XLHD = 15;
const DN_DVCB_10 = 75;
const DN_DVCB_sau10 = 5;
const DN_KCC = 50;


function hienThi() {
    var KH = document.getElementById("selectLoaiKH").value;
    if(KH == "2"){
        document.getElementById("inputSoKetNoi").style ="display: block;" 
    }else {
        document.getElementById("inputSoKetNoi").style ="display: none;" 
    }
}

function chonKH(){
    var KH = document.getElementById("selectLoaiKH").value;
    if(KH == "1"){
        return "Nhà Dân";
    }else if (KH == "2"){
        return "Doanh Nghiệp";
    }else {
        alert("chưa chọn loại khách hàng nào");
    }
}

function tinhTienCapDN(soKN, giaKetNoi10, giaKetNoiTren10){
    var tienDV = 0;

    if (0 < soKN && soKN <= 10) {
        tienDV = giaKetNoi10;
        console.log(tienDV);

    } else if (soKN > 10) {
        tienDV =  giaKetNoi10 + (soKN - 10) * giaKetNoiTren10;
        console.log(tienDV);
    } else {
        console.log("vui lòng nhập lại số kết nối");
    }
    return tienDV;
}

function tinhTienCap(){
    var KH = "";
    KH = chonKH();
    
    var tienCap = 0;
    var maKH = document.getElementById("inputMaKH").value;

    var kenhCaoCap = parseInt(document.getElementById("inputSoKenh").value);
    var soKN = parseInt(document.getElementById("inputSoKetNoi").value);

    switch (KH) {
        case "Nhà Dân":
            tienCap = ND_XLHD + ND_DVCB + (kenhCaoCap * ND_KCC);
            break;
        case "Doanh Nghiệp":
            var phiDVDN = tinhTienCapDN(soKN,DN_DVCB_10,DN_DVCB_sau10);
            tienCap = DN_XLHD + phiDVDN + kenhCaoCap * DN_KCC;
            break;
        default:
            console.log("Loại Khách Hàng Không Hợp Lệ")
    }
    document.getElementById("txtTienCap").innerHTML = "Mã Khách Hàng : "+ maKH + ";  Tiền Cáp: $" + new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(tienCap);
}
document.getElementById("btnTienCap").onclick = tinhTienCap;

