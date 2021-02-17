import React from 'react';
import './App.css';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';

class Banner extends React.Component {

    constructor(props) {
        super(props);
        
        this.leftName = this.props.leftName
        this.leftImg = this.props.leftImg
        this.rightName = this.props.rightName
        this.rightImg = this.props.rightImg

            //left: polygon(0 0, 100% 0, 100% 100%, 80% 100%, 15% 80%, 0 80%);
            //right: polygon(0 0, 100% 0, 100% 80%, 85% 80%, 20% 100%, 0 100%);
            //polygon(0 0, 100% 0, 100% 80%, 0 80%);
            //clip-path: polygon(0 0, 0 80%, 23% 80%, 33% 90%, 67% 90%, 77% 80%, 100% 80%, 100% 0);
    }

    render() {
        return(

            
                <div className="flexcontainer" id="testthing"> 
                    <div className="newbox" id = "leftMost">{this.props.leftName}</div>
                    <div className="newbox" id = "left">{this.props.leftImg}</div>
                    <div className="centerbox" id ="center"></div>
                    <div className="newbox" id = "right">{this.props.rightName}</div>
                    <div className="newbox" id = "rightMost">{this.props.rightImg}</div>
                </div>
            

            )
    }



}

export default Banner;