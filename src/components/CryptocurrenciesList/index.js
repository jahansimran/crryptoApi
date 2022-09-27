import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoApiList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoApi()
  }

  getCryptoApi = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))

    this.setState({cryptoApiList: updatedData, isLoading: false})
  }

  render() {
    const {cryptoApiList, isLoading} = this.state
    return (
      <div className="currencies-list-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto-image"
            />
            <div className="crypto-table">
              <div className="contents-container">
                <p className="table-heading">Coin Type</p>
                <div className="table-right-side-heading">
                  <p className="table-heading">USD</p>
                  <p className="table-heading">EURO</p>
                </div>
              </div>
              <div className="api-item">
                {cryptoApiList.map(eachbitCoin => (
                  <CryptocurrencyItem
                    key={eachbitCoin.id}
                    cryptoDetails={eachbitCoin}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
