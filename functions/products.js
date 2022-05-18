import { db } from "./app";
import { collection, addDoc } from "firebase/firestore";

export async function createProduct(data) {
    try {
        const productsCol = collection(db, "products");
        const productDoc = await addDoc(productsCol, data);
        return productDoc;
    } catch (error) {
        console.error(error);
    }
}
export async function addTocar(data) {   //to add the products to the bag
    try {
        const productsCol = collection(db, "shopping");
        const productDoc = await addDoc(productsCol, data);
        consol.log(productDoc);
    } catch (error) {
        console.error(error);
    }
}

export async function getData() {
    const content = document.getElementById("product-content");
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        let html = "";
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            html += ` 
            <div class="product-view-card"> 
                <div id="product-container">
                    <div id="product-img">
                    </div>
                    <div id="product-data">
                        <h3>
                        ${data.name}
                        </h3>
                        <p>${data.description}</p>
                        <p>$ ${data.price}</p>
                    </div>
                    <button class='btn-addtocar' data-product="${data.description}" data-id="${doc.id}" data-name="${data.name}" data-price="${data.price}">Add to car</button>
                </div>
            </div>`;

            console.log(doc.id, "=>", doc.data());
        });
        content.innerHTML = html; //insertamos el documento html en el div
        const btnAddToCar = content.querySelectorAll('.btn-addtocar');
        btnAddToCar.forEach(btn => {
            btn.addEventListener('click', async ({ target: { dataset } }) => {
                await addDoc(collection(db, "shopping"),
                    "id", dataset.id,
                    "name", dataset.name,
                    "price", dataset.price,
                    "description", dataset.description

                )
            }).try((value) => {
                alert("Added to bag", value);
            }).catch((error) => {
                alert("Error:", error);
            });

        });
    } catch (e) {

    };
}