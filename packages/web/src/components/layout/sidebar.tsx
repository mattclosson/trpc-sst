import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [desktop, setDesktop] = useState(true);
  return (
    <>
      <div className="h-screen w-full space-y-1 border-r border-slate-300 bg-[#eaedf1] bg-opacity-80 px-3.5 pt-[15px] shadow-[inset_-2px_0px_3px_-2px_rgba(0,0,0,.06),inset_0px_7px_1px_-6px_rgba(255,255,255,1)] todesktop:[-webkit-app-region:drag]">
        <h1 className="pb-1.5 text-xl font-medium text-slate-800">Horizon</h1>
        <Link
          to="/"
          className={`${desktop ? "bg-slate-500 bg-opacity-20" : "bg-opacity-20 hover:bg-slate-500/10"} block w-full rounded px-3 py-1.5 text-left text-[13px] todesktop:[-webkit-app-region:no-drag]`}
          onClick={() => setDesktop(true)}
        >
          Home
        </Link>
        <Link
          to="/team"
          className={`${!desktop ? "bg-slate-500 bg-opacity-20" : "hover:bg-slate-500/10"} block w-full rounded px-3 py-1.5 text-left text-[13px] todesktop:[-webkit-app-region:no-drag]`}
          onClick={() => setDesktop(false)}
        >
          Team
        </Link>
      </div>
    </>
  );
}
