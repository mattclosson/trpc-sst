import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Goals() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="">Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="w-full !justify-start bg-transparent text-slate-900 hover:bg-slate-100">
          Spoon
        </Button>
      </CardContent>
    </Card>
  );
}
