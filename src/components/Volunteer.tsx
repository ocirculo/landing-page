const Volunteer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center justify-items-center bg-sky-100 ">

      <div className="sm:w-96 text-left m-2 bg-sky-300 rounded-lg m-6">
        <p className="text-lg sm:text-5xl text-teal-900 uppercase font-medium m-6">
          Voluntários
        </p> 

        <p className="text-lg sm:ext-2xl text-teal-900 m-6">
          Como voluntário da nossa ONG, você fará parte de uma rede dedicada de pessoas que querem fazer a diferença na vida de outros. <br />
        </p> 

        <p className="text-lg sm:ext-2xl text-teal-900 m-6">
          Os voluntários são notificados sempre que uma pessoa desaparece na região em que moram e podem ajudar a encontrar a pessoa desaparecida em sua própria comunidade ou em outras áreas. <br />
        </p> 

      </div>

      <div className="m-6">
        <img src="crowd500x500.png" className="h-auto h-16 sm:h-96"/>
      </div>

    </div>

  )
}

export default Volunteer;
