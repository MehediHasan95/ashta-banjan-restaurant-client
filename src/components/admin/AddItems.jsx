import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddItems = () => {
  const [uploading, setUploading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_APP_image_token
        }`,
        formData
      )
      .then((res) => {
        const recipeInfo = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          image: res.data.data.display_url,
          recipe: data.recipe,
        };
        axiosSecure.post("/menu", recipeInfo).then((res) => {
          if (res.data.acknowledged) {
            swal("Your recipe added successful", {
              icon: "success",
              buttons: false,
              timer: 2000,
            });
            setUploading(false);
            reset();
          }
        });
      });
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-11/12 lg:w-3/6 p-5 bg-base-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl my-5 text-center">ADD AN ITEM</h1>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full p-3 mb-3 border-none focus:outline-beer"
            placeholder="Recipe name"
          />

          <div className="flex justify-between">
            <select
              defaultValue={null}
              {...register("category", { required: true })}
              className="w-[49%] p-3 mb-3 border-none focus:outline-beer"
            >
              <option disabled>Select category</option>
              <option value="offered">Offered</option>
              <option value="popular">Popular</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="salad">Salad</option>
              <option value="drinks">Drinks</option>
            </select>
            <input
              type="text"
              {...register("price", { required: true })}
              className="w-[49%] p-3 mb-3 border-none focus:outline-beer"
              placeholder="Price"
            />
          </div>

          <textarea
            rows="5"
            {...register("recipe", { required: true })}
            className="w-full p-3 mb-3 border-none focus:outline-beer"
            placeholder="Recipe details"
          ></textarea>
          <input
            type="file"
            {...register("image", { required: true })}
            className="w-full p-3 mb-3 border-none focus:outline-beer"
          />
          <button className="w-3/12 p-3 mb-3 bg-beer hover:bg-deepbeer text-white">
            Submit
          </button>
        </form>
        {uploading && <p>Uploading...</p>}
      </div>
    </div>
  );
};

export default AddItems;
