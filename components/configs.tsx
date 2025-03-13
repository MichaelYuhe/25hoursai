"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { workHours } from "@/lib/constants";

export default function Configs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentWorkHourId = searchParams.get("workHourId") || workHours[0].id;
  const hideDetails = searchParams.get("hideDetails") === "true";

  const handleWorkHourChange = (workHourId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("workHourId", workHourId);
    router.push(`?${params.toString()}`);
  };

  const toggleHideDetails = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("hideDetails", hideDetails ? "false" : "true");
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="mb-8 w-full">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Work Hours Configuration</h2>
          <div className="flex items-center gap-x-2">
            <span className="text-sm text-zinc-500">
              Hide details
            </span>
            <button
              onClick={toggleHideDetails}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                hideDetails ? "bg-blue-500" : "bg-zinc-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  hideDetails ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {workHours.map((workHour) => (
            <div
              key={workHour.id}
              className={`border p-3 rounded-lg cursor-pointer hover:bg-zinc-100 transition-colors ${
                currentWorkHourId === workHour.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-zinc-300"
              }`}
              onClick={() => handleWorkHourChange(workHour.id)}
            >
              <div className="flex items-center gap-x-2">
                <div className="flex-1">
                  <div className="font-medium text-lg">{workHour.id} Work Mode</div>
                    <div className="flex flex-col mt-1">
                      <div className="text-sm text-zinc-500">
                        {workHour.description}
                      </div>
                      <div className="text-sm text-zinc-500">
                        {workHour.hoursPerDay} hours ×{" "}
                        {workHour.workDaysPerMonth} days per month
                      </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
