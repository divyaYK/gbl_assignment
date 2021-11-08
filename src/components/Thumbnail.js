import React, { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Papa from "papaparse";

function Thumbnail({
  faIcon,
  colorUsed,
  shadowColor,
  buttonText,
  funcDisable,
}) {
  const [fileData, setFileData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    let data = [];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          let requiredData = result.data;
          if (requiredData.length > 0) {
            let jsonData = {};
            requiredData.map((array, index) => {
              if (array.length > 0) {
                jsonData[array[0]] = array[1];
              }
            });
            data.push(jsonData);
            setFileData(data);
          }
        },
      });
    }
  };

  useEffect(() => {
    async function createNewCases() {
      const { data } = await axios.post("/api/cases/upload", fileData);
    }

    if (fileData.length > 0) {
      createNewCases();
    }
  }, [fileData]);

  return (
    <div
      className={`flex flex-col items-center justify-around xs:w-full md:w-auto md:flex-grow bg-gradient-to-r from-${colorUsed}-500 to-${colorUsed}-400 h-full xs:mt-3 md:my-0 md:mx-3 rounded-lg p-6`}
      style={{ boxShadow: `0px 0px 13px 7px ${shadowColor}` }}
    >
      <div className={`bg-${colorUsed}-400 text-white text-lg p-2 rounded-md`}>
        <FontAwesomeIcon size="2x" icon={faIcon} />
      </div>
      <label
        htmlFor="fileUpload"
        className={`bg-white text-center p-2 font-bold font-sans text-${colorUsed}-500 captialize w-1/2 rounded-md mt-4 cursor-pointer`}
      >
        {buttonText}
      </label>
      <input
        type="file"
        accept=".csv, .xlsx, .xls"
        id="fileUpload"
        className="hidden"
        disabled={funcDisable}
        onChange={(e) => handleFileUpload(e)}
      />
    </div>
  );
}

export default Thumbnail;
