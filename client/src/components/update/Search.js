const Search = () => {
    return ( 
        <div className="px-5">
            <div className=" w-full h-24 flex justify-center items-center">
                <div className="w-full h-16 flex justify- items-center bg-slate-200  rounded-md">
                    <div className="w-10/12 h-full flex justify-center items-center pl-3 ">
                        <input type="search" placeholder="Enter student ID" className="input input-bordered w-full h-11" />
                    </div>

                    <div className="w-2/12 h-full flex justify-center items-center px-3">
                        <button className="text-white w-full text-lg btn" >Search</button>
                    </div>
                </div>
            </div>

            <div className=" w-full h-auto flex justify-start items-center my-3 flex-col">
                <div className="bg-slate-100 w-full h-full flex justify-center items-center flex-row space-x-2 p-3 rounded-md shadow-md">
                    <div className="w-full h-16 flex justify-start items-center mx-3 bg-slate-50 rounded-md space-x-1 outline outline-2 outline-slate-200">
                        <div className="w-auto h-16 flex justify-center items-center px-3  rounded-md">
                            <div className="w-12 h-12 flex justify-start items-center bg-amber-500 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=150&h=150" alt="" className="rounded-full w-full"/>
                            </div>
                        </div>
                        <div className="w-1/4 h-16 flex justify-start items-center px-3  rounded-md">
                            <h1 className="w-3/4 text-md font-bold">Abebe Kebede</h1>
                        </div>
                        <div className="w-1/6 h-16 flex justify-start items-center px-3  rounded-md">
                            <h1 className="w-3/4 text-md font-bold">RU0369/12</h1>
                        </div>
                        <div className="w-1/6 h-16 flex justify-start items-center px-3  rounded-md">
                            <h1 className="w-3/4 text-md font-bold">5CG7171RWH</h1>
                        </div>
                        <div className="w-1/3 h-16 flex justify-start items-center px-3  rounded-md">
                            <div className="w-1/2 h-16 flex justify-center items-center px-3  rounded-md">
                                <h1 className=" text-md font-bold text-blue-400 underline">Edit</h1>
                            </div>
                            <div className="w-1/2 h-16 flex justify-center items-center px-3  rounded-md">
                                <h1 className="text-md font-bold text-red-400 underline">Delete</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Search;