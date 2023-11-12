let localList = JSON.parse(localStorage.getItem('cartList'));

const productTemplate = document.getElementById('local-item');
const wrapperElm = document.getElementById('wrapper-local');
const renderLocalList = () => {
   localList.forEach((product) =>{
      let productItem = productTemplate.content.cloneNode(true);
      productItem.getElementById('local-name').textContent = product.name;
      wrapperElm.appendChild(productItem);
   })
}
renderLocalList();