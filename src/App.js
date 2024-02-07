import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PatientForm from './PatientForm';
import PatientList from './PatientList';



function App() {
 const handleAddPatient = (newPatient) => {

 }

return(
  <div>
    <PatientForm onSubmit={handleAddPatient}/>
    <PatientList/>
  </div>
)

}

export default App;
