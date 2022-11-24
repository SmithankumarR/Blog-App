import Home from './components/Home';
import { Route, BrowserRouter } from 'react-router-dom';
import SignIn from './components/SignIn';
const App = () => {


  return (
    // <BrowserRouter>
    // <Route path="/home">
    // </Route>
    //   <Route path="/sign-in">
    //   </Route>
    // </BrowserRouter>
    <>
      <Home />
      <SignIn />
    </>
  )
}

export default App;
