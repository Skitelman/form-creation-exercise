import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import BandForm from "./BandForm";

function App() {
  const bands = [skaBand, kpopBand, punkBand];

  function getBand() {
    const path = window.location.href;
    const route = path.split("/").pop();
    switch (route) {
      case "skaBand":
      case "0":
      case "flaming-potatoes":
        return skaBand;
      case "kpopBand":
      case "1":
      case "btess":
        return kpopBand;
      case "punkBand":
      case "2":
      case "cindy":
        return punkBand;
      default:
        return skaBand;
    }
  }

  return (
    <div className="App p-12 font-barlow bg-linear-to-b from-slate-800 from-40% to-gray-700">
      <BandForm show={getBand()} />
    </div>
  );
}

export default App;
