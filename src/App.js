import React ,{Component}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meta from './components/latestnews';
import './App.css';

class App extends Component{
  render(){
    return(
      /*<BrowserRouter>
      <div className="App">
      
        <Route
                    path="/"
                    component={Covid}
                    exact 
                />
                <Route
                    path="/dashboard"
                    component={Meta} 
                />
      </div>
      </BrowserRouter>*/
      <div className="App">
        <Meta/>
      </div>
    );
  }
}

export default App;
