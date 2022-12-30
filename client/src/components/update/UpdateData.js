import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const UpdateStudentData = () => {
    return ( 
        <div className="w-full h-auto flex justify-start items-start flex-col mb-4 px-5">
            <div className="bg-slate-200 w-full h-16 flex justify-center items-center rounded-t-md my-3">
                <h1 className="text-3xl font-bold">Update Student Data</h1>
            </div> 

            <div className=" w-full h-auto flex justify-center items-center flex-col pt-5">
                <div className=" w-full h-20 flex justify-center items-center flex-row space-x-2">
                    <div className=" w-1/2 h-20 flex justify-start items-center ml-10">
                        <label className="text-lg font-bold w-1/4">First name</label>
                        <input type="search"  className="bg-slate-100 w-3/5 mx-2 h-12 px-4 text-lg flex justify-start items-center outline outline-2 outline-slate-300 rounded-md focus:outline-none" />
                    </div>
                    <div className=" w-1/2 h-20 flex justify-start items-center ml-10">
                        <label className="text-lg font-bold w-1/4">Last name</label>
                        <input type="search"  className="bg-slate-100 w-3/5 mx-2 h-12 px-4 text-lg flex justify-start items-center outline outline-2 outline-slate-300 rounded-md focus:outline-none" />
                    </div>
                </div>

                <div className=" w-full h-20 flex justify-center items-center flex-row space-x-2">
                    <div className=" w-1/2 h-20 flex justify-start items-center ml-10">
                        <label className="text-lg font-bold w-1/4">Department:</label>
                        <input type="search"  className="bg-slate-100 w-3/5 mx-2 h-12 px-4 text-lg flex justify-start items-center outline outline-2 outline-slate-300 rounded-md focus:outline-none" />
                    </div>
                    <div className=" w-1/2 h-20 flex justify-start items-center ml-10">
                        <label className="text-lg font-bold w-1/4">Student ID:</label>
                        <input type="search"  className="bg-slate-100 w-3/5 mx-2 h-12 px-4 text-lg flex justify-start items-center outline outline-2 outline-slate-300 rounded-md focus:outline-none" />
                    </div>
                </div>

                <div className=" w-full h-20 flex justify-center items-center flex-row space-x-2">
                    <div className=" w-1/2 h-20 flex justify-start items-center ml-10">
                        <label className="text-lg font-bold w-1/4">PC Model</label>
                        <input type="search"  className="bg-slate-100 w-3/5 mx-2 h-12 px-4 text-lg flex justify-start items-center outline outline-2 outline-slate-300 rounded-md focus:outline-none" />
                    </div>
                    <div className=" w-1/2 h-20 flex justify-start items-center ml-10">
                        <label className="text-lg font-bold w-1/4">PC Serial no.</label>
                        <input type="search"  className="bg-slate-100 w-3/5 mx-2 h-12 px-4 text-lg flex justify-start items-center outline outline-2 outline-slate-300 rounded-md focus:outline-none" />
                    </div>
                </div>

                <div className="w-full h-28 flex justify-start items-center">
                    <div className="w-full h-full flex justify-evenly space-x-10 items-center ml-10 ">
                        <button className="bg-green-400 w-1/4 h-12 px-4 text-xl flex justify-center items-center rounded-md hover:bg-green-200" >Update</button>
                        <button className="bg-red-400 w-1/4 h-12 px-4 text-xl flex justify-center items-center rounded-md hover:bg-red-200" >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
     );
}



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

const UpdateData = () => {

    const [ tab, setTab ] = useState(true);

    const change = (state) => {
        setTab(state)
    }

    return(
        <Wrapper>                
            <Tab changeMe={change}/>

            <div className=" w-full h-auto flex justify-center items-center flex-col bg-slate-200 rounded-b-md shadow-md">
                
                {
                    tab?  <UpdateStudentTab /> : <></>
                }
                
            </div>
        </Wrapper>
     );
}

const UpdateStudentTab = () => {
    return (
        <div className="w-full h-auto flex justify-center items-center space-y-2 flex-col ">
            <div className=" w-full h-16 flex justify-end items-center flex-row px-3 bg-slate-300">
                <div className="w-1/4 h-16 flex justify- items-center rounded-md ">
                    <form /* onSubmit={performSearch} */ className="w-full h-16 flex justify- items-center rounded-md">
                        <div className="w-full h-full flex justify-center items-center pl-3 relative bg space-x-1">
                            <div className="w-12 h-10 flex justify-center items-center absolute left-2 bg-slate-00">
                                <SearchIcon sx={{'font-size': '20px'}} className="rounded-full text-slate-400"/>
                            </div>
                            <input /* value={searchInput} onChange={handleInputChange}  */ type="search" placeholder="Search by ID" className="input input-bordered h-9 w-full pl-7 input-sm" />
                            <button className="btn btn-sm" type="button">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='w-full h-80 flex justify-start items-center relative bg-slate-0 px-3 pb-3 flex-col space-y-1 overflow-y-auto overflow-x-hidden'>
                

            </div>
        </div>
    );
}
 
export { UpdateStudentData};
 
export default UpdateData;