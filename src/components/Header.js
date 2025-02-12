import { CalendarIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/20/solid";

export default function Header({ show }) {
  return (
    <div className="top-0 py-4 text-gray-300">
      <div className="text-gray-50">
        <h1 className="text-2xl/7 font-bold float-left">{show.name}</h1>
        <h1 className="text-2xl/7 font-bold float-right">StubSchlub™</h1>
      </div>
      <div className="clear-both">
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
