//basear o meu modelo no schema da 

import mongoose from "mongoose";

const TarefaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "O título é obrigatório"],
        trim: true,
        maxlength: [100, "O título < 100 char"]
    },
    concluida: {
        type: Boolean,
        default: false, //toda tarefa criada, não está concluída
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.Tarefa || mongoose.model("Tarefa", TarefaSchema);
//exporta o modelo como tarefa caso não exista uma tarefa no banco, caso ja exista uma tarefa