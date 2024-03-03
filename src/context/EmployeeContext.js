import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const employeeContext = createContext();


const EmployeeContextProvider = (props)=> {
    const [employee] = useState([
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        {id:uuidv4(),name:"ganesh",email:"jaikarthick24697@gmail.com",address:"coimbatore",phone:9566767612},
        
    ])
    return (
        <employeeContext.Provider value={employee}>
            {props.children}
        </employeeContext.Provider>
    )
}

export default EmployeeContextProvider ;