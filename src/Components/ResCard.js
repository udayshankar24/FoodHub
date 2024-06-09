import { IMG_URL } from "../utils/const";

const ResCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData?.info;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 hover:bg-slate-300">
      <img className="w-full h-48 object-cover" src={IMG_URL + cloudinaryImageId} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{cuisines.join(", ")}</p>
        <p className="text-gray-700 text-base">Average Rating: {avgRating}</p>
        <p className="text-gray-700 text-base">Cost for Two: {costForTwo}</p>
        <p className="text-gray-700 text-base">Delivery Time: {sla?.slaString}</p>
      </div>
    </div>
  );
};

export const withRestrauntCard = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white">Open</label>
        <ResCard {...props}></ResCard>
      </div>
    );
  };
};

export default ResCard;
