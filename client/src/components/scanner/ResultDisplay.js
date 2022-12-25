import { useSelector } from "react-redux";
import ResultImage from "./ResultImage";

const ResultDisplay = () => {

    const scan_data = useSelector((state) => state.scanner.current_scan[0])

    return ( 
        <div className="bg-slate-100 w-full h-auto flex justify-center items-center flex-row space-x-2 p-2 rounded-md shadow-md">
            
            <ResultImage image={scan_data.avatar}/>
            
            <div className=" w-3/5 h-full flex flex-col space-y-3 justify-between">
                <div className=" w-full h-4/5 flex flex-col justify-ce items-center space-y-2">
                    <div className=" w-full h-24 flex flex-col px-2 bg-slate-00">
                        <div className="w-full h-10 flex justify-center items-center px-2">
                            <h1 className="w-full text-3xl font-bold">{scan_data.name}</h1>
                        </div>
                        <div className=" w-full h-6 flex justify-center items-center px-2">
                            <h1 className="w-full text-black-500">RU0369/12</h1>
                        </div>
                    </div>
                </div>
                
                <div className=" w-full h-4/5 flex flex-col justify-ce items-center space-y-2">

                    <div className=" w-full h-8 flex flex-row px-2 space-x-2">
                        <div className="w-1/4 h-full flex justify-center items-center px-2">
                            <h1 className="w-full text- font-bold">Gender</h1>
                        </div>
                        <div className=" w-3/4 h-full flex justify-center items-center px-2">
                            <h1 className="w-full text- ">Male</h1>
                        </div>
                    </div>

                    <div className=" w-full h-8 flex flex-row px-2 space-x-2">
                        <div className="w-1/4 h-full flex justify-center items-center px-2">
                            <h1 className="w-full  font-bold">Department</h1>
                        </div>
                        <div className=" w-3/4 h-full flex justify-center items-center px-2">
                            <h1 className="w-full ">{scan_data.department}</h1>
                        </div>
                    </div>

                    <div className=" w-full h-8 flex flex-row px-2 space-x-2">
                        <div className="w-1/4 h-full flex justify-center items-center px-2">
                            <h1 className="w-full font-bold">PC Model</h1>
                        </div>
                        <div className=" w-3/4 h-full flex justify-center items-center px-2">
                            <h1 className="w-full ">{scan_data.pc_model}</h1>
                        </div>
                    </div>

                    <div className=" w-full h-8 flex flex-row px-2 space-x-2">
                        <div className="w-1/4 h-full flex justify-center items-center px-2">
                            <h1 className="w-full font-bold">PC Serial</h1>
                        </div>
                        <div className=" w-3/4 h-full flex justify-center items-center px-2">
                            <h1 className="w-full ">{scan_data.pc_serial}</h1>
                        </div>
                    </div>
                </div>

                <div className="w-full h-1/5 flex flex-row justify-between items-center p-2">
                    <div className="w-1/2 h-full flex flex-row justify-start items-center px-2">
                        <button className="btn capitalize border-none bg-green-400 w-5/6 h-10 px-4 text-xl flex justify-center items-center rounded-md hover:bg-green-300" >Verify</button>
                    </div>
                    <div className="w-1/2 h-full flex flex-row justify-end items-center px-2">
                        <button className="btn capitalize border-none bg-red-400 w-5/6 h-10 px-4 text-xl flex justify-center items-center rounded-md hover:bg-red-300" >Reject</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ResultDisplay;