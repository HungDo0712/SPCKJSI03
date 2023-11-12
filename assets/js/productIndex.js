//Most Played
let Productlist1 = [];


const getProductlist1 =() => {
    fetch("https://6534d05ae1b6f4c59046f25a.mockapi.io/DanhMucGame?page=1&limit=8").then((res) => {
        return res.json()
    }).then((res) => {
        Productlist1 = res;
        renderProductList1();
    })
    
}

const productTemplate1 = document.getElementById('product-item2');
const wrapperElm1 = document.getElementById('wrapper-products2');

const renderProductList1 = () => {
    Productlist1.forEach((product) => {
        let productItem = productTemplate1.content.cloneNode(true);
        productItem.getElementById('product-avt1').src = product.avatar;
        
        let genreText = "";
        product.genre.forEach((item) => {
            genreText = genreText + item + ",";
        })
        productItem.getElementById('product-genre1').textContent = genreText.slice(0, -1);
        productItem.getElementById('product-name1').textContent = product.name;
        productItem.getElementById('product-detail3').href = "./product-details.html?productId=" + product.id;
        productItem.getElementById('product-detail4').href = "./product-details.html?productId=" + product.id;
        wrapperElm1.appendChild(productItem);
    })
   
}
getProductlist1();