import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMenu from "../../hooks/useMenu";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [ourMenu, refetch, isLoading] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDeleteUser = (_id) => {
    axiosSecure
      .delete(
        `https://ashta-banjan-restaurant-server-mehedihasan95.vercel.app/menu/${_id}`
      )
      .then((res) => {
        if (res.data.acknowledged) {
          refetch();
          swal("Item has been deleted successful", {
            icon: "success",
            buttons: false,
            timer: 2000,
          });
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
              <th>Image</th>
              <th>Item name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading ? (
              <>
                {ourMenu?.map((e, index) => (
                  <tr key={e._id} className="hover:bg-beer hover:bg-opacity-10">
                    <th>{index + 1}</th>
                    <td>
                      <img src={e.image} alt="image" className="w-12 h-12" />
                    </td>
                    <td>{e.name}</td>
                    <td className="uppercase">{e.category}</td>
                    <td>${e.price}</td>
                    <td>
                      <Link to={`/admin/update/${e._id}`}>
                        <button
                          className="me-4 hover:text-yellow-500 tooltip"
                          data-tip="Edit"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </Link>
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

export default ManageItems;
