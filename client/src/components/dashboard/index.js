import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {

    const data = {
        labels: [
          'Verfied',
          'Rejected'
        ],
        datasets: [{
          label: 'Scanned',
          data: [71, 6],
          backgroundColor: [
            '#4ADE80',
            '#F87171'
          ],
          hoverOffset: 4
        }],
        
      };

    return ( 
        <div className="w-full h-full flex flex-col px-3"> 
            <div className="w-full h-32 flex flex-col justify-end items-center px-5">
                <div className="w-full h-12 flex justify-end items-center">
                    <h1 className="w-full text-3xl font-bold">Dashboard</h1>
                </div> 
                <div className="w-full h-8 flex justify-start items-center">
                    <h1 className="w-3/4 text-md font-bold">Wed, Oct 8, 2022</h1>
                </div>
            </div>

            <div className="w-full h-40 flex justify-between items-center flex-row px-5">
                <div className="w-64 h-32 bg-blue-400 flex flex-row justify-center items-center rounded-xl shadow-lg">
                    <div className="w-1/2 h-full  flex justify-center items-center">
                        <SearchIcon sx={{'font-size': '90px'}} className="text-3xl p-2 bg-white text-blue-400 rounded-full"/>
                    </div>
                    <div className="w-1/2 h-32 flex justify-center items-center flex-col space-y-4 text-white">
                        <h1 className="w-3/4 text-md font-bold">Total Scanned</h1>
                        <h1 className="w-3/4 text-5xl font-bold">76</h1>
                    </div>
                </div>
                <div className="w-64 h-32 bg-green-400 flex flex-row justify-center items-center rounded-xl shadow-lg">
                    <div className="w-1/2 h-full  flex justify-center items-center">
                        <VerifiedIcon sx={{'font-size': '100px'}} className="text-3xl text-white rounded-full"/>
                    </div>
                    <div className="w-1/2 h-32 flex justify-center items-center flex-col space-y-4 text-white">
                        <h1 className="w-3/4 text-md font-bold">Total Verified</h1>
                        <h1 className="w-3/4 text-5xl font-bold">71</h1>
                    </div>
                </div>
                <div className="w-64 h-32 bg-red-400 flex flex-row justify-center items-center rounded-xl shadow-lg">
                    <div className="w-1/2 h-full  flex justify-center items-center">
                        <CancelIcon sx={{'font-size': '100px'}} className="text-3xl text-white  rounded-full"/>
                    </div>
                    <div className="w-1/2 h-32 flex justify-center items-center flex-col space-y-4 text-white">
                        <h1 className="w-3/4 text-md font-bold">Total Rejected</h1>
                        <h1 className="w-3/4 text-5xl font-bold">5</h1>
                    </div>
                </div>
            </div>
            
            <div className="w-full h-auto flex justify-between items-center flex-row space-x-4 px-5">
                <div className="w-1/2 h-auto flex justify-between items-center flex-col">
                    <div className="w-full h-16 flex justify-start items-center">
                        <h1 className="w-3/4 text-2xl font-bold ">Activities</h1>
                    </div>
                    <div className="w-full h-64 flex justify-center items-center bg-white rounded-xl shadow-lg">
                        {/* Activities diagram */}
                        <Doughnut data={data} /* options={{maintainAspectRation: false}} *//>
                    </div>
                </div>

                <div className="w-2/3 h-full flex justify-center items-center flex-col">
                    <div className="w-full h-16 flex justify-start items-center">
                        <h1 className="w-3/4 text-2xl font-bold">Scan History</h1>
                    </div>
                    <div className="w-full h-64 flex justify-center items-center space-y-2 bg-white rounded-xl px-2 flex-col shadow-lg ">
                        <div className="w-full h-16 flex justify-start items-center mx-3 bg-slate-50 rounded-md space-x-1 outline outline-2 outline-slate-200">
                            <div className="w-auto h-16 flex justify-center items-center px-3  rounded-md">
                                <div className="w-12 h-12 flex justify-start items-center bg-amber-500 rounded-full">
                                    {/* Student  Image */}
                                    <img src="https://api.lorem.space/image/face?w=150&h=150" alt="" className="rounded-full w-full"/>
                                </div>
                            </div>
                            <div className="w-2/6 h-16 flex justify-start items-center px-3  rounded-md">
                                <h1 className="w-3/4 text-md font-bold">Abebe Kebede</h1>
                            </div>
                            <div className="w-1/6 h-16 flex justify-start items-center px-3  rounded-md">
                                <h1 className="w-3/4 text-md font-bold">RU0369/12</h1>
                            </div>
                            <div className="w-1/6 h-16 flex justify-start items-center px-3  rounded-md">
                                <h1 className="w-3/4 text-md font-bold">12:34pm</h1>
                            </div>
                            <div className="w-1/6 h-16 flex justify-center items-center px-3 rounded-md flex-row space-x-2">
                                <VerifiedIcon sx={{'font-size': '30px'}} className=" text-green-400 rounded-full"/>
                            </div>
                        </div>

                        <div className="w-full h-16 flex justify-start items-center mx-3 rounded-md space-x-1 bg-slate-50 outline outline-2 outline-slate-200">
                            <div className="w-auto h-16 flex justify-center items-center px-3  rounded-md">
                                <div className="w-12 h-12 flex justify-start items-center bg-rose-500 rounded-full">
                                    {/* Student  Image */}
                                    <img src="https://api.lorem.space/image/face?w=150&h=150" alt="" className="rounded-full w-full"/>
                                </div>
                            </div>
                            <div className="w-2/6 h-16 flex justify-start items-center px-3  rounded-md">
                                <h1 className="w-3/4 text-md font-bold">Alemu Demeke</h1>
                            </div>
                            <div className="w-1/6 h-16 flex justify-start items-center px-3  rounded-md">
                                <h1 className="w-3/4 text-md font-bold">RU0399/12</h1>
                            </div>
                            <div className="w-1/6 h-16 flex justify-start items-center px-3  rounded-md">
                                <h1 className="w-3/4 text-md font-bold">12:34pm</h1>
                            </div>
                            <div className="w-1/6 h-16 flex justify-center items-center px-3 rounded-md flex-row space-x-2">
                                <CancelIcon sx={{'font-size': '30px'}} className=" text-red-400 rounded-full"/>
                            </div>
                        </div>

                        <div className="w-full h-16 flex justify-start items-center mx-3 rounded-md space-x-1 bg-slate-50 outline outline-2 outline-slate-200">
                            <div className="w-auto h-16 flex justify-center items-center px-3  rounded-md">
                                <div className="w-12 h-12 flex justify-start items-center bg-indigo-400 rounded-full">
                                    {/* Student  Image */}
                                    <img src="https://api.lorem.space/image/face?w=150&h=150" alt="" className="rounded-full w-full"/>
                                </div>
                            </div>
                            <div className="w-2/6 h-16 flex justify-start items-center px-3  rounded-md">
                                <h1 className="w-3/4 text-md font-bold">Bekele Ketema</h1>
                            </div>
                            <div className="w-1/6 h-16 flex justify-start items-center px-3  rounded-md">
                                <h1 className="w-3/4 text-md font-bold">RU0369/12</h1>
                            </div>
                            <div className="w-1/6 h-16 flex justify-start items-center px-3  rounded-md">
                                <h1 className="w-3/4 text-md font-bold">12:34pm</h1>
                            </div>
                            <div className="w-1/6 h-16 flex justify-center items-center px-3 rounded-md flex-row space-x-2">
                                <VerifiedIcon sx={{'font-size': '30px'}} className=" text-green-400 rounded-full"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;