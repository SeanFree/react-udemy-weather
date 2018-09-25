import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    return `Average: ${(data.reduce((a, b) => a + b) / data.length).toFixed(2)}`;
}

export default (props) => {
    return (
        <div>
            <Sparklines data={props.data} height={150} width={180}>
                <SparklinesLine color={props.color}></SparklinesLine>
                <SparklinesReferenceLine type="avg"></SparklinesReferenceLine>
            </Sparklines>
            <div>{`${average(props.data)} ${props.unit}`}</div>
        </div>
    );
}