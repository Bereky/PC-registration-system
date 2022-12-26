import { useState } from "react";
import { useDispatch } from "react-redux";
import { scan_pc_fail, scan_pc } from "../../features/scanner/scannerSlice"
import pcRegistry from "../../utils/pcRegistry";


const Search = () => {

    const [searchInput, setSearchInput ] = useState('')

    const dispatch = useDispatch()

    const performSearch = (e) => {
        e.preventDefault()

        const pc_data = pcRegistry.filter((pc) => pc.id === searchInput)

        if( pc_data.length === 0){
            dispatch(scan_pc_fail({id: "Ru0369/12"}))
        }
        else {
            dispatch(scan_pc({data: pc_data}))
        }
    }

    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    return ( 
        <div className=" w-full h-20 flex justify-center items-center">
            <div className="w-full h-16 flex justify- items-center bg-slate-200  rounded-md ">
                <form onSubmit={performSearch} className="w-full h-16 flex justify- items-center bg-slate-200  rounded-md">
                    <div className="w-10/12 h-full flex justify-center items-center pl-3 ">
                        <input value={searchInput} onChange={handleInputChange} type="search" placeholder="Enter student ID" className="input input-bordered w-full h-11" />
                    </div>

                    <div className="w-2/12 h-full flex justify-center items-center px-3">
                        <button type="submit" className="text-white w-full text-lg btn" >Scan</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Search;