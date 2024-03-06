import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();


const EmployeeContextProvider = (props)=> {
    const [employee,setEmployee] = useState([
        {id:uuidv4(),name:"karthick",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:7373814805},
        {id:uuidv4(),name:"manikandan",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"dinesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:8610599336},
        {id:uuidv4(),name:"amala",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"seemathipathi",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:6382790668},
        {id:uuidv4(),name:"raven",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"vicky",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        
    ])


    const addEmployee = (name,email,address,phone) => {
        setEmployee([...employee,{id:uuidv4(),name,email,address,phone}])
    }

    const deleteEmployee = (id)=> {
        setEmployee(employee.filter(emp => emp.id !== id))
    }

    const editEmployee = (id,updatedemployee)=> {
        setEmployee(employee.map((emp)=>emp.id === id ? updatedemployee : emp))
    }


    return (
        <EmployeeContext.Provider value={{employee,addEmployee,deleteEmployee,editEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider ;