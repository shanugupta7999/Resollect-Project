import { useState, useEffect } from "react";
import Portfolio from "../Components/DashboardContent/Portfolio";
import Auction from "../Components/DashboardContent/Auction";
import ControlPanel from "../Components/DashboardContent/ControlPanel";
import DataUpload from "../Components/DashboardContent/DataUpload";
import Notices from "../Components/DashboardContent/Notices";
import Notification from "../Components/DashboardContent/Notification";
import Permission from "../Components/DashboardContent/Permission";
import UserManagement from "../Components/DashboardContent/UserManagement";
import icon from "../assets/ResollectIcon.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineUploadFile } from "react-icons/md";
import { PiShareNetworkThin } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { VscLock } from "react-icons/vsc";
import { LuArrowDownUp } from "react-icons/lu";
import data from "../Data/loans.json";
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Auction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loanData, setLoanData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // New state for filters
  const [dpdFilter, setDpdFilter] = useState("");
  const [loanStatusFilter, setLoanStatusFilter] = useState("");
  const [loanTypeFilter, setLoanTypeFilter] = useState("");

  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    setLoanData(data.loans); // Directly set the imported data
  }, []);

  // Filter function
  const filterLoans = () => {
    return loanData.filter((loan) => {
      // DPD Filter
      const dpdCondition =
        !dpdFilter ||
        (dpdFilter === "0-30" &&
          loan["Current DPD"] >= 0 &&
          loan["Current DPD"] <= 30) ||
        (dpdFilter === "30-60" &&
          loan["Current DPD"] > 30 &&
          loan["Current DPD"] <= 60) ||
        (dpdFilter === "60-90" &&
          loan["Current DPD"] > 60 &&
          loan["Current DPD"] <= 90) ||
        (dpdFilter === "90+" && loan["Current DPD"] > 90);

      // Loan Status Filter (based on DPD)
      const loanStatusCondition =
        !loanStatusFilter ||
        (loanStatusFilter === "Defaulted" && loan["Current DPD"] > 90) ||
        (loanStatusFilter === "Not Defaulted" && loan["Current DPD"] <= 90);

      // Loan Type Filter
      const loanTypeCondition =
        !loanTypeFilter ||
        loan["Loan Type"].toLowerCase().includes(loanTypeFilter.toLowerCase());

      return dpdCondition && loanStatusCondition && loanTypeCondition;
    });
  };

  

  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      alert(`File uploaded: ${e.target.files[0].name}`);
      setShowModal(false); // Close modal after upload
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar remains the same */}
      <aside
        className={`fixed lg:relative z-50 w-64 bg-gray-100 text-white p-6 flex flex-col  transition-all duration-300 border-1 border-gray-200 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 shadow-lg`}
      >
        {/* Sidebar content remains the same */}
        <h2 className="text-2xl font-bold border-b pb-4 mb-4 text-gray-800">
          Dashboard
        </h2>
        <nav className="flex flex-col gap-4">
          {[
            { name: "Portfolio", icon: <GoPerson /> },
            { name: "Notification", icon: <IoIosNotificationsOutline /> },
            { name: "Notices", icon: <MdOutlineEmail /> },
            { name: "Auction", icon: <FiMessageSquare /> },
            { name: "DataUpload", icon: <MdOutlineUploadFile /> },
            { name: "ControlPanel", icon: <PiShareNetworkThin /> },
            { name: "UserManagement", icon: <LuUsers /> },
            { name: "Permission", icon: <VscLock /> },
          ].map((item) => (
            <button
              key={item.name}
              className={`flex items-center gap-2 p-3 rounded-lg transition text-left font-semibold ${
                activeTab === item.name
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 hover:bg-blue-600 hover:text-white"
              }`}
              onClick={() => setActiveTab(item.name)}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
          <div className="mt-42 flex flex-row items-center space-x-2">
            <p className="text-gray-800">Powered By </p>
            <img src={icon} alt="Image Not Found" className="h-8 rounded-lg" />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">{activeTab}</h1>
        <div className="flex gap-4 mb-4">
          <span className="py-1 px-3 border rounded-lg hover:bg-blue-700 hover:text-white">
            All
          </span>
          <span className="py-1 px-3 border rounded-lg hover:bg-blue-700 hover:text-white">
            Pre Sarfaesi
          </span>
          <span className="py-1 px-3 border rounded-lg hover:bg-blue-700 hover:text-white">
            NPA
          </span>
          <span className="py-1 px-3 border rounded-lg hover:bg-blue-700 hover:text-white">
            Respones
          </span>
          <span className="py-1 px-3 border rounded-lg hover:bg-blue-700 hover:text-white">
            Symbolic Possession
          </span>
          <span className="py-1 px-3 border rounded-lg hover:bg-blue-700 hover:text-white">
            DM Order
          </span>
          <span className="py-1 px-3 border rounded-lg hover:bg-blue-700 hover:text-white">
            Physical Possessions
          </span>
          <span className="py-1 px-3 border rounded-lg hover:bg-blue-700 hover:text-white">
            Auction
          </span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="py-1 px-3 border rounded-lg hover:bg-blue-700 hover:text-white">
            Search Loan Number
          </span>
          <div className="flex gap-4">
            <span className="py-1 px-3 border rounded-lg flex items-center gap-1 hover:bg-blue-700 hover:text-white">
              Select Columns
              <MdKeyboardArrowDown />
            </span>
            <div className="flex items-center">
              <span className="py-1 px-3 border rounded-lg flex items-center gap-1 hover:bg-blue-700 hover:text-white">
                <CiFilter />
                More Filter
              </span>
            </div>
          </div>
        </div>

        {/* Filtering Section */}
        <div className="mb-4 flex gap-4">
          {/* DPD Filter */}
          <select
            value={dpdFilter}
            onChange={(e) => setDpdFilter(e.target.value)}
            className="p-2 border rounded-lg hover:bg-blue-700 hover:text-white"
          >
            <option value="">Select DPD Range</option>
            <option value="0-30">0-30 Days</option>
            <option value="30-60">30-60 Days</option>
            <option value="60-90">60-90 Days</option>
            <option value="90+">90+ Days</option>
          </select>

          {/* Loan Status Filter */}
          <select
            value={loanStatusFilter}
            onChange={(e) => setLoanStatusFilter(e.target.value)}
            className="p-2 border rounded-lg hover:bg-blue-700 hover:text-white"
          >
            <option value="">Select Loan Status</option>
            <option value="Defaulted">Defaulted</option>
            <option value="Not Defaulted">Not Defaulted</option>
          </select>

          {/* Loan Type Filter */}
          <select
            value={loanTypeFilter}
            onChange={(e) => setLoanTypeFilter(e.target.value)}
            className="p-2 border rounded-lg hover:bg-blue-700 hover:text-white"
          >
            <option value="">Select Loan Type</option>
            <option value="Home">Home Loan</option>
            <option value="Car">Car Loan</option>
            <option value="Personal">Personal Loan</option>
          </select>

          {/* Clear Filters Button */}
          <button
            onClick={() => {
              setDpdFilter("");
              setLoanStatusFilter("");
              setLoanTypeFilter("");
            }}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-blue-700 hover:text-white "
          >
            Clear Filters
          </button>
        </div>

        {/* Existing filter and search sections remain the same */}
        <div className="flex gap-4 mb-1">{/* Existing filter spans */}</div>

        {/* Loan Count */}
        <div>
          <p className="border p-2 rounded-lg">
            {filterLoans().length} loans Selected
          </p>
        </div>

        {/* Document Upload Section remains the same */}
        <div className="mt-4">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 mb-4"
          >
            Document Upload
          </button>

          {/* Modal for File Upload */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-end  bg-black/80 bg-opacity-50  z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg relative h-full w-96">
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className=" border-1 py-0 px-1 rounded-full absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
                >
                  &times;
                </button>

                <h2 className="text-xl font-semibold mb-4">
                  Upload a Document
                </h2>

                {/* Document Name */}
                <label className="block mb-2 text-gray-700">
                  Document Name
                </label>
                <input
                  type="text"
                  placeholder="Enter document name"
                  className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none"
                />

                {/* Document Type */}
                <label className="block mb-2 text-gray-700">
                  Document Type
                </label>
                <select className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none">
                  <option value="">Select Type</option>
                  <option value="PDF">PDF</option>
                  <option value="Word">Word</option>
                  <option value="Image">Image</option>
                  <option value="Excel">Excel</option>
                </select>

                {/* Document Remarks */}
                <label className="block mb-2 text-gray-700">
                  Document Remarks
                </label>
                <textarea
                  placeholder="Enter remarks (optional)"
                  className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none"
                />

                {/* File Upload */}
                <label className="block mb-2 text-gray-700">Select File</label>
                <input
                  type="file"
                  accept=".pdf, .doc, .docx, .jpg, .png, .xlsx"
                  className="block w-full text-sm p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none mb-4"
                  onChange={handleFileUpload}
                />

                {/* Submit Button */}
                <button
                  onClick={() => {
                    alert("Document submitted!");
                    setShowModal(false);
                  }}
                  className=" ml-62 px-4 py-1 mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Table Section */}
        <div>
          <table className="w-full mt-4">
          <thead className="bg-gray-200">
              <tr>
                {[
                  "Loan No",
                  "Loan Type",
                  "Borrower",
                  "Borrower Address",
                  "Co-Borrower Name",
                  "Co-Borrower Address",
                  "Current DPD",
                  "Sanction Amount",
                  "Region",
                ].map((col, index) => (
                  <th key={col} className="px-4 py-2">
                    <span className="flex flex-row items-center gap-1">
                      {/* Checkbox for the 'Loan No' column header */}
                      {col === "Loan No" && <input type="checkbox" className="mr-2" />}
                      {col}
                      <LuArrowDownUp className="text-gray-500" />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filterLoans().map((loan, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  {Object.values(loan).map((value, i) => (
                    <td key={i} className="px-4 py-1">
                      {/* Checkbox and anchor link for the 'Loan No' column */}
                      {i === 0 ? (
                        <>
                          <input type="checkbox" className="mr-2 text-blue-500" />
                          <a href={`#loan-${value}`} className="text-blue-500 hover:underline">
                            {value}
                          </a>
                        </>
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>


          </table>
        </div>

        {/* Rendering Active Tab Content remains the same */}
        {activeTab === "Portfolio" && <Portfolio />}
        {activeTab === "Notification" && <Notification />}
        {activeTab === "Auction" && <Auction />}
        {activeTab === "ControlPanel" && <ControlPanel />}
        {activeTab === "DataUpload" && <DataUpload />}
        {activeTab === "Notices" && <Notices />}
        {activeTab === "Permission" && <Permission />}
        {activeTab === "UserManagement" && <UserManagement />}
      </main>
    </div>
  );
}
