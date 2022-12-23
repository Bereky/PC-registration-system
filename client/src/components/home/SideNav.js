import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({route}) => {
    
    return(
        <div className="w-full h-3/4 "> 
            <div className="w-full h-full flex justify-start items-center flex-col"> 
                
                <div className={`w-full h-16 ${ route === 'dashboard' && 'bg-slate-200'} flex justify-center items-center flex-row hover:bg-slate-200`}>
                    <Link to="/" className='w-full flex justify-center items-center'>
                        <div className="w-12 h-full  flex justify-center items-center">
                            <GridViewIcon />
                        </div>
                        <div className="w-2/4  flex justify-start items-center">
                            <h1 className="w-3/4 text-lg font-bold">Dashboard</h1>
                        </div>
                    </Link>
                </div>

                <div className={`w-full h-16 ${route === 'scanner' && 'bg-slate-200'} flex justify-center items-center flex-row hover:bg-slate-200`}>
                    <Link to="/scanner" className='w-full flex justify-center items-center'>
                        <div className="w-12 h-full  flex justify-center items-center">
                            <SearchIcon />
                        </div>
                        <div className="w-2/4  flex justify-start items-center">
                                <h1 className="w-3/4 text-lg font-bold">Scanner</h1>
                        </div>
                    </Link>
                </div>

                <div className={`w-full h-16 ${route === 'registration' && 'bg-slate-200'} flex justify-center items-center flex-row hover:bg-slate-200`}>
                    <Link to="/registration" className='w-full flex justify-center items-center'>
                        <div className="w-12 h-full  flex justify-center items-center">
                            <AppRegistrationIcon />
                        </div>
                        <div className="w-2/4  flex justify-start items-center">
                            <h1 className="w-3/4 text-lg font-bold">Registration</h1>
                        </div>
                    </Link>
                </div>

                <div className={`w-full h-16 ${route === 'update' && 'bg-slate-200'} flex justify-center items-center flex-row hover:bg-slate-200`}>
                    <Link to="/update" className='w-full flex justify-center items-center'>
                        <div className="w-12 h-full  flex justify-center items-center">
                            <EditIcon />
                        </div>
                        <div className="w-2/4 flex justify-start items-center">
                            <h1 className="w-3/4 text-lg font-bold">Update</h1>
                        </div>
                    </Link>
                </div>

                <div className="w-full h-16 flex justify-center items-center flex-row hover:bg-slate-200">
                    <div className="w-12 h-full flex justify-center items-center">
                        <SettingsIcon />
                    </div>
                    <div className="w-2/4 flex justify-start items-center">
                        <h1 className="w-3/4 text-lg font-bold">Setting</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideNav;