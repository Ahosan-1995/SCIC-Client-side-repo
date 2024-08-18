import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";




const MainLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayouts;