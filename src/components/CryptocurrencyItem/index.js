import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {id, currencyLogo, currencyName, usdValue, euroValue} = cryptoDetails

  return (
    <li className="contents-container">
      <div className="image-cont">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="heading">{currencyName}</p>
      </div>
      <div className="table-right-side-heading">
        <p className="usd-heading">{usdValue}</p>
        <p className="euro-heading">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
