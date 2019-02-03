import React from "react";

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        //1. Stop the form from submitting
        event.preventDefault();
        //2. Get the text from that input
        console.log(this.myInput.value);
        const storeName = this.myInput.value;
        this.props.history.push(`/store/${storeName}`);
        //3. Change the page to /store/whatever-they-entered
    };

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input
                    type="text"
                    required
                    placeholder="Store Name"
                    ref={input => (this.myInput = input)}
                />
                <button type="submit">Visit Store -></button>
            </form>
        );
    }
}

export default StorePicker;
