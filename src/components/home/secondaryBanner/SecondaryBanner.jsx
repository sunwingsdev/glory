import { Link } from "react-router-dom";

const SecondaryBanner = ({ image, zipFile }) => {
  return (
    <div className="py-3">
      <Link to={zipFile} target={zipFile ? "_blank" : ""} download={zipFile}>
        <img src={image} alt="" />
      </Link>
    </div>
  );
};

export default SecondaryBanner;
