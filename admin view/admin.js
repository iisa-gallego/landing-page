const createProductForm = document.getElementById("createProduct");

createProductForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = createProductForm.name.value;
    const color = createProductForm.colors.value;
    const price = createProductForm.price.value;
    const stock = createProductForm.stock.value;
    const description = createProductForm.description.value;
    console.log(name, color, price, stock, description);

    if (name === "" && color === "" && price === "" && stock === "" && description === "") {
        alert("Empty field")
    } else {
        const createProductForm = {
            name,
            color, 
            price,
            stock,
            }
    }
})

