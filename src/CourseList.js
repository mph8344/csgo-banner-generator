import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Course from './Course';

const courses = [ {name: 'swen-250', desc: 'personal software eng',
                    details: 'C and fun with vi and command line'},
                {name: 'swen-331', desc: 'secure software',
                    details: 'Fuzzer - you will love it, you will fear it!'},
                {name: 'swen-440', desc: 'system architecture',
                    details: 'Services?  What what\'s a service?  I need to do math for metrics?'},
                {name: 'swen-344', desc: 'web engineering',
                    details: 'You mean web pages, right?  Wait, there\'s more?'}
                ];


class CourseList extends React.Component {

    render() {

        return (
        <div id="courses" className="courseDiv">
            <Card>
            <CardHeader className="courseHeader">Courses</CardHeader>
                <CardBody>
                    {courses.map((course) => 
                        <Course key={course.name} courseName={course.name} desc={course.desc} details={course.details} number={courses.indexOf(course)}/>
                    )}
                </CardBody>
            </Card>
        </div>
        )

    }

}

export default CourseList;