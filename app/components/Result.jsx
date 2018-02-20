var React = require('react');

class Result extends React.Component {
  arrMap(input) {
    return input.map(item => item);
  }

  render() {
    return (
      <div className="in-stock">
        <h2>
          <a href="#">{this.props.word.word}</a>
        </h2>
        <p>{this.props.word.meaning}</p>
        <p>{this.props.word.example}</p>
        <h6>{this.arrMap(this.props.word.tag)}</h6>
      </div>
    );
  }
}

module.exports = Result;
