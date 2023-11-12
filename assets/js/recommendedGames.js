//Recommended Games
let Productlist1 = [];


const getProductlist1 =() => {
    fetch("https://6534d05ae1b6f4c59046f25a.mockapi.io/DanhMucGame?page=1&limit=5").then((res) => {
        return res.json()
    }).then((res) => {
        Productlist1 = res;
        renderProductList1();
    })
    
}

const productTemplate1 = document.getElementById('product-item1');
const wrapperElm1 = document.getElementById('wrapper-products1');

const renderProductList1 = () => {
    Productlist1.forEach((product) => {
        let productItem = productTemplate1.content.cloneNode(true);
        productItem.getElementById('product-img1').src = product.avatar;
        let genreText = "";
        product.genre.forEach((item) => {
            genreText = genreText + item + ",";
        })
        productItem.getElementById('product-genre1').textContent = genreText.slice(0, -1);
        productItem.getElementById('product-detail1').href = "./product-details.html?productId=" + product.id;
        wrapperElm1.appendChild(productItem);
    })
   
}
getProductlist1();