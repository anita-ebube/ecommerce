import { useEffect, useState } from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiShop, CiSliderHorizontal } from "react-icons/ci";

import Button from "../Components/Button.jsx";
import StarRating from "../Components/Rating";
import Categories from "../Components/Categories.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../Redux/CartSystem";
import { toast } from "react-toastify";

const Shop = () => {
  const [shop, setShop] = useState([]);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products${
            categories ? `/category/${categories}` : ""
          }`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setShop(data.products);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAllProducts();
  }, [categories]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!shop.length) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-secondary2 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col gap-8 mt-4" id="shop">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-2xl md:text-4xl whitespace-nowrap font-semibold text-text2">
            All Our Product
          </span>
        </div>
      </div>

      {/* Flex container for categories and products */}
      <div className="flex">
        {/* Categories component */}
        <div className=""> {/* Adjust width as necessary */}
          <Categories setCategories={setCategories} categories={categories} />
        </div>

        {/* Products grid */}
        <div className="flex-1"> {/* This will take the remaining space */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-center">
            {shop.map((product) => (
              <Product key={product.id} product={product} dispatch={dispatch} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

function Product({ product, dispatch }) {
  return (
    <div className="relative product bg-white rounded-lg shadow-md p-4 flex flex-col w-full md:max-w-[250px] mx-auto">
      <Link to={`/product/${product?.id}`}>
        <div className="relative  rounded-md">
          <img
            src={product.thumbnail || "placeholder-image-url.jpg"}
            alt={product.title}
            className="w-full h-auto object-cover"
          />

          

         
        </div>

        <p className="font-medium mt-2">{product.title}</p>
        <div className="">
          <div className="flex gap-3 mt-1">
            <span className="text-[#3BB77E] font-semibold">
              ${product.price.toLocaleString()}
            </span>{" "}
            <span className="text-text1 line-through">
              $
              {(
                (product.price * (100 + product.discountPercentage)) /
                100
              ).toFixed(2)}
            </span>
          </div>
          <StarRating />
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addItemToCart(product));
              toast.success("Item added to cart!", {
                position: "top-right",
                icon: <PiShoppingCartThin className=" h-6 w-6" />,
              });
            }}
          >
            <button className="bg-[#3B82F6] text-[#FFFFFF] p-2 mt-5 rounded-sm">Add to Cart</button>
          </button>
        </div>
        
      </Link>
    </div>
  );
}
