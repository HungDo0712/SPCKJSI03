const getProductlist =() => {
    fetch("https://6534d05ae1b6f4c59046f25a.mockapi.io/DanhMucGame").then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res)
    })
    
}
getProductlist();