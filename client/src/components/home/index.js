import { useSelector } from "react-redux";
import { Dashboard } from "../dashboard";
import { Registration } from "../registration";
import { Report } from "../report";
import { Scanner } from "../scanner";
import Setting from "../setting";
import { Update } from "../update";
import Brand from "./Brand";

import LeftWrapper from "./LeftWrapper";
import SideNav from "./SideNav";
import TopMenu from "./TopMenu";


const HomeWrapper = ({children}) => {
    return ( 
        <div className="w-100 h-full min-h-screen flex flex-row">
            {children}
        </div>
     );
}

const SideWrapper = ({children}) => {
    return(
        <div className="w-full bg-slate-100 relative"> 
            {children}
        </div>
    );
}

const DisplayWrapper = ({children, props, route}) => {

    const sidebarState = useSelector((state) => state.sidebar.collapseState)

    return (
        <>
            <LeftWrapper>
                <Brand collapseState={sidebarState}/>
                <SideNav route={route}/>
            </LeftWrapper>
            <SideWrapper>
                <TopMenu />

                {route === 'dashboard' && <Dashboard />}
                {route === 'scanner' && <Scanner />}
                {route === 'registration' && <Registration />}
                {route === 'update' && <Update/>}
                {route === 'report' && <Report />}
                {route === 'setting' && <Setting />}

            </SideWrapper>
        </>
    );
}
 
export {HomeWrapper, SideWrapper, DisplayWrapper};