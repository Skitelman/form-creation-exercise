import parse from 'html-react-parser';

export default function BandInfo({ show }) {
  return (
    <div className="bg-gray-100 p-4">
      <img src={show.imgUrl} alt={show.name} className="block w-full"/>
      {parse(show.description_blurb)}
    </div>
  )
}