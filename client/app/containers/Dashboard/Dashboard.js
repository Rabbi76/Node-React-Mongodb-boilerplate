import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, withRouter, Route, NavLink } from "react-router-dom";
import DetailsSidebar from '../Home/DetailsSidebar';
import { Button, SplitButton, MenuItem, Form, FormControl, FormGroup, InputGroup, ControlLabel, Col, HelpBlock, Modal } from 'react-bootstrap';

//action import
// import { getAllCanvas } from '../../actions/canvasAction'


class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {

        };
    }

    // componentDidMount() {
    //     this.props.dispatch(getAllCanvas(this.props))
    // }

    // componentWillReceiveProps(newProps) {
    //     var allCanvasList = newProps.allCanvas
    //     console.log('componentWillReceiveProps');
    //     console.log(allCanvasList)
    //     this.setState({
    //         allCanvas: allCanvasList
    //     })
    // }


    render() {


        return (
            <div>

                    {/* <DetailsSidebar /> */}
                

                <div className="marTop50 mainView">

                    <h2>Welcome To DashBoard</h2>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        // allCanvas: state.canvas.allCanvas
    };
};

export default withRouter(connect(mapStateToProps)(Dashboard));