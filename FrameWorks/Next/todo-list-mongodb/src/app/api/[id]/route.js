//PUT e DELETE

import Tarefa from "@/models/Tarefa";
import connectMongo from "@/services/mongpodb";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){ //pegar o ID dos parametros
    try {
        await connectMongo();
        const data = await req.json();
        const tarefa =  await Tarefa.findByIdAndUpdate(
            params.id, //id da tarefa que será atualizada
            data, //dados que serão autalizados
            {new: true, runValidators: true} //retorna a tarefa autalizada
        );
        if(!tarefa){
            return NextResponse.json({error: "Tarefa não encontrada"})
        }
        return NextResponse.json(tarefa,{status:200});
    } catch (error) {
        return NextResponse.json(
            {error: "Erro ao autalizar a tarefa"},
            {status:500}
        )
    }
}