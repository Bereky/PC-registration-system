import ComputerIcon from '@mui/icons-material/Computer';

import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    return ( 
        <div className="w-1/5 bg-slate-300"> 
            <div className="w-full h-auto flex flex-col">
                <div className="w-full h-32 flex justify-center items-center"> 
                    <div className="w-full h-full flex justify-center items-center flex-row">
                        <div className="w-16  h-20 flex justify-center items-center"> 
                            <ComputerIcon  fontSize="large"/>
                        </div>
                        <div className="w-2/4 h-20 flex justify-start items-center">
                            <h1 className="w-3/4 text-4xl font-extrabold">PCRS</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-3/4 "> 
                <div className="w-full h-full flex justify-start items-center flex-col"> 
                    <div className="w-full h-16 bg-slate-200 flex justify-center items-center flex-row">
                        <div className="w-12 h-full  flex justify-center items-center">
                            <GridViewIcon />
                        </div>
                        <div className="w-2/4  flex justify-start items-center">
                            <h1 className="w-3/4 text-lg font-bold">Dashboard</h1>
                        </div>
                    </div>

                    <div className="w-full h-16 flex justify-center items-center flex-row hover:bg-slate-200">
                        <div className="w-12 h-full  flex justify-center items-center">
                            <SearchIcon />
                        </div>
                        <div className="w-2/4  flex justify-start items-center">
                            <h1 className="w-3/4 text-lg font-bold">Scanner</h1>
                        </div>
                    </div>

                    <div className="w-full h-16  flex justify-center items-center flex-row hover:bg-slate-200">
                        <div className="w-12 h-full flex justify-center items-center">
                            <AppRegistrationIcon />
                        </div>
                        <div className="w-2/4 flex justify-start items-center">
                            <h1 className="w-3/4 text-lg font-bold">Registration</h1>
                        </div>
                    </div>

                    <div className="w-full h-16 flex justify-center items-center flex-row hover:bg-slate-200">
                        <div className="w-12 h-full  flex justify-center items-center">
                            <EditIcon />
                        </div>
                        <div className="w-2/4 flex justify-start items-center">
                            <h1 className="w-3/4 text-lg font-bold">Update</h1>
                        </div>
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
        </div>
     );
}
 
export default Sidebar;