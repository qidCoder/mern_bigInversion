import logo from './logo.svg';
import './App.css';
import PersonCard from "./components/PersonCard";

//import bootstrap - this is step 2 after installing bootstrap via npm i bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex justify-content-around">
      <div>
      <PersonCard 
        lastName="Doe"
        firstName="Jane"
        age={45}
        hairColor="Black"
      />
      <PersonCard
        lastName="Smith"
        firstName="John"
        age={88}
        hairCOlor="Brown"
      />
      <PersonCard 
        lastName="Fillmore"
        firstName="Millard"
        age={50}
        hairColor="Brown"
      />
      <PersonCard 
        lastName="Smith"
        firstName="Maria"
        age={62}
        hairColor="Brown"
      />
      </div>

    </div>
  );
}

export default App;
