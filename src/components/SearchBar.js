import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = { term: ''}

    onInputChange= (event)=> {
        this.setState({
               term: event.target.value
        })
    }
    onFormSubmit=(event)=> {
        event.preventDefault(); 
        this.props.onFormSubmit(this.state.term)

        }


  render() {
    return (
        <div className="search-bar ui segment" style={{backgroundColor:'gray' }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{fontSize:15 }}>Video Search</label>
            <input
              type="text"
              placeholder="search anything"
              value={this.state.term}
              onChange={this.onInputChange}
              
            />
          </div>
        </form>
      </div>
    );
  }
}
