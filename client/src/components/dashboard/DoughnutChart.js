import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { data } from './config/chart.config'
 
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    return ( 
        <div className="w-1/2 h-auto flex justify-between items-center flex-col">
            <div className="w-full h-16 flex justify-start items-center">
                <h1 className="w-3/4 text-2xl font-bold ">Activities</h1>
            </div>
            <div className="w-full h-64 flex justify-center items-center bg-white rounded-xl shadow-lg">
                <Doughnut data={data} options={{maintainAspectRation: false}}/>
            </div>
        </div>
     );
}
 
export default DoughnutChart;