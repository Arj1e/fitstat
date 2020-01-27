import React from 'react';
import './style.css';

const Mask =(props)=>{   
    
        return(
            <div className={'mask'}>
                {props.content}

            </div>
        );
    
}
export default Mask;