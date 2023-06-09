/*   let listProducts1 = [
    {
        src: "./image/products/ramen/ramen1.jpg",
        name: "RAMEN Hyogo",
        price: 950,
        type: "RM",
    },
    {
        src: "./image/products/ramen/ramen2.jpg",
        name: "RAMEN Kobe",
        price: 900,
        type: "RM",
    },
    {
        src: "./image/products/ramen/ramen3.jpg",
        name: "RAMEN Osaka",
        price: 750,
        type: "RM",
    },
    {
        src: "./image/products/ramen/ramen4.jpg",
        name: "RAMEN Himeji",
        price: 850,
        type: "RM",
    }, {
        src: "./image/products/ramen/ramen5.jpg",
        name: "RAMEN Hokkaido",
        price: 900,
        type: "RM",
    }, {
        src: "./image/products/ramen/ramen6.jpg",
        name: "RAMEN Kyoto",
        price: 750,
        type: "RM",
    }, {
        src: "./image/products/ramen/ramen7.jpg",
        name: "RAMEN Tokyo",
        price: 850,
        type: "RM",
    }, {
        src: "./image/products/ramen/ramen8.jpg",
        name: "RAMEN Okinawa",
        price: 950,
        type: "RM",
    }, {
        src: "./image/products/ramen/ramen9.jpg",
        name: "RAMEN Nipponbashi",
        price: 1050,
        type: "RM",
    }, {
        src: "./image/products/ramen/ramen10.jpg",
        name: "RAMEN Shinjuku",
        price: 1000,
        type: "RM",
    }, {
        src: "./image/products/udon/udon1.jpg",
        name: "UDON Hyogo",
        price: 860,
        type: "UD",
    },
    {
        src: "./image/products/udon/udon2.jpg",
        name: "UDON Naruto",
        price: 1000,
        type: "UD",
    },
    {
        src: "./image/products/udon/udon3.jpg",
        name: "UDON Sasuke",
        price: 1050,
        type: "UD",
    },
    {
        src: "./image/products/udon/udon4.jpg",
        name: "UDON Kirito",
        price: 800,
        type: "UD",
    },
    {
        src: "./image/products/udon/udon5.jpg",
        name: "UDON Kakashi",
        price: 980,
        type: "UD",
    },
    {
        src: "./image/products/udon/udon6.jpg",
        name: "UDON Luffy",
        price: 960,
        type: "UD",
    },
    {
        src: "./image/products/udon/udon7.jpg",
        name: "UDON Zoro",
        price: 900,
        type: "UD",
    },
    {
        src: "./image/products/udon/udon8.jpg",
        name: "UDON Kaido",
        price: 850,
        type: "UD",
    },
    {
        src: "./image/products/udon/udon9.jpg",
        name: "UDON Bigmom",
        price: 900,
        type: "UD",
    },
    {
        src: "./image/products/udon/udon10.jpg",
        name: "UDON Roger",
        price: 800,
        type: "UD",
    },
    {
        src: "./image/products/sushi/sushi1.jpg",
        name: "SUSHI Hyogo",
        price: 100,
        type: "SUSHI",
    },
    {
        src: "./image/products/sushi/sushi2.jpg",
        name: "SUSHI Osaka",
        price: 100,
        type: "SUSHI",
    },
    {
        src: "./image/products/sushi/sushi3.jpg",
        name: "SUSHI Kobe",
        price: 100,
        type: "SUSHI",
    },
    {
        src: "./image/products/sushi/sushi4.jpg",
        name: "SUSHI Tokyo",
        price: 100,
        type: "SUSHI",
    },
    {
        src: "./image/products/sushi/sushi5.jpg",
        name: "SUSHI Hyogo",
        price: 100,
        type: "SUSHI",
    },
    {
        src: "./image/products/sushi/sushi6.jpg",
        name: "SUSHI Okinawa",
        price: 100,
        type: "SUSHI",
    },
    {
        src: "./image/products/sushi/sushi7.jpg",
        name: "SUSHI Shinjuku",
        price: 100,
        type: "SUSHI",
    },
    {
        src: "./image/products/sushi/sushi8.jpg",
        name: "SUSHI Akashi",
        price: 100,
        type: "SUSHI",
    },
    {
        src: "./image/products/sushi/sushi9.jpg",
        name: "SUSHI Fuji",
        price: 100,
        type: "SUSHI",
    },
    {
        src: "./image/products/sushi/sushi10.jpg",
        name: "SUSHI Himeji",
        price: 100,
        type: "SUSHI",
    },
    {
        src: "./image/products/combo/setsushi1.jpg",
        name: "SETSUSHI Hyogo",
        price: 1200,
        type: "SETSUSHI",
    },
    {
        src: "./image/products/combo/setsushi2.jpg",
        name: "SETSUSHI Kobe",
        price: 1100,
        type: "SETSUSHI",
    },
    {
        src: "./image/products/combo/setsushi3.jpg",
        name: "SETSUSHI Osaka",
        price: 1000,
        type: "SETSUSHI",
    },
    {
        src: "./image/products/combo/setsushi4.jpg",
        name: "SETSUSHI Kyoto",
        price: 1400,
        type: "SETSUSHI",
    },
    {
        src: "./image/products/combo/setsushi5.jpg",
        name: "SETSUSHI Nagoya",
        price: 1300,
        type: "SETSUSHI",
    },
    {
        src: "./image/products/combo/setsushi6.jpg",
        name: "SETSUSHI Aichi",
        price: 1100,
        type: "SETSUSHI",
    },
    {
        src: "./image/products/combo/setsushi7.jpg",
        name: "SETSUSHI Fukuoka",
        price: 1000,
        type: "SETSUSHI",
    },
    {
        src: "./image/products/combo/setsushi8.jpg",
        name: "SETSUSHI Naruto",
        price: 1200,
        type: "SETSUSHI",
    },
    {
        src: "./image/products/combo/setsushi9.jpg",
        name: "SETSUSHI Hokkaido",
        price: 1100,
        type: "SETSUSHI",
    },
    {
        src: "./image/products/combo/setsushi10.jpg",
        name: "SETSUSHI Yamaguchi",
        price: 1300,
        type: "SETSUSHI",
    },
    {
        src: "./image/products/sushi/sushi9.jpg",
        name: "SOBA1",
        price: 100,
        type: "SOBA",
    },
    {
        src: "./image/products/sushi/sushi10.jpg",
        name: "SOBA2",
        price: 100,
        type: "SOBA",
    },
    {
        src: "./image/products/combo/setsushi1.jpg",
        name: "SOBA3",
        price: 1200,
        type: "SOBA",
    },
    {
        src: "./image/products/combo/setsushi2.jpg",
        name: "SOBA4",
        price: 1100,
        type: "SOBA",
    },
    {
        src: "./image/products/combo/setsushi3.jpg",
        name: "SOBA5",
        price: 1000,
        type: "SOBA",
    },
    {
        src: "./image/products/combo/setsushi4.jpg",
        name: "SOBA6",
        price: 1400,
        type: "SOBA",
    },
    {
        src: "./image/products/combo/setsushi5.jpg",
        name: "SOBA7",
        price: 1300,
        type: "SOBA",
    },
    {
        src: "./image/products/combo/setsushi6.jpg",
        name: "SOBA8",
        price: 1100,
        type: "SOBA",
    },
    {
        src: "./image/products/combo/setsushi7.jpg",
        name: "SOBA1",
        price: 1000,
        type: "SOBA",
    },
    {
        src: "./image/products/combo/setsushi8.jpg",
        name: "SOBA2",
        price: 1200,
        type: "SOBA",
    },
    {
        src: "./image/products/sushi/sushi2.jpg",
        name: "TAKOYAKI1",
        price: 100,
        type: "TAKOYAKI",
    },
    {
        src: "./image/products/sushi/sushi3.jpg",
        name: "TAKOYAKI2",
        price: 100,
        type: "TAKOYAKI",
    },
    {
        src: "./image/products/combo/setsushi9.jpg",
        name: "TAKOYAKI3",
        price: 1100,
        type: "TAKOYAKI",
    },
    {
        src: "./image/products/combo/setsushi10.jpg",
        name: "TAKOYAKI4",
        price: 1300,
        type: "TAKOYAKI",
    },
    {
        src: "./image/products/combo/setsushi8.jpg",
        name: "TAKOYAKI5",
        price: 1200,
        type: "TAKOYAKI",
    },
    {
        src: "./image/products/combo/setsushi9.jpg",
        name: "TAKOYAKI6",
        price: 1100,
        type: "TAKOYAKI",
    },
    {
        src: "./image/products/udon/udon8.jpg",
        name: "TAKOYAKI7",
        price: 850,
        type: "TAKOYAKI",
    },
    {
        src: "./image/products/udon/udon9.jpg",
        name: "TAKOYAKI8",
        price: 900,
        type: "TAKOYAKI",
    },
    {
        src: "./image/products/udon/udon10.jpg",
        name: "TAKOYAKI9",
        price: 800,
        type: "TAKOYAKI",
    },
    {
        src: "./image/products/sushi/sushi1.jpg",
        name: "TAKOYAKI10",
        price: 100,
        type: "TAKOYAKI",
    },
    {
        src: "./image/products/yakiniku/yakiniku1.jpg",
        name: "Thịt nướng thượng hạng loại 1",
        price: 100,
        type: "YAKINIKU",
    },
    {
        src: "./image/products/yakiniku/yakiniku2.jpg",
        name: "Thịt bò Kobe",
        price: 100,
        type: "YAKINIKU",
    },
    {
        src: "./image/products/yakiniku/yakiniku3.jpg",
        name: "Thịt bò Osaka",
        price: 100,
        type: "YAKINIKU",
    },
    {
        src: "./image/products/yakiniku/yakiniku4.jpg",
        name: "Thịt bò Hyogo",
        price: 100,
        type: "YAKINIKU",
    },
    {
        src: "./image/products/yakiniku/yakiniku5.jpg",
        name: "Thịt bò thượng hạng Tokyo",
        price: 100,
        type: "YAKINIKU",
    },
    {
        src: "./image/products/yakiniku/yakiniku6.jpg",
        name: "Thịt bò thượng hạng Hokkaido",
        price: 100,
        type: "YAKINIKU",
    },
    {
        src: "./image/products/yakiniku/yakiniku7.jpg",
        name: "Thịt bò thượng hạng Wagyu",
        price: 100,
        type: "YAKINIKU",
    },
    {
        src: "./image/products/yakiniku/yakiniku8.jpg",
        name: "Thịt thượng hạng Kyoto",
        price: 1200,
        type: "YAKINIKU",
    },
    {
        src: "./image/products/yakiniku/yakiniku9.jpg",
        name: "Thịt bò thượng hạng loại 3",
        price: 1100,
        type: "YAKINIKU",
    },
    {
        src: "./image/products/yakiniku/yakiniku10.jpg",
        name: "Thịt nướng thượng hạng loại 1",
        price: 1000,
        type: "YAKINIKU",
    },
    {
        src: "./image/products/combo/setsushi4.jpg",
        name: "SASHIMI1",
        price: 1400,
        type: "SASHIMI",
    },
    {
        src: "./image/products/combo/setsushi5.jpg",
        name: "SASHIMI2",
        price: 1300,
        type: "SASHIMI",
    },
    {
        src: "./image/products/combo/setsushi6.jpg",
        name: "SASHIMI3",
        price: 1100,
        type: "SASHIMI",
    },
    {
        src: "./image/products/combo/setsushi7.jpg",
        name: "SASHIMI4",
        price: 1000,
        type: "SASHIMI",
    },
    {
        src: "./image/products/combo/setsushi8.jpg",
        name: "SASHIMI5",
        price: 1200,
        type: "SASHIMI",
    },
    {
        src: "./image/products/combo/setsushi9.jpg",
        name: "SASHIMI6",
        price: 1100,
        type: "SASHIMI",
    },
    {
        src: "./image/products/combo/setsushi10.jpg",
        name: "SASHIMI7",
        price: 1300,
        type: "SASHIMI",
    },
    {
        src: "./image/products/sushi/sushi9.jpg",
        name: "SASHIMI8",
        price: 100,
        type: "SASHIMI",
    },
    {
        src: "./image/products/sushi/sushi10.jpg",
        name: "SASHIMI9",
        price: 100,
        type: "SASHIMI",
    },
    {
        src: "./image/products/combo/setsushi1.jpg",
        name: "SASHIMI10",
        price: 1200,
        type: "SASHIMI",
    },
    {
        src: "./image/products/tenpura/tenpura1.jpg",
        name: "Tenpura Hyogo",
        price: 1100,
        type: "TENPURA",
    },
    {
        src: "./image/products/tenpura/tenpura2.jpg",
        name: "Tenpura Kobe",
        price: 1000,
        type: "TENPURA",
    },
    {
        src: "./image/products/tenpura/tenpura3.jpg",
        name: "Tenpura Osaka",
        price: 1400,
        type: "TENPURA",
    },
    {
        src: "./image/products/tenpura/tenpura4.jpg",
        name: "Tenpura Kyoto",
        price: 1300,
        type: "TENPURA",
    },
    {
        src: "./image/products/tenpura/tenpura5.jpg",
        name: "Tenpura Tokyo",
        price: 1100,
        type: "TENPURA",
    },
    {
        src: "./image/products/tenpura/tenpura6.jpg",
        name: "Tenpura Hokkaido",
        price: 1000,
        type: "TENPURA",
    },
    {
        src: "./image/products/tenpura/tenpura7.jpg",
        name: "Tenpura Himeji",
        price: 1200,
        type: "TENPURA",
    },
    {
        src: "./image/products/tenpura/tenpura8.jpg",
        name: "Tenpura Luxury",
        price: 1100,
        type: "TENPURA",
    },
    {
        src: "./image/products/tenpura/tenpura9.jpg",
        name: "Tenpura hoàn hảo",
        price: 1300,
        type: "TENPURA",
    },
    {
        src: "./image/products/tenpura/tenpura10.jpg",
        name: "Tenpura thượng hạng",
        price: 1200,
        type: "TENPURA",
    },
    {
        src: "./image/products/drink/drink1.jpg",
        name: "Nước cam vắt",
        price: 1100,
        type: "DRINK",
    },
    {
        src: "./image/products/drink/drink2.jpg",
        name: "Rượu Nhật Bản",
        price: 1000,
        type: "DRINK",
    },
    {
        src: "./image/products/drink/drink3.jpg",
        name: "Rượu Hikibi",
        price: 1400,
        type: "DRINK",
    },
    {
        src: "./image/products/drink/drink4.jpg",
        name: "Nước hoa quả",
        price: 1300,
        type: "DRINK",
    },
    {
        src: "./image/products/drink/drink5.jpg",
        name: "BEER Tươi",
        price: 1100,
        type: "DRINK",
    },
    {
        src: "./image/products/drink/drink6.jpg",
        name: "BEER Asahi",
        price: 1000,
        type: "DRINK",
    },
] */

