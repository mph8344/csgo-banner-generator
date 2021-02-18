import React, {useState} from 'react';
import * as htmlToImage from 'html-to-image';
import useFirestore from './hooks/useFirestore';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import {Button, Input, Form, FormGroup, Label} from 'reactstrap';
import ProgressBar from './comps/ProgressBar';


const BannerCreator = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e;
        console.log(selected);
        if (selected && types.includes(selected.type)) {
            console.log('i made it');
            setFile(selected);
            setError('');
        } else {
            console.log('here2');
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }

    }

  const handleClick = () => {


    var node = document.getElementById('testthing');
    
    var sendto = document.getElementById('renderto');
    
    htmlToImage.toBlob(document.getElementById('my-node'))
  .then(function (blob) {
    //window.saveAs(blob, 'my-node.png');
    changeHandler(blob);
  });
    
    
    }

  const {docs} = useFirestore('images');

  const otherHandler = (event) => {
    event.preventDefault();
    const form = event.target;
  
    var leftName = form.leftName.value;
    var leftImg = form.leftImg.value;
    var rightName = form.rightName.value;
    var rightImg = form.rightImg.value;
  
    document.getElementById('leftMost').innerHTML = '<img src="' + leftImg +'"/>';
    document.getElementById('left').innerHTML = '<h1>' + leftName + '</h1>';
    document.getElementById('right').innerHTML = '<h1>' + rightName + '</h1>';
    document.getElementById('rightMost').innerHTML = '<img src="' + rightImg +'"/>';

    //document.getElementById('mainbox').hidden = true;
  }

        return(
            <div className="test"> 

              <Form id="course" onSubmit={otherHandler}>
                      <FormGroup>
                          <Label for="leftName">Left Name</Label>
                          <Input type="text" name="leftName" id="leftName" placeholder='Name'/>
                      </FormGroup>
                      <FormGroup>
                          <Label for="leftImg">Left Image</Label>
                          <Input type="select" name="leftImg" id="leftImg">
                            {docs.map((doc) => 
                              <option key={doc.name} value={doc.url}>{doc.name}</option>
                            )}
                            </Input>
                      </FormGroup>
                      <FormGroup>
                          <Label for="rightName">Right Name</Label>
                          <Input type="text" name="rightName" id="rightName" placeholder='Name'/>
                      </FormGroup>
                      <FormGroup>
                          <Label for="rightImg">Right Image</Label>
                          <Input type="select" name="rightImg" id="rightImg">
                            {docs.map((doc) => 
                              <option key={doc.name} value={doc.url}>{doc.name}</option>
                            )}
                            </Input>
                      </FormGroup>
                </Form>

                <Button style={{margin: '5px'}} color='primary' type="submit" form="course" className="btn btn-primary">Ok</Button>
                
                <br/>
                <Button style={{margin: '5px'}} color='primary' className="btn btn-primary"  onClick={handleClick}>Click to Render</Button>
                <div className="output">
                { error && <div className="error">{error}</div>} 
                { file && <div> {file.name} </div>}
                { file && <ProgressBar file={file}  setFile={setFile} />}
            </div>
            </div>
        )


}


export default BannerCreator;