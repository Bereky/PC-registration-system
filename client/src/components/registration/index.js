import { SideWrapper } from "../home";
import Form from "./Form";
import Header from "./Header";

const Registration = () => {
    return ( 
        <SideWrapper>
            <div className="w-full h-auto flex flex-col"> 
                <Header />
                <Form />
            </div>
        </SideWrapper>
     );
}
 
export { Registration };