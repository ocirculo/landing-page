import Button from './Button';

const MenuBar = () => {
  return(
    <div className="flex bg-white">
      <div className="flex-auto m-2  justify-center justify-items-center">
        <img src="logo.png" className="h-16 sm:h-42"/>
      </div>

      <div className="flex justify-end items-center m-2">
        <Button text={"Doação"}/>
      </div>

    </div>
  )
}

export default MenuBar;
