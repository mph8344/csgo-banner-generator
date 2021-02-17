import React from 'react';
import './App.css';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter} from 'reactstrap';

class CourseModal extends React.Component {


    handler = () => {

        this.props.callParent();

    }


    render() {
        return(
            <Modal isOpen={this.props.modal} toggle={this.handler}>
                <ModalHeader>{this.props.courseName}</ModalHeader>
                <ModalBody>
                    {this.props.details}
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' className="btn btn-primary" onClick={this.handler}>Close</Button>
                </ModalFooter>
                
            </Modal>
            )
    }



}

export default CourseModal;