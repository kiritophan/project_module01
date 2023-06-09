// hàm convert tiền tệ
const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
// console.log('Dollars: ' + USDollar.format(price)); // Dollars: $21,450.00
// console.log('Việt Nam đồng: ' + VND.format(price)); // Việt Nam đồng: 21.450 ₫

// function show cart

function showCartUser() {
    //lấy ra id khi login
    let idLogin = localStorage.getItem("checkLogin");
    //lấy listUser ra
    let listUsers = JSON.parse(localStorage.getItem("listUser"));
    for (let i = 0; i < listUsers.length; i++) {
        if (listUsers[i].idUser == idLogin) {
            //xuất ra giỏ hàng 
            let result = [];
            for (let j = 0; j < listUsers[i].cartUser.length; j++) {
                result +=
                    `
                        <tr>
                            <td>${j + 1}</td>
                            <td><img src=".${listUsers[i].cartUser[j].src}" alt=""> </td>
                            <td>${listUsers[i].cartUser[j].name} </td>
                            <td>${VND.format(listUsers[i].cartUser[j].price)}</td>
                            <td class="quantity">
                                <span onclick = "decrease('${listUsers[i].cartUser[j].id}')" class="material-symbols-outlined">
                                    remove
                                </span>
                                ${listUsers[i].cartUser[j].quatity}
                                <span onclick="increase('${listUsers[i].cartUser[j].id}')" class="material-symbols-outlined">
                                    add
                                </span>
                            </td>
                            <td>
                                ${VND.format(listUsers[i].cartUser[j].price * listUsers[i].cartUser[j].quatity)}
                            </td>
                            <td>
                                <span onclick="deleteProduct('${listUsers[i].cartUser[j].id}')" class="material-symbols-outlined">
                                delete
                                </span>
                            </td>
                        </tr>
                    `
            }

            document.getElementById("render").innerHTML =
                `
                        <tr>
                            <th> STT </th>
                            <th> Ảnh Sản phẩm </th>
                            <th> Tên Sản phẩm </th>
                            <th> Giá </th>
                            <th> Số lượng </th>
                            <th> Tiền </th>
                            <th> Xoá </th>
                        </tr> 
                        ${result}
                       `
            result = "";
        }
    }

}
showCartUser();

// function tăng số lượng sản phẩm 
function increase(idProduct) {
    //console.log(idProduct);
    let listUsers = JSON.parse(localStorage.getItem("listUser"));
    let idLogin = localStorage.getItem("checkLogin");
    for (let i = 0; i < listUsers.length; i++) {
        if (idLogin == listUsers[i].idUser) {
            //lay ra listUsers[i].cartUser
            for (let j = 0; j < listUsers[i].cartUser.length; j++) {
                if (idProduct == listUsers[i].cartUser[j].id) {
                    listUsers[i].cartUser[j].quatity = ++listUsers[i].cartUser[j].quatity;
                    localStorage.setItem("listUser", JSON.stringify(listUsers));
                    showTotalCartProduct();
                    showTotalPriceProduct();
                    showCartUser();
                    return;
                }
            }
        }
    }
}

function decrease(idProduct) {
    //console.log(idProduct);
    let listUsers = JSON.parse(localStorage.getItem("listUser"));
    let idLogin = localStorage.getItem("checkLogin");
    for (let i = 0; i < listUsers.length; i++) {
        if (idLogin == listUsers[i].idUser) {
            //lay ra listUsers[i].cartUser
            for (let j = 0; j < listUsers[i].cartUser.length; j++) {
                if (idProduct == listUsers[i].cartUser[j].id) {
                    listUsers[i].cartUser[j].quatity = --listUsers[i].cartUser[j].quatity;
                    if (listUsers[i].cartUser[j].quatity == 0) {
                        listUsers[i].cartUser.splice(j, 1);
                        localStorage.setItem("listUser", JSON.stringify(listUsers));
                        showTotalCartProduct();
                        showTotalPriceProduct();
                        showCartUser();
                        return;
                    }
                    localStorage.setItem("listUser", JSON.stringify(listUsers));
                    showTotalCartProduct();
                    showTotalPriceProduct();
                    showCartUser();
                    return;
                }
            }
        }
    }

}



//function xóa giỏ hàng

function deleteProduct(idProduct) {
    let listUser = JSON.parse(localStorage.getItem("listUser"));
    let idLogin = localStorage.getItem("checkLogin");
    for (let i = 0; i < listUser.length; i++) {
        if (idLogin == listUser[i].idUser) {
            let user = listUser[i]
            let cartUser = user.cartUser;
            // console.log(cartUser.length)

            for (let j = 0; j < cartUser.length; j++) {
                if (cartUser[j].id == idProduct) {
                    cartUser.splice(j, 1);
                    localStorage.setItem("listUser", JSON.stringify(listUser))
                    showCartUser()
                    return;
                }
            }
        }
    }
}

function showTotalCartProduct() {

    let listUser = JSON.parse(localStorage.getItem("listUser"));
    let idLogin = localStorage.getItem("checkLogin");
    let user = listUser.find((item) => {
        return item.idUser == idLogin
    })

    let cartUser = user.cartUser;

    let total = cartUser.reduce((total, curreValue) => {
        return total += curreValue.quatity;
    }, 0)

    document.querySelector(".totalQuantity").innerHTML = `Total quantity: ${total} items`;
}
showTotalCartProduct()

function showTotalPriceProduct() {

    let listUser = JSON.parse(localStorage.getItem("listUser"));
    let idLogin = localStorage.getItem("checkLogin");
    let user = listUser.find((item) => {
        return item.idUser == idLogin
    })

    let cartUser = user.cartUser;

    let totalPrice = 0;
    
    for (const i in cartUser) {
        totalPrice += cartUser[i].price*cartUser[i].quatity;
    }

    document.querySelector(".totalPrice").innerHTML = `Subtotal : ${VND.format(totalPrice)} `;
}
showTotalPriceProduct()