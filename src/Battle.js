import React from 'react';
import { Container, Row, Col, Form, Label, Button, Input } from 'reactstrap';
import NavHome from './NavHome';
const Battle = ({model}) => {
  return (
    <div>
    <NavHome />
    <Container>
        <Row>
          <Col>
            <Form >
              <Label>Player Two</Label>
              <Input type="text" placeholder="github username" />
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
          <Col>
          <Form >
            <Label>Player Two</Label>
            <Input type="text" placeholder="github username" />
            <Button type="submit">Submit</Button>
          </Form>
          </Col>
        </Row>
      </Container>
      </div>
  )
}
export default Battle;
