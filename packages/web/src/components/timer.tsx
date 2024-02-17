import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Pause, Play } from "lucide-react";
import { cn } from "../lib/utils";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const startStopwatch = () => setIsRunning(!isRunning);
  //   const stopStopwatch = () => setIsRunning(false);
  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle
          className={cn(
            "text-center text-slate-900",
            isRunning ? "text-green-500" : "text-slate-900",
          )}
        >
          {formattedTime}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between gap-4">
        <Button
          className="cursor-default bg-transparent px-0 text-slate-900 opacity-0 hover:bg-transparent hover:text-slate-900"
          onClick={() => {}}
        >
          Reset
        </Button>
        <Button
          className="w-full bg-white text-slate-900 hover:bg-slate-100"
          onClick={startStopwatch}
        >
          {!isRunning ? <Play /> : <Pause />}
        </Button>
        <Button
          className="bg-transparent px-0 py-2 text-slate-900 hover:bg-transparent hover:text-slate-900"
          onClick={resetStopwatch}
        >
          Reset
        </Button>
      </CardContent>
    </Card>
  );
};

export default Stopwatch;
