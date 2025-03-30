import React from "react";
import { StockChart } from "./StockChart";
import { StockList } from "./StockList";
import { fetchStockData } from "./api";
import { useEffect, useState } from "react";

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    fetchStockData().then(data => {
      setStocks(data);
      if (data.length > 0) setSelectedStock(data[0]);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Stock Market Dashboard</h1>
      <StockList stocks={stocks} onSelectStock={setSelectedStock} />
      {selectedStock && <StockChart stock={selectedStock} />}
    </div>
  );
};

export default App;