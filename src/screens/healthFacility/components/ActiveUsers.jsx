import React, { useState } from "react";
import moment from "moment";
import Pagination from "../../../components/Pagination";

const ActiveUsers = ({ data }) => {
  const [currentpage, setCurrentpage] = useState({
    value: 1,
    isPagination: false,
  });
  cons;
  const timeduration = (start, finish) => {
    let x;
    const time1 = moment(start, "HH:mm:ss");
    const time2 = moment(finish, "HH:mm:ss");

    const duration = moment.duration(time2.diff(time1));

    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    if (hours == 0) {
      x = minutes + " " + "minutes";
    }
    if (hours > 0) {
      if (hours < 2) {
        x = hours + " " + "hr" + " " + minutes + " " + "minutes";
      } else {
        x = hours + " " + "hrs" + " " + minutes + " " + "minutes";
      }
    }
    return x;
  };
  return (
    <div className="w-full">
      <table className="cursor-default w-full">
        <thead>
          <tr className="h-[50px]">
            <th>SN</th>
            <th>Name</th>
            <th>ID</th>
            <th>User Type</th>
            <th>Status</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {!data.length && (
            <tr className="flex items-center justify-center text-primary70 text-[20px] font-mont">
              <td>No Record</td>
            </tr>
          )}
          {data
            .slice(10 * currentpage.value - 10, 10 * currentpage.value)
            .map((item, index) => (
              <tr key={index} className="text-[#636363] h-[50px]">
                <td>{index + 1}</td>
                <td>{item.healthworker}</td>
                <td>{item.id}</td>
                <td>{item.cadre}</td>
                <td className="">
                  <div className="flex items-center justify-center gap-2">
                    {item.session_status == "completed" ? (
                      <p className="w-3 h-3 rounded-full bg-[red]"></p>
                    ) : (
                      <p className="w-3 h-3 rounded-full bg-[green]"></p>
                    )}
                    <p>{item.session_status}</p>
                  </div>
                </td>
                <td>{item.start_time}</td>
                <td>{item.end_time}</td>
                <td>{timeduration(item.start_time, item.end_time)}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* pagination */}
      <Pagination
        currentpage={currentpage}
        setCurrentpage={setCurrentpage}
        displaynum={10}
        pages={data?.length / 10}
      />
    </div>
  );
};

export default ActiveUsers;
