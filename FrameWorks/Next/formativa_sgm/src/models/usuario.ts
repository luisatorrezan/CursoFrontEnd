import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface Usuario extends Document{
    nome: string,
    email: string,
    senha?: string, //pode ser nulo
    comparePassword(userPassword:string):Promise<boolean>;
}

const UsuarioSchema: Schema<Usuario> = new Schema({
    nome: { 
        type: String, 
        required:[true, "O título é obrigatório"],
        trim: true,
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    senha: { 
        type: String, 
        required: true 
    },
});

//middleware para hashear a senha
UsuarioSchema.pre<Usuario>("save", async function (next){
    if(!this.isModified("senha") || !this.senha) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.senha = await bcrypt.hash(this.senha, salt);
        next();
    } catch (error:any) {
        next(error);
    }
})

//método para comparar a senha
UsuarioSchema.methods.comparePassword = async function(userPassword: string): Promise<boolean>{
    return bcrypt.compare(userPassword, this.senha || "");
}

const UsuarioModel = mongoose.model<Usuario>("Usuario", UsuarioSchema);

export default UsuarioModel;
    
