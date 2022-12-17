import ResultImage from "./ResultImage";

const ResultDisplay = () => {
    return ( 
        <div className="bg-slate-100 w-full h-auto flex justify-center items-center flex-row space-x-2 p-2 rounded-md shadow-md">
            
            <ResultImage />
            
            <div className=" w-3/5 h-full flex flex-col space-y-3">
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
                <div className="w-full h-1/5 flex flex-row justify-between items-center p-2">
                    <div className="w-1/2 h-full flex flex-row justify-start items-center px-2">
                        <button className="bg-green-400 w-5/6 h-10 px-4 text-xl flex justify-center items-center rounded-md hover:bg-green-300" >Verify</button>
                    </div>
                    <div className="w-1/2 h-full flex flex-row justify-end items-center px-2">
                        <button className="bg-red-400 w-5/6 h-10 px-4 text-xl flex justify-center items-center rounded-md hover:bg-red-300" >Reject</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ResultDisplay;