/*  function uuid() {
    return new Date().getMilliseconds() + Math.floor(Math.random() * 9999999999999);
}
for (let i = 0; i < listProducts1.length; i++) {
    listProducts1[i].quatity = 0;
    listProducts1[i].id = uuid();
}
localStorage.setItem("listProducts1", JSON.stringify(listProducts1)) 
 */
if (checkLogin()) {
    document.getElementsByClassName("logout")[0].style.display = "block";
}
function checkLogout() {
    let confirmLogout = confirm("bạn có muốn thoát không?");
    if (confirmLogout) {
        localStorage.removeItem("checkLogin");
        document.getElementsByClassName("logout")[0].style.display = "none";
        document.getElementById("totalCountProducts").innerHTML = 0;
    }
}
//function check xem đã đăng nhập hay chưa
function checkLogin() {
    let getIsLogin = localStorage.getItem("checkLogin");
    if (getIsLogin == null) {
        return false;
    } else {
        return true;
    }
}
let listProducts = JSON.parse(localStorage.getItem("listProducts"));

function myAll() {
    window.location.reload();
}
// function hiển thị sản phẩm  
//function render all list page

let currentPage = 1;  //trang hiện tại
let totalItemPage = 6; // tổng số item trên 1 page
let start = (currentPage - 1) * totalItemPage;
let end = currentPage * totalItemPage;
let filltering = false
let fillterArray = [];
function showCurrentPage(page) {
    start = (page - 1) * totalItemPage;
    end = page * totalItemPage;
}
showCurrentPage(currentPage);

