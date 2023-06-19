import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import swal from "sweetalert";

const UpdateItems = () => {
  const data = useLoaderData();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const { _id, name, price, recipe } = data;

  const onSubmit = (data) => {
    axiosSecure.patch(`/menu/${_id}`, data).then((res) => {
      if (res.data.acknowledged) {
        swal("Item update successful", {
          icon: "success",
          buttons: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-11/12 lg:w-3/6 p-5 bg-base-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl my-5 text-center">UPDATE AN ITEM</h1>
          <label>
            Name:
            <input
              type="text"
              defaultValue={name}
              {...register("name", { required: true })}
              className="w-full p-3 mb-3 border-none focus:outline-beer"
              placeholder="Recipe name"
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              defaultValue={price}
              {...register("price", { required: true })}
              className="w-full p-3 mb-3 border-none focus:outline-beer"
              placeholder="Price"
            />
          </label>
          <label>
            Recipe details:
            <textarea
              rows="5"
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="w-full p-3 mb-3 border-none focus:outline-beer"
              placeholder="Recipe details"
            ></textarea>
          </label>

          <button className="w-full p-3 mb-3 bg-beer hover:bg-deepbeer text-white">
            Update Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
