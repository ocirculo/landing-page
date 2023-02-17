const MissingPersonImage = (props: {image: string}) => {
  return(
    <div>
      <img className="grayscale hover:grayscale-0 shadowg rounded-full w-10 sm:w-32 m-2" src={props.image} alt="..." />
    </div>
  )
}

export default MissingPersonImage;
