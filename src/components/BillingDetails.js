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
      </div>
      <input
          type="text"
          placeholder="Address"
          value={billingDetails.address}
          onChange={updateBillingDetails("address")}
          className="border-2 rounded border-gray-300 p-1 w-full my-2"
        />
    </div>
  );
}
