const AgentRegistration = () => {
    return (
        <form className=" w-full h-auto flex justify-center items-center flex-col bg-slate-200 rounded-b-md space-y-3">
            <div className=" w-full h-16 flex justify-start items-center pl-5 flex-row bg-slate-300 relative">
                <div className=" w-1/4 h-full flex justify-start items-center absolute">
                    <h3 className="text-lg font-bold">Register agent</h3>
                </div>

                <div className=" w-full h-full flex justify-center items-center pl-5">
                    <ul className="steps steps-secondary w-1/2">
                        <li className="step step-neutral text-sm">Step 1</li>
                        <li className="step text-sm">Step 2</li>
                        <li className="step text-sm">Finish</li>
                    </ul>
                </div>
            </div>

            <div className=" w-full h-20 flex justify-between items-center space-x-5 px-5 ">
                <div className=" w-1/4 flex justify-center items-center">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">First name <span className="text-red">*</span></span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Last name <span className="text-red">*</span></span>
                        </label>
                        
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Gate</span>
                        </label>
                        <select className="select w-full">
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className=" w-full h-20 flex justify-between items-center space-x-5 px-5">
                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">ID No.</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Department</span>
                        </label>
                        <select className="select w-full">
                            <option>Computer Science</option>
                            <option>Information Science</option>
                            <option>Information Technology</option>
                            <option>Chemical Engineering</option>
                            <option>Civil Engineering</option>
                            <option>Electrical Engineering</option>
                            <option>Architectural Engineering</option>
                        </select>
                    </div>
                </div>

                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
            </div>

            <div className="w-full h-16 flex justify-end items-center">
                <div className="w-1/4 h-full flex justify-end items-center mr-5">
                    <button className="w-1/2 h-10 btn btn-sm text-lg capitalize" >Next</button>
                </div>
            </div>
        </form>
    );
}

export default AgentRegistration;