import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();


const EmployeeContextProvider = (props)=> {
    const [employee,setEmployee] = useState([
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        
    ])


    const addEmployee = (name,email,address,phone) => {
        setEmployee([...employee,{id:uuidv4(),name,email,address,phone}])
    }


    return (
        <EmployeeContext.Provider value={{employee,addEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider ;