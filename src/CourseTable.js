import React from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap'

class CourseTable extends React.Component {


    render() {


        return (

            <div className="courseDiv">
                <Card >
                    <CardHeader className="courseHeader">Your Selections</CardHeader>
                    <CardBody>
                        <Table>
                            <thead>
                                <tr style={{backgroundColor: '#f8f8f8'}}>
                                    <th>Course Name</th>
                                    <th>Course Description</th>
                                </tr>
                            </thead>
                            <tbody id="courseListBody">
                                
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

            </div>

        )



    }




}




export default CourseTable;