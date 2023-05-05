function submitOrder() {

    let doughType = "normal";  // By default
    let dough_arr = document.getElementsByName("dough");
    for (let i = 0; i < dough_arr.length; i++) {
        if (dough_arr[i].checked === true) {
            doughType = dough_arr[i].value;
            break;
        }
        if (i === 2 && dough_arr[2].checked === false) {
            alert("You haven't choose a dough type, so by default it's normal.")
        }
    }

    let pizzaSize = "large";  // By default
    let sizes_arr = document.getElementsByName("size");
    for (let i = 0; i < sizes_arr.length; i++) {
        if (sizes_arr[i].checked === true) {
            pizzaSize = sizes_arr[i].value;
            break;
        }
        if (i === 2 && sizes_arr[2].checked === false) {
            alert("You haven't choose a size, so by default it's large.")
        }
    }

    let num_of_toppings = 0;
    let toppings_arr = document.querySelectorAll(".toppings");
    for (let i = 0; i < toppings_arr.length; i++) {
        if (toppings_arr[i].checked === true) {
            num_of_toppings += 1;
        }
    }

    let price = 0;
    if (pizzaSize === "personally") {
        price = 20;
    } else if (pizzaSize === "large") {
        price = 35;
    } else if (pizzaSize === "extra large") {
        price = 45;
    }

    price += num_of_toppings * 3;
    alert(
        "Your order: \nPizza Size -> "+pizzaSize+",\n"+"Type of the Dough -> "+doughType+",\n"+
        "And the umber of toppings that you choose -> "+num_of_toppings+".\n\n"+"For payment -> "+price+"."
    );

}