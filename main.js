/*  ---> Bài Tập 1 <----
 * * Đầu vào
 * - lương 1 ngày, number;
 * - số ngày làm, number;
 *
 * * Xử lý
 * - tong = Luong1Ngay * soNgayLam;
 *
 * * Đầu ra
 * - Dom tới thẻ div#divResult để hiển thị nội dung kết quả;
 */

var btnKetQua = document.getElementById("btnKetQua");
btnKetQua.onclick = function () {
  var Luong1Ngay = document.getElementById("Luong1Ngay").value;
  var soNgayLam = document.getElementById("soNgayLam").value;

  var tong = Luong1Ngay * soNgayLam;

  var ketQua = "Tổng là: " + tong;
  document.getElementById("divResult").innerHTML = ketQua;
};

// -------> Bài Tập 2 <------
/**
 ** Đầu vào
 * - input luôn là string;
 * - Kết quả = 0;
 *
 * * Xử lý
 * - Chuyển kiểu dữ liệu string => number;
 * - tính tổng 5 giá trị lại và / cho 5;
 *
 * - Đầu ra
 * - Dom tới thẻ div#divResult2 để hiện thị nội dung kết quả
 */

var btnHienThi = document.getElementById("btnHienThi");
btnHienThi.onclick = function () {
  var number3 = document.getElementById("number3").value * 1;
  var number4 = document.getElementById("number4").value * 1;
  var number5 = document.getElementById("number5").value * 1;
  var number6 = document.getElementById("number6").value * 1;
  var number7 = document.getElementById("number7").value * 1;

  var result = number3 + number4 + number5 + number6 + number7;
  var result = result / 5;

  var result = "Tổng là: " + result;
  document.getElementById("divResult2").innerHTML = result;
};

// ------> Bài tập 3 <-------
/**
 * * Đầu vào
 * - giá USD 23.500;
 * - người dùng nhập vào;
 * - Kết quả = 0
 *
 * * xử lí
 *
 * - lấy giá trị của người dùng nhập vào * giá USD 23.500;
 *
 * * Đầu ra
 * - Dom tới thẻ div#moneyChange để hiện thị nội dung kết quả
 */

var btnQuyDoiTien = document.getElementById("btnQuyDoiTien");
btnQuyDoiTien.onclick = function () {
  var inputUser = document.getElementById("inputUser").value;

  var result = inputUser * 23500;

  var result = "Tổng là: " + result;
  document.getElementById("moneyChange").innerHTML = result.toLocaleString();
};

// ----------> Bài tập 4 <----------
/**
 *  * Đầu vào
 *  - Chiều dài;
 *  - Chiều rộng;
 *  - Chu vi = 0;
 *  - Diện tích = 0;
 *
 *
 *  * Xử lý
 *  - chuyển kiểu dữ liệu string => number
 *  - Diện tích = chiều dài * chiều rộng;
 *  - Chu vi = (chiều dài + chiều rộng) * 2;
 *
 *  * Đầu ra
 *  - Dom tới thẻ div#tinh để hiện thị nội dung kết quả
 *
 */

var btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var ketQua = "";

  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuDai * chieuRong;

  var ketQua = "Chu vi: " + chuVi + " ; Diện tích: " + dienTich;

  var tinh = (document.getElementById("tinh").innerHTML = ketQua);
};

//---------> Bài tập 5 <------------
/**
 *  * Đầu vào
 *  - Dom tới so
 *
 *
 *  * Xử lý
 *  - tạo biến hangChuc / 10
 *  - tạo biến hàng  đơn vị % 10
 *
 *  * Đầu ra
 *  -
 */

document.getElementById("btnTinhTong").onclick = function () {
  var so = document.getElementById("so").value;

  var hangChuc = Math.floor(so / 10);
  var hangDonVi = so % 10;

  var tongKySo = hangChuc + hangDonVi;
  var tongKySo = "Tính tổng: " + tongKySo;

  var tongKySo = (document.getElementById("tongKySo").innerHTML = tongKySo);
};
