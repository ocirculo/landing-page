const Button = (props: {text: string}) => {
  return(
    <div className="flex justify-items-center justify-center text-bottom">
      <button className="shadow-xs border-b-4 border-red-400 hover:bg-red-600 hover:text-white ease-in-out text-red-400 duration-300 p-2 m-2">
        <p className="text-sm ">{props.text}</p>
      </button>
    </div>
  )
}

export default Button

