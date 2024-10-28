import { CiStar } from "react-icons/ci";
import { FaStarHalfStroke } from "react-icons/fa6";

const StarRating = () => {
  return (
    <div className=" flex flex-row text-yellow-400">
      <FaStarHalfStroke />
      <CiStar />
    </div>
  );
};

export default StarRating;
