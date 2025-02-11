import { useState } from "react";
import SelectTicketsTile from "./SelectTicketsTile";

export default function TicketForm({ show }) {
  const [ticketCart, setTicketCart] = useState(
    show?.ticketTypes.reduce((cart, ticket) => {
      cart[ticket.type] = 0;
      return cart;
    }, {}) || {}
  );

  function updateTicketCount(type) {
    return e => {
      setTicketCart({ ...ticketCart, [type]: e.target.value });
    };
  }

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-bold text-blue-700 mb-2">Select Tickets</h2>
      {show.ticketTypes.map(ticket => (
        <SelectTicketsTile
          ticket={ticket}
          ticketCount={ticketCart[ticket.type]}
          updateTicketCount={updateTicketCount}
          key={ticket.type}
        />
      ))}
      <div className="flex justify-between">
        <p className="text-lg uppercase float-left">Total</p>
        <p className="text-lg font-bold float-right">
          $
          {show.ticketTypes.reduce(
            (total, ticket) => total + ticketCart[ticket.type] * ticket.cost,
            0
          ) / 100}
        </p>
      </div>
    </div>
  );
}
