import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site-wrapper">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/SEI-Portfolio/" element={<Main />} />
        {/* <Route path="/" element={< />}/> */}
        <Route path="SEI-Portfolio/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;
