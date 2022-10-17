const productData = [
    {
        index: '01',
        name: 'yellow tracksuit',
        image: 'img1.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse eos ratione sit, sunt ipsa enim eaque culpa itaque totam animi libero voluptas tempore temporibus quaerat similique facere voluptatem numquam.'
    },
    {
        index: '02',
        name: 'designer outfit',
        image: 'img2.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse eos ratione sit, sunt ipsa enim eaque culpa itaque totam animi libero voluptas tempore temporibus quaerat similique facere voluptatem numquam.'
    },
    {
        index: '03',
        name: 'chilling mood',
        image: 'img3.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse eos ratione sit, sunt ipsa enim eaque culpa itaque totam animi libero voluptas tempore temporibus quaerat similique facere voluptatem numquam.'
    },
    {
        index: '04',
        name: 'chilling mood',
        image: 'img4.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse eos ratione sit, sunt ipsa enim eaque culpa itaque totam animi libero voluptas tempore temporibus quaerat similique facere voluptatem numquam.'
    },
    {
        index: '05',
        name: 'chilling mood',
        image: 'img5.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse eos ratione sit, sunt ipsa enim eaque culpa itaque totam animi libero voluptas tempore temporibus quaerat similique facere voluptatem numquam.'
    },
    {
        index: '06',
        name: 'chilling mood',
        image: 'img6.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse eos ratione sit, sunt ipsa enim eaque culpa itaque totam animi libero voluptas tempore temporibus quaerat similique facere voluptatem numquam.'
    },
    {
        index: '07',
        name: 'chilling mood',
        image: 'img7.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse eos ratione sit, sunt ipsa enim eaque culpa itaque totam animi libero voluptas tempore temporibus quaerat similique facere voluptatem numquam.'
    },
    {
        index: '08',
        name: 'chilling mood',
        image: 'img8.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse eos ratione sit, sunt ipsa enim eaque culpa itaque totam animi libero voluptas tempore temporibus quaerat similique facere voluptatem numquam.'
    },
    {
        index: '09',
        name: 'chilling mood',
        image: 'img9.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse eos ratione sit, sunt ipsa enim eaque culpa itaque totam animi libero voluptas tempore temporibus quaerat similique facere voluptatem numquam.'
    },
    {
        index: '10',
        name: 'chilling mood',
        image: 'img10.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse eos ratione sit, sunt ipsa enim eaque culpa itaque totam animi libero voluptas tempore temporibus quaerat similique facere voluptatem numquam.'
    },
]

const nxtBtn = document.querySelector('.nxt-btn')
let smImgContainer = document.querySelector('.sm-product-img-container')
let smImg = document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')

let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')

let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')

let currentProduct = 0

nxtBtn.addEventListener('click', () => {
    if(currentProduct >= productData.length - 1){
        currentProduct = 0
    }else{
        currentProduct++
    }
    productIndex.innerHTML = productData[currentProduct].index
    smProductDes.innerHTML = productData[currentProduct].des.slice(0, 80)

    smImgContainer.classList.add('slide')
    productImgContainer.classList.add('slide')
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
    productImgContainer.classList.remove('slide')
    backdropImg.classList.remove('fade')
    productDetail.classList.remove('fade')
},2000)
})




