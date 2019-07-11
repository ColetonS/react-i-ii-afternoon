import React, {Component} from 'react'

export default class Card extends Component {

    render() {
          return(
            <div id='card'>
             <div>
                <h1>{`${this.props.cardInfo.name.first} ${this.props.cardInfo.name.last}`}</h1>
             </div>
              <h2>From: {`${this.props.cardInfo.city} ${this.props.cardInfo.country}`}</h2>
              <h2>Title: {`${this.props.cardInfo.title}`}</h2>
              <h2>Employer: {`${this.props.cardInfo.employer}`}</h2>
              <h2>Favorite Movies: </h2>
              {/* <p>{el.id}</p> */}
              <ol>
                <li>{`${this.props.cardInfo.favoriteMovies[0]}`}</li>
                <li>{`${this.props.cardInfo.favoriteMovies[1]}`}</li>
                <li>{`${this.props.cardInfo.favoriteMovies[2]}`}</li>
              </ol>
            </div>
          )
      }
}