function showListPages() {
    let result = "";
    let listProducts = JSON.parse(localStorage.getItem("listProducts"));
    for (let i = 0; i < Math.ceil(listProducts.length / totalItemPage); i++) {
        result +=
            `
                    <li onclick = pageNow(${i}) class = "item-page"> ${i + 1} </li>

                `

    }
    document.getElementById("listPage").innerHTML = result;
    document.getElementsByClassName("item-page")[0].classList.add("active-page");
}
showListPages();

//function tăng giảm page

function increasePage() {
    if (filltering) {
        currentPage++;
        if (currentPage > Math.ceil(fillterArray.length / totalItemPage)) {
            return;
        }
        let listItemPage = document.getElementsByClassName("item-page");
        for (let i = 0; i < listItemPage.length; i++) {
            if (i == currentPage - 1) {
                listItemPage[i].classList.add("active-page");
            } else {
                listItemPage[i].classList.remove("active-page");
            }
        }
        showCurrentPage(currentPage);
        let result = "";
        for (let i = 0; i < fillterArray.length; i++) {
            if (i >= start && i < end) {
                result +=
                    `
                    <div class="product-item">
                        <div class="product-item-img">
                            <img src="${fillterArray[i].src}" alt="">
                        </div>
                        <p class="title-name"> ${fillterArray[i].name} </p>
                        <div class="cart-item">
                            <span> PRICE : ${fillterArray[i].price}</span>
                            <span onclick=addToCart(${fillterArray[i].id}) class="material-symbols-outlined">
                                shopping_cart
                            </span>
                            <span onclick = showComment()  class="material-symbols-outlined">
                                rate_review
                            </span>
                        </div>
                    </div>
                `
            }
        }
        document.getElementById("listproducts").innerHTML = result;
        let scrollBar = document.querySelector(".list-page");
        scrollBar.scrollLeft += 40;
        return;
    }

    if (currentPage >= Math.ceil(listProducts.length / totalItemPage)) {
        return;
    }
    currentPage++;

    let listItemPage = document.getElementsByClassName("item-page");

    for (let i = 0; i < listItemPage.length; i++) {
        console.log(i);
        if (i == currentPage - 1) {
            console.log("da vao", i, currentPage);
            listItemPage[i].classList.add("active-page");
        } else {
            listItemPage[i].classList.remove("active-page");
        }
    }

    showCurrentPage(currentPage);


    let scrollBar = document.querySelector(".list-page");
    if (scrollBar.scrollLeft >= scrollBar.scrollWidth) {
        scrollBar.scrollLeft = scrollBar.scrollWidth;
    } else {
        scrollBar.scrollLeft += 40;
    }
    renderListProducts(listProducts);
}
function decreasePage() {
    if (filltering) {
        currentPage--;
        if (currentPage > Math.ceil(fillterArray.length / totalItemPage)) {
            return;
        }
        let listItemPage = document.getElementsByClassName("item-page");
        for (let i = 0; i < listItemPage.length; i++) {
            if (i == currentPage - 1) {
                listItemPage[i].classList.add("active-page");
            } else {
                listItemPage[i].classList.remove("active-page");
            }
        }
        showCurrentPage(currentPage);

        let result = "";
        for (let i = 0; i < fillterArray.length; i++) {
            if (i >= start && i < end) {
                result +=
                    `
                    <div class="product-item">
                        <div class="product-item-img">
                            <img src="${fillterArray[i].src}" alt="">
                        </div>
                        <p class="title-name"> ${fillterArray[i].name} </p>
                        <div class="cart-item">
                            <span> PRICE : ${fillterArray[i].price}</span>
                            <span onclick=addToCart(${fillterArray[i].id}) class="material-symbols-outlined">
                                shopping_cart
                            </span>
                            <span onclick = showComment()  class="material-symbols-outlined">
                                rate_review
                            </span>
                        </div>
                    </div>
                `
            }
        }
        document.getElementById("listproducts").innerHTML = result;

        let scrollBar = document.querySelector(".list-page");
        scrollBar.scrollLeft -= 40;
        return;
    }
    currentPage--;
    if (currentPage == 0) {
        currentPage = 1;
    }
    let listItemPage = document.getElementsByClassName("item-page");
    for (let i = 0; i < listItemPage.length; i++) {
        if (i == currentPage - 1) {
            listItemPage[i].classList.add("active-page");
        } else {
            listItemPage[i].classList.remove("active-page");
        }
    }
    showCurrentPage(currentPage);


    let scrollBar = document.querySelector(".list-page");
    if (scrollBar.scrollLeft <= 0) {
        scrollBar.scrollLeft = 0;
    } else {
        scrollBar.scrollLeft -= 40;
    }
    renderListProducts(listProducts);
}

