import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';

const ImageGrid = () => {

    const {docs} = useFirestore('images');
    //console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <p>{doc.name}</p>
                </div>
            ))}
        </div>
    )


}


export default ImageGrid;