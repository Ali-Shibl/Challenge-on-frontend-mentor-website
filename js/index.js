$(document).ready(function () {
    let list = document.querySelector('ul')
    let menu = document.querySelector('.menu')
    let menuClose = document.querySelector('.close-menu')
    let imghome = document.querySelector('.img-content>img')
    let listimghome = Array.from(document.querySelectorAll('.img-content .imgs img'))
    let page = document.querySelector('.productOver')
    let pageImg = document.querySelector('.productOver .item img')
    let pageImglist = Array.from(document.querySelectorAll('.productOver .items img'))
    let close = document.querySelector('.close')
    let right = document.querySelector('.right')
    let left = document.querySelector('.left')
    let numImg = 0;

 //loading
    // $('.loader').hide(2000, function () {
    //     $('.loading').hide(400)
    //     $('body').css('overflow', 'auto');
    // });

    for (let i = 0; i < pageImglist.length; i++) {
        pageImglist[i].addEventListener('click', (e) => {
            numImg = pageImglist.indexOf(e.target)
            let srcim = e.target.getAttribute('src')
            pageImg.setAttribute('src', srcim)
        })

    }
    //close
    close.addEventListener('click', () => {
        page.style.display = 'none'
    })
    //right
    right.addEventListener('click', () => {
        numImg++
        if (numImg > pageImglist.length - 1) {
            numImg = 0
        }
        let src = pageImglist[numImg].getAttribute("src")
        pageImg.setAttribute('src', src)
    })
    //left
    left.addEventListener('click', () => {
        numImg--
        if (numImg < 0) {
            numImg = pageImglist.length - 1
        }
        let src = pageImglist[numImg].getAttribute("src")
        pageImg.setAttribute('src', src)
    })
    //img home 
    let srcim = ''
    for (let i = 0; i < listimghome.length; i++) {
        listimghome[i].addEventListener('click', (e) => {
            srcim = e.target.getAttribute('src')
            imghome.setAttribute('src', srcim)
            e.target.setAttribute('class', 'click')
            $('.imgs img').not(e.target).removeAttr('class');


        })
    }

    imghome.addEventListener('click', (e) => {
        let srcim = e.target.getAttribute('src')
        page.style.display = 'flex'
        pageImg.setAttribute('src', srcim)

    })
    

    //sidbar
    menu.addEventListener('click', () => {
        list.style.left = `0px`
    })
    menuClose.addEventListener('click', () => {
        let widthSidbar = list.offsetWidth
        list.style.left = `-${widthSidbar}px`

    })

    ////cart////
    let muns = document.querySelector('.muns')
    let plus = document.querySelector('.plus')
    let num = document.querySelector('.count')
    let iconNum = document.querySelector('.icon-cart span')
    let btncart = document.querySelector('.btn-cart')
    let cartbox = document.querySelector('.box-cart')
    let text = document.querySelector('.text h1')
    let shop = document.querySelector('.shop')
    let cart = document.querySelector('.cart')
    let removebox = document.querySelector('.cart div button')

    shop.addEventListener('click', () => {
        cart.style.display = 'block'

    })
    removebox.addEventListener('click', () => {
        cart.style.display = 'none'
        document.querySelector('.box-cart section').innerHTML= ''
        window.alert('done')
        document.querySelector('.box-cart ').innerHTML='Your cart is empty.'
        iconNum.innerHTML =0
    })
    plus.addEventListener('click', () => {
        num.innerHTML = num.value++
    })
    muns.addEventListener('click', () => {
        num.innerHTML = num.value--
    })


    //cart add
    let catron = ``
    btncart.addEventListener('click', () => {
        
        let src = $('.img-content>img').attr('src');
        catron = `
            <section>
             <img src="${src}" alt="">
             <p> ${text.innerHTML} <br>  $125.00x${num.value}  <span>$${125.00 * num.value}.00</span></p> 
             <svg  width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </section>  `

        cartbox.innerHTML = catron
        iconNum.innerHTML = num.value
        document.querySelector('.cart div button').style.display = 'block'

    })

});