import { useState } from "react";
import { useDispatch } from "react-redux";
import { scan_pc } from "../../features/scanner/scannerSlice"


const Search = () => {

    const [searchInput, setSearchInput ] = useState()

    //const scanned_pc = useSelector((state) => {})
    //const dispatch = useDispatch()

    const performSearch = () => {
        //dispatch(scan_pc(2))
    }

    const handleInputChange = (e) => {
        setSearchInput(e.targer.value)
    }

    return ( 
        <div className=" w-full h-24 px-5 flex justify-center items-center">
            <div className="w-full h-16 flex justify- items-center bg-slate-200  rounded-md">
                <div className="w-9/12 h-full flex justify-center items-center px-3 ">
                    <input value={searchInput} onChange={handleInputChange} type="search" placeholder="Enter ID or Serial number" className="bg-slate-100 w-full h-12 px-4 text-lg flex justify-start items-center rounded-md outline outline-2 outline-slate-300 focus:outline-slate-400 " />
                </div>

                <div className="w-3/12 h-full flex justify-start items-center px-2">
                    <button onClick={performSearch} className="bg-blue-400 w-full h-12 px-4 text-xl flex justify-center items-center rounded-md hover:bg-blue-300" >Search</button>
                </div>
            </div>
        </div>
     );
}
 
export default Search;