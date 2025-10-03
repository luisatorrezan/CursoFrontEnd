"use client";

import "./page.module.css"

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Bem-Vindo ao Sistema de Gestão de Manutenção
        </h1>
        <p className="text-gray-600 mb-6">
          Por favor, faça login para continuar.
        </p>
        <Link
          href="/login"
          className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Ir para Login
        </Link>
      </div>
    </div>
  );
}
