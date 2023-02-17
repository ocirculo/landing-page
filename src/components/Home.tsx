import Button from "./Button";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center justify-items-center bg-teal-100">
      <div >
        <img src="families.png" className="h-auto h-16 sm:h-96"/>
      </div>

      <div className="sm:w-96 text-right m-2">
        <p className="text-lg sm:text-5xl text-red-400 uppercase font-medium">
          Nosso objetivo é contribuir na busca de pessoas perdidas.
        </p> 

        <p className="text-lg sm:ext-2xl text-white font-thin">
          <mark className="text-white bg-teal-900">
            Com o poder da comunidade vamos te dar várias ferramentas para você encontrar quem procura ou ajudar a encontrar uma pessoa desaparecida.
          </mark>
        </p> 

        <div className="flex justify-end m-2">
          <Button text="Pedir Ajuda" />
          <Button text="Fazer Parte" />
        </div>

      </div>

    </div>
  )
}

export default Home;
