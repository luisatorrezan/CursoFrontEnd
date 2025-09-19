import mongoose, { Document, Schema } from "mongoose"

export interface OrdemServico extends Document{
    titulo: string,
    descricao: string,
    dataAbertura: Date;
}

const OrdemServicoSchema: Schema<OrdemServico> = new Schema({
    titulo: { 
        type: String,       
        required:[true, "O título é obrigatório"],
        trim: true,
    },
    descricao: {
        type: String,
        required: true,
        trim: true, 
    },
    dataAbertura: {    
        type: Date,
        required: true,
    },
});

const OrdemServicoModel = mongoose.model<OrdemServico>("OrdemServico", OrdemServicoSchema);

export default OrdemServicoModel;