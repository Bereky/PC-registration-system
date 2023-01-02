import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const TopMenu = () => {
    return ( 
        <div className="w-ful h- bg-slate-30 rounded-b-md flex flex-row absolute z-20 right-0 "> 
             <div className="w-full h-20 flex justify-end items-center mr-5 cursor-pointer"> 
                <div className="w-auto w-min-48 h-11 flex justify-between items-center flex-row bg-slate-100 rounded-md outline outline-1 outline-slate-300 ">
                    
                    <UserAvatar />
                    <UserDropDown />
                    
                </div>
            </div>

        </div>
     );
}

const UserAvatar = () => {
    return (
        <div className="w-12 h-12 flex justify-center items-center">
            <div className="w-9 h-9 flex justify-center items-center bg-red-400 rounded-full"> 
                <img src="https://api.lorem.space/image/face?w=160&h=160" alt="user_img" className="rounded-full w-full"/>
            </div> 
        </div>
    );
}

const UserDropDown = () => {
    return (
        <div className="dropdown dropdown-bottom dropdown-end py-2">
            <label tabIndex={0} className="w-36 text-md h-12 cursor-pointer">Abera - adminstrator<span><ArrowDropDownIcon /></span></label>
            <ul tabIndex={0} className="dropdown-content p-2 menu shadow bg-base-100 rounded-box w-52 mt-1">
                <li><div><SettingsIcon /> Setting</div></li>
                <li><div><LogoutIcon /> Log out </div></li>
            </ul>
        </div> 
    );
}
  
export default TopMenu;