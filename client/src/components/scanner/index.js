import Search from './Search';
import Header from './Header';
import ResultDisplay from './ResultDisplay';
import NotFound from './NotFound';
import { ChildWrapper, MainWrapper } from './Wrappers';
import { SideWrapper } from '../home';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import NorthIcon from '@mui/icons-material/ArrowUpward';
import SouthIcon from '@mui/icons-material/ArrowDownward';
import SortIcon from '@mui/icons-material/Sort';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

const  sampleProfile = {
    name: 'Bisrat Garedew',
    id: 'RU0369/12',
    verified: false,
    photo: 'https://api.lorem.space/image/face?w=150&h=150',
    timeStamp: '12:34PM'
}

const Scanner = () => {

    const [ tab, setTab ] = useState(true);

    const change = (state) => {
        setTab(state)
    }

    return ( 
        <SideWrapper>
            <MainWrapper>
                <Header />
                <Wrapper>
                    <Tab changeMe={change}/>
                    <div className=" w-full h-auto flex justify-center items-center flex-col bg-slate-200 rounded-b-md shadow-md pb-2">
                        
                    {
                        tab?  <ScanTab /> : <HistoryTab />
                    }

                    </div>
                </Wrapper>
                
            </MainWrapper> 
        </SideWrapper>
     );
}

const ScanProfile = (props) => {
    return (
        <div className="w-full h-16 flex justify-start items-center mx-3 bg-slate-100 rounded-md space-x-1 outline outline-2 outline-slate-200 hover:bg-slate-50">
            <div className="w-auto h-16 flex justify-center items-center px-3  rounded-md">
                <div className="w-12 h-12 flex justify-start items-center bg-amber-500 rounded-full">
                    <img src={props.profileData.photo} alt="" className="rounded-full w-full"/>
                </div>
            </div>
            <div className="w-2/6 h-16 flex justify-start items-center px-3  rounded-md">
                <h1 className="w-3/4 text-md">{props.profileData.name}</h1>
            </div>
            <div className="w-1/6 h-16 flex justify-start items-center px-3  rounded-md">
                <h1 className="w-3/4 text-md ">{props.profileData.id}</h1>
            </div>
            <div className="w-1/6 h-16 flex justify-start items-center px-3  rounded-md">
                <h1 className="w-3/4 text-md">{props.profileData.timeStamp}</h1>
            </div>
            <div className="w-1/6 h-16 flex justify-center items-center px-3 rounded-md flex-row space-x-2">
                {
                    props.profileData.verified? <SouthIcon sx={{'font-size': '30px'}} className=" text-green-400 rounded-full"/> : <NorthIcon sx={{'font-size': '30px'}} className=" text-red-400 rounded-full"/>
                }
            </div>
        </div>
    );
}

const HistoryTab = () => {
    return (
        <div className="w-full h-auto flex justify-center items-center space-y-2 flex-col ">
            <div className=" w-full h-16 flex justify-between items-center flex-row px-3 bg-slate-300">
                <div className=" w-1/2 h-16 flex justify-start items-center ">
                    <h3 className="text-lg font-bold">Scan history</h3>
                </div>

                <div className="w-1/4 h-16 flex justify- items-center rounded-md ">
                    <form /* onSubmit={performSearch} */ className="w-full h-16 flex justify- items-center bg-slate-20  rounded-md">
                        <div className="w-11/12 h-full flex justify-center items-center pl-3 relative bg">
                            <div className="w-10 h-10 flex justify-center items-center absolute left-2 bg-slate-00">
                                <SearchIcon sx={{'font-size': '20px'}} className="rounded-full text-slate-400"/>
                            </div>
                            <input /* value={searchInput} onChange={handleInputChange}  */ type="search" placeholder="Search by ID" className="input input-bordered h-9 w-full pl-7 input-sm" />
                        </div>
                    </form>
                </div>

                <div className=" w-1/4 h-16 flex justify-end items-center space-x-3">

                    <div className=" w-32 h-10 flex justify-center items-center  cursor-pointer">
                        <div className="form-control w-full">
                            <select className="select w-full select-sm bg-slate-200 ">
                                <option>Last 24 hr</option>
                                <option>Last 7 days</option>
                                <option>Last month</option>
                                <option>All time</option>
                            </select>
                        </div>
                    </div>

                    <div className=" w-28 h-12 flex justify-center items-center ">
                        <div className="px-4 py-1 rounded-lg dropdown dropdown-hover dropdown-bottom dropdown-end cursor-pointer bg-slate-200 border-none text-neutral hover:bg-slate-100 ">
                            <label tabIndex={0} className="w-32 text-md h-12 font-bold cursor-pointer"><span><SortIcon /></span> Filters</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box w-48 bg-slate-200">
                                <li><a>Item 1</a></li>
                                <li><a>Log out</a></li>
                            </ul>
                        </div> 

                    </div>
                </div>

            </div>
            <div className='w-full h-80 flex justify-start items-center relative bg-slate-0 px-3 pb-3 flex-col space-y-1 overflow-y-auto overflow-x-hidden'>
                <ScanProfile profileData={sampleProfile}/>
                <ScanProfile profileData={sampleProfile}/>
                <ScanProfile profileData={sampleProfile}/>
                <ScanProfile profileData={sampleProfile}/>
                <ScanProfile profileData={sampleProfile}/>
                <ScanProfile profileData={sampleProfile}/>
                <ScanProfile profileData={sampleProfile}/>
                <ScanProfile profileData={sampleProfile}/>

            </div>
        </div>
    );
}

const ScanTab = ({scanResult}) => {

    const scan_result = useSelector((state) => state.scanner.current_scan[0] )

    return (
        <>
            <Search />
            <ChildWrapper>
                { scan_result? <ResultDisplay /> : <NotFound /> }
            </ChildWrapper>
        </>
    );
}

const Wrapper = ({children}) => {
    return (
        <div className="w-full h-auto flex justify-start items-start flex-col mb-4 px-5">
            {children}
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
                <div className={`tab tab-lifted h-10 text-lg text-black ${tabState && 'tab-active'}`} onClick={() => changeTab(true)}>Scan</div>
                <div className={`tab tab-lifted h-10 text-lg ${!tabState && 'tab-active'}`} onClick={() => changeTab(false)}>History</div>
            </div>
        </div> 
    );
}
 
export { Scanner };