import img from "../../../image/profile.png";

// 7. Photo
export const Photo = () => (
  <div className="w-full flex justify-center items-center h-full p-2">
    <div className="w-full h-full overflow-hidden rounded-md">
      <img
        src={img}
        alt="Monirul Islam"
        className="w-full h-full object-cover object-center"
      />
    </div>
  </div>
);
