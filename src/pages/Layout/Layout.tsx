import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

const Layout = () => {

const location = useLocation()
const hideNavBar = location.pathname === "/"

    return ( 
        <>
        <Outlet/>
        {!hideNavBar && <NavBar/>}
        </>
     );
}
 
export default Layout;