//function click từng page
function pageNow(pageNow) {
    console.log("1111", pageNow);
    let listItemPage = document.getElementsByClassName("item-page");
    for (let i = 0; i < listItemPage.length; i++) {
        if (i == pageNow) {
            listItemPage[i].classList.add("active-page");
        } else {
            listItemPage[i].classList.remove("active-page");
        }
    }
    showCurrentPage(pageNow + 1);
    renderListProducts(listProducts);
}

function renderListProducts(params) {
    /* let listProducts = JSON.parse(localStorage.getItem("listProducts")); */
    let result = "";
    for (let i = 0; i < params.length; i++) {
        if (i >= start && i < end) {
            result +=
                `
                    <div class="product-item">
                        <div class="product-item-img">
                            <img src="${params[i].src}" alt="">
                        </div>
                        <p class="title-name"> ${params[i].name} </p>
                        <div class="cart-item">
                            <span> PRICE : ${params[i].price}円</span>
                            
                            <span onclick=addToCart(${params[i].id}) class="material-symbols-outlined">
                                shopping_cart
                            </span>
                            <span onclick = showComment()  class="material-symbols-outlined">
                                rate_review
                            </span>
                        </div>
                        <div>    
                            
                        </div>
                    </div>
                `
        }
    }
    document.getElementById("listproducts").innerHTML = result;
    // showListPages();
}
renderListProducts(listProducts);

