import {db} from "./app";
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

async function getProduct(){
    
}