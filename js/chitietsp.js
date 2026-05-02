   // Dữ liệu của sản phẩm
    var products = [
     //bản giới hạn
     //0
         {
                name: "Đồng hồ Casio AQ-800E-3ADF LIMITED",
                maSP:" AQ-800E-3ADF",
                image: "../img/limited/l1.png",
                price: 2094000,
        },
            // 1
        {
                name: "Đồng hồ Casio BABY-G BGA-S290SS-2ADR LIMITED",
                maSP:"BABY-G BGA-S290SS-2ADR",
                image: "../img/limited/L2.png",
                price: 5595000,
        },
            // 2
        {
                name: "Đồng Hồ Casio DW-5040RX-7DR LIMITED",
                maSP:"DW-5040RX-7DR",
                image: "../img/limited/L3.png",
                price: 7526000,
        },
            // 3
        {
                name: "Đồng hồ Casio Baby-G BG-169HRB-7DR LIMITED",
                maSP:"Baby-G BG-169HRB-7DR",
                image: "../img/limited/L4.png",
                price: 4195000,
         },
            // 4 
        {
                name: "Đồng Hồ Casio Baby-G BGD-565TW-5DR LIMITED",
                maSP:"Baby-G BGD-565TW-5DR",
                image: "../img/limited/L5.png",
                price: 4021000,
        },
           // đồng hồ nam
           // 5  
    {
        name:"Đồng hồ Casio Nam MTP-M307D-2BVDF Chính Hãng ",
        maSP:"MTP-M307D-2BVDF",
        image: "../img/NAM/N1.png",
        price: 3767000
    },
    // 6
    {
        name: "Đồng hồ Casio Nam MTP-M306D-2AVDF Chính Hãng ",
        maSP:"MTP-M306D-2AVDF",
        image: "../img/NAM/N2.png",
        price: 3767000
    },
    // 7
    {
        name: "Đồng hồ Casio Nam MTP-M306M-1AVDF Chính Hãng ",
        maSP:"MTP-M306M-1AVDF",
        image: "../img/NAM/N3.png",
        price: 3767000
    },
    // 8 
    {
        name: "Đồng hồ Casio Nam MTP-1303DD-7AVDF Chính Hãng ",
        maSP:"MTP-1303DD-7AVDF",
        image: "../img/NAM/N4.png",
        price: 1503000
    },
    // 9
    {
        name: "Đồng Hồ Casio Nữ LTP-1303LL-7AVDF Chính Hãng ",
        maSP:"LTP-1303LL-7AVDF",
        image: "../img/NAM/N5.png",
        price: 1407000
    },
    // 10
    {
        name: "ĐỒNG HỒ CASIO NỮ LTP-1358L-4A2VDF Chính Hãng ",
        maSP:"LTP-1358L-4A2VDF",
        image: "../img/NU/G1.png",
        price: 2463000
    },
    // 11
    {
        name: "Đồng hồ Casio Nữ LTP-B170G-9BVDF Chính Hãng ",
        maSP:"LTP-B170G-9BVDF",
        image: "../img/NU/G2.png",
        price: 3252000
    },
    // 12 
    {
        name: "Đồng hồ Casio Nữ LTP-B170D-4BVDF Chính Hãng ",
        maSP:"LTP-B170D-4BVDF",
        image: "../img/NU/G3.png",
        price: 2540000
    },
    // 13
    {
        name: "Đồng hồ Casio Nữ LTP-E141L-4A3VDF Chính Hãng ",
        maSP:"LTP-E141L-4A3VDF",
        image: "../img/NU/G4.png",
        price: 2540000
    },
    // 14
    {
        name: "Đồng hồ Casio Nữ LTP-E141L-4A3VDF Chính Hãng ",
        maSP:"LTP-E141L-4A3VDF",
        image: "../img/NU/G5.jpg",
        price: 2352000
    },
    // 15
    {
        name: "Đồng hồ CASIO BABY-G BA-110AH-6ADR Chính Hãng",
        maSP:"BA-110AH-6ADR",
        image: "../img/TRE_EM/1.png",
        price: 4492000
    },
    // 16 
    {
        name: "Đồng hồ Casio Baby-G BGA-290RA-4ADR Chính Hãng",
        maSP:"BGA-290RA-4ADR",
        image: "../img/TRE_EM/2.png",
        price: 4195000
    },
    // 17
    {
        name: "Đồng hồ CASIO BABY-G BA-110AH-4ADR Chính Hãng",
        maSP:"BA-110AH-4ADR",
        image: "../img/TRE_EM/3.png",
        price: 4492000
    },
    // 18
    {
        name: "Đồng hồ Casio BABY-G BGD-565GC-4DR Chính hãng",
        maSP:"BGD-565GC-4DR",
        image: "../img/TRE_EM/4.png",
        price: 3058000
    },
    // 19
    {
        name: "Đồng hồ Casio Nữ A158WA-1DF Chính Hãng",
        maSP:"A158WA-1DF",
        image: "../img/UNI/U1.png",
        price: 1014000
    },
    // 20 
    {
        name: "Đồng hồ Casio Nữ A158WA-1DF Chính Hãng",
        maSP:"A158WA-1DF",
        image: "../img/UNI/U2.png",
        price: 1014000
    },
    // 21
    {
        name: "Đồng hồ Casio Nữ A168WEGB-1BDF Chính Hãng ",
        maSP:"A168WEGB-1BDF",
        image: "../img/UNI/U3.png",
        price: 3034000
    },
    // 22
    {
        name: "Đồng hồ Casio Nữ AQ-230A-1DMQ Chính Hãng",
        maSP:"AQ-230A-1DMQ",
        image: "../img/UNI/U4.png",
        price: 1503000
    },
    // 23
    {
        name: "Đồng hồ Casio Nữ AQ-230A-7DHDF Chính Hãng ",
        maSP:"AQ-230A-7DHDF",
        image: "../img/UNI/U5.png",
        price: 1539000
    },
    //24
     {
        name: "Đồng hồ Casio AQ-230A-1DMQ Chính Hãng",
        maSP:"AQ-230A-1DMQ",
        image: "../img/UNI/U4.png",
        price: 1539000
    }
    
];

    // Lấy tham số sản phẩm từ URL
    var urlParams = new URLSearchParams(window.location.search);
    var productId = parseInt(urlParams.get('product'));

    // Hiển thị thông tin sản phẩm tương ứng
    document.addEventListener('DOMContentLoaded', function () {
        // Gọi hàm displayProduct tại đây
        displayProduct(products[productId]);
    });

        // Hàm hiển thị thông tin sản phẩm
