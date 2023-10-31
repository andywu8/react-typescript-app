


import * as React from 'react';

function displayNums(num: number): string {
    let result = '';
    for (let i = 0; i < num; i++) {
      result += i.toString();
    }
    return result;
}
  

// Pascal Case
class NumberGenerator extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event: React.ChangeEvent) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event:React.FormEvent) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </>
        )
    }
}

export default NumberGenerator;