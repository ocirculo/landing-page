const About = () => {
  return(
    <div className="flex flex-col justify-items-center justify-center bg-white">

      <div className="flex justify-items-center justify-center m-2">
        <img src="logo.png" className="w-20" />
        <p className="font-comfortaa text-6xl  m-2">
          O Circulo
        </p>
      </div>

      <div className="flex shrink flex-col sm:flex-row justify-items-center justify-center m-10 basis-3/6">
        <div className="text-xl font-medium text-justify">
          <p className="m-4">
            <mark className="bg-red-500 text-white">
              A ONG Circulo, dedicada a encontrar pessoas desaparecidas e reunir famílias novamente. <br />
              Nossa organização sem fins lucrativos foi criada unicamente para fazer o bem à sociedade, e é por isso que trabalhamos incansavelmente para ajudar a encontrar pessoas desaparecidas.
            </mark>
          </p> 
          <p className="m-4">
            <mark className="bg-red-500 text-white">
              Acreditamos que toda pessoa tem o direito de ser encontrada, e que nenhuma família deve ficar sem informações sobre o paradeiro de um ente querido. <br />
              É por isso que contamos com a colaboração da comunidade para auxiliar no processo de busca.<br />
              Por meio da nossa plataforma tecnológica, fornecemos as ferramentas e recursos necessários para ajudar na identificação de pessoas desaparecidas.<br />
            </mark>
          </p> 

          <p className="m-4">
            <mark className="bg-red-500 text-white">
              Trabalhamos de forma ágil e eficiente, para oferecer suporte e esperança a todos que buscam informações sobre entes queridos desaparecidos. <br />
              Por meio da nossa rede de voluntários, contamos com a ajuda de pessoas de todas as partes do mundo, que trabalham em conjunto para localizar pessoas desaparecidas e reunir famílias novamente.
            </mark>
          </p>

          <p className="m-4">
            <mark className="bg-red-500 text-white">
              Nosso trabalho é feito com paixão, comprometimento e dedicação, e acreditamos que cada pequeno passo que damos pode fazer a diferença na vida das pessoas.
              Se você deseja se envolver e ajudar a fazer parte da solução, junte-se a nós e faça parte desta importante causa.
            </mark>
          </p> 

        </div>

      </div>
    </div>
  )
}
export default About;
