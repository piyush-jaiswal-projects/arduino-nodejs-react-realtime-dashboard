import React from 'react'

const RedLight = ({Lno}) => {
    return (
        <div className='light red ON' id={Lno}>
            <label>{Lno}</label>
        </div>
    );
}

export default RedLight;