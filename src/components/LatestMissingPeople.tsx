import MissingPersonImage from "./MissingPersonImage";

const LatestMissingPeople = () => {
  //const [people, setPeople] = useState([1])
  const people = [
    {image: "https://randomuser.me/api/portraits/men/10.jpg"},
    {image: "https://randomuser.me/api/portraits/men/11.jpg"},
    {image: "https://randomuser.me/api/portraits/men/12.jpg"},
    {image: "https://randomuser.me/api/portraits/men/13.jpg"},
    {image: "https://randomuser.me/api/portraits/men/14.jpg"},
  ]

  return(
    <div className="flex flex-col h-auto  bg-red-400">
      <div className="flex justify-center justify-items-center">
        <p className="font-light tracking-widest m-2">
          <mark className="text-white bg-teal-900">
            Pessoas desaparecidas recentemente
          </mark>
        </p>
      </div>

        <div className="flex justify-center justify-items-center shrink">
          {
            people.map((person) => 
            <MissingPersonImage image={person.image} />
          )}
        </div>
    </div>
  )
}

export default LatestMissingPeople;
