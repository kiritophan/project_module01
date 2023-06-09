//function thu vien
//get danh sach nguoi dung
function getUserList() {
    let userList = JSON.parse(localStorage.getItem("listUser"));
    if (!userList) {
        return []
    }
    return userList
}
// hien thi active
function getTextIsActive(isActive) {
    if (isActive) {
        return "Hoat dong"
    }
    return "Bi khoa"
}

// hien thi active
function getClassIsActive(isActive) {
    if (isActive) {
        return "active"
    }
    return "block"
}

// hien thi chuc vu
function getTextIsAdmin(isAdmin) {
    if (isAdmin) {
        return "Quan tri vien"
    }
    return "Thanh vien"
}


// lay thong tin nguoi dung theo id
function getInforUser(userId) {
    let userList = JSON.parse(localStorage.getItem("listUser"));
    for (let i in userList) {
        if (userList[i].idUser == userId) {
            return userList[i];
        }
    }
    return false
}

// kiem tra nguoi dung da dang nhap hay chua va co phai la admin hay khong
function checkLogion() {
    if (!localStorage.getItem("checkLogin")) {
        window.location.href = "./login.html"
        return
    }
    let userInfor = getInforUser(localStorage.getItem("checkLogin"));
    if (userInfor) {
        if (!userInfor.isAdmin) {
            // window.location.href = "admin.html"
        }
    } else {
        window.location.href = "./login.html"
    }
}

// goi
checkLogion()

// loai sach

/* const typeOfmenu = [
    "Sách Chính trị  pháp luật;",
    "Sách Giáo trình",
    "Sách Khoa học công nghệ  Kinh tế;",
    "Sách Sách thiếu nhi",
    "Sách Văn học nghệ thuật"
]; */

// hien thi nguoi dung
function showUserListToUi() {
    const table = document.getElementById("tableUser");
    let tableContent = `
        <tr>
            <th class="tabe--title">STT</th>
            <th class="tabe--title">User Id</th>
            <th class="tabe--title">User Email</th>
            <th class="tabe--title">Trang Thai</th>
            <th class="tabe--title">Chuc vu</th>
            <th class="tabe--title">Tools</th>
        </tr>
    `;
    let i = 1;
    for (user of getUserList()) {
        tableContent += `
                <td class="tabe--content">${i++}</td>
                <td class="tabe--content">${user.idUser}</td>
                <td class="tabe--content">${user.email}</td>
                <td class="tabe--content status ${getClassIsActive(user.isActive)}">${getTextIsActive(user.isActive)}</td>
                <td class="tabe--content">${getTextIsAdmin(user.isAdmin)}</td>
                <td class="tabe--content">
                    <span onclick="deleteUser(${user.idUser})" class="btn material-symbols-outlined">delete</span>
                    <span onclick="controlStatusBlockUser(${user.idUser})"class="btn ${getClassIsActive(user.isActive)} material-symbols-outlined">block</span>
                </td>
            </tr>
        `
    }
    table.innerHTML = tableContent;
}
showUserListToUi()

// delete user

function deleteUser(userId) {
    let userList = getUserList();
    for (let i in userList) {
        if (userList[i].idUser == userId) {
            userList.splice(i, 1);
            localStorage.setItem("listUser", JSON.stringify(userList)) // save to local
            showUserListToUi();
            return true
        }
    }
    return false
}

function controlStatusBlockUser(userId) {
    let userList = getUserList();
    for (let i in userList) {
        if (userList[i].idUser == userId) {
            userList[i].isActive = !userList[i].isActive;
            localStorage.setItem("listUser", JSON.stringify(userList)) // save to local
            showUserListToUi();
            return true
        }
    }
    return false
}
function getMenuList() {
    let menuList = JSON.parse(localStorage.getItem("listProducts"));
    if (!menuList) {
        return;
    }
    return menuList
}

function addmenuToList(menu) {
    let menuList = getMenuList();
    menuList.push(menu);
    localStorage.setItem("listProducts", JSON.stringify(menuList));
}

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
})
function deletemenu(menuId) {
    const menuList = getMenuList();
    for (let i in menuList) {
        if (menuList[i].id == menuId && confirm("Bạn có muốn xóa không")) {
            menuList.splice(i, 1);
            localStorage.setItem("listProducts", JSON.stringify(menuList)); // save to local
            showmenuListToUi();
            return
        }
    }
}

function showmenuListToUi() {
    let table1 = document.getElementById("tableMenu");
    let tableContent = "";
    let menuList = getMenuList();
    tableContent = `
            <tr>
                <th class="tabe-title">Tên sản phẩm</th>
                <th class="tabe-title">Img</th>
                <th class="tabe-title">Price</th>
                <th class="tabe-title">Type</th>
                <th class="tabe-title">Tools</th>
            </tr>
        `;
    for (menu of menuList) {
        tableContent += `
        <tr>
            <td class="tabe-menu">${menu.name}</td>
            <td class="tabe-menu">
                <img style="height:50px" src="../${menu.src}"  >
            </td>
            <td class="tabe-menu">${VND.format(menu.price)}</td>
            <td class="tabe-menu">${menu.type}</td>
            <td class="tabe-menu">
                <span onclick="deletemenu(${menu.id})" class="btn material-symbols-outlined">delete</span>
                <span onclick="editmenu(${menu.id})" class="btn material-symbols-outlined">edit</span>
            </td>
        </tr>
        `
    }
    table1.innerHTML = tableContent;
}

