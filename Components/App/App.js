import React from 'react';
import './style/App.css';
import LoginPanel from '../LoginPanel/LoginPanel';
import MainButton from '../MainButton/MainButton';
import Mask from '../Mask/Mask';
import { connect } from 'react-redux';
class App extends React.Component {

    render() {
        if (this.props.cyclestate.login_panel_cycle === "unmount") {
            if (this.props.cyclestate.mask_params_cycle == "unmount") {
                return (
                    <div>
                        <MainButton />
                    </div>
                )
            } else {
                return (
                    <div>
                        <Mask />
                        <MainButton />
                    </div>
                )
            }
        } else {
            return (
                <LoginPanel />
            )
        }
    }
}
const mapStateToProps = state => ({
    appstate: state.appstate,
    cyclestate: state.cyclestate
})

export default connect(mapStateToProps, {})(App);