import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const BtnToHome = () => {
    return (
        <Link to='/'>
            <IoArrowBackSharp />
        </Link>
    );
}
export default BtnToHome;