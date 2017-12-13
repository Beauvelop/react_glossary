var React = require('react')

class Result extends React.Component {
    
    priceDisplay(input) {
        return (input/100.00);
    };

    render() {
        return (
            <div className="in-stock">
                <h2><a href="#">{this.props.words.word}</a></h2>
                <p>${this.priceDisplay(this.props.words.meaning)}</p>
                <p>{this.props.words.tag}</p>
            </div>
        )
    }
}

module.exports = Result;