export default function SelectTicketsTile({ ticket, ticketCount, updateTicketCount }) {
  return (
    <>
    <div className="flex" key={ticket.type}>
      <div className="mr-8">
        <p className="uppercase text-lg text-gray-100 mb-1">{ticket.name}</p>
        <p className="text-gray-300 text-sm mb-1">{ticket.description}</p>
        <p className="text-gray-100 font-bold mb-2">${ticket.cost / 100}</p>
      </div>
      <div>
        <input
          type="number"
          value={ticketCount}
          onChange={updateTicketCount(ticket.type)}
          className="bg-gray-300 border-2 rounded border-gray-300 p-1 w-16"
          min={0}
        />
      </div>
    </div>
    <hr className="text-gray-300 my-3" />
  </>
  );
}