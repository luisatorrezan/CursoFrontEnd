
"use-client";

import { IOrdemServico } from "@/models/OrdemServico";
import { useEffect, useState } from "react";

export default function DashboardGerente() {
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

    const atualizarStatus = async (id: string, novoStatus: string) => {
        try {
            await fetch(`/api/ordemservico/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: novoStatus }),
            });
            fetchOrdens(); // recarrega lista
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Dashboard Gerente - Ordens de Serviço</h3>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Status</th>
                        <th>Data Solicitação</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {ordens.map((ordem) => (
                        <tr key={ordem._id}>
                            <td>{ordem.titulo}</td>
                            <td>{ordem.status}</td>
                            <td>{new Date(ordem.dataSolictada).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => atualizarStatus(ordem._id, "Em andamento")}>
                                    Marcar como Em Andamento
                                </button>
                                <button onClick={() => atualizarStatus(ordem._id, "Concluído")}>
                                    Marcar como Concluído
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
