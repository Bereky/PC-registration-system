const Registration = () => {
    return ( 
        <div className="w-full h-full flex flex-col px-8"> 
            <div className="w-full h-40 flex flex-col justify-center items-center">
                <div className="w-full h-12 flex justify-end items-center">
                    <h1 className="w-full text-3xl font-bold">Registration</h1>
                </div> 
            </div>

            <div className="bg-slate-200 w-full h-full flex justify-start items-start flex-col mb-4 rounded-md shadow-md ">
                <div className="bg-slate-300 w-full h-24 flex justify-center items-center rounded-md">
                    <h1 className="text-3xl font-bold">Register new PC</h1>
                </div> 

                <div className=" w-full h-auto flex justify-center items-center flex-col pt-5">
                    <div className=" w-full h-20 flex justify-center items-center flex-row space-x-2">
                        <div className=" w-1/2 h-20 flex justify-start items-center ml-10">
                            <label className="text-lg font-bold w-1/5">First name</label>
                            <input type="search"  className="bg-slate-100 w-3/5 mx-2 h-12 px-4 text-lg flex justify-start items-center outline outline-2 outline-slate-300 rounded-md focus:outline-none" />
                        </div>
                        <div className=" w-1/2 h-20 flex justify-start items-center ml-10">
                            <label className="text-lg font-bold w-1/5">Last name</label>
                            <input type="search"  className="bg-slate-100 w-3/5 mx-2 h-12 px-4 text-lg flex justify-start items-center outline outline-2 outline-slate-300 rounded-md focus:outline-none" />
                        </div>
                    </div>

                    <div className=" w-full h-20 flex justify-center items-center flex-row space-x-2">
                        <div className=" w-1/2 h-20 flex justify-start items-center ml-10">
                            <label className="text-lg font-bold w-1/5">Department:</label>
                            <input type="search"  className="bg-slate-100 w-3/5 mx-2 h-12 px-4 text-lg flex justify-start items-center outline outline-2 outline-slate-300 rounded-md focus:outline-none" />
                        </div>
                        <div className=" w-1/2 h-20 flex justify-start items-center ml-10">
                            <label className="text-lg font-bold w-1/5">Student ID:</label>
                            <input type="search"  className="bg-slate-100 w-3/5 mx-2 h-12 px-4 text-lg flex justify-start items-center outline outline-2 outline-slate-300 rounded-md focus:outline-none" />
                        </div>
                    </div>

                    <div className=" w-full h-20 flex justify-center items-center flex-row space-x-2">
                        <div className=" w-1/2 h-20 flex justify-start items-center ml-10">
                            <label className="text-lg font-bold w-1/5">PC Model</label>
                            <input type="search"  className="bg-slate-100 w-3/5 mx-2 h-12 px-4 text-lg flex justify-start items-center outline outline-2 outline-slate-300 rounded-md focus:outline-none" />
                        </div>
                        <div className=" w-1/2 h-20 flex justify-start items-center ml-10">
                            <label className="text-lg font-bold w-1/5">PC Serial no.</label>
                            <input type="search"  className="bg-slate-100 w-3/5 mx-2 h-12 px-4 text-lg flex justify-start items-center outline outline-2 outline-slate-300 rounded-md focus:outline-none" />
                        </div>
                    </div>

                    <div className="w-full h-28 flex justify-start items-center">
                        <div className="w-1/4 h-full flex justify-start items-center ml-10">
                            <button className="bg-blue-400 w-full h-12 px-4 text-xl flex justify-center items-center rounded-md hover:bg-blue-200" >Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Registration;