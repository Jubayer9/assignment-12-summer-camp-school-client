import { Link } from "react-router-dom";
import img from "../../assets/img/56872884-unusual-404-error-page-not-found-graphic.webp"
const NotFound = () => {
    return (
        <div className="bg-slate-300">
            <Link className="font-bold btn btn-error btn-outline text-3xl text-center w-full" to='/'>Go back</Link>
            <img className="w-full h-[758px]" src={img} alt="" />
        </div>
    );
};

export default NotFound;
