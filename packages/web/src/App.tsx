import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { trpc } from "./utils/trpc";
import Sidebar from "./components/layout/sidebar";
import { Outlet } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

function App() {
  const userRole = localStorage.getItem("userRole");
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${import.meta.env.VITE_APP_API_URL}/trpc`,
        }),
      ],
    }),
  );

  function selectRole(role: string) {
    localStorage.setItem("userRole", role);
    window.location.reload();
  }
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div>
          <div className="todesktop:[-webkit-app-region:drag] absolute left-0 top-0 grid h-[27px] w-full items-center justify-center !bg-transparent text-[13px]"></div>
          <div className="flex justify-end bg-slate-800 px-5 py-2.5 text-white">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="rounded-lg border border-slate-900 bg-slate-700 px-4 py-1 text-slate-200 shadow-[inset_0_-1.8px_2px_rgba(0,0,0,0.16),inset_0_1px_2px_rgba(255,255,255,0.09)]">
                  {userRole === "BCBA" || !userRole ? "BCBA" : "RBT"}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => selectRole("BCBA")}>
                  BCBA
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => selectRole("RBT")}>
                  RBT
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid grid-cols-[250px,1fr]">
            <Sidebar />
            <div className="h-screen bg-[#F6F7F9] px-6 pt-4">
              <Outlet />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
