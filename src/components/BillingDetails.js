export default function BillingDetails({ billingDetails, updateBillingDetails }) {
  return (
    <div className="my-2">
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="First Name"
          value={billingDetails.firstName}
          onChange={updateBillingDetails("firstName")}
          className="border-2 rounded border-gray-300 p-1 w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={billingDetails.lastName}
          onChange={updateBillingDetails("lastName")}
          className="border-2 rounded border-gray-300 p-1 w-full"
        />
      <input
          type="text"
          placeholder="Address"
          value={billingDetails.address}
          onChange={updateBillingDetails("address")}
          className="col-span-2 border-2 rounded border-gray-300 p-1 w-full my-2"
        />
        <h3 className="col-span-2 text-gray-800 font-bold">Payment Details</h3>
        <input
          type="text"
          placeholder="0000    0000    0000    0000"
          value={billingDetails.cardNumber}
          onChange={updateBillingDetails("cardNumber")}
          className="col-span-2 border-2 rounded border-gray-300 p-1 w-full my-2"
        />
        <input
          type="text"
          placeholder="MM/YY"
          value={billingDetails.exp}
          onChange={updateBillingDetails("exp")}
          className="border-2 rounded border-gray-300 p-1 w-full"
        />
        <input
          type="text"
          placeholder="CVV"
          value={billingDetails.cvv}
          onChange={updateBillingDetails("cvv")}
          className="border-2 rounded border-gray-300 p-1 w-full"
        />
      </div>
    </div>
  );
}
