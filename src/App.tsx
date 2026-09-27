import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import WeatherCard from './components/WeatherCard';

function App() {

const[count, setCount] = useState(0)

return (
  <div className="app-wrapper">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherCard />} />
      </Routes>
    </div>
  )
}

export default App;