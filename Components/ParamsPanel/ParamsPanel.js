import React, { Component } from 'react'
import {connect} from 'react-redux';
import cycle_actions from '../../Ducks/LifeCycle/actions';
import './style.css';

class ParamsPanel extends Component {
    closeParamsPanel=()=>{
        this.props.set_mask_animation("unmount");
    }
    render() {
        return (
            <div className={'params-panel'}>
            <div className={'close-params'} onClick={this.closeParamsPanel} >+</div>    
            </div>
        )
    }
}
const mapStateToProps= state =>({
    cyclestate: state.cyclestate
})
const mapDispatchToProps = dispach =>({
    set_mask_animation : cycle => dispach(cycle_actions.maskanimate(cycle))
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
                        )(ParamsPanel);