//function click từng page
// snnananaa

function pageNowFilter(pageNow) {
    let listItemPage = document.getElementsByClassName("item-page");
    for (let i = 0; i < listItemPage.length; i++) {
        if (i == pageNow) {
            listItemPage[i].classList.add("active-page");
        } else {
            listItemPage[i].classList.remove("active-page");
        }
    }
    showCurrentPage(pageNow + 1);
    let result = "";
    for (let i = 0; i < fillterArray.length; i++) {
        if (i >= start && i < end) {
            result +=
                `
                    <div class="product-item">
                        <div class="product-item-img">
                            <img src="${fillterArray[i].src}" alt="">
                        </div>
                        <p class="title-name"> ${fillterArray[i].name} </p>
                        <div class="cart-item">
                            <span> PRICE : ${fillterArray[i].price}</span>
                            <span onclick=addToCart(${fillterArray[i].id}) class="material-symbols-outlined">
                                shopping_cart
                            </span>
                            <span onclick = showComment()  class="material-symbols-outlined">
                                rate_review
                            </span>
                            
                        </div>
                    </div>
                `
        }
    }
    document.getElementById("listproducts").innerHTML = result;
}

function fillterProduct(type) {
    filltering = true;
    fillterArray = [];
    currentPage = 1;
    showCurrentPage(currentPage);
    let listProducts = JSON.parse(localStorage.getItem("listProducts"));
    for (let j in listProducts) {
        if (listProducts[j].type.toUpperCase() == type.toUpperCase()) {
            fillterArray.push(listProducts[j]);
        }
    }
    let result = "";
    for (let i = 0; i < fillterArray.length; i++) {
        if (i >= start && i < end) {
            result +=
                `
                    <div class="product-item">
                        <div class="product-item-img">
                            <img src="${fillterArray[i].src}" alt="">
                        </div>
                        <p class="title-name"> ${fillterArray[i].name} </p>
                        <div class="cart-item">
                            <span> PRICE : ${fillterArray[i].price}円</span>
                            <span onclick=addToCart(${fillterArray[i].id}) class="material-symbols-outlined">
                                shopping_cart
                            </span>
                            <span onclick = showComment()  class="material-symbols-outlined">
                                rate_review
                            </span>
                        </div>
                    </div>
                `
        }
    }
    document.getElementById("listproducts").innerHTML = result;

    // trang

    let resultPage = "";
    for (let i = 0; i < Math.ceil(fillterArray.length / totalItemPage); i++) {
        resultPage +=
            `
                    <li onclick = pageNowFilter(${i}) class = "item-page"> ${i + 1} </li>

                `
    }
    document.getElementById("listPage").innerHTML = resultPage;
    console.log(document.getElementsByClassName("item-page"));
    document.getElementsByClassName("item-page")[0].classList.add("active-page");
}



