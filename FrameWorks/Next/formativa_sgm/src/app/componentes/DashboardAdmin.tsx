"use-client";

import { IOrdemServico } from "@/models/OrdemServico";
import { useEffect, useState } from "react";

export default function DashboardAdmin() {
    const [ordens, setOrdens] = useState<IOrdemServico[]>([]);

    useEffect(() => {
        fetchOrdens();
    }, []);

    const fetchOrdens = async () => {
        try {
            const resposta = await fetch("/api/ordemservico");
            const data = await resposta.json();
            if (data.success) {
                setOrdens(data.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const deletarOrdem = async (id: string) => {
        try {
            await fetch(`/api/ordemservico/${id}`, { method: "DELETE" });
            fetchOrdens();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Dashboard Administrador - Gestão Completa</h3>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Tipo de Manutenção</th>
                        <th>Datas</th>
                        <th>Equipamento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {ordens.map((ordem) => (
                        <tr key={ordem._id}>
                            <td>{ordem.titulo}</td>
                            <td>{ordem.descricao}</td>
                            <td>{ordem.status}</td>
                            <td>{ordem.tipoManutencao}</td>
                            <td>
                                {new Date(ordem.dataSolictada).toLocaleDateString()} -{" "}
                                {ordem.dataFinalizacao ? new Date(ordem.dataFinalizacao).toLocaleDateString() : "Pendente"}
                            </td>
                            <td>{ordem.EquipamentoId}</td>
                            <td>
                                <button onClick={() => deletarOrdem(ordem._id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}