import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return(
    <div className="flex flex-row justify-between justify-items-center bg-white px-32 h-52 shrink">
      <div className="flex flex-col justify-items-center justify-center p-4">
        <div className="flex text-red-400 justify-center justify-items-center">
          <img src="logo.png" className="h-32" />
        </div>

        <div className="flex justify-center justify-items-center">
          <p className="font-comfortaa text-lg">
            O Circulo
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-items-center justify-center p-4">
        <div className="flex text-red-400 justify-center justify-items-center">
          <p>contato@ocirculo.org</p>
        </div>
      </div>

      <div>

        <div className="flex justify-items-center justify-center p-4">

          <AiFillFacebook className="w-16"/>
          <AiFillInstagram />
        </div>
      </div>



    </div>
  )
}

export default Footer
