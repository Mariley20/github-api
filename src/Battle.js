import React, {Component} from 'react';
import { Row, Col, Form, Label, Button, Input } from 'reactstrap';
import NavHome from './NavHome';

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1 : null,
      player2 : null
    }
  }
  user () {
    this.setState ({
      player1 : this.state.player1,
      player2 : this.state.player2
    });
    console.log(this.state);
  }

render() {
  const { model } = this.props;
  // console.log(model.searchPlayer());
  return (
    <div>
    <NavHome />
    <Form  onSubmit={e => { e.preventDefault();
              model.searchPlayer();
            }} >
        <Row>
          <Col>
              <Label>Player One</Label>
              <Input type="text" onChange={e => model.user.player1 = e.target.value} placeholder="github username" />
              <Button type="submit">Submit</Button>

          </Col>
          <Col>
            <Label>Player Two</Label>
            <Input onChange={e => model.user.player2 = e.target.value} type="text" placeholder="github username" />
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
        </Form>
      </div>
  )
}
}
export default Battle;
