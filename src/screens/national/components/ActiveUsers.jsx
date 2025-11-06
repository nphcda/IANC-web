import React, { useRef } from "react"
import moment from "moment"
import { useModal } from "../../../utils/hooks/useModal";


const ActiveUsers = ({ data, param, date }) => {
    const { showModal, toggleModal } = useModal();

    const timeduration = (start, finish) => {
        let x;
        const time1 = moment(start, 'HH:mm:ss');
        const time2 = moment(finish, 'HH:mm:ss');

        const duration = moment.duration(time2.diff(time1));

        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();
        if (hours == 0) {
            x = minutes + " " + "minutes"
        }
        if (hours > 0) {
            if (hours < 2) {
                x = hours + " " + "hr" + " " + minutes + " " + "minutes"

            } else {
                x = hours + " " + "hrs" + " " + minutes + " " + "minutes"
            }
        }
        return x;
    }
    function downloadTable() {
        const table = tableRef.current;

        if (table) {
            const rows = Array.from(table.rows);
            const headers = Array.from(rows.shift()?.cells || []).map(
                (cell) => cell.textContent
            );
            const csv = [headers.join(",")];

            for (const row of rows) {
                const cells = Array.from(row.cells).map((cell) => cell.textContent);
                csv.push(cells.join(","));
            }

            const blob = new Blob([csv.join("\n")], {
                type: "text/csv;charset=utf-8;",
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", "mytable.csv");
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            alert("Data downloaded as CSV!");
        }
    }
    const tableRef = useRef()

    return (
        <div className="w-full">
            {param.query == "national" && <p className="text-primary90 m-3 text-center font-[500] text-[14px]">{`Showing results for National on ${date}...`}</p>}
            {param.query == "" && <p className="text-primary90 m-3 text-center font-[500] text-[14px]">{`Showing results for National on ${date}...`}</p>}
            {param.query == "state" && <p className="text-primary90 m-3 text-center font-[500] text-[14px]">{`Showing results for ${param.state} state on ${date}...`}</p>}
            {param.query == "lga" && <p className="text-primary90 m-3 text-center font-[500] text-[14px]">{`Showing results for ${param.lga} Local Government Area in ${param.state} state on ${date}...`}</p>}
            {/* download csv */}
            <div className='flex items-center justify-end mt-[40px] pr-4'>
                <button onClick={downloadTable} className='bg-primary90 rounded-[8px] text-light10 text-[14px] p-2'>Download CSV</button>
            </div>
            <table ref={tableRef} className="cursor-default w-full">
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
                    {!data.length && <tr className="flex items-center justify-center text-primary70 text-[20px] font-mont"><td>No Record</td></tr>}

                    {data.map((item, index) => (
                        <tr onClick={() => toggleModal(item)} key={index} className="text-[#636363] cursor-pointer h-[50px]">
                            <td>{index + 1}</td>
                            <td>{item.healthworker}</td>
                            <td>{item.id}</td>
                            <td>{item.cadre}</td>
                            <td className="">
                                <div className="flex items-center justify-center gap-2">
                                    {item.session_status == "completed" ? <p className="w-3 h-3 rounded-full bg-[red]"></p> : <p className="w-3 h-3 rounded-full bg-[green]"></p>}
                                    <p>{item.session_status}</p>

                                </div>
                            </td>
                            <td>{item.start_time}</td>
                            <td>{item.end_time}</td>
                            <td>{timeduration(item.start_time, item.end_time)}</td>
                        </tr>))}
                </tbody>
            </table>

        </div>
    )
}

export default ActiveUsers