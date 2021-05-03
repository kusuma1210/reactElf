import React from 'react';
import WorkoutCreate from './WorkoutCreate';
import { Container, Row, Col } from 'reactstrap';
import WorkoutCreate from './WorkoutCreate';
import WorkoutsTable from './WorkoutsTable';

class WorkoutIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      workouts: []
    }
  }

  componentWillMount() {
    this.fetchWorkouts()
  }

  



  fetchWorkouts = () => {
    fetch("http://localhost:3000/api/log", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((logData) => {
        return this.setState({ workouts: logData })
      })
  }
  workoutDelete = (event) => {
    fetch(`http://localhost:3000/api/log/${event.target.id}`, {
      method: 'DELETE',
      body: JSON.stringify({ log: { id: event.target.id } }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchWorkouts())
  }
  

  render() {
    return (
      <Container>
        <Row>
        <Col md="3">
    <WorkoutCreate token={this.props.token} updateWorkoutsArray={this.fetchWorkouts}/>
</Col>
          <Col md="9">
            <h2>Log a workout to see table this will be added in the upcoming modules</h2>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default WorkoutIndex;