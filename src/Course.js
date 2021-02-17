import React from 'react';
import './App.scss';
import { Card, CardBody, CardHeader, CardText, Button, CardFooter} from 'reactstrap';
import CourseModal from './CourseModal'

function selectCourse(course) {

    course.selectThis();
    var element = document.getElementById(course.courseName);
    var listBody = document.getElementById("courseListBody");

    if (!course.state.selected) {
        element.style.border = "solid green";
        var newRow = document.createElement('tr');
        newRow.id = "course".concat(course.courseNum);

        var rowHead = document.createElement('td');
        rowHead.innerHTML = course.courseName
        rowHead.scope="row";

        var rowDesc = document.createElement('td');
        rowDesc.innerHTML = course.desc;

        newRow.appendChild(rowHead);
        newRow.appendChild(rowDesc);

        listBody.appendChild(newRow);
        
    } else {

        var courseRow = document.getElementById("course".concat(course.courseNum));
        listBody.removeChild(courseRow);
        element.style.border = "";
    }
    
}

class Course extends React.Component {

    constructor(props) {
        super(props);
        this.desc = props.desc;
        this.courseName = props.courseName;
        this.details = props.details;
        this.courseNum = props.number;


        this.state = {
            modal: false,
            selected: false,
            buttonText: 'Add'
        }


    }

    selectThis() {

        if (!this.state.selected) {
            this.setState({buttonText: 'Remove', selected: true})
        } else {
            this.setState({buttonText: 'Add', selected: false})
        }
        
    }

    toggle = () => this.setState({modal: !this.state.modal});

    render() {

        return ( 
            <React.Fragment>

                <Card id={this.courseName} className="courseCard">

                    <CardHeader>{this.courseName}
                        <img src={'./information.png'} alt="Click to expand details" onClick={this.toggle}></img>
                        <CourseModal modal={this.state.modal} callParent={this.toggle} details={this.details} courseName={this.courseName}/>
                    </CardHeader>

                    <CardBody>
                        <CardText>{this.desc}</CardText>       
                    </CardBody>

                    <CardFooter>
                        <Button color='primary' className="btn btn-primary"  onClick={() => selectCourse(this)}>{this.state.buttonText}</Button>
                    </CardFooter>
                </Card>

            </React.Fragment>
        )


    }





}

export default Course;