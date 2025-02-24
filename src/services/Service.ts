import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmacia-jjxo.onrender.com' 
});

// Ajuste no Service.ts

export class Service {
    // Método para listar categorias
    static async listar(url: string, setDados: Function) {
        try {
            const resposta = await api.get(url);
            setDados(resposta.data); // Preenche o estado com os dados recebidos da API
        } catch (error) {
            console.error("Erro ao listar categorias:", error);
            throw new Error("Erro ao listar categorias.");
        }
    }

    // Método para cadastrar categoria
    static async cadastrar(url: string, dados: Object) {
        try {
            const resposta = await api.post(url, dados, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json"
                }
            });
            return resposta.data; // Retorna os dados cadastrados
        } catch (error) {
            console.error("Erro ao cadastrar categoria:", error);
            return null;
        }
    }

    // Método para atualizar categoria
    static async atualizar(url: string, dados: Object) {
        try {
            console.log("Atualizando dados para a URL:", url);
            console.log("Dados enviados:", dados);
            const resposta = await api.put(url, dados, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json"
                }
            });
            console.log("Resposta da atualização:", resposta);
            return resposta.data; // Retorna os dados atualizados
        } catch (error: any) {
            console.error("Erro ao atualizar categoria:", error);
            if (error.response) {
                // Resposta do servidor
                console.error("Resposta do servidor:", error.response.data);
                console.error("Status do erro:", error.response.status);
            } else {
                // Erro na requisição
                console.error("Erro de requisição:", error.message);
            }
            return null;
        }
    }

    // Método para deletar categoria
    static async deletar(url: string) {
        try {
            await api.delete(url, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
        } catch (error) {
            console.error("Erro ao deletar categoria:", error);
        }
    }
}
