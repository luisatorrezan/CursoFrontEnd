import mongoose from "mongoose";

//componente responável por estabelecer a conexão com o banco de dados MongoDB
//converter uma string em URL =>
const MONGO_URI = process.env.DATABASE_URL;

//verificar se o arquivo enviroment(.env) foi definido

//1º passo criar e verificar o endereço de conexão
if(!MONGO_URI){
    throw new Error("Crie o .env.local com a Variável DATABASE_URL");
}

//2º passo criar um arquivo cached, para armazenar as conexões ao longo do projeto
let cached = (global as any).mongoose;

//se cched não existir (primeira vez que for fazer acesso ao mongo)
if (!cached) {
    cached = (global as any).mongoose = {conn: null, promise: null}
}

//3º passo criar a função de conexão com o db
async function connectMongo() {
    //verificar se ja existe uma conexão
    if(cached.conn) return cached.conn;

    //se caso não existir a conexão 
    if(!cached.promise){
        const aguarde = {bufferCommands: false};
        //criar uma promessa de conexão 
        cached.promise = mongoose.connect(MONGO_URI!, aguarde)
            .then((mongoose)=>{console.log("Conectado ao Mongo");
                return mongoose;
            })
    }
    //colocar a promessa dentro da conexão promise => conn
    try {
        //cria a conexão a partir da promessa que estava pendente
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promese = null;
        throw error; //lança um erro para o view
    }

    return cached.conn;
}

//transformar em componente reutilizável
export default connectMongo;