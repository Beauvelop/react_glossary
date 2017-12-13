var React = require('react'); 
var ReactDOM = require('react-dom');
// var Search = require('./components/Search.jsx') // is .jsx necessary?

var words = require('./wordsDB'); // ok


class Result extends React.Component {  /***********Result**************/
    

    arrMap(input) {
        return input.map(item => item);
    }

    render() {
        return (
            <div className="in-stock">
                <h2><a href="#">{this.props.word.word}</a></h2>
                <p>{this.props.word.meaning}</p>
                <p>{this.props.word.example}</p>
                <h6>{this.arrMap(this.props.word.tag)}</h6>
            </div>    

        )
    }
}

class Results extends React.Component {  /***********Results**************/
    constructor(props) {
        super(props);
        this.state = {
            found: props.words
        }
        // console.log("Results props: ", props)
    }

    componentWillReceiveProps(nextProps) {
        var found = nextProps.words.filter(data => {
            return data.word.toLowerCase().match(nextProps.query.toLowerCase()) ||
                data.meaning.toLowerCase().match(nextProps.query.toLowerCase()) ||
                data.example.toLowerCase().match(nextProps.query.toLowerCase())
          })

        this.setState({
            found: found
        });
        // console.log(found);
    }

    render() {
        return (
            <div className="results">
            {this.state.found.map(function(word, i) {
                return (
                    <Result word={word} key={i}/>
                )
            })}
            </div>
        )
    }
}


class SearchBar extends React.Component {    /***********SearchBar**************/
    searchBarHandleQuery(evt) {
        this.props.onQuery(evt.target.value)  // establishing props
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={this.searchBarHandleQuery.bind(this)} placeholder="Search"/>
            </div>
        )
    }
}

class Search extends React.Component { /***********SEARCH**************/
    
    
        constructor(props) {
            super(props)
            this.state = ({
                query: ''
            })
        }
    
        searchComponentQHandler(query) {
            this.setState({
                "query": query.toLowerCase().trim()
            })
        }
    
        render() {
            return(
                <div className="search" >
                    <SearchBar onQuery={this.searchComponentQHandler.bind(this)} />
                    
                    <Results words={this.props.words} query={this.state.query}/>
                    </div>
            )
        }
    }

ReactDOM.render(<Search words={words} />, document.getElementById('app')); 