import { useState } from "react";
import AgentRegistration from "./AgentRegistration";
import StudentRegistration from "./StudentRegistration";

const Tab = ({changeMe}) => {

    const [ tabState, setTabState ] = useState(true);

    const changeTab = (e) => {
        setTabState(e)
        changeMe(e)
    }

    return (
        <div className="bg-slate-300 w-full h-auto flex justify-start items-start flex-col rounded-t-md mt-3 shadow-md border-solid border-b-grey-100 border-b-2">
            <div className="tabs">
                <div className={`tab tab-lifted h-10 text-lg text-black ${tabState && 'tab-active'}`} onClick={() => changeTab(true)}>Student</div>
                <div className={`tab tab-lifted h-10 text-lg ${!tabState && 'tab-active'}`} onClick={() => changeTab(false)}>Agent</div>
            </div>
        </div> 
    );
}

const Wrapper = ({children}) => {
    return (
        <div className="w-full h-auto flex justify-start items-start flex-col mb-4 px-5">
            {children}
        </div>
    );
}

const Form = () => {

    const [ tab, setTab ] = useState(true);

    const change = (state) => {
        setTab(state)
    }

    return(
        <Wrapper>                
            <Tab changeMe={change}/>

            <div className=" w-full h-auto flex justify-center items-center flex-col bg-slate-200 rounded-b-md shadow-md">
                
                {
                    tab?  <StudentRegistration /> : <AgentRegistration />
                }

                
            </div>
        </Wrapper>
     );
}
 
export default Form;