var Note = React.createClass({
    getInitialState: function(){
        return { editing: false }    
    },
    edit: function(){
        this.setState({ editing: true });
    },// custom function to attach to edit button
    save: function(){ // save new enteries to notes
        var val = this.refs.newText.getDOMNode().value;
        //this.props.children = val;
        console.log("save note" + val);
        this.props.onChange(val, this.props.index);
        this.setState({ editing: false });
    },
    remove: function(){
        console.log("remove note " + this.props.index);
        this.props.onRemove(this.props.index);
    }, // custom function  to attach to remove button
    renderDisplay: function(){
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick = {this.edit} 
                        className="btn btn-primary glyphicon glyphicon-pencil"></button>
                    <button onClick = {this.remove} 
                        className="btn btn-danger glyphicon glyphicon-trash"></button>
                </span>
            </div>
        );
    },
    renderForm: function(){
        return (
            <div className="note">
                <textarea ref="newText" 
                    defaultValue={this.props.children} className="form-control"></textarea>
                <button onClick = {this.save}  className="btn btn-success btn-sm  glyphicon glyphicon-floppy-disk"></button>
            </div>
        )
    },
    render: function() {
        if( this.state.editing ){
            return this.renderForm();
        }else{
            return this.renderDisplay();
        }
    }
});

// Parent component of <Note />
var Board = React.createClass({
    propTypes:{ // The propTypes object allows you to validate props being passed to your components.
      count: function(props, propName){ // property name
        console.log(props);
        // the two if will deal with validation
        if (typeof props[propName] !== "number"){
            return new Error("The count property must be a number");
        } // make sure count always numver
        if(props[propName] > 100){
            return new Error("Creating " + props[propName] + "notes is ridiculus");
        }
      }  
    }, // 创建自定义的props对象
    getInitialState: function(){
      return { // return to this.state
          notes: [
             //  'Call Bill', 'Email Lisa', 'Make dentist appt', 'Send Proposal'
          ] // wait for content from add button
      };  
    },
    add: function(text){
//        var arr = this.state.notes;
//        arr.push(text);
//        this.setState({ notes: arr });
//    },
    update: function(newText, i){
        var arr = this.state.notes;
        arr[i] = newText;
        this.setState({notes: arr});
        
    },
    remove: function(i){
        var arr = this.state.notes;
        arr.splice(i, 1);
        this.setState({notes: arr});
    },
    eachNote: function(note, i){
        return (
            <Note key={i} index={i} onChange ={this.update} 
                  onRemove={this.remove}> 
                {note} </Note>
            // Attach onChange & onRemove to function of Note
        );
    },
    render: function(){
        console.log(this.state.notes);
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)} 
            </div>
        );
    }
});

React.render(<Board count={10} />, 
    document.getElementById('react-container'));