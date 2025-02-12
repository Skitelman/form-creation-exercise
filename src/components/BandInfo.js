import { useState } from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const PLACEHOLDER_IMAGE_URL = '/placeholder.jpg';

export default function BandInfo({ show }) {
  const [imgUrl, setImgUrl] = useState(show.imgUrl || PLACEHOLDER_IMAGE_URL);

  function onImgError(e) {
    e.preventDefault();
    setImgUrl(PLACEHOLDER_IMAGE_URL);
  }
  return (
    <div className="bg-gray-100 p-4">
      <img src={imgUrl} alt={show.name} className="block w-full" onError={onImgError} />
      {parse(DOMPurify.sanitize(show.description_blurb))}
    </div>
  );
}
