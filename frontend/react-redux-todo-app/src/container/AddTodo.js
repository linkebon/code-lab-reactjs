import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo} from '../actions';

class AddTodo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let text;
        return (
            <div className="container">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (!text.value.trim()) {
                        return;
                    }
                    this.props.dispatch(addTodo(Date.now(), text.value));
                }}>

                    <textarea id="todoText" rows="6" cols="70" style={{resize: 'none'}} ref={node => {
                        text = node;
                    }}>
                    </textarea>
                    <br/>
                    <button className="btn-default btn-primary" type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(addTodo, dispatch)
    }
}

export default connect(mapDispatchToProps)(AddTodo)