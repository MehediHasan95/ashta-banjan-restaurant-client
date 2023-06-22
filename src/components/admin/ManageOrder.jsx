import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useBooking from "../../hooks/useBooking";

import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck as confirmCheck } from "@fortawesome/free-solid-svg-icons";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import swal from "sweetalert";

const ManageOrder = () => {
  const [booking, refetch] = useBooking();
  const [axiosSecure] = useAxiosSecure();

  const handleConfirmOrder = (_id) => {
    axiosSecure.patch(`/booking/${_id}`, { status: true }).then((res) => {
      refetch();
      swal("Order confirm success", {
        icon: "success",
        buttons: false,
        timer: 2000,
      });
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-center">
          <thead className="bg-beer text-white">
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Payable Amount</th>
              <th>Order Date</th>
              <th>Transaction ID</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {booking?.length > 0 ? (
              <>
                {booking?.map((e, index) => (
                  <tr key={e._id} className="hover:bg-beer hover:bg-opacity-10">
                    <th>{index + 1}</th>
                    <td>{e.displayName}</td>
                    <td>{e.email}</td>
                    <td>${e.chargeAmount?.toFixed(2)}</td>
                    <td>{e.time}</td>
                    <td>{e.transactionId}</td>

                    <td>{e.status ? "Confirm" : "Pending"}</td>
                    <td>
                      <button
                        onClick={() => handleConfirmOrder(e._id)}
                        className="me-4 hover:text-yellow-500"
                      >
                        <FontAwesomeIcon
                          icon={e.status ? confirmCheck : faCircleCheck}
                          className={`text-xl ${
                            e.status ? "text-green-600" : "text-beer"
                          }`}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                <p>No users found</p>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
