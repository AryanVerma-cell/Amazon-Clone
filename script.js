let count = 0;

    function addToCart(item) {
        count++;
        document.getElementById("cart").innerHTML = "Cart: " + count + " items";
        alert(item + " added to cart!");
    }