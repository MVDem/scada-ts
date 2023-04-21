import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ISheduleData } from './CardShedule';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';

export function ChartBar() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  const userData = [
    { date: 1, input1: 1220, input2: 980 },
    { date: 2, input1: 1280, input2: 1120 },
    { date: 3, input1: 1330, input2: 1160 },
    { date: 4, input1: 1290, input2: 1040 },
    { date: 5, input1: 1280, input2: 1080 },
    { date: 6, input1: 420, input2: 620 },
    { date: 7, input1: 446, input2: 580 },
  ];
  const [data, setData] = useState<ISheduleData>({
    labels: userData!.map((e) => e?.date),
    datasets: [
      {
        label: 'Current input 1',
        data: userData!.map((e) => e?.input1),
        backgroundColor: '#9932CC',
      },
      {
        label: 'Current input 1',
        data: userData!.map((e) => e?.input2),
        backgroundColor: '#3B83BD',
      },
    ],
  });
  console.log(setData);

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}
