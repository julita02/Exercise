import logo from './logo.svg';
import './App.css';
import Records from './records.json';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>
        <a> Style Website</a>
        <br></br>
        {
          Records.map(records =>{
            return(
              <div key={records.email}>
                {records.first_name}
              </div>
            )
          } )
        }
       </div>
      </header>
    </div>
  );
}

export default App;
