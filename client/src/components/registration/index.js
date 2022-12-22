import { SideWrapper } from "../home";
import Brand from "../home/Brand";
import LeftWrapper from "../home/LeftWrapper";
import SideNav from "../home/SideNav";
import TopMenu from "../home/TopMenu";
import { Scanner } from "../scanner";
import Form from "./Form";
import Header from "./Header";

const Registration = () => {
    return ( 
        <div className="w-full h-auto flex flex-col"> 
            <Header />
            <Form />
        </div>
     );
}

const RegistrationRoute = () => {
    return ( 
        <>
            <LeftWrapper>
                <Brand />
                <SideNav route='registration'/>
            </LeftWrapper> 
            <SideWrapper>
                <TopMenu />
                <Registration />
            </SideWrapper>
        </>
     );
}
 
export { Registration, RegistrationRoute };