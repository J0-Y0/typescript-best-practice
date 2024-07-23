import { useState } from "react";

const App = () => {
  const [customer, setCustomer] = useState({
    name: "john",
    address: {
      city: "San Francisco",
      zipCode: 1111,
    },
  });

  return (
    <>
      {console.log(customer.address.zipCode)}
      <button
        onClick={() =>
          setCustomer({
            ...customer,
            address: { ...customer.address, zipCode: 2222 },
          })
        }
      >
        add to cart
      </button>
    </>
  );
};

export default App;
