function login() {
  var regTaiKhoan = /^[A-ZÀ-Ỹ][a-zà-ỹ]+(\s[A-ZÀ-Ỹ][a-zà-ỹ]+){1,}$/;
  var regMatKhau = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  var taiKhoan = document.querySelector(".input-login-username").value;
  var matKhau = document.querySelector(".input-login-password").value;
  var valid = true;
  if (!regTaiKhoan.test(taiKhoan)) {
    document.getElementById("tbUser").innerHTML = "Ít nhất 6 ký tự";
    valid = false;
  } else {
    document.getElementById("tbUser").innerHTML = "";
  }
  if (!regMatKhau.test(matKhau)) {
    document.getElementById("tbMa").innerHTML = "Ít nhất 8 (1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt)";
    valid = false;
  } else {
    document.getElementById("tbMa").innerHTML = "";
  }
  if (valid) {
    alert("Đăng nhập thành công!")
  }
}


