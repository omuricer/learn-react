import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContentChild extends Component {
  render() {
    return (
      <div>
        <p>コンテンツコンポーネントの子コンポーネントで出力</p>
        { /* コメント */ }
        <div className="border border-primary">
          <p>My name is { this.props.name }.</p>
          <p>I am { this.props.age } yaers old.</p>
          <p>{ this.props.user.name }</p>
          <ul>
            { this.props.user.hobbies.map(( hobby, i ) =>
              <li className="text-danger" key={ i }>{ hobby }</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

ContentChild.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}
