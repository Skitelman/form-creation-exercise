export default function BandInfo({ show }) {
  return (
    <div className="bg-gray-100 p-4">
      <img src={show.imgUrl} alt={show.name} className="block w-full"/>
      {show.description_blurb}
    </div>
  )
}