//function mua hàng

function addToCart(idProduct) {
    if (idProduct == undefined) {
        return;
    }
    let checkIsLogin = localStorage.getItem("checkLogin");
    if (checkIsLogin == null) {
        console.log("bạn chưa đăng nhập không thể mua hàng!");
        return;
    }
    let listProducts = JSON.parse(localStorage.getItem("listProducts"));
    let listUser = JSON.parse(localStorage.getItem("listUser"));
    for (let i = 0; i < listUser.length; i++) {
        if (listUser[i].idUser == checkIsLogin) {
            let cartUser = listUser[i].cartUser;
            if (cartUser.length == 0) {
                console.log("111", cartUser);
                for (product of listProducts) {
                    if (product.id == idProduct) {
                        product.quatity = 1;
                        cartUser.push(product);
                        localStorage.setItem('listUser', JSON.stringify(listUser))
                        return
                    }
                }
            } else {
                for (let k in cartUser) {
                    if (cartUser[k].id == idProduct) {
                        cartUser[k].quatity++;
                        localStorage.setItem('listUser', JSON.stringify(listUser))
                        let allIdProducts = [];
                        for (let index = 0; index < listUser[i].cartUser.length; index++) {
                            allIdProducts.push(listUser[i].cartUser[index].id)
                        }
                        document.getElementById("totalCountProducts").innerHTML = [...new Set(allIdProducts)].length;
                        return
                    }
                }

                for (product of listProducts) {
                    if (product.id == idProduct) {
                        product.quatity = 1;
                        cartUser.push(product);
                        localStorage.setItem('listUser', JSON.stringify(listUser))
                        let allIdProducts = [];
                        for (let index = 0; index < listUser[i].cartUser.length; index++) {
                            allIdProducts.push(listUser[i].cartUser[index].id)
                        }
                        document.getElementById("totalCountProducts").innerHTML = [...new Set(allIdProducts)].length;
                        return
                    }
                }
            }

            return;
        }
    }
}
addToCart();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let sideBarImgList = [
    {
        src: "./image/products/sidebar/setudonshushi.jpg",
    },
    {
        src: "./image/products/sidebar/sidebar1.jpg",
    },
    {
        src: "./image/products/sidebar/sidebar2.jpg",
    },
    {
        src: "./image/products/sidebar/sidebar3.jpg",
    },
    {
        src: "./image/products/sidebar/udon.jpg",
    },
]

