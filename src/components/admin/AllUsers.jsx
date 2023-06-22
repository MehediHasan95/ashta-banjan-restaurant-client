import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUsers from "../../hooks/useUsers";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

const AllUsers = () => {
  const [data, refetch] = useUsers();

  const handleDeleteUser = (_id) => {
    fetch(
      `https://ashta-banjan-restaurant-server-mehedihasan95.vercel.app/user/admin/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.acknowledged) {
          refetch();
          swal("User has been deleted successful", {
            icon: "success",
            buttons: false,
            timer: 2000,
          });
        }
      });
  };

  const handleMakeAdmin = (_id) => {
    swal("Do you want to make him an admin?", {
      content: {
        element: "input",
        attributes: {
          placeholder: "Type 'admin'",
          type: "text",
        },
      },
    }).then((value) => {
      if (value === "admin") {
        fetch(
          `https://ashta-banjan-restaurant-server-mehedihasan95.vercel.app/user/admin/${_id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ role: value }),
          }
        )
          .then((res) => res.json())
          .then((res) => {
            if (res.acknowledged) {
              refetch();
            }
          });
      } else {
        swal("Please type 'admin'");
      }
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
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              <>
                {data.map((e, index) => (
                  <tr key={e._id} className="hover:bg-beer hover:bg-opacity-10">
                    <th>{index + 1}</th>
                    <td>{e.displayName}</td>
                    <td>{e.email}</td>
                    <td>{e.role === "admin" ? "ADMIN" : "USER"}</td>
                    <td>
                      <button
                        onClick={() => handleMakeAdmin(e._id)}
                        className="me-4 hover:text-yellow-500 tooltip"
                        data-tip="Edit"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(e._id)}
                        className="ms-4 hover:text-red-600 tooltip"
                        data-tip="Delete"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
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

export default AllUsers;
