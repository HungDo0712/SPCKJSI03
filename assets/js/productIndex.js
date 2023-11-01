let Productlist = [];


const getProductlist =() => {
    fetch("https://6534d05ae1b6f4c59046f25a.mockapi.io/Index").then((res) => {
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
        productItem.getElementById('product-img').src = product.img;
        productItem.getElementById('product-price').textContent = product.price;
        let genreText = "";
        product.genre.forEach((item) => {
            genreText = genreText + item + ",";
        })
        productItem.getElementById('product-genre').textContent = genreText.slice(0, -1);
        productItem.getElementById('product-name').textContent = product.name;
        wrapperElm.appendChild(productItem);
    })
   
}
getProductlist();