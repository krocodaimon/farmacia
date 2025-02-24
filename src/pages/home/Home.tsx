function Home() {
    return (
        <>
            <main className="bg-gradient-to-b from-indigo-500 to-indigo-900 text-white flex justify-center items-center min-h-screen px-4 py-12">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl">
                    {/* Seção de texto */}
                    <div className="flex flex-col text-center md:text-left items-center md:items-start gap-6 max-w-xl">
                        <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                            Seja Bem-Vindo à <span className="text-yellow-400">FARM+</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-md">
                            Encontre seus produtos favoritos com facilidade e aproveite as melhores ofertas.
                        </p>
                    </div>

                    {/* Seção de imagem */}
                    <div className="flex justify-center md:justify-end w-full md:w-1/2">
                        <img
                            src="https://png.pngtree.com/png-vector/20230131/ourmid/pngtree-online-drugstore-and-pharmacy-concept-png-image_6580169.png"
                            alt="Imagem Página Home"
                            className="w-3/4 md:w-2/3 max-w-none mt-4 md:mt-0"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;
