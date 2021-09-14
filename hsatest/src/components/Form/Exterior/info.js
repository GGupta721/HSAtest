import React, {useState} from 'react';

// const Info = ({props}) => {

// }

class Info extends React.Component {
    showInfo = false;
    onButtonClickHandler = () => {
        this.setState({ showInfo: this.showInfo });
        console.log("Clicked");
    };

    render() {
        return (
            <div>
                {this.showInfo && <p>Heyo</p>}
                <button onClick={this.onButtonClickHandler}>Info</button>
            </div>
        );
    }
}

export default Info;