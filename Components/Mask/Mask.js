import React from 'react';
import ParamsPanel from '../ParamsPanel/ParamsPanel';
import './style.css';
import './animation.css';

class Mask extends React.Component {
    render() {
        return (
            <div className={'mask'}>

                <ParamsPanel/>
                
            </div>
        )
    }
}


export default Mask;