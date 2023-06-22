import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCart from "../../hooks/useCart";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [data, refetch] = useCart();
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      const total = data.reduce(
        (previous, current) => previous + current.price,
        0
      );
      setSubTotal(total.toFixed(2));
    }
  }, [data]);

  const handleRemoveCartItem = (_id) => {
    fetch(
      `https://ashta-banjan-restaurant-server-mehedihasan95.vercel.app/carts/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.acknowledged) {
          refetch();
        }
      });
  };

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="lg:col-span-2 order-2 lg:order-1">
        {data.length > 0 ? (
          <>
            {data.map((e) => (
              <div key={e._id} className="flex space-x-2 mb-3 border">
                <div className="w-20 h-20 flex overflow-hidden">
                  <img
                    src={e.image}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <div className="w-3/6">
                    <h1>{e.name}</h1>
                    <p className="text-xs">Category: {e.category}</p>
                    <p>Price: ${e.price}</p>
                  </div>

                  <div className="w-3/6 flex justify-between">
                    <div>
                      <p>Quantity: 1</p>
                    </div>
                    <button
                      onClick={() => handleRemoveCartItem(e._id)}
                      className="mx-5"
                    >
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="hover:text-red-500 text-xl"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No Items added</p>
        )}
      </div>

      <div className="col-span-1 order-1 lg:order-2">
        <div className="border p-2">
          <h1 className="text-xl">Order Summary</h1>
          <div className="flex justify-between my-3">
            <p>Subtotal ({data.length} items)</p>
            <p>${subTotal}</p>
          </div>
          <div className="flex justify-between my-3">
            <p>Total</p>
            <p>${subTotal}</p>
          </div>
          {data.length > 0 && (
            <Link to="/account/payment">
              <button className="bg-beer hover:bg-deepbeer text-white p-2 w-full">
                PROCEED TO CHECKOUT
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
