import { useParams } from "react-router-dom";
import StarRating from "../Components/Rating";
import Button from "../Components/Button";
import { PiShoppingCartThin } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useEffect, useState } from "react";
import Path from "../Components/Path";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/CartSystem";
import { toast } from "react-toastify";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return (
      <div className=" h-screen items-center justify-center flex">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-secondary2 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
     
      <div className="flex flex-col md:flex-row justify-center p-4">
        <div className="md:basis-2/3 p-3 flex flex-col gap-2 justify-center mx-auto w-full md:w-1/2">
          <div className="w-full border border-text1/10 shadow rounded flex justify-center">
            <img
              src={product.thumbnail || "https://placehold.co/620x300"}
              alt={product.title || "Product Image"}
              className="rounded w-96 h-96"
            />
          </div>
          <div className="flex justify-around mx-auto items-center gap-3 md:w-full w-11/12 pr-2 ">
            {product.images.slice(0, 3).map((image, index) => (
              <img
                key={index}
                src={image || "https://placehold.co/200x100"}
                alt={`Product Image ${index + 1}`}
                className="rounded w-24 h-24"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col p-5 w-full md:w-1/2 gap-2  mx-auto">
          <div className="md:w-3/4 w-full">
            <h2 className="text-2xl font-semibold whitespace-nowrap">
              {product.title || "Product Title"}
            </h2>
            
            <span className="text-2xl font-medium">
              ${product.price || "0.00"}
            </span>
            <div className="md:w-3/4 w-full">
              <p className="text-center md:text-start">
                {product.description || "Product Description"}
              </p>
            </div>
          </div>
          <div className="md:w-3/5 w-full">
            <hr className="border-t border-t-text1/45" />
          </div>

          {/* Quantity and action buttons */}
          <div className="flex flex-col justify-center mx-auto p-2 w-full">
            <div className="flex p-2 items-center gap-4 w-full">
              <div className="flex">
                <button
                  onClick={handleDecrement}
                  className="border bg-white hover:bg-secondary2 hover:text-text hover:border-secondary2 border-text2 items-center flex justify-center text-xl rounded-l-sm p-1"
                >
                  <FiMinus />
                </button>
                <div>
                  <input
                    type="number"
                    value={quantity}
                    disabled
                    className="placeholder:text-text2 text-2xl h-10 border-y border-y-text2 focus:outline-none p-1 w-16 text-center"
                  />
                </div>
                <button
                  onClick={handleIncrement}
                  className="border bg-white hover:bg-secondary2 hover:text-text hover:border-secondary2 border-text2 items-center p-1 flex justify-center text-xl rounded-r-sm"
                >
                  <GoPlus />
                </button>
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addItemToCart(product));
                  toast.success("Item added to cart!", {
                    position: "top-right",
                    icon: <PiShoppingCartThin className=" h-6 w-6" />,
                  });
                }}
              >
                <Button width={120}>Buy Now</Button>
              </div>

          
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
