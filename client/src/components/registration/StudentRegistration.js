import { useState } from "react";

const StudentRegistration = () => {

    const [ step, setStep ] = useState(1)

    const setCurrentStep = (currStep)  => {
        setStep(currStep)
    }

    return (
        <form className=" w-full h-auto flex justify-center items-center flex-col bg-slate-200 rounded-b-md space-y-3">
            <div className=" w-full h-16 flex justify-start items-center pl-5 flex-row bg-slate-300 relative">
                <div className=" w-1/4 h-full flex justify-start items-center absolute">
                    <h3 className="text-lg font-bold">Register student</h3>
                </div>

                <div className=" w-full h-full flex justify-center items-center pl-5">
                    <ul className="steps steps-secondary w-1/2">
                        <li className={`step step-neutral text-sm ${step >= 1 && ''}`}>Step 1</li>
                        <li className={`step text-sm ${step >= 2 && 'step-neutral'}`}>Step 2</li>
                        <li className={`step text-sm ${step == 3 && 'step-neutral'}`}>Finish</li>
                    </ul>
                </div>
            </div>

            <StudentSteps set_step={setCurrentStep} current_step={step} />
            
        </form>
    );
}

const StudentSteps = ({set_step, current_step}) => {

    console.log(current_step, "in steps")
    return (
        <>
        {
            current_step === 1 && (<StudentStepOne stepSetter={set_step} />)
        }
        {
            current_step === 2 && (<StudentStepTwo stepSetter={set_step} />)
        }
        {
            current_step === 3 && (<StudentStepThree stepSetter={set_step} />)
        }
        </>
        
    );
}

const StudentStepOne = ({stepSetter}) => {

    const gotoNextStep = (e) => {
        e.preventDefault()
        stepSetter(2)
    }

    return (
        <>
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
                            <span className="label-text">Middle name <span className="text-red">*</span></span>
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
                            <option>Freshman Natural Science</option>
                        </select>
                    </div>
                </div>

                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Year</span>
                        </label>
                        <select className="select w-full">
                            <option>Freshman</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>

                        </select>
                    </div>
                </div>

                
            </div>

            <div className=" w-full h-20 flex justify-between items-center space-x-5 px-5">
                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <select className="select w-full">
                            <option>Male</option>
                            <option>Female</option>
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

                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                

                
            </div>

            <div className="w-full h-12 flex justify-end items-center">
                <div className="w-1/4 h-full flex justify-end items-center mr-5">
                    <button className="w-1/2 h-10 btn btn-sm text-lg capitalize" onClick={gotoNextStep}>Next</button>
                </div>
            </div>
        </>
    );
}

const StudentStepTwo = ({stepSetter}) => {

    const gotoNextStep = (e) => {
        e.preventDefault()
        stepSetter(3)
    }

    const gotoBack = (e) => {
        e.preventDefault()
        stepSetter(1)
    }

    return (
        <>
            <div className=" w-full h-20 flex justify-between items-center space-x-5 px-5 ">
                <div className=" w-1/4 flex justify-center items-center">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Upload photo<span className="text-red">*</span></span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                </div>
            </div>

            <div className=" w-full h-20 flex justify-between items-center space-x-5 px-5 ">
                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Dorm Zone<span className="text-red">*</span></span>
                        </label>
                        
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Block<span className="text-red">*</span></span>
                        </label>
                        
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Room<span className="text-red">*</span></span>
                        </label>
                        
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
            </div>


            <div className=" w-full h-20 flex justify-between items-center space-x-5 px-5">
                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">PC manufacturer</span>
                        </label>
                        <select className="select w-full">
                            <option>HP</option>
                            <option>Lenovo</option>
                            <option>Dell</option>
                            <option>Toshiba</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">PC model</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">PC serial No.</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
            </div>

            <div className="w-full h-12 flex justify-between items-center"  >
                <div className="w-1/4 h-full flex justify-start items-center ml-5">
                    <button className="w-1/2 h-10 btn btn-sm text-lg capitalize" onClick={gotoBack}>Back</button>
                </div>

                <div className="w-1/4 h-full flex justify-end items-center mr-5">
                    <button className="w-1/2 h-10 btn btn-sm text-lg capitalize" onClick={gotoNextStep}>Next</button>
                </div>
            </div>
        </>
    );
}


const StudentStepThree = ({stepSetter}) => {

    const gotoNextStep = (e) => {
        e.preventDefault()
        //stepSetter(3)
    }

    const gotoBack = (e) => {
        e.preventDefault()
        stepSetter(2)
    }

    return (
        <>
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
                            <span className="label-text">Gender</span>
                        </label>
                        <select className="select w-full">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className=" w-full h-20 flex justify-between items-center space-x-5 px-5">
                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">PC manufacturer</span>
                        </label>
                        <select className="select w-full">
                            <option>HP</option>
                            <option>Lenovo</option>
                            <option>Dell</option>
                            <option>Toshiba</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">PC model</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div className=" w-1/4 flex justify-center items-center ">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">PC serial No.</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
            </div>

            <div className="w-full h-12 flex justify-between items-center"  >
                <div className="w-1/4 h-full flex justify-start items-center ml-5">
                    <button className="w-1/2 h-10 btn btn-sm text-lg capitalize" onClick={gotoBack}>Back</button>
                </div>

                <div className="w-1/4 h-full flex justify-end items-center mr-5">
                    <button className="w-1/2 h-10 btn btn-sm text-lg capitalize" onClick={gotoNextStep}>Register</button>
                </div>
            </div>
        </>
    );
}

export default StudentRegistration;