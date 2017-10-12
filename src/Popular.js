import React, {Component} from 'react';
import NavHome from './NavHome'

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validate : null
    }
  }

render() {
  const { model } = this.props;
  console.log(model)
  return (
    <div>
    <NavHome />
    </div>
  )
}
}
export default Popular;
