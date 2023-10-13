function cart() {

    const ul = document.getElementById('cart_list')
    const itemsCart = JSON.parse(localStorage.getItem('cart')) || []

    for (const product of itemsCart) {
        const li = document.createElement('li')
        li.classList.add('section__li--cart')
        li.innerHTML += `
        <img src=${product.image}>
        <div>
        <h1>${product.name}
        </h1>
        <h1>${product.price}.00</h1>
        <p>${product.size}</p>
        </div>
        <div>
        <di>
        <button>-</button>
        </di>
        </div>

        `

    }


}
export default cart