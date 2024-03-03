import EmployeeList from "./components/EmployeeList";
import EmployeeContextProvider from "./context/EmployeeContext";


function App() {
  return (
    <>
    <EmployeeContextProvider>
    <EmployeeList />
    </EmployeeContextProvider>
    </>
  );
}

export default App;
