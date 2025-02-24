import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { Service } from "../../services/Service";

interface Categoria {
  id: number;
  nome: string;
  descricao: string;
}

function Categoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Inicializa como true para mostrar o carregamento imediatamente

  useEffect(() => {
    async function listarCategorias() {
      try {
        await Service.listar('/categorias', setCategorias); // Chamada sem o uso de headers
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        alert("Erro ao buscar categorias.");
      } finally {
        setIsLoading(false); // Depois de buscar, o carregamento é desativado
      }
    }

    listarCategorias();
  }, []);

  return (
    <main className="bg-indigo-900 flex justify-center min-h-screen py-8">
      <div className="container mt-8">
        <h2 className="text-3xl text-center text-white mb-6">Categorias Disponíveis</h2>
        <div className="mb-6 text-center">
          {/* Botão Cadastrar Categoria */}
          <Link to="/categoria/cadastrar">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
              Cadastrar Nova Categoria
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="flex justify-center items-center w-full">
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            </div>
          ) : categorias.length > 0 ? (
            categorias.map((categoria) => (
              <div
                key={categoria.id}
                className="bg-white text-black p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold">{categoria.nome}</h3>
                <p className="mt-2">{categoria.descricao}</p>
                <div className="mt-4 flex justify-between">
                  {/* Botão Editar */}
                  <Link to={`/categoria/editar/${categoria.id}`}>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                      Editar
                    </button>
                  </Link>
                  {/* Botão Deletar */}
                  <Link to={`/categoria/deletar/${categoria.id}`}>
                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                      Deletar
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center">Nenhuma categoria cadastrada.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Categoria;
