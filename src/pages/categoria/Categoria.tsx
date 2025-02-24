import React from 'react';

function Categoria() {
  return (
    <>
      <main className="bg-indigo-900 flex justify-center min-h-screen py-8">
        <div className="container grid grid-cols-1 md:grid-cols-2 text-white items-center">
          <div className="flex flex-col gap-6 items-center justify-center py-4 text-center md:text-left">
            <h2 className="text-red-400 text-5xl">Seja Bem-Vindo!</h2>
            <p className="text-xl">Encontre aqui seus produtos favoritos!</p>
          </div>
          <div className="flex justify-center p-4">
            <img
              src="https://png.pngtree.com/png-vector/20230131/ourmid/pngtree-online-drugstore-and-pharmacy-concept-png-image_6580169.png"
              alt="Imagem Página Home"
              className="w-2/3 md:w-1/2"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Categoria;
