import Header from './components/Header';
import BandInfo from './components/BandInfo';
import TicketForm from './components/TicketForm';

function BandForm({ show }) {
  return (
    <div className="m-8">
      <Header show={show} />
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <BandInfo show={show} />
        </div>
        <div className="col-span-3">
          <TicketForm show={show} />
        </div>
      </div>
    </div>
  );
}

export default BandForm;
