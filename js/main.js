function QuanLyTuyenSinh() {
    var diemMon1 = parseFloat(document.getElementById('inputDiemMon1').value);
    var diemMon2 = parseFloat(document.getElementById('inputDiemMon2').value);
    var diemMon3 = parseFloat(document.getElementById('inputDiemMon3').value);
    var diemChuan = parseFloat(document.getElementById('inputDiemChuan').value);

    var txtKetQuaQLTS = document.getElementById('txtKetQuaQLTS');

    if (diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0 && diemChuan >= 0) {
        var khuVuc = parseFloat(document.getElementById('selKhuVuc').value);
        var doiTuong = parseFloat(document.getElementById('selDoiTuong').value);

        var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
        var ketQua = '. Chúc mừng bạn đã ĐẬU.';
        if (tongDiem < diemChuan) {
            ketQua = '. Bạn đã RỚT.';
        }

        txtKetQuaQLTS.innerHTML = 'Tổng điểm: ' + tongDiem + ketQua;
        return true;
    } else if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        txtKetQuaQLTS.innerHTML = 'Có ít nhất điểm 1 môn = 0. Bạn đã RỚT.';
        return true;
    }

    txtKetQuaQLTS.innerHTML = 'Thông tin đầu vào không hợp lệ.';
}

function TinhTienDien() {
    var ten = document.getElementById('inputTen').value + ' ';
    var soKw = parseFloat(document.getElementById('inputSoKw').value);

    var txtTongTienDien = document.getElementById('txtTongTienDien');

    if (soKw >= 0) {
        var tongTien = hamTinhTienDien(soKw);
        txtTongTienDien.innerHTML = 'Tổng tiền điện của ông / bà ' + ten + 'là: ' + tongTien + 'VND.';
        return true;
    }

    txtTongTienDien.innerHTML = 'Số Kw không hợp lệ.';
}

function hamTinhTienDien(soKw) {
    var tongTien = 0;

    // 50kw đầu
    if (soKw > 50) {
        soKw = soKw - 50;
        tongTien = tongTien + 50 * 500;
    } else {
        tongTien = tongTien + soKw * 500;
        return tongTien;
    }

    // 50kw kế
    if (soKw > 50) {
        soKw = soKw - 50;
        tongTien = tongTien + 50 * 650;
    } else {
        tongTien = tongTien + soKw * 650;
        return tongTien;
    }

    // 100kw kế
    if (soKw > 100) {
        soKw = soKw - 100;
        tongTien = tongTien + 100 * 850;
    } else {
        tongTien = tongTien + soKw * 850;
        return tongTien;
    }

    // Còn lại
    if (soKw > 150) {
        soKw = soKw - 150;
        tongTien = tongTien + 150 * 1100 + soKw * 1300;;
    } else {
        tongTien = tongTien + soKw * 1100;
    }
    return tongTien;
}

function TinhTienThue() {
    var ten = document.getElementById('inputTen2').value + ' ';
    var tongThuNhap = parseFloat(document.getElementById('inputThuNhap').value);
    var soNguoiPhuThuoc = parseFloat(document.getElementById('inputSoNguoiPhuThuoc').value);

    var txtThue = document.getElementById('txtThue');

    if (tongThuNhap >= 0 && soNguoiPhuThuoc >= 0) {
        var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
        var thue = hamTinhTienThue(thuNhapChiuThue);

        var txtThue = document.getElementById('txtThue');
        txtThue.innerHTML = 'Tiền thuế của ông / bà ' + ten + 'là: ' + thue + 'VND.';
        return true;
    }

    txtThue.innerHTML = 'Thông tin đầu vào không hợp lệ.';
}

function hamTinhTienThue(thuNhapChiuThue) {
    var thue = 0;

    if (thuNhapChiuThue < 0) {
        return thue;
    }

    // Đến 60
    if (thuNhapChiuThue > 60000000) {
        thuNhapChiuThue = thuNhapChiuThue - 60000000;
        thue = thue + 60000000 * 0.05;
    } else {
        thue = thue + thuNhapChiuThue * 0.05;
        return thue;
    }

    // Trên 60 đến 120
    if (thuNhapChiuThue > 60000000) {
        thuNhapChiuThue = thuNhapChiuThue - 60000000;
        thue = thue + 60000000 * 0.1;
    } else {
        thue = thue + thuNhapChiuThue * 0.1;
        return thue;
    }

    // Trên 120 đến 210
    if (thuNhapChiuThue > 90000000) {
        thuNhapChiuThue = thuNhapChiuThue - 90000000;
        thue = thue + 90000000 * 0.15;
    } else {
        thue = thue + thuNhapChiuThue * 0.15;
        return thue;
    }

    // Trên 210 đến 384
    if (thuNhapChiuThue > 174000000) {
        thuNhapChiuThue = thuNhapChiuThue - 174000000;
        thue = thue + 174000000 * 0.2;
    } else {
        thue = thue + thuNhapChiuThue * 0.2;
        return thue;
    }

    // Trên 384 đến 624
    if (thuNhapChiuThue > 240000000) {
        thuNhapChiuThue = thuNhapChiuThue - 240000000;
        thue = thue + 240000000 * 0.25;
    } else {
        thue = thue + thuNhapChiuThue * 0.25;
        return thue;
    }

    // Trên 624
    if (thuNhapChiuThue > 336000000) {
        thuNhapChiuThue = thuNhapChiuThue - 336000000;
        thue = thue + 336000000 * 0.3 + thuNhapChiuThue * 0.35;
    } else {
        thue = thue + thuNhapChiuThue * 0.3;
    }
    return thue;
}

function disableInput() {
    var loaiKH = document.getElementById('selLoaiKH').value;
    var txtTienCap = document.getElementById('txtTienCap');
    if (loaiKH == 'doanhNghiep') {
        document.getElementById("inputSoKetNoi").hidden = false;
    } else {
        document.getElementById("inputSoKetNoi").hidden = true;
    }
}

function TinhTienCap() {
    var txtTienCap = document.getElementById('txtTienCap');
    txtTienCap.innerHTML = '';

    var loaiKH = document.getElementById('selLoaiKH').value;
    if (loaiKH == '') {
        txtTienCap.innerHTML = 'Vui lòng chọn loại khách hàng';
        return true;
    }
    var maKH = document.getElementById('inputMaKH').value + ' ';
    var soKenhCC = parseFloat(document.getElementById('inputSoKenh').value);
    if (soKenhCC >= 0) {
        var tienCap = 0;
        if (loaiKH == 'doanhNghiep') {
            var soKetNoi = parseFloat(document.getElementById('inputSoKetNoi').value);
            if (soKetNoi >= 0) {
                var soKetNoiThem = 0;
                if (soKetNoi > 10) {
                    var soKetNoiThem = soKetNoi - 10;
                }
                tienCap = 15 + 75 + soKetNoiThem * 5 + soKenhCC * 50;
                txtTienCap.innerHTML = 'Tiền cáp của khách hàng có mã: ' + maKH + 'là: ' + tienCap + '$.';
                return true;
            }
            txtTienCap.innerHTML = 'Số kết nối không hợp lệ.';
            return true;
        } else if (loaiKH == 'nhaDan') {
            tienCap = 4.5 + 20.5 + soKenhCC * 7.5;
            txtTienCap.innerHTML = 'Tiền cáp của khách hàng ' + maKH + ' là: ' + tienCap + '$.';
            return true;
        }
    }
    txtTienCap.innerHTML = 'Số kênh cao cấp không hợp lệ.';
}