/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

const ProductForm = () => {
  const { register, handleSubmit, reset } = useForm<any>();

  return (
    <>
      <div className=" flex items-center py-8 px-6">
        <div className="w-full">
          <h2 className="text-center text-primary font-bold text-2xl uppercase mb-10">
            Add Product
          </h2>
          <div>
            <form action="" >
              <div className="grid grid-cols-3 gap-x-6">
                <div className="mb-5">
                  <label className="block mb-2 font-bold text-gray-600">
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Put in your fullname."
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 font-bold text-gray-600">
                    Category
                  </label>
                  <input
                    {...register("category", { required: true })}
                    type="text"
                    placeholder="Put in your Category"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Seller
                  </label>
                  <input
                    {...register("seller", { required: true })}
                    type="text"
                    placeholder="Put in your Seller."
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Price
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Stock
                  </label>
                  <input
                    {...register("stock", { required: true })}
                    type="number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Ratings
                  </label>
                  <input
                    {...register("ratings", { required: true })}
                    type="number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 font-bold text-gray-600">
                    Ratings Count
                  </label>
                  <input
                    {...register("ratingsCount", { required: true })}
                    type="number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Image
                  </label>
                  <input
                    {...register("img", { required: true })}
                    type="text"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 font-bold text-gray-600">
                    Shipping Charge
                  </label>
                  <input
                    {...register("shipping", { required: true })}
                    type="number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Quantity
                  </label>
                  <input
                    {...register("quantity", { required: true })}
                    type="number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
              </div>

              <button className="block w-full bg-primary text-white font-bold p-4 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
