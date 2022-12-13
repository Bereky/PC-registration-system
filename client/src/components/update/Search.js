const Search = () => {
    return ( 
        <>
        <div className="bg-slate-200 w-full h-24 rounded-md">
            <div className="w-full h-full flex justify-start items-center">
                <div className="w-9/12 h-full flex justify-center items-center px-3 ">
                    <input type="search" placeholder="Enter ID or Serial number" className="bg-slate-100 w-full h-12 px-4 text-lg flex justify-start items-center focus:outline-none rounded-md outline outline-2 outline-slate-300" />
                </div>

                <div className="w-3/12 h-full flex justify-start items-center px-2">
                    <button className="bg-blue-400 w-full h-12 px-4 text-xl flex justify-center items-center rounded-md hover:bg-blue-200" >Search</button>
                </div>
            </div>
        </div>

        <div className=" w-full h-auto flex justify-start items-center my-5 flex-col">
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
        </>
     );
}
 
export default Search;