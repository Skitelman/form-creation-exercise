import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import BandForm from "./BandForm";

function App() {
  const bands = [skaBand, kpopBand, punkBand];
  return (
    <div className="App p-12 font-barlow bg-linear-to-b from-slate-800 from-40% to-gray-700">
      <BandForm show={bands[1]} />
    </div>
  );
}

export default App;
