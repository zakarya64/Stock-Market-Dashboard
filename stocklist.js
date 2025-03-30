export const StockList = ({ stocks, onSelectStock }) => {
    return (
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol} onClick={() => onSelectStock(stock)}>
            {stock.name} ({stock.symbol})
          </li>
        ))}
      </ul>
    );
  };