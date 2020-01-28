import React from 'react';
import ParamsPanel from '../ParamsPanel/ParamsPanel';
import './style.css';
import './animation.css';
import {connect} from 'react-redux';
import app_actions from '../../Ducks/AppStore/actions';
import cycle_actions from '../../Ducks/LifeCycle/actions';

class Mask extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            animation:'fade-in'
            }
    }
   animationWhenUnmount= ()=>{
        if(this.props.cyclestate.mask_params_animation =="unmount"){
        this.setState({animation:'fade-out'});
        setTimeout(()=>{
            this.props.set_mask_cycle("unmount");
        },1000);
        }
    }
    componentWillMount(){
        this.animationWhenUnmount();
    }
    componentDidUpdate(){
        this.animationWhenUnmount();
    }
    render() {
        return (
            <div className={this.state.animation+' mask'}>

                <ParamsPanel/>
                
            </div>
        )
    }
}


const mapStateToProps= state =>({
    appstate: state.appstate,
    cyclestate: state.cyclestate
})
const mapDispatchToProps = dispach =>({
    set_userid: id => dispach(app_actions.idset(id)),
    set_cycle : cycle => dispach(cycle_actions.cycleset(cycle)),
    set_mask_cycle : cycle => dispach(cycle_actions.maskparams(cycle)),
    set_mask_animation : cycle => dispach(cycle_actions.maskanimate(cycle))
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mask);