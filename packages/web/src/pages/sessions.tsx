import Stopwatch from "../components/timer";
import Goals from "../components/goals";

export default function Sessions() {
  return (
    <div>
      <h1 className="text-lg font-medium">Session</h1>
      <h2>Maddie Strife</h2>
      <main className="grid grid-cols-[280px_1fr]">
        <div className="flex flex-col gap-3">
          <Stopwatch />
          <Goals />
        </div>
      </main>
    </div>
  );
}
