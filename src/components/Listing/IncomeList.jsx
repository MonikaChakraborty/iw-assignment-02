
const IncomeList = () => {
    return (
        <div>
        <h2 className="border-b pb-2 font-medium text-green-600">Income</h2>

        {/* <!-- <p className="py-2.5 text-gray-600">There are no expenses.</p> --> */}

        <ul id="income-list" className="divide-y">
          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Website project</span>

              <div>
                <span className="text-green-600">+11,999.99</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block delete-item"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>

          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Salary</span>
              <div>
                <span className="text-green-600">+35,000.00</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block delete-item"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>

          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Mobile app project</span>
              <div>
                <span className="text-green-600">+10,000.00</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block delete-item"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
            
    
    );
};

export default IncomeList;