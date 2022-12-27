import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { change_state } from '../../features/sidebar/sidebarSlice';

const SideNav = ({route}) => {

    const sidebarState = useSelector((state) => state.sidebar.collapseState)

    const dispatch = useDispatch();

    const handleCollapse = () => {
        dispatch(change_state())
    }

    return(
        <div className={`${sidebarState? 'w-20' : 'w-60'} h-3/4 flex flex-col space-y-2 justify-between`}> 
            <div className="w-full h-5/6 flex justify-start items-center flex-col mt-3 "> 
                
                <div className='w-full h-14 flex justify-center items-center '>
                    <div className={`h-11 rounded-lg ${ route === 'dashboard' && 'bg-slate-200 '} ${sidebarState? 'w-4/6' : 'w-5/6'} flex justify-center items-center flex-row hover:bg-slate-200`}>
                        <Link to="/" className='w-full flex justify-center items-center'>
                            <div className={`w-12 h-full  flex justify-center items-center`}>
                                <GridViewIcon />
                            </div>
                            <div className={`w-2/4 flex justify-start items-center ${sidebarState? 'hidden' : 'flex'}`}>
                                <h1 className="w-3/4 text-md font-bold">Dashboard</h1>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='w-full h-14 flex justify-center items-center'>
                    <div className={`h-11 rounded-lg ${ route === 'scanner' && 'bg-slate-200'} ${sidebarState? 'w-4/6' : 'w-5/6'} flex justify-center items-center flex-row hover:bg-slate-200`}>
                        <Link to="/scanner" className='w-full flex justify-center items-center'>
                            <div className={`w-12 h-full  flex justify-center items-center `}>
                                <SearchIcon />
                            </div>
                            <div className={`w-2/4 flex justify-start items-center ${sidebarState? 'hidden' : 'flex'}`}>
                                <h1 className="w-3/4 text-md font-bold">Scanner</h1>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className='w-full h-14 flex justify-center items-center'>
                    <div className={`h-11 rounded-lg ${ route === 'registration' && 'bg-slate-200'} ${sidebarState? 'w-4/6' : 'w-5/6'} flex justify-center items-center flex-row hover:bg-slate-200`}>
                        <Link to="/registration" className='w-full flex justify-center items-center'>
                            <div className="w-12 h-full  flex justify-center items-center">
                                <AppRegistrationIcon />
                            </div>
                            <div className={`w-2/4 flex justify-start items-center ${sidebarState? 'hidden' : 'flex'}`}>
                                <h1 className="w-3/4 text-md font-bold">Registration</h1>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='w-full h-14 flex justify-center items-center'>
                    <div className={`h-11 rounded-lg ${ route === 'update' && 'bg-slate-200'} ${sidebarState? 'w-4/6' : 'w-5/6'} flex justify-center items-center flex-row hover:bg-slate-200`}>
                        <Link to="/update" className='w-full flex justify-center items-center'>
                            <div className="w-12 h-full  flex justify-center items-center">
                                <EditIcon />
                            </div>
                            <div className={`w-2/4 flex justify-start items-center ${sidebarState? 'hidden' : 'flex'}`}>
                                <h1 className="w-3/4 text-md font-bold">Manage</h1>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='w-full h-14 flex justify-center items-center'>
                    <div className={`h-11 rounded-lg ${ route === 'report' && 'bg-slate-200'}  ${sidebarState? 'w-4/6' : 'w-5/6'} flex justify-center items-center flex-row hover:bg-slate-200`}>
                        <Link to="/report" className='w-full flex justify-center items-center'>
                            <div className="w-12 h-full flex justify-center items-center">
                                <ReportIcon />
                            </div>
                            <div className={`w-2/4 flex justify-start items-center ${sidebarState? 'hidden' : 'flex'}`}>
                                <h1 className="w-3/4 text-md font-bold">Report</h1>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='w-full h-14 flex justify-center items-center'>
                    <div className={`h-11 rounded-lg ${ route === 'setting' && 'bg-slate-200' } ${sidebarState? 'w-4/6' : 'w-5/6'} flex justify-center items-center flex-row hover:bg-slate-200`}>
                        <Link to="/setting" className='w-full flex justify-center items-center'>
                            <div className="w-12 h-full flex justify-center items-center">
                                <SettingsIcon />
                            </div>
                            <div className={`w-2/4 flex justify-start items-center ${sidebarState? 'hidden' : 'flex'}`}>
                                <h1 className="w-3/4 text-md font-bold">Setting</h1>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

            <div className='w-full h-14 flex justify-center items-center'>
                <div onClick={handleCollapse} className={`w-10 h-10 rounded-full bg-slate-200 ${ route === 'setting' && 'bg-slate-200'} flex justify-center items-center flex-row hover:bg-slate-300 outline outline-slate-200 hover:outline-2`}>
                    <div className="w-10 h-10 flex justify-center items-center">
                        {sidebarState? <ArrowForwardIosOutlinedIcon fontSize='medium' className=""/> : <ArrowBackIosOutlinedIcon fontSize='medium' className="duration-1000"/>}
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default SideNav;