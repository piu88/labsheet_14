import ComponentNew from './component/ComponentNew'
import ContextProvider from './component/ContextProvider'
import './App.css'

function App() {
  return (
    <>
      <ContextProvider>
        <ComponentNew />
      </ContextProvider>
    </>
  )
}

export default App
