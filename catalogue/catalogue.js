const user = {
    name: "text" ,
    email: "email",
    password: "password",
    age: "numbrer",
    gender: "text",

};

const products = [
{
    //image: image,
    name: "Garden Roses Choker",
    price: 30000,
    color: "Pink",
    cant: 10,
    description: "",
},
{
  // image: image,
    name: "Skeleton Choker",
    price: 100000,
    color: "Silver",
    cant: 5, 
    description: "",  
},
{
   //image: image,
    name: "Clip Neckless",
    price: 25000,
    color: "Silver",
    cant: 12,
    description: "",  
},
{
  // image: image, 
    name: "Sea Shell Choker",
    price: 30000,
    color: "Silver",
    cant: 0,
    description: "",  
},
{
  // image: image,
    name: "Perfect Pearl Gold Neckless",
    price: 65000,
    color: "Gold",
    cant: 2,
    description: "",  
},

]

const { nameUser: name, gender, age, email, number, password } = user;
  products.forEach(product => {
    const{ name: nameProduct, img, description, price, cant, color} = product;

    if(price > 50000 && cant > 0){
      console.log(product);
    }

  })
  const catalogue = document.getElementById("createCatalogue");
  const product = document.createElement ("div");
  const stockLabel = stock === true ? "ON STOCK" : "NO ON STOCK";
    product.innerHTML = `
    <h1>${product.reference}</h1>
    <h3>${product.color}</h3>
    <h4>${product.body}</h4>
    <p>${product.price}</p>
    <h3>${product.stock}</h3>
    <img src="${product.image}">

    `;

    //TO VISUALICE THE ELEMENTS
    catalogue.appendChild(product);

    //CONST ALT GR + [{
    //IF IS A NECKLESS, RING OR BRASALET
    const productType = document.createElement("h1");
      product.innerHTML = product.reference;

      const productColor = document.createElement("h3");
      product.innerHTML = product.color;
    //TO ADD THE DESCRIPTION
      const productBody = document.createElement("h4");
      product.innerHTML = product.body;

      const productPrice = document.createElement("p");
      product.innerHTML = product.price;

      const productStock = document.createElement("h3");
      product.innerHTML = product.stock;

      

