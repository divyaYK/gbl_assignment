import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCircle } from "@fortawesome/free-solid-svg-icons";

function Table({ tableType }) {
  const [cases, setCases] = useState([]);
  let tableRows = [];

  const handleBgColor = (priority) => {
    if (priority === "Low") {
      return " bg-yellow-500";
    } else if (priority === "Medium") {
      return " bg-orange-500";
    } else {
      return " bg-red-500";
    }
  };

  const handleTextColor = (currentStatus) => {
    if (currentStatus === "Progress") {
      return " text-yellow-500";
    } else if (currentStatus === "Not Prepared") {
      return " text-red-500";
    } else {
      return " text-gray-600";
    }
  };

  useEffect(() => {
    async function fetchNewCases() {
      const { data } = await axios.get("/api/cases/new");
      setCases(data);
    }

    async function fetchOldCases() {
      const { data } = await axios.get("/api/cases/old");
      setCases(data);
    }

    if (tableType === "new") {
      tableRows = [];
      fetchNewCases();
    }
    if (tableType === "old") {
      tableRows = [];
      fetchOldCases();
    }
  }, [tableType]);

  cases.map((caseObject, index) => {
    tableRows.push(
      <tr
        key={caseObject.id}
        className={
          `grid grid-cols-12 grid-flow-col p-2` +
          (Boolean(index % 2) ? " bgwhite" : " bg-gray-100")
        }
      >
        <td className="text-center font-sans text-xs capitalize">
          {caseObject.id}
        </td>
        <td className="text-center font-sans text-xs capitalize">
          {caseObject.branch_id}
        </td>
        <td className="text-center font-sans text-xs capitalize">
          {caseObject.reporting_method}
        </td>
        <td className="text-center font-sans text-xs capitalize">
          {caseObject.date}
        </td>
        <td className="text-center font-sans text-xs capitalize">
          {caseObject.time}
        </td>
        <td className="text-center font-sans text-xs capitalize">
          {caseObject.category_id}
          <FontAwesomeIcon icon={faCaretDown} className="ml-2 text-gray-400" />
        </td>
        <td className="text-center font-sans text-xs capitalize">
          {caseObject.subcategory_id}
          <FontAwesomeIcon icon={faCaretDown} className="ml-2 text-gray-400" />
        </td>
        <td
          className={
            `text-center font-sans text-xs capitalize text-white rounded-md py-1` +
            handleBgColor(caseObject.priority_id)
          }
        >
          {caseObject.priority_id}
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
        </td>
        <td className="text-center font-sans text-xs capitalize">
          {caseObject.nature_id}
          <FontAwesomeIcon icon={faCaretDown} className="ml-2 text-gray-400" />
        </td>
        <td className="text-center font-sans text-xs capitalize">
          {caseObject.manager_id}
          <FontAwesomeIcon icon={faCaretDown} className="ml-2 text-gray-400" />
        </td>
        <td className="text-center font-sans text-xs capitalize">
          {caseObject.reporter_id}
        </td>
        <td className="text-center font-sans text-xs capitalize">
          <FontAwesomeIcon
            icon={faCircle}
            className={`mr-2` + handleTextColor(caseObject.status_id)}
          />
          {caseObject.status_id}
        </td>
      </tr>
    );
  });

  let finalRenderString = (
    <div className="container">
      <table className="xs:w-120 lg:w-auto">
        <thead>
          <tr className="grid grid-cols-12 grid-flow-col text-gray-400 border-b border-gray-200 p-2">
            <td className="text-center font-sans text-xs  uppercase">
              case no. <FontAwesomeIcon icon={faCaretDown} />
            </td>
            <td className="text-center font-sans text-xs  uppercase">
              Branch <FontAwesomeIcon icon={faCaretDown} />
            </td>
            <td className="text-center font-sans text-xs  uppercase">
              reporting method <FontAwesomeIcon icon={faCaretDown} />
            </td>
            <td className="text-center font-sans text-xs  uppercase">
              date <FontAwesomeIcon icon={faCaretDown} />
            </td>
            <td className="text-center font-sans text-xs  uppercase">
              time <FontAwesomeIcon icon={faCaretDown} />
            </td>
            <td className="text-center font-sans text-xs  uppercase">
              category <FontAwesomeIcon icon={faCaretDown} />
            </td>
            <td className="text-center font-sans text-xs  uppercase">
              subcategory <FontAwesomeIcon icon={faCaretDown} />
            </td>
            <td className="text-center font-sans text-xs  uppercase">
              priority <FontAwesomeIcon icon={faCaretDown} />
            </td>
            <td className="text-center font-sans text-xs  uppercase">
              nature <FontAwesomeIcon icon={faCaretDown} />
            </td>
            <td className="text-center font-sans text-xs  uppercase">
              case manager <FontAwesomeIcon icon={faCaretDown} />
            </td>
            <td className="text-center font-sans text-xs  uppercase">
              case reporter <FontAwesomeIcon icon={faCaretDown} />
            </td>
            <td className="text-center font-sans text-xs  uppercase">
              status <FontAwesomeIcon icon={faCaretDown} />
            </td>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );

  return finalRenderString;
}

export default Table;
