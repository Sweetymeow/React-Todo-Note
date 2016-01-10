// main.js
var React = require('react');
var ReactDOM = require('react-dom');

// Hellow World section
var CommentBox = React.createClass({
    displayName: 'CommentBox',
    render: function(){
        return (
            React.createElement('div', {className: "commentBox"},
                "Hellow, World! I'm a CommentBox."                   
            )
        ); // return
    }// render
});

ReactDOM.render(
//  <h1>Hello, world!</h1>,
    React.createElement(CommentBox, null),
    document.getElementById('app')
);

// Title Section
// React.createClass(...)  It creates a class and a helper function to create ReactElements
var HellowTittle = React.createClass({
    displayName: 'HellowTittle',
    render: function(){
        return (
            React.DOM.h3({className: "title"}, "Hellow, World! I'm " +  this.props.name )
        ); // return
    }// render
}); 

ReactDOM.render(
    React.createElement(HellowTittle, {name: "Wendy MEOW"}),
    document.getElementById('tittle-container')
);

// createFactory
var creatListItemFactory = React.createFactory(HellowTittle);

ReactDOM.render(
    creatListItemFactory({name: "Wendy MEOW"}),
    document.getElementById('factory-container')
);

// React.js Essentials  - List section
// built-in factory functions to create the common HTML tags
var listItemElement1 = React.DOM.li({ className: 'item-1', key: 'item-1' }, 'Item 1'),
    listItemElement2 = React.DOM.li({ className: 'item-2', key: 'item-2' }, 'Item 2'),
    listItemElement3 = React.DOM.li({ className: 'item-3', key: 'item-3' }, 'Item 3');

var listOfItems = React.DOM.ul({ 
        className: 'list-of-items' }, 
        [ listItemElement1, listItemElement2, listItemElement3]
    );

ReactDOM.render(listOfItems, document.getElementById('react-application'));


//var MyComponent = React.createClass({/*...*/});
//var myElement = <MyComponent someProperty={true} />;
//ReactDOM.render(myElement, document.getElementById('example'));

// JSX Syntax
// Input (JSX):
//var Nav_input = React.createClass({ }),
//    app_input = <Nav_input color="blue" />; 
//var Nav_output = React.createClass({ displayName: "Nav_output", }),
//    app_output = React.createElement(Nav_output, {color:"blue"});  // Output (JS):

