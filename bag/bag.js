import { db } from '../functions/app';
import { collection, getDocs } from 'firebase/firestore';

export async function getData() {
    const content = document.getElementById("product-content");
    try {
        const querySnapshot = await getDocs(collection(db, "shopping"));
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
                    <button class='btn-addtocar'}">Comprar</button>
                </div>
            </div>`;

            console.log(doc.id, "=>", doc.data());
        });
        content.innerHTML = html; //insertamos el documento html en el div
    } catch (error) {
        console.log(error);
    }

}
