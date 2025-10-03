//rotas que prescisam do id (patch ou put, delete, get(one))

import { deleteUsuario, getUsuarioById, updateUsuario } from "@/controllers/UsuarioController";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

interface Parametro{
    id:string;
}

//patch
export async function PATCH(req: NextRequest, {params}:{params:Parametro}){
    try {
        const {id} = params;
        const data = await req.json();
        const usuarioAtualizado = await updateUsuario(id, data);
        if(!usuarioAtualizado){
            return NextResponse.json({success:false, error: "Not Found"})
        }
        return NextResponse.json({success:true, data:usuarioAtualizado});
    } catch (error) {
        return NextResponse.json({success:false, error:error})
    }
}

//get(one)
export async function GET ({params}:{params:Parametro}){
    try {
        const {id} = params;
        const data = await getUsuarioById(id);
        if (!data) {
            return NextResponse.json({success:false, error: "Not Found"});
        }
        return NextResponse.json({success:false, data:data});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

//delete
export async function DELETE({params}:{params:Parametro}) {
    try {
        const {id} = params;
        await deleteUsuario(id);
        return NextResponse.json({success: true, data:{}});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}