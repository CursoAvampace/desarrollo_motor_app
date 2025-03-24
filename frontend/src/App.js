import React, { useState, useEffect } from 'react';
import api from './api/api';
import SummarySection from './components/SummarySection';
import StagesTimeline from './components/StagesTimeline';
import AlterationCard from './components/AlterationCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [summaryData, setSummaryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSummaryData() {
      try {
        const data = await api.getSummary();
        setSummaryData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error al cargar los datos');
        setLoading(false);
      }
    }
    loadSummaryData();
  }, []);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Desarrollo Motor Infantil</h1>
        <p>Resumen interactivo y visual</p>
      </header>
      <div className="container">
        {summaryData.map((item, index) => {
          if (item.type === 'Etapa') {
            return <StagesTimeline item={item} key={index} />;
          } else if (item.type === 'Trastorno') {
            return <AlterationCard item={item} key={index} />;
          } else {
            return <SummarySection item={item} key={index} />;
          }
        })}
      </div>
    </div>
  );
}

export default App;