function initSlideBar() {
    const defaultImg = document.querySelector(".defaultImg");
    const nextImg = document.querySelector(".nextImg");

    defaultImg.src = sideBarImgList[0].src;
    nextImg.src = sideBarImgList[1].src;
}

let current = 0;

async function sideBar() {
    const defaultImg = document.querySelector(".defaultImg");
    const nextImg = document.querySelector(".nextImg");
    const slidebar = document.querySelector(".slidebar");
    defaultImg.src = sideBarImgList[current].src;
    nextImg.src = sideBarImgList[current + 1].src;

    let barItemList = document.querySelectorAll(".bar__item");
    current = current + 1;
    await sleep(3000);
    while (true) {
        let copiedElement = nextImg.cloneNode(true);
        slidebar.appendChild(copiedElement);

        setTimeout(() => {
            setTimeout(() => {
                defaultImg.src = copiedElement.src;
                copiedElement.remove();
            }, 3000);

            copiedElement.classList.add("active");
            for (let i in barItemList) {
                if (i == 'entries') {
                    break
                }
                if (i == current) {
                    barItemList[i].classList.add('active');
                } else {
                    barItemList[i].classList.remove('active');
                }
            }
        }, 3000);

        await sleep(3000)

        if (current == sideBarImgList.length - 1) {
            current = 0;
        } else {
            current = current + 1;
        }

        nextImg.src = sideBarImgList[current].src;
    }
}


