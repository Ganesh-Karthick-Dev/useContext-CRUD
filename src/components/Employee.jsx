import { EmployeeContext } from "../context/EmployeeContext";
import EditEmployee from "./EditEmployee";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState, useContext, useEffect } from "react";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [open, setOpen] = useState(false);
  const [val,setVal] = useState({})

  const cancelButtonRef = useRef(null);

  const handleEdit = (emp) => {
    setOpen(true);
    setVal(emp)
  };

  useEffect(()=>{
    setOpen(false)
  },[employee])

  return (
    <>
      <div className=" bg-white p-3  rounded-md mt-3">
        <table className=" table-auto border border-white border-collapse text-left text-xxs md:text-sm w-full">
          <thead className="border-t-2 border-b-2 ">
            <tr className="">
              <th className=" py-3">S.no</th>
              <th className=" py-3">Name</th>
              <th className=" py-3">Email</th>
              <th className=" py-3">Address</th>
              <th className=" py-3">Phone</th>
              <th className=" py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp, index) => {
              let sno = index + 1;
              let id = emp.id
              return (
                <tr key={id}>
                  <td className=" py-3">{sno}</td>
                  <td className=" py-3">{emp.name}</td>
                  <td className=" py-3">{emp.email}</td>
                  <td className=" py-3">{emp.address}</td>
                  <td className=" py-3">{emp.phone}</td>
                  <td className=" flex gap-3 py-3">
                    <button onClick={()=>handleEdit(emp)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className=" md:w-6 md:h-6 w-3 h-3 text-yellow-500 hover:text-yellow-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </button>

                    <button onClick={() => deleteEmployee(emp.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="md:w-6 md:h-6 w-3 h-3 text-red-500 hover:text-red-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
                  <Transition.Root show={open} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-10"
                      initialFocus={cancelButtonRef}
                      onClose={setOpen}
                    >
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </Transition.Child>

                      <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4  sm:items-center sm:p-0">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                              <div className="bg-white px-2 pb-4 pt-2 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                  <div className="mt-3  sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <Dialog.Title
                                      as="h3"
                                      className="text-base flex gap-3 font-semibold leading-6 text-gray-900"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                      </svg>
                                      <p>Edit Employee</p>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                      <EditEmployee  val={val}/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                  type="button"
                                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                  onClick={() => setOpen(false)}
                                >
                                  Close
                                </button>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition.Root>
      </div>
    </>
  );
};

export default Employee;
