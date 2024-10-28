import { useEffect, useState } from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import Button from "./Button.jsx";
import StarRating from "./Rating";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/CartSystem";
import { toast } from "react-toastify";

const BestSelling = () => {
  const [thisMonth, setThisMonth] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // State to hold any errors
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchThisMonthProduct = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/groceries?limit=8" 
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setThisMonth(data.products); // This now holds the array of products
      } catch (error) {
        setError(error.message);
      }
    };

    fetchThisMonthProduct();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!thisMonth || thisMonth.length === 0) {
    return (
      <div className=" h-screen items-center justify-center flex">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-secondary2 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-8 flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-2xl md:text-4xl whitespace-nowrap font-semibold text-text2">
            Daily Best Selling
          </span>
        </div>
        <div>
          <Link to="/shop">
            <Button width={100}>View All</Button>
          </Link>
        </div>
      </div>

      {/* Render products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {thisMonth.map((product) => (
          <Product key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;

function Product({ product, dispatch }) {
  return (
    <Link to={`/product/${product?.id}`}>
      <div className="relative product bg-white rounded-lg shadow-md p-4 flex flex-col w-full md:max-w-[250px] mx-auto">
        <div className="relative rounded-md">
          <img
            src={product.thumbnail || "placeholder-image-url.jpg"}
            alt={product.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="font-medium mt-2">{product.title}</p>
        <div className="flex justify-between">
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
            <button className="bg-[#F53E32] text-[#FFFFFF] p-2 ">Add to Cart</button>
          </button>
        </div>
        <StarRating />
      </div>
    </Link>
  );
}
