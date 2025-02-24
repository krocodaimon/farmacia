import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Service } from "../../services/Service";
import CardCategoria from "./CardCategoria";


function ListaCategorias() {

    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<any[]>([]); 
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function buscarCategorias() {
        setIsLoading(true);  
        try {
            await Service.listar('/categorias', setCategorias); 
        } catch (error) {
            console.error("Erro ao buscar categorias:", error);
            alert('Erro ao buscar categorias.');
        } finally {
            setIsLoading(false); 
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, []); 

    return (
        <>
            {isLoading && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                 {categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria=    {categoria} />
                 ))}
                </div>

                </div>
            </div>
        </>
    );
}

export default ListaCategorias;