sideBar();



// Hàm tìm kiếm sản phẩm theo tên
function searchProductByName() {
    let listProducts = JSON.parse(localStorage.getItem("listProducts"));
    let genreList = document.querySelector(".searchItem").value;
    let foundProducts = [];
    for (let i = 0; i < listProducts.length; i++) {
        if (listProducts[i].name.toUpperCase().indexOf(genreList.toUpperCase()) != -1) {
            foundProducts.push(listProducts[i]);
        }
    }
    renderListProducts(foundProducts);

    currentPage = 1;
    let resultPage = "";
    for (let i = 0; i < Math.ceil(foundProducts.length / totalItemPage); i++) {
        resultPage +=
            `
                    <li onclick = pageNowFilter(${i}) class = "item-page"> ${i + 1} </li>
                    
            `
    }
    document.getElementById("listPage").innerHTML = resultPage;
    console.log(document.getElementsByClassName("item-page"));
    document.getElementsByClassName("item-page")[0].classList.add("active-page");
}

/* function searchProductByName() {
    let listProducts = JSON.parse(localStorage.getItem("listProducts"));
    let genreList = document.querySelector(".searchItem").value;
    let foundProducts = listProducts.filter(product => product.name.toUpperCase().indexOf(genreList.toUpperCase()) !== -1);

    renderListProducts(foundProducts);

    currentPage = 1;
    let resultPage = "";
    for (let i = 0; i < Math.ceil(foundProducts.length / totalItemPage); i++) {
        resultPage += `
            <li onclick="pageNowFilter(${i})" class="item-page">${i + 1}</li>
        `;
    }
    document.getElementById("listPage").innerHTML = resultPage;

    let itemPages = document.getElementsByClassName("item-page");
    if (itemPages.length > 0) {
        itemPages[0].classList.add("active-page");
    }
    
} */

function showComment() {
    window.location.href = "../html/review.html"
}

function showAllMenu() {
    document.querySelector(".leftMenu").classList.toggle("showMenu");
}