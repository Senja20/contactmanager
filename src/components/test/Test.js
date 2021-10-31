import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        title: '',
        body: ''
    };

componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => this.setState ({
        title: data.title,
        body: data.body}

  ))
}
/*componentWillMount () {
    console.log("componentWIllMount")
}
componentDidUpdate () {
    console.log("componentdidUpdate")
}
componentWillUpdate () {
    console.log("will update")
}

componentWillReciveProps (nextProps, nextState) {
    console.log("componentWillReciveProps")

}*/
    render() {
        const {title, body} = this.state;

        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}
