let products = [];

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addProduct);

function addProduct() {
    let name = document.getElementById("productName").value;
    let quantity = document.getElementById("productQuantity").value;

    if (name === "" || quantity === "") {
    alert("Please enter both product name and quantity.");
    return;
}

    let product = {
        name: name,
        quantity: Number(quantity)
    };

    products.push(product);

    document.getElementById("productName").value = "";
    document.getElementById("productQuantity").value = "";

    console.log(products);
}

// Displaying products
const displayBtn = document.getElementById("displayBtn");

displayBtn.addEventListener("click", displayProducts);

function displayProducts() {

    let output = document.getElementById("output");

    output.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        output.innerHTML +=
            `<p>${products[i].name} - Quantity: ${products[i].quantity}</p>`;

    }

}

//Searching for  products
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", searchProduct);

function searchProduct() {

    let searchName = document.getElementById("searchInput").value;

    let output = document.getElementById("output");

    output.innerHTML = "";

    let found = false;

    for (let i = 0; i < products.length; i++) {

        if (products[i].name.toLowerCase() === searchName.toLowerCase()) {

            output.innerHTML =
                `<p>${products[i].name} - Quantity: ${products[i].quantity}</p>`;

            found = true;

            break;
        }
    }

    if (!found) {
        output.innerHTML = "<p>Product not found.</p>";
    }

}

//Update product quantity
const updateBtn = document.getElementById("updateBtn");

updateBtn.addEventListener("click", updateProduct);

function updateProduct() {

    let productName = document.getElementById("updateName").value;

    let newQuantity = Number(
        document.getElementById("updateQuantity").value
    );

    let output = document.getElementById("output");

    let found = false;

    for (let i = 0; i < products.length; i++) {

        if (products[i].name.toLowerCase() === productName.toLowerCase()) {

            products[i].quantity = newQuantity;

            output.innerHTML =
                `<p>${products[i].name} updated successfully. New Quantity: ${products[i].quantity}</p>`;
                 found = true;

            break;
        }
    }

    if (!found) {
        output.innerHTML = "<p>Product not found.</p>";
    }

}

//Show out-of-stock products
const outOfStockBtn = document.getElementById("outOfStockBtn");

outOfStockBtn.addEventListener("click", showOutOfStock);

function showOutOfStock() {

    let output = document.getElementById("output");

    output.innerHTML = "";

    let found = false;

    for (let i = 0; i < products.length; i++) {

        if (products[i].quantity === 0) {

            output.innerHTML +=
                `<p>${products[i].name} - OUT OF STOCK</p>`;

            found = true;
        }
    }

    if (!found) {
        output.innerHTML = "<p>No out-of-stock products found.</p>";
    }

}
