import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Alert } from './components/Alert'
import { Footer } from './components/Footer'

import { Home } from './pages/Home'
import { About } from './pages/About'

import { AlertState } from './context/alert/AlertState'
import { FirebaseState } from './context/firebase/FirebaseState'

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  )
}

export default App
