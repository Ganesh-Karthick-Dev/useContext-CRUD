import React from "react";

const Employee = ({ employee }) => {
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
            {employee.map((employee, index) => {
              let sno = index + 1;
              return (
                <tr key={employee.id}>
                  <td className=" py-3">{sno}</td>
                  <td className=" py-3">{employee.name}</td>
                  <td className=" py-3">{employee.email}</td>
                  <td className=" py-3">{employee.address}</td>
                  <td className=" py-3">{employee.phone}</td>
                  <td className=" flex gap-3 py-3">
                    <button>
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

                    <button>
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
      </div>
    </>
  );
};

export default Employee;
