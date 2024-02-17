import { Link } from "react-router-dom";

export default function Home() {
  const fromTime = new Date(2022, 1, 5, 11, 0);

  const toTime = new Date(2022, 1, 5, 11, 30);

  console.log(fromTime, toTime);

  return (
    <>
      <h1 className="text-xl">Schedule</h1>
      <div className="flex flex-col gap-1 pt-2">
        <span className="text-sm font-medium text-slate-600">TODAY</span>

        <div className="flex flex-col gap-2.5 ">
          <ScheduleItem
            id={123}
            fromTime={fromTime}
            toTime={toTime}
            title="30 Min Session with Maddie Strife"
          />
          <ScheduleItem
            id={425}
            fromTime={fromTime}
            toTime={toTime}
            title="60 Min Session with James Pollock"
          />
          {/* <ScheduleItem /> */}
        </div>
      </div>
    </>
  );
}

function ScheduleItem({
  id,
  fromTime,
  toTime,
  title,
}: {
  id: number;
  fromTime: Date;
  toTime: Date;
  title: string;
}) {
  return (
    <Link
      to={`/sessions/${id}`}
      className="flex cursor-pointer gap-5 rounded-lg border border-slate-300 p-4 hover:bg-slate-100"
    >
      <div>
        <div>Mon, 5 Feb</div>
        <div className="text-slate-600">
          {fromTime
            .toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
            .toLowerCase()
            .replace(" ", "")}{" "}
          -{" "}
          {toTime
            .toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
            .toLowerCase()
            .replace(" ", "")}{" "}
        </div>
      </div>
      <div className="font-medium">{title}</div>
    </Link>
  );
}
