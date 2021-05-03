import React from 'react';
import { Table, Button } from 'reactstrap';

const WorkoutTable = (props) => { //1
  return (
    <div>
        <h3>Workout History</h3>
        <hr />
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Result</th>
                    <th>Definition</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
    props.workouts.map((workout, id) => { //1
        return ( //2
            <tr key={id}> //3
                <th scope="row">{workout.id}</th>
                <td>{workout.result}</td>
                <td>{workout.definition}</td>
                <td>{workout.description}</td>
                <td>
                    //4
                    <Button id={workout.id} onClick={props.delete} color="danger">Delete</Button>| //4
                    <Button id={workout.id} onClick={e => props.update(e, workout)} color="warning">Update</Button>
                </td>
            </tr>
        )
    })
}
            </tbody>
        </Table>
    </div>
);
}

export default WorkoutTable;