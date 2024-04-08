import { AppProvider } from "./hooks"
import { Home } from "./pages"

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}

export default App
