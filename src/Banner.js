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


    }

    render() {
        return(

            
                <div className="flexcontainer"> 
                    <div className="newbox" id = "leftMost">{this.props.leftName}</div>
                    <div className="newbox" id = "left">{this.props.leftImg}</div>
                    <div className="newbox" id = "right">{this.props.rightName}</div>
                    <div className="newbox" id = "rightMost">{this.props.rightImg}</div>
                </div>
            

            )
    }



}

export default Banner;