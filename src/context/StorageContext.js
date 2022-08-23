import { createContext } from "react";
import { db } from "../Firebase/FirebaseHosting";
import { collection, addDoc } from "firebase/firestore"

export const DataContext = createContext()

export function DataProvider({children}) {

    async function AddingData(){
        try {
            const docRef = await addDoc(collection(db, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
              });
              console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return(
        <DataContext.Provider value={{}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;