showmenuListToUi();
let menuList = getMenuList();
function uuid() {
    return new Date().getMilliseconds() + Math.floor(Math.random() * 9999999999999);
}
function hanleResetForm(form) {

}
function editmenu(id) {
    document.getElementById("submit").innerHTML = "SAVE EDIT";
    var menuItem = getMenuList().find((x) => x.id == id);
    let form = document.querySelector("#menuForm");

    form.menuName.value = menuItem.name;;
    form.imag = menuItem.src;
    form.menuPrice.value = menuItem.price;
    form.menuType.value = menuItem.type;
    form.menuId.value = menuItem.id;
}

function checkTypeFile(file) {
    if (file.type.split("/")[0] == "image") {
        return true
    }
    return false
}

function submitForm(event) {
    event.preventDefault(); // vo hieu hoa submit mac dinh

    if (event.target.menuId.value != "") {
        // edit
        let menuList = getMenuList();
        for (let i in menuList) {
            if (Number(menuList[i].id) == Number(event.target.menuId.value)) {
                console.log("da vao day ne")
                menuList[i].name = event.target.menuName.value;
                if (event.target.image.files.length > 0) {
                    menuList[i].src = "image/products/admin/" + event.target.image.files[0].name;
                }
                menuList[i].price = event.target.menuPrice.value;
                menuList[i].type = event.target.menuType.value;

                localStorage.setItem("listProducts", JSON.stringify(menuList)); // save to local
                showmenuListToUi();
                return
            }
        }
    }

    let menuName = event.target.menuName.value;
    let image = event.target.image;
    let menuPrice = event.target.menuPrice.value;
    let menuType = event.target.menuType.value;

    if (!checkTypeFile(image.files[0])) {
        alert("Ban phai chon hinh anh");
        return
    }

    if (Number(menuPrice) / Number(menuPrice) != 1) {
        alert("Gia phai la so");
        return
    }

    let newmenu = {
        id: uuid(),
        name: menuName,
        src: "image/products/admin/" + image.files[0].name,
        price: menuPrice,
        type: menuType
    };

    addmenuToList(newmenu);
    showmenuListToUi();
    event.target.menuName.value = "";
    event.target.image.value = "";
    event.target.menuPrice.value = "";
    event.target.menuType.value = "";
}




//function thu vien
//get danh sach nguoi dung
function getUserList() {
    let userList = JSON.parse(localStorage.getItem("listUser"));
    if (!userList) {
        return []
    }
    return userList
}
// hien thi active
function getTextIsActive(isActive) {
    if (isActive) {
        return "Hoat dong"
    }
    return "Bi khoa"
}

// hien thi active
function getClassIsActive(isActive) {
    if (isActive) {
        return "active"
    }
    return "block"
}

// hien thi chuc vu
function getTextIsAdmin(isAdmin) {
    if (isAdmin) {
        return "Quan tri vien"
    }
    return "Thanh vien"
}


// lay thong tin nguoi dung theo id
function getInforUser(userId) {
    let userList = JSON.parse(localStorage.getItem("listUser"));
    for (let i in userList) {
        if (userList[i].idUser == userId) {
            return userList[i];
        }
    }
    return false
}

// kiem tra nguoi dung da dang nhap hay chua va co phai la admin hay khong


// goi


// loai sach

/* const typeOfmenu = [
    "Sách Chính trị  pháp luật;",
    "Sách Giáo trình",
    "Sách Khoa học công nghệ  Kinh tế;",
    "Sách Sách thiếu nhi",
    "Sách Văn học nghệ thuật"
]; */

// hien thi nguoi dung
function showUserListToUi() {
    const table = document.getElementById("tableUser");
    let tableContent = `
        <tr>
            <th class="tabe--title">STT</th>
            <th class="tabe--title">User Id</th>
            <th class="tabe--title">User Email</th>
            <th class="tabe--title">Trang Thai</th>
            <th class="tabe--title">Chuc vu</th>
            <th class="tabe--title">Tools</th>
        </tr>
    `;
    let i = 1;
    for (user of getUserList()) {
        tableContent += `
                <td class="tabe--content">${i++}</td>
                <td class="tabe--content">${user.idUser}</td>
                <td class="tabe--content">${user.email}</td>
                <td class="tabe--content status ${getClassIsActive(user.isActive)}">${getTextIsActive(user.isActive)}</td>
                <td class="tabe--content">${getTextIsAdmin(user.isAdmin)}</td>
                <td class="tabe--content">
                    <span onclick="deleteUser(${user.idUser})" class="btn material-symbols-outlined">delete</span>
                    <span onclick="controlStatusBlockUser(${user.idUser})"class="btn ${getClassIsActive(user.isActive)} material-symbols-outlined">block</span>
                </td>
            </tr>
        `
    }
    table.innerHTML = tableContent;
}
showUserListToUi()

