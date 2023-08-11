import React from 'react';
import { Rings } from 'react-loader-spinner';

export default function loadingComp() {

    return (
        <div id="loading" style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            margin: 'auto',
            width: '100px',
            height: '100px',
        }}><Rings
                height="100"
                width="100"
                color="var(--defaut-header-color)"
                secondaryColor='black'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            /></div>
    )
}