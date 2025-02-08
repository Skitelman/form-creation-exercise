import Header from './components/Header';

function BandForm({ band }) {
  return (
    <div className="m-8">
      <Header band={band} />
      {band.ticketTypes.map((ticket) => (
        <p>
          {ticket.name} - {ticket.description}
        </p>
      ))}
    </div>
  );
}

export default BandForm;
