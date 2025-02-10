import { useState } from "react";

export default function TicketForm({ show }) {
  const [ticketCart, setTicketCart] = useState(
    show?.ticketTypes.reduce((cart, ticket) => {
      cart[ticket.type] = 0;
      return cart;
    }, {}) || {}
  );
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-bold text-blue-700 mb-2">Select Tickets</h2>
      {show.ticketTypes.map(ticket => (
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
                value={ticketCart[ticket.type]}
                onChange={e => setTicketCart({ ...ticketCart, [ticket.type]: e.target.value })}
                className="border-2 rounded border-gray-300 p-1 w-16"
                min={0}
              />
            </div>
          </div>
          <hr className="bg-gray-600 my-3" />
        </>
      ))}
      <div className="flex justify-between">
        <p className="text-lg uppercase float-left">Total</p>
        <p className="text-lg font-bold float-right">
          ${show.ticketTypes.reduce((total, ticket) => total + ticketCart[ticket.type] * ticket.cost, 0) / 100}
        </p>
      </div>
    </div>
  );
}
