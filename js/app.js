




smImgContainer.classList.add('slide')
productoImgContainer.classList.add('slide')
backdropImg.classList.add('fade')
productDetail.classList.add('fade')

setTimeout(()=>{
    //Ejecuta después de 500ms
    productName.innerHTML = productData[currentProduct].productName
    productDes.innerHTML = productData[currentProduct].des
    smImg.src = productImg.src = backdropImg.src = 
    `
    img/${productData[currentProduct].image}
    `
},500)

setTimeout(()=>{
    smImgContainer.classList.remove('slide')
    productoImgContainer.classList.remove('slide')
    backdropImg.classList.remove('fade')
    productDetail.classList.remove('fade')
},2000)