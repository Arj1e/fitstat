import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import app_actions from '../../Ducks/AppStore/actions';
import cycle_actions from '../../Ducks/LifeCycle/actions';
class LoginPanel extends React.Component{
    constructor(props){
        super(props)
        this.loginRef = React.createRef();
        this.state= {
            animation:'slide-in-elliptic-top-fwd'
            }
    }
    
    setlogin = (event)=>{
        event.preventDefault();
        this.props.set_userid(this.loginRef.current.value);     
    }
    setCycle =cycle =>{
        this.props.set_cycle(cycle);
    }
    checkSesion =()=>{
        if(this.props.appstate.user_id > 0 ){
            setTimeout(()=>{this.setState({animation : 'slide-out-blurred-top'})},100)
           
            setTimeout(()=>{
                this.setCycle('unmount');
            },1100)
            
        }
    }
    componentDidMount(){
        this.checkSesion();
    }
    componentDidUpdate(){
        this.checkSesion();
    }
    render(){
        const animation = this.state.animation;
         return( 
                <div className={'login-window '+animation} >Fitstat  {this.props.appstate.user_id} <br></br>
                <input ref={this.loginRef} /><br></br>
                <button onClick={this.setlogin}>Go</button>
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
    set_cycle : cycle => dispach(cycle_actions.cycleset(cycle))
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPanel);