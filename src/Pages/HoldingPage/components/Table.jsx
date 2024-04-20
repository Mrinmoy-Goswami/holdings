import React from "react";
import { tableHeadings } from "../Constants/Tableheadings";

const Table = ({ data }) => {
  const arr = tableHeadings.map((item) => item.toUpperCase());
  return (
    <div className="w-full h-full border-2 border-gray-300 m-5 p-5 rounded flex flex-col items-start justify-start">
      <div className="w-full flex flex-row justify-start py-3">
        {arr.map((item) => (
          <div
            className={`font-semibold flex h-18   text-gray-600 w-1/6 mb-2 p-0 text-sm`}
          >
            {item}
          </div>
        ))}
      </div>
      {data.map((item, index) => (
        <div
          className={`w-full ${
            index % 2 == 0 ? "bg-blue-50" : ""
          } bg-white-200 flex flex-row justify-evenly`}
        >
          {
            <div className="w-full flex justify-evenly text-xs py-3 rounded  mb-4  ">
              <div className="w-1/6  flex h-18 flex-row  justify-start ">
                {item.name}
              </div>
              <div className="w-1/6  flex h-18 flex-row  justify-start ">
                {item.ticker}
              </div>
              <div className="w-1/6  flex h-18 flex-row  justify-start ">
                {item.avg_price}
              </div>
              <div className="w-1/6  flex h-18 flex-row  justify-start ">
                {item.market_price}
              </div>
              <div className="w-1/6  flex h-18 flex-row justify-start ">
                {item.latest_chg_pct}
              </div>
              <div className="w-1/6  flex h-18 flex-row  justify-start ">
                {item.market_value_ccy}
              </div>
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default Table;
