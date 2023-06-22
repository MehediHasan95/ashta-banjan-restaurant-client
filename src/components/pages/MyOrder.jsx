import useMyOrder from "../../hooks/useMyOrder";

const MyOrder = () => {
  const [myOrder, refetch, isLoading] = useMyOrder();

  console.log(myOrder);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-center">
          <thead className="bg-beer text-white">
            <tr>
              <th>Date</th>
              <th>Address</th>
              <th>Item</th>
              <th>Transaction ID</th>
              <th>Payable Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myOrder?.length > 0 ? (
              <>
                {myOrder?.map((e) => (
                  <tr key={e._id} className="hover:bg-beer hover:bg-opacity-10">
                    <td>{e.time}</td>
                    <td>{e.address.address}</td>
                    <td>
                      <ul>
                        {e.orderItems.map((e) => (
                          <li key={e._id}>{e.name}</li>
                        ))}
                      </ul>
                    </td>
                    <td>{e.transactionId}</td>
                    <td>${e.chargeAmount}</td>
                    <td>{e.status ? "Confirm" : "Pending"}</td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                <p>No order found</p>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
