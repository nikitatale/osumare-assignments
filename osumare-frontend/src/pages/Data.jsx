import React from 'react';

const Data = ({ data }) => {
 
  const records = Array.isArray(data) ? data : (data ? [data] : []);

  if (!records || records.length === 0) {
    return <div className="p-6 text-center text-gray-500">No user records found.</div>;
  }

  const tableContainerClasses = "bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300";
  const headerCellClasses = "px-4 py-3 text-left text-xs font-semibold uppercase text-gray-600 tracking-wider";
  const bodyCellClasses = "px-4 py-4 whitespace-nowrap text-sm text-gray-800";
  const checkboxClasses = "h-4 w-4 text-[#FF3E54] border-gray-300 rounded focus:ring-[#FF3E54] cursor-pointer accent-[#FF3E54]";

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className={tableContainerClasses}>
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-white">
              <tr className="border-b border-gray-200">
                <th className={headerCellClasses}></th>
                <th className={headerCellClasses}>Name</th>
                <th className={headerCellClasses}>Gender</th>
                <th className={headerCellClasses}>Language</th>
                <th className={headerCellClasses}>Email</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {records.map((record, index) => (
                <tr key={index} className="hover:bg-pink-50/20">
                  <td className={`${bodyCellClasses} w-12 text-center`}>
                    <input type="checkbox" className={checkboxClasses} />
                  </td>

                  <td className={bodyCellClasses}>{record.firstName} {record.lastName}</td>
                  <td className={bodyCellClasses}>{record.gender}</td>
                  <td className={bodyCellClasses}>{Array.isArray(record.language) ? record.language.join(", ") : record.language}</td>
                  <td className={bodyCellClasses}>{record.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4 p-4">
          {records.map((record, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-100">
                <div className="font-semibold text-base text-gray-800">{record.firstName} {record.lastName}</div>
                <input type="checkbox" className={checkboxClasses} />
              </div>

              <dl className="space-y-1 text-sm">
                <div className="flex justify-between"><dt className="font-medium text-gray-500">Gender:</dt><dd className="text-gray-800">{record.gender}</dd></div>
                <div className="flex justify-between"><dt className="font-medium text-gray-500">Language:</dt><dd className="text-gray-800">{Array.isArray(record.language) ? record.language.join(", ") : record.language}</dd></div>
                <div className="flex justify-between"><dt className="font-medium text-gray-500">Email:</dt><dd className="text-gray-800">{record.email}</dd></div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Data;
