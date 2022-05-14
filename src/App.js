import './App.css'

function App({ domElement }) {
  const entropay = domElement.getAttribute('data-entropay')
  return (
    <div className="App">
      <h1>Entropay{entropay}</h1>
    </div>
  )
}

export default App
