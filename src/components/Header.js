import { CalendarIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/20/solid';

export default function Header({ band }) {
  return (
    <div>
      <h1 className="text-2xl/7 font-bold text-blue-700">{band.name}</h1>
      <div className="">
        <CalendarIcon className="inline h-6 w-6" />
        <div className="inline">{new Date(band.date).toLocaleDateString()} </div>
      </div>
      <div className="">
        <MapPinIcon className="inline h-6 w-6" />
        <div className="inline">{band.location} </div>
      </div>
    </div>
  );
} 