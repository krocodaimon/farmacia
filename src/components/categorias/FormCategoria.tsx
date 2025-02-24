import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { Service } from "../../services/Service";

interface Categoria {
  id: number;
  nome: string;
  descricao: string;
}

function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  // Função para buscar categoria pelo ID
  async function buscarPorId(id: string) {
    try {
      await Service.listar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error("Erro ao buscar a categoria:", error);
      alert("Erro ao buscar a categoria.");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id); // Buscar categoria quando o ID for fornecido
    }
  }, [id]);

  // Função para atualizar o estado da categoria
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  // Função para navegar de volta para a lista de categorias
  function retornar() {
    navigate("/categorias");
  }

  // Função para criar ou atualizar a categoria
  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        console.log("Atualizando categoria", categoria); // Depuração
        const resultado = await Service.atualizar(`/categorias/${id}`, categoria);
        if (resultado) {
          alert("A Categoria foi atualizada com sucesso!");
        } else {
          alert("Falha ao atualizar a categoria.");
        }
      } else {
        console.log("Cadastrando nova categoria", categoria); // Depuração
        const resultado = await Service.cadastrar("/categorias", categoria);
        if (resultado) {
          alert("A Categoria foi cadastrada com sucesso!");
        } else {
          alert("Falha ao cadastrar a categoria.");
        }
      }
    } catch (error) {
      console.error("Erro ao tentar atualizar ou cadastrar categoria:", error);
      alert("Erro ao processar a requisição.");
    } finally {
      setIsLoading(false);
      retornar();
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Nome da categoria"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição da categoria"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={atualizarEstado}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
