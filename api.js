const API_KEY = "NS01Y6H8HJWTOHT1";

export const fetchStockData = async () => {
  const symbols = ["AAPL", "MSFT"];
  const stockData = await Promise.all(
    symbols.map(async (symbol) => {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${NS01Y6H8HJWTOHT1}`
      );
      const data = await response.json();
      const timeSeries = data["Time Series (Daily)"];
      
      if (!timeSeries) return null;
      
      const prices = Object.keys(timeSeries).slice(0, 7).map(date => ({
        date,
        value: parseFloat(timeSeries[date]["4. close"]),
      })).reverse();

      return {
        name: symbol,
        symbol,
        prices,
      };
    })
  );

  return stockData.filter(stock => stock !== null);
};