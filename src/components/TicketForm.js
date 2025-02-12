import { useState } from "react";
import SelectTicketsTile from "./SelectTicketsTile";
import BillingDetails from "./BillingDetails";

export default function TicketForm({ show }) {
  const [ticketCart, setTicketCart] = useState(
    show?.ticketTypes.reduce((cart, ticket) => {
      cart[ticket.type] = 0;
      return cart;
    }, {}) || {}
  );
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    cardNumber: "",
    exp: "",
    cvv: "",
  });

  function updateTicketCount(type) {
    return e => {
      setTicketCart({ ...ticketCart, [type]: e.target.value });
    };
  }

  function updateBillingDetails(field) {
    return e => {
      setBillingDetails({ ...billingDetails, [field]: e.target.value });
    };
  }

  const total =
    show.ticketTypes.reduce((total, ticket) => total + ticketCart[ticket.type] * ticket.cost, 0) /
    100;

  function purchaseTickets() {
    console.log({ total, ...ticketCart, ...billingDetails });
    alert("Tickets purchased!");
  }

  return (
    <div className="rounded-lg bg-slate-950 p-4 h-full overflow-auto">
      <h2 className="text-xl font-bold text-gray-50 mb-2">Select Tickets</h2>
      {show.ticketTypes.map(ticket => (
        <SelectTicketsTile
          ticket={ticket}
          ticketCount={ticketCart[ticket.type]}
          updateTicketCount={updateTicketCount}
          key={ticket.type}
        />
      ))}
      <div className="flex justify-between mb-2 text-gray-50">
        <p className="text-lg uppercase float-left">Total</p>
        <p className="text-lg font-bold float-right">${total}</p>
      </div>
      <BillingDetails billingDetails={billingDetails} updateBillingDetails={updateBillingDetails} />
      <button
        className="bg-gray-300 hover:bg-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-gray-500 active:bg-gray-300 text-slate-900 p-2 rounded w-full my-4"
        onClick={purchaseTickets}
      >
        Get Tickets
      </button>
    </div>
  );
}
