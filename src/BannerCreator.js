import React from 'react';
import * as htmlToImage from 'html-to-image';
import useFirestore from './hooks/useFirestore';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import {Button, Input, Form, FormGroup, Label} from 'reactstrap';







const BannerCreator = () => {

  const handleClick = () => {

    var node = document.getElementById('testthing');
    
    var sendto = document.getElementById('renderto');
    
      htmlToImage.toPng(node)
        .then(function (dataUrl) {
          console.log('here');
          var img = new Image();
          img.src = dataUrl;
          sendto.appendChild(img);
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
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
            </div>
        )


}


export default BannerCreator;