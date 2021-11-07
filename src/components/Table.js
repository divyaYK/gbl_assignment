import React from "react";

function Table({ tableNumber }) {
  let finalRenderString = null;
  if (tableNumber === 1) {
    finalRenderString = <div className="">{tableNumber}</div>;
  } else if (tableNumber === 2) {
    finalRenderString = <div className="">{tableNumber}</div>;
  } else {
    finalRenderString = (
      <div className="flex items-center justify-center text-3xl">No tables</div>
    );
  }

  return finalRenderString;
}

export default Table;
