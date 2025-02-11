export default function SelectTicketsTile({ ticket, ticketCount, updateTicketCount }) {
  return (
    <>
    <div className="flex" key={ticket.type}>
      <div>
        <p className="uppercase text-lg text-gray-800">{ticket.name}</p>
        <p className="text-gray-500 text-sm">{ticket.description}</p>
        <p className="text-gray-800 font-bold">${ticket.cost / 100}</p>
      </div>
      <div>
        <input
          type="number"
          value={ticketCount}
          onChange={updateTicketCount(ticket.type)}
          className="border-2 rounded border-gray-300 p-1 w-16"
          min={0}
        />
      </div>
    </div>
    <hr className="bg-gray-600 my-3" />
  </>
  );
}