function cart() {
    const ul = document.getElementById("cart_list");
    const itemsCart = JSON.parse(localStorage.getItem("cart")) || [];

    for (const product of itemsCart) {
        const li = document.createElement("li");
        li.classList.add("section_li--cart");
        li.innerHTML = `
         <img src="${product.image} class="section__img--cart">
         <div class="section__div--cart">
           <h3 class="section__h3--cart">${product.name}</h3>
           <h4 class="section__h4--cart"> $${product.price}.00</h4>
           <p> ${product.zise}</p>
         
         <div class="section__div--buttonCart">
         <div  class="section__div--modifed">
         <button class="decrement">-</button>
         <h4>${product.quantity}</h4>
         <button class="increment">+</button>
         </div>
         <button class="remove">
         <i class='bx bx-trash-alt' style='color:#ff0000'  ></i>
         </button></div>

         
         </div>
       `;
        ul.appendChild(li);
    }
}


export default cart