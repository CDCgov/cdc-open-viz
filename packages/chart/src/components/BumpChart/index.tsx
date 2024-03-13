import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { scaleLinear, scalePoint } from '@visx/scale';


const data = [
    {item: "Brother Sister Younger Siblings", rankings: [1,2,2,2,2,2,2]},
    {item: "Belt Rope Neck Tied", rankings: [2,1,1,1,1,1,1]},
    {item: "Broken Girlfriend Broke Up", rankings: [3,4,3,4,3,4,4]},
    {item: "Bullied Bullying School Being", rankings: [4,8,5,10,6,9,10]},
    {item: "Depressed Depression Suffered Mother", rankings: [5,7,6,5,4,5,6]},
    {item: "Overdose Pills Attempted Overdosed", rankings: [6,6,7,6,7,6,5]},
    {item: "Depression Has History Of", rankings: [7,9,9,7,8,7,7]},
    {item: "Vehicle Car Parked Truck", rankings: [8,3,4,3,5,3,3]},
    {item: "Friends Friend Party House", rankings: [9,10,10,9,9,10,9]},
    {item: "Blood Skull Head Brain", rankings: [10,5,8,8,10,8,8]}
]

const margin = { top: 20, bottom: 20, left: 30, right: 30 };
const BumpChartImplementation = ({ width=700, height=900 }) => {

    const xScale = scaleLinear({
        range: [margin.left, width - margin.right],
        domain: [0, data[0].rankings.length],
      });

    const yScale = scalePoint({
        range: [height - margin.bottom, margin.top],
        domain: data.map(d => d.item),
        padding: 0.5,
    });

    return (
        <svg width={width} height={height}>
            <Group>
                {data.map(d => (
                <LinePath
                    key={d.item}
                    data={d.rankings.map((value, index) => ({ x: index, y: value, item: d.item }))}
                    x={d => xScale(d.x)}
                    y={d => yScale(d.item)}
                    stroke="black"
                    strokeWidth={2}
                    fill="transparent"
                />
                ))}
            </Group>
        </svg>
    )
};
export default BumpChartImplementation