// delete user

function deleteUser(userId) {
    let userList = getUserList();
    for (let i in userList) {
        if (userList[i].idUser == userId) {
            userList.splice(i, 1);
            localStorage.setItem("listUser", JSON.stringify(userList)) // save to local
            showUserListToUi();
            return true
        }
    }
    return false
}

function controlStatusBlockUser(userId) {
    let userList = getUserList();
    for (let i in userList) {
        if (userList[i].idUser == userId) {
            userList[i].isActive = !userList[i].isActive;
            localStorage.setItem("listUser", JSON.stringify(userList)) // save to local
            showUserListToUi();
            return true
        }
    }
    return false
}
function getMenuList() {
    let menuList = JSON.parse(localStorage.getItem("listProducts"));
    if (!menuList) {
        return;
    }
    return menuList
}

function addmenuToList(menu) {
    console.log("da them sach")
    let menuList = getMenuList();
    menuList.push(menu);
    localStorage.setItem("listProducts", JSON.stringify(menuList));
}

function deletemenu(menuId) {
    const menuList = getMenuList();
    for (let i in menuList) {
        if (menuList[i].id == menuId && confirm("Bạn có muốn xóa không")) {
            menuList.splice(i, 1);
            localStorage.setItem("listProducts", JSON.stringify(menuList)); // save to local
            showmenuListToUi();
            return
        }
    }
}

function showmenuListToUi() {
    let table1 = document.getElementById("tableMenu");
    let tableContent = "";
    let menuList = getMenuList();
    tableContent = `
            <tr>
                <th class="tabe-title">Tên sản phẩm</th>
                <th class="tabe-title">Img</th>
                <th class="tabe-title">Price</th>
                <th class="tabe-title">Type</th>
                <th class="tabe-title">Tools</th>
            </tr>
        `;
    for (menu of menuList) {
        tableContent += `
        <tr>
            <td class="tabe-menu">${menu.name}</td>
            <td class="tabe-menu">
                <img style="height:50px" src="../${menu.src}" >
            </td>
            <td class="tabe-menu">${VND.format(menu.price)}</td>
            <td class="tabe-menu">${menu.type}</td>
            <td class="tabe-menu">
                <span onclick="deletemenu(${menu.id})" class="btn material-symbols-outlined">delete</span>
                <span onclick="editmenu(${menu.id})" class="btn material-symbols-outlined">edit</span>
            </td>
        </tr>
        `
    }
    table1.innerHTML = tableContent;
}

showmenuListToUi();
/* let menuList = getMenuList(); */
function uuid() {
    return new Date().getMilliseconds() + Math.floor(Math.random() * 9999999999999);
}
function hanleResetForm(form) {

}
function editmenu(id) {
    document.getElementById("submit").innerHTML = "SAVE EDIT";
    var menuItem = getMenuList().find((x) => x.id == id);
    let form = document.querySelector("#menuForm");

    form.menuName.value = menuItem.name;;
    form.imag = menuItem.src;
    form.menuPrice.value = menuItem.price;
    form.menuType.value = menuItem.type;
    form.menuId.value = menuItem.id;
}

function checkTypeFile(file) {
    if (file.type.split("/")[0] == "image") {
        return true
    }
    return false
}

function submitForm(event) {
    event.preventDefault(); // vo hieu hoa submit mac dinh

    if (event.target.menuId.value != "") {
        // edit
        let menuList = getMenuList();
        for (let i in menuList) {
            if (Number(menuList[i].id) == Number(event.target.menuId.value)) {
                console.log("da vao day ne")
                menuList[i].name = event.target.menuName.value;
                if (event.target.image.files.length > 0) {
                    menuList[i].src = "image/products/admin/" + event.target.image.files[0].name;
                }
                menuList[i].price = event.target.menuPrice.value;
                menuList[i].type = event.target.menuType.value;

                localStorage.setItem("listProducts", JSON.stringify(menuList)); // save to local
                showmenuListToUi();
                return
            }
        }
    }

    let menuName = event.target.menuName.value;
    let image = event.target.image;
    let menuPrice = event.target.menuPrice.value;
    let menuType = event.target.menuType.value;

    if (!checkTypeFile(image.files[0])) {
        alert("Ban phai chon hinh anh");
        return
    }

    if (Number(menuPrice) / Number(menuPrice) != 1) {
        alert("Gia phai la so");
        return
    }

    let newmenu = {
        id: uuid(),
        name: menuName,
        src: "image/products/admin/" + image.files[0].name,
        price: menuPrice,
        type: menuType
    };

    addmenuToList(newmenu);
    showmenuListToUi();
    event.target.menuName.value = "";
    event.target.image.value = "";
    event.target.menuPrice.value = "";
    event.target.menuType.value = "";
}
