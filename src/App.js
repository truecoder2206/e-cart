import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Product from './component/Product';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Products" component={Products}></Route>
        <Route exact path="/Products/:id" component={Product}></Route>
      </Switch>
    </>
  );
}

export default App;
