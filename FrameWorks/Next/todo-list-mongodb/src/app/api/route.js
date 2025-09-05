//rotas para get e post

import connectMongo from "@/services/mongpodb";
import { NextResponse } from "next/server";

//get
export async function GET() {
    try {
        await connectMongo(); //conectar com o mongodb
        const tarefas = await Tarefa.find({});
        //retornar as tarefas
        //usando o nextreponse => explicando o nextreponse 
        //é uma resposta do next para requisições http
        return NextResponse.json(tarefas, {status: 200});
    } catch (error) {
        return NextResponse.json(
            {error: "Erro ao buscar as tarefas"},
            {status: 500}
        );
    }
}