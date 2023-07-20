import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    isActiveCountryId: countryAndCapitalsList[0].id,
  }

  selectCapitalName = event => {
    this.setState({isActiveCountryId: event.target.value})
  }

  getCountryName = () => {
    const {isActiveCountryId} = this.state
    const filterCountryName = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === isActiveCountryId,
    )
    return filterCountryName
  }

  render() {
    const {isActiveCountryId} = this.state
    const {country} = this.getCountryName(isActiveCountryId)

    return (
      <div className="capitals-app-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="input-select-container">
            <select
              className="select-container"
              id="countries"
              onChange={this.selectCapitalName}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  className="country-option"
                  key={eachCountry.id}
                  value={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="countries" className="label-element">
              is capital of which country
            </label>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
