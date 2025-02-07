function BandForm({ band }) {
  return (
    <div>
      <h1 class="text-5xl font-semibold tracking-tight text-blue-600 sm:text-7xl">{band.name}</h1>
      {band.ticketTypes.map((ticket) => (
        <p>
          {ticket.name} - {ticket.description}
        </p>
      ))}
    </div>
  );
}

export default BandForm;
