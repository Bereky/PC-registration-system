import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const TopMenu = () => {
    return ( 
        <div className="w-full h-12 bg-slate-300 rounded-b-md flex flex-row "> 

            <div className="w-1/2 h-12"> 
        
            </div>

             <div className="w-1/2 h-12 flex justify-end items-center mr-5"> 
                <div className="w-auto h-10 flex justify-center items-center flex-row bg-slate-200 rounded-md">
                    <div className="w-12 h-12 flex justify-center items-center">
                        <div className="w-9 h-9 flex justify-center items-center bg-red-400 rounded-full"> 
                            <img src="https://api.lorem.space/image/face?w=160&h=160" alt="" className="rounded-full w-full"/>
                        </div> 
                    </div>

                    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="mb-4 w-36 text-md h-12">Abera - Gate 03<span><ArrowDropDownIcon /></span></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48">
                            <li><a>Item 1</a></li>
                            <li><a>Log out</a></li>
                        </ul>
                    </div> 
                </div>
            </div>

        </div>
     );
}
 
export default TopMenu;