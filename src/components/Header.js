import { CalendarIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/20/solid';

export default function Header({ show }) {
  return (
    <div>
      <h1 className="text-2xl/7 font-bold text-blue-700">{show.name}</h1>
      <div className="">
        <CalendarIcon className="inline h-6 w-6" />
        <div className="inline">{new Date(show.date).toLocaleDateString()} </div>
      </div>
      <div className="">
        <MapPinIcon className="inline h-6 w-6" />
        <div className="inline">{show.location} </div>
      </div>
    </div>
  );
} 