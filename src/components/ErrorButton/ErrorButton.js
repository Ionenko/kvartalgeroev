import React, {Component} from 'react';

class ErrorButton extends Component {
    state = {
        renderError: false
    };

    render() {
        console.log('render');

        if(this.state.renderError){
            this.foo.bar = 0;
        }

        return (
            <button onClick={() => this.setState({renderError: true})}>
                Throw Error
            </button>
        );
    }
}

export default ErrorButton;