var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
    render: function() {
        return (
          <div className="app">
            <h4 className="hint">This is react class access their text attribute with <b>this.props.text:</b></h4>
            <h3> {this.props.text}</h3>
            <h4 className="hint">This is react class access their children with <b>this.props.children:</b> </h4>
            <p>{this.props.children}</p>
          </div>
        );
    }
});

ReactDOM.render(
    <div> 
        <App text = "Hello World">This is first APP Component </App>   
        <App text = "How are your?"> This is Second APP Component </App>    
        <App text = "Goodbay">This is Third APP Component </App>
    </div>,        
    document.getElementById('anchor')
);
//ReactDOM.render(
//  <h1>Hello, world!</h1>,
//  document.getElementById('anchor')
//);