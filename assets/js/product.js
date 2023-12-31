let Productlist = [];


const getProductlist =() => {
    fetch("https://6534d05ae1b6f4c59046f25a.mockapi.io/DanhMucGame").then((res) => {
        return res.json()
    }).then((res) => {
        Productlist = res;
        renderProductList();
    })
    
}
const productTemplate = document.getElementById('product-item');
const wrapperElm = document.getElementById('wrapper-products');


const renderProductList = () => {
    Productlist.forEach((product) => {
        let productItem = productTemplate.content.cloneNode(true);
        productItem.getElementById('product-img').src = product.avatar;
        productItem.getElementById('product-price').textContent = product.Price;
        let genreText = "";
        product.genre.forEach((item) => {
            genreText = genreText + item + ",";
        })
        productItem.getElementById('product-genre').textContent = genreText.slice(0, -1);
        productItem.getElementById('product-name').textContent = product.name;
        productItem.getElementById('product-detail1').href = "./product-details.html?productId=" + product.id;
        productItem.getElementById('product-detail2').href = "./product-details.html?productId=" + product.id;
        wrapperElm.appendChild(productItem);
    })
   
}
getProductlist();