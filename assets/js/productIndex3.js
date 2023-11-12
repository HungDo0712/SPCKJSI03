//Top Caterogies

let Productlist3 = [];


const getProductlist3 =() => {
    fetch("https://6534d05ae1b6f4c59046f25a.mockapi.io/DanhMucGame?page=1&limit=3").then((res) => {
        return res.json()
    }).then((res) => {
        Productlist3 = res;
        renderProductList3();
    })
    
}

const productTemplate3 = document.getElementById('product-item3');
const wrapperElm3 = document.getElementById('wrapper-products3');

const renderProductList3 = () => {
    Productlist3.forEach((product) => {
        let productItem = productTemplate3.content.cloneNode(true);
        productItem.getElementById('product-img3').src = product.avatar;
        let genreText = "";
        product.genre.forEach((item) => {
            genreText = genreText + item + ",";
        })
        productItem.getElementById('product-genre3').textContent = genreText.slice(0, -1);
        productItem.getElementById('product-detail5').href = "./product-details.html?productId=" + product.id;
        wrapperElm3.appendChild(productItem);
    })
   
}
getProductlist3();