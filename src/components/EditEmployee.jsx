import React from "react";
// import { EmployeeContext } from "../context/EmployeeContext";
// import { useContext } from "react";


const EditEmployee = () => {
  
//   const {EditEmployee} = useContext(EmployeeContext)


  return (
    <>
      <form className="" >
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
                  id="phone"
                  autoComplete="given-name"
                  className=" w-full rounded-md border border-slate-400 py-1 text-gray-900 shadow-sm"
                />
              </div>
            </div>
            <button className=" bg-green-500 text-white p-2 rounded-md mt-2">Edit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditEmployee;
