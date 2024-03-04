import React, { Fragment, useRef, useState, useContext, useEffect } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../context/EmployeeContext";
import { Dialog, Transition } from "@headlessui/react";
import AddEmployee from "./AddEmployee";

const EmployeeList = () => {

  const {employee} = useContext(EmployeeContext);

  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const handleEdit = () => {
    setOpen(true);
  };

  useEffect(()=>{
    setOpen(false)
  },[employee])

  return (
    <>
      <div className=" md:w-2/4 md:m-auto">
        <div className="flex md:justify-between justify-evenly  bg-sky-950 p-2 mt-4 rounded-md">
          <div className=" text-white flex self-center">
            <h1>
              Manage <span className=" font-bold">Employees</span>
            </h1>
          </div>
          <button className="flex gap-2 bg-green-700 hover:bg-green-900 p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" md:w-6 md:h-6 w-3 h-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h4
              className=" text-xxs md:text-sm text-white"
              onClick={handleEdit}
            >
              Add new Employee
            </h4>
          </button>
        </div>
        <Employee employee={employee} />

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
                            <p>Add Employee</p>
                          </Dialog.Title>
                          <div className="mt-2">
                            <AddEmployee />
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

export default EmployeeList;
