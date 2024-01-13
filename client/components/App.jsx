import React from 'react';

import { getArtImages, getArtObj } from '../../server/api/huam';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      search: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { search } = this.state;

    return (
      <div>
        <input type="text" value={search} onChange={this.onChange} />
        <button type="button" onClick={() => console.log(search)}>Search for Art</button>
      </div>
    );
  }
}

export default App;
