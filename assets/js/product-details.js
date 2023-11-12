let product = {};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("productId");

const getProductDetail = () => {
  fetch(`https://6534d05ae1b6f4c59046f25a.mockapi.io/DanhMucGame/${productId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      product = data;
      displayProduct();
    });
};

const displayProduct = () => {
  document.getElementById("product-img").src = product.avatar;
  document.getElementById("product-name1").textContent = product.name;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById('product-information').textContent = product.information
  document.getElementById('product-information1').textContent = product.information
  document.getElementById("product-price").textContent = `${product.Price}`;
  let genreText = "";
        product.genre.forEach((item) => {
            genreText = genreText + item + ",";
        })
  document.getElementById("product-genre").textContent = genreText.slice(0, -1);
  const addBtn = document.getElementById("add-to-cart");
  addBtn.addEventListener("click", handleAddToCart);
};

// Xu ly khong co san pham dc chon
if (!productId) {
  alert("Khong co san pham nao duoc chon");
  window.location = './shop.html'
} else {
  getProductDetail();
}

const handleAddToCart = (e) => {
    e.preventDefault()
    const cartList = localStorage.getItem('cartList')
    if(cartList){
        const cartListArr = JSON.parse(cartList)
        const index = cartListArr.findIndex((item) => item.id === product.id)
        if(index === -1){
          cartListArr.push(product)
          localStorage.setItem('cartList',JSON.stringify(cartListArr));
          console.log(123);
        }

    }else{
        const cartListArr = [product]
        localStorage.setItem('cartList',JSON.stringify(cartListArr));
    }
    window.location = 'index.html'
}
document.getElementById('qty').addEventListener('submit',handleAddToCart)


