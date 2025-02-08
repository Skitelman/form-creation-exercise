export default function TicketForm({ show }) {
  return (
    <div className="bg-gray-100 p-4">
      {show.ticketTypes.map(ticket => (
        <p>
          {ticket.name} - {ticket.description}
        </p>
      ))}
    </div>
  );
}