function displayProduct(product) {
    document.getElementById('productName').innerText = product.name;
    document.getElementById('MaSP').innerText="Mã sản phẩm "+product.maSP;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productPrice').innerText = "Giá: " + product.price.toLocaleString('vi-VN') + "đ";
}
// Cập nhật hiển thị số lượng + tính tổng tiền
 function updateQuantityDisplay() {
    document.getElementById('productQuantity').innerText = quantity;
    tongTien(); // mỗi lần thay đổi số lượng thì tính tổng
}

    // Khởi tạo biến số lượng sản phẩm
     var quantity = 1;

    // Hàm giảm số lượng sản phẩm
function decreaseQuantity() {
     if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
        }
}

// Hàm tăng số lượng sản phẩm
function increaseQuantity() {
    quantity++;
    updateQuantityDisplay();
}

// Hàm cập nhật hiển thị số lượng sản phẩm
function updateQuantityDisplay() {
    document.getElementById('productQuantity').innerText = quantity;
    tongTien();
}
 // Hàm lấy giá sản phẩm từ text (loại bỏ chữ và dấu)
function getGia() {
    var priceText = document.getElementById("productPrice").textContent; // ví dụ: "Giá: 1.234.000đ"
    return parseInt(priceText.replace(/[^\d]/g, "")) || 0;
}

// Hàm tính tổng tiền
function tongTien() {
    var total = getGia() * quantity;
    document.getElementById("tongTien").textContent = total.toLocaleString("vi-VN") + " đ";
}


// Khi hiển thị sản phẩm lần đầu, cũng tính tổng
function displayProduct(product) {
    document.getElementById('productName').innerText = product.name;
    document.getElementById('MaSP').innerText = "Mã sản phẩm " + product.maSP;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productPrice').innerText = "Giá: " + product.price.toLocaleString('vi-VN') + "đ";
    tongTien();
}

