import { HashRouter, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Alert } from './components/Alert'

import { Home } from './pages/Home'
import { About } from './pages/About'

import { AlertState } from './context/alert/AlertState'
import { FirebaseState } from './context/firebase/FirebaseState'

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <HashRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
            </Switch>
          </div>
        </HashRouter>
      </AlertState>
    </FirebaseState>
  )
}

export default App