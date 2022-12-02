const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle ('active');
});

let arr = JSON.parse(localStorage.getItem("sample2"));
let person = {
        cart: [],
        addItemFunction(itemName, itemPrice, itemImage) {
            
        
            
            if (localStorage.getItem("sample2") === null) {
                this.cart.push({item: itemName,price: itemPrice,image: itemImage});
                // this.showCart();
                alert("Item Added to Cart");
                localStorage.setItem("sample2", JSON.stringify(person));
                arr = JSON.parse(localStorage.getItem("sample2"));
            }else{
                arr.cart.push({item: itemName,price: itemPrice,image: itemImage});
                // this.showCart();
                localStorage.setItem("sample2", JSON.stringify(arr));
                alert("Item Added to Cart");
            }
            
        },
        showCart(){
            let itemInCart = "";
            // alert("The following are my items inside the cart");
            let overallCost = 0;
            let sampleNumbering = 0;
            if (localStorage.getItem("sample2") === null) {
                this.cart.forEach(function(cartItems){

                    itemInCart += 
                    `
                    <div class="cartcol1">
                        <img src="images/${cartItems.image}">
                        <p id="desc">${cartItems.item}</p>
                        <p id="price">${cartItems.price}.00 php</p>
                        <button class="cntct-btnpage1">DELETE</button>
                    </div>
                    `;

                    // itemInCart += `<li>Item is ${cartItems.item} and the price is ${cartItems.price}</li>`;
                    overallCost += cartItems.price;
                });
            }else{
                arr.cart.forEach(function(cartItems){
                    itemInCart += 
                    `
                    <div class="cartcol1">
                        <img src="images/${cartItems.image}">
                        <p id="desc">${cartItems.item}</p>
                        <p id="price">${cartItems.price}.00 php</p>
                        <button class="cntct-btnpage1" onclick="person.removeItem(${sampleNumbering});">DELETE</button>
                    </div>
                    `;
                    // itemInCart += `<li>Item is ${cartItems.item} and the price is ${cartItems.price}</li>`;
                    overallCost += cartItems.price;
                    sampleNumbering++;
                });
            }
            document.getElementById("items").innerHTML = itemInCart;
            document.getElementById("total").innerHTML = overallCost;
            // alert(itemInCart);
            // alert(overallCost);

        },
        removeCart(){
            localStorage.removeItem("sample2");
            this.showCart();
        },
        removeItem(itemCount){

            if (localStorage.getItem("sample2") === null) {
                this.cart.splice(itemCount, 1);
                
                alert("Item Removed");
                localStorage.setItem("sample2", JSON.stringify(person));
                arr = JSON.parse(localStorage.getItem("sample2"));
                this.showCart();
            }else{
                arr.cart.splice(itemCount, 1);
                alert("Item Removed");
                localStorage.setItem("sample2", JSON.stringify(arr));
                 this.showCart();
            }


            // arr.cart.splice(itemCount, 1);
            // alert(itemCount);
        }
    };
    person.showCart();