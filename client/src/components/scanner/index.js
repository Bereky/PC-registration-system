import CancelIcon from '@mui/icons-material/Cancel';

const Scanner = () => {
    return ( 
        <div className="w-full h-full flex flex-col px-8"> 
            <div className="w-full h-48 flex flex-col justify-center items-center">
                <div className="w-full h-12 flex justify-end items-center">
                    <h1 className="w-full text-3xl font-bold">Scanner</h1>
                </div> 
            </div>

            <div className="bg-slate-200 w-full h-24 rounded-md">
                <div className="w-full h-full flex justify-start items-center">
                    <div className="w-9/12 h-full flex justify-center items-center px-3 ">
                        <input type="search" placeholder="Enter ID or Serial number" className="bg-slate-100 w-full h-12 px-4 text-lg flex justify-start items-center focus:outline-none rounded-md" />
                    </div>

                    <div className="w-3/12 h-full flex justify-start items-center px-2">
                        <button className="bg-blue-400 w-full h-12 px-4 text-xl flex justify-center items-center rounded-md" >Search</button>
                    </div>
                </div>
            </div>

            <div className=" w-full h-full flex justify-start items-center my-3">

                {/* Diplay if found */}
                <div className="bg-slate-100 w-full h-full flex justify-center items-center flex-row space-x-2 p-2 rounded-md shadow-md">
                    <div className="bg-slate-200 w-2/5 h-full flex justify-center items-center rounded-md">
                        <div className="bg-slate-100 w-72 h-72 flex justify-center items-center px-1 rounded-full ">
                            <img src="https://api.lorem.space/image/face?w=450&h=450" alt="" className="rounded-full w-full"/>
                        </div>
                    </div>
                    <div className=" w-3/5 h-full flex flex-col py-2">
                        <div className=" w-full h-4/5 flex flex-col justify-center items-center space-y-2">
                            <div className=" w-full h-12 flex flex-row px-2 space-x-2">
                                <div className="w-1/4 h-12 flex justify-center items-center px-2">
                                    <h1 className="w-full text-lg font-bold">Name</h1>
                                </div>
                                <div className=" w-3/4 h-12 flex justify-center items-center px-2">
                                    <h1 className="w-full text-lg font-bold">Bereket Lemma</h1>
                                </div>
                            </div>

                            <div className=" w-full h-12 flex flex-row px-2 space-x-2">
                                <div className="w-1/4 h-12 flex justify-center items-center px-2">
                                    <h1 className="w-full text-lg font-bold">ID No.</h1>
                                </div>
                                <div className=" w-3/4 h-12 flex justify-center items-center px-2">
                                    <h1 className="w-full text-lg font-bold">RU0369/12</h1>
                                </div>
                            </div>

                            <div className=" w-full h-12 flex flex-row px-2 space-x-2">
                                <div className="w-1/4 h-12 flex justify-center items-center px-2">
                                    <h1 className="w-full text-lg font-bold">Department</h1>
                                </div>
                                <div className=" w-3/4 h-12 flex justify-center items-center px-2">
                                    <h1 className="w-full text-lg font-bold">Computer Science</h1>
                                </div>
                            </div>

                            <div className=" w-full h-12 flex flex-row px-2 space-x-2">
                                <div className="w-1/4 h-12 flex justify-center items-center px-2">
                                    <h1 className="w-full text-lg font-bold">PC Model</h1>
                                </div>
                                <div className=" w-3/4 h-12 flex justify-center items-center px-2">
                                    <h1 className="w-full text-lg font-bold">HP Elitebook 840</h1>
                                </div>
                            </div>

                            <div className=" w-full h-12 flex flex-row px-2 space-x-2">
                                <div className="w-1/4 h-12 flex justify-center items-center px-2">
                                    <h1 className="w-full text-lg font-bold">PC Serial</h1>
                                </div>
                                <div className=" w-3/4 h-12 flex justify-center items-center px-2">
                                    <h1 className="w-full text-lg font-bold">5CG7171RWH</h1>
                                </div>
                            </div>
                            
                        </div>
                        <div className="w-full h-1/5 flex flex-row justify-between items-center px-2">
                            <div className="w-1/2 h-full flex flex-row justify-start items-center px-2">
                                <button className="bg-green-400 w-5/6 h-12 px-4 text-xl flex justify-center items-center rounded-md hover:bg-green-300" >Verify</button>
                            </div>
                            <div className="w-1/2 h-full flex flex-row justify-end items-center px-2">
                                <button className="bg-red-400 w-5/6 h-12 px-4 text-xl flex justify-center items-center rounded-md hover:bg-red-300" >Reject</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Error if not found */}
                <div className="w-full h-full flex justify-center items-center flex-col p-2 rounded-md shadow-md">
                    <div className="w-full bg-slate-200 h-36 flex justify-center items-center">
                        <CancelIcon sx={{'font-size': '150px'}} className="text-3xl text-red-400  rounded-full"/>
                    </div>
                    <div className="w-full bg-slate-200 h-20 flex justify-center items-center">
                        <h1 className="w-auto text-4xl font-bold">PC not found</h1>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Scanner;