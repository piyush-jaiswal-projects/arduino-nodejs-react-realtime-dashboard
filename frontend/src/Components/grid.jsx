import React from 'react'

import "./styles.css"
import GreenLight from './green-light';
import YellowLight from './yellow-light';
import RedLight from './red-light';

const Grid = ({ custom, lightId }) => {
    const customId = custom + "-grid";
    const redId = "R" + lightId;
    const greenId = "G" + lightId;
    const yellowId = "Y" + lightId;

    return (
        <div className='card-grid' id={customId}>
            <RedLight Lno={redId} />
            <YellowLight Lno={yellowId} />
            <GreenLight Lno={greenId} />
        </div>
    );
}

export default Grid;