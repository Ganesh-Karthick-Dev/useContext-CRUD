import React, { useEffect, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";


const EditEmployee = ({val}) => {
  
  const {editEmployee} = useContext(EmployeeContext)

  const id = val.id

  const [name,setName] = useState(val.name)
  const [email,setEmail] = useState(val.email)
  const [address,setAddress] = useState(val.address)
  const [phone,setPhone] = useState(val.phone)



  const updatedEmployee = {id,name,email,address,phone}

  const handleEdit = (e)=> {

    e.preventDefault()

    editEmployee(id,updatedEmployee)

  }




  return (
    <>
      <form className="" onSubmit={handleEdit}>
        <div className="">
          <div className="mt-4 ">
            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  autoComplete="given-name"
                  className=" w-full rounded-md border border-slate-400 py-1 text-gray-900 shadow-sm"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  id="email"
                  autoComplete="given-name"
                  className=" w-full rounded-md border border-slate-400 py-1 text-gray-900 shadow-sm"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">

                <textarea
                  autoComplete="given-name"
                  name="address"
                  id="address"
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                  cols="30"
                  rows="4"
                  className=" w-full rounded-md border border-slate-400 py-1 text-gray-900 shadow-sm"
                ></textarea>
              </div>
            </div>
            <div className="">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  id="phone"
                  autoComplete="given-name"
                  className=" w-full rounded-md border border-slate-400 py-1 text-gray-900 shadow-sm"
                />
              </div>
            </div>
            <button type="submit" className=" bg-green-500 text-white p-2 rounded-md mt-2">Edit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditEmployee;
