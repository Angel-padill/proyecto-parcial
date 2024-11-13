import app from "./app";
import mongoose from "mongoose";


async function main(){
    try{
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/QUTMA"
        );
        console.log("Aplicacion conectada a la base e datos");
        app.listen(4000, ()=>{
            console.log("Aplicaciones corriendo con exito")
        })

    } catch (error) {
        console.log("Algo salio mal con la base de datos")

    }
}
main();