import mongoose, { Document, Schema } from "mongoose";

export interface equipamentos extends Document{
    nome: string,
    descricao: string,
    dataAquisicao: Date;
}

const EquipamentoSchema: Schema<equipamentos> = new Schema({
    nome: { 
        type: String, 
        required:[true, "O nome é obrigatório"],
        trim: true,
    },
    descricao: { 
        type: String, 
        required: true, 
        trim: true,
    },
    dataAquisicao: {    
        type: Date,
        required: true,
    },
});

const EquipamentoModel = mongoose.model<equipamentos>("Equipamento", EquipamentoSchema);

export default EquipamentoModel;