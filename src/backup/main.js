// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
	render: function(){
  	return <h3 style={{ color: 'pink'}}> {this.props.children} </h3>
  }
});

// React.createClass(...)  It creates a class and a helper function to create ReactElements
var HellowTittle = React.createClass({
    displayName: 'HellowTittle',
    constructor: function(props) {
        super(props);
        this.state = {name: 'SWEETY MEOW'};
    },
    render: function(){
        return (<div>
                <Header> Hello { this.props.name } </Header>
                <input type='text' ref='name' />
                <button> Greet! </button>
                </div>
               );    
            //(React.DOM.h3({className: "title"}, "Hellow, World! I'm " +  this.props.name ));
    },// render
    componentDidMount: function(){
       console.log("component Did Mount");  
    },    
    componentWillMount: function(){
       console.log("component Will Mount");  
    }
}); 

ReactDOM.render(
    React.createElement(HellowTittle, {name: "Original Tittle"}),
    document.getElementById('tittle-container')
);
//ReactDOM.render(ReactElement, DOMElement, callback);

// createFactory
var creatListItemFactory = React.createFactory(HellowTittle);
var title_group =  [creatListItemFactory({
                        className: 'title1', name: "Wendy 1. ", key: 'item-1' }), 
                    creatListItemFactory({
                        className: 'title2', name: "Wendy 2. ", key: 'item-2' }),
                    creatListItemFactory({
                        className: 'title3', name: "Wendy 3. ", key: 'item-3' })
                   ]; 
// 为什么className不起作用？
// all of items which create by creatListItemFactory(), will have same {className: 'title'}
var divItems = React.createElement('div', {className: 'div-group'}, title_group );

ReactDOM.render( divItems, document.getElementById('factory-container'));
