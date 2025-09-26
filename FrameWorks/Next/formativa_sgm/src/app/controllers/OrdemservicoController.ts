
import connectMongo from "@/services/mongodb";
import OrdemServico, { IOrdemServico } from "../models/OrdemServico";

export const getOrdensServico = async () => {
  await connectMongo();
  const ordens = await OrdemServico.find({});
  return ordens;
};

export const getOrdemServicoById = async (id: string) => {
  await connectMongo();
  const ordem = await OrdemServico.findById(id);
  return ordem;
};

export const createOrdemServico = async (data: Partial<IOrdemServico>) => {
  await connectMongo();
  const novaOrdem = new OrdemServico(data);
  await novaOrdem.save();
  return novaOrdem;
};

export const updateOrdemServico = async (id: string, data: Partial<IOrdemServico>) => {
  await connectMongo();
  const ordem = await OrdemServico.findByIdAndUpdate(id, data, { new: true });
  return ordem;
};

export const deleteOrdemServico = async (id: string) => {
  await connectMongo();
  await OrdemServico.findByIdAndDelete(id);
};