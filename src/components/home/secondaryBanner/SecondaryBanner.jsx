import { Link } from "react-router-dom";

const SecondaryBanner = () => {
  return (
    <div className="py-3">
      <Link target="_blank">
        <img
          src={
            "https://jiliwin.9terawolf.com/images/babu/banner/register_banner_home.jpg"
          }
          alt=""
        />
      </Link>
    </div>
  );
};

export default SecondaryBanner;
