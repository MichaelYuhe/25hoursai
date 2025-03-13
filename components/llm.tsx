"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { workHours } from "@/lib/constants";

export interface LLMProps {
  name: string;
  inputTokensPerMinute: number;
  outputTokensPerMinute: number;
  inputTokenPrice: number;
  outputTokenPrice: number;
  referenceLink: string; 
  id: string;
}

export default function LLM({
  name,
  inputTokensPerMinute,
  outputTokensPerMinute,
  inputTokenPrice,
  outputTokenPrice,
  referenceLink,
  id,
}: LLMProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const workHourId = searchParams.get("workHourId");
  const hideDetails = searchParams.get("hideDetails") === "true";
  const employeesParam = searchParams.get("employees") || "";
  const employees = employeesParam ? employeesParam.split(",") : [];
  const isSelected = employees.includes(id);

  const selectedWorkHour = workHourId
    ? workHours.find((wh) => wh.id === workHourId)
    : workHours[0];

  if (!selectedWorkHour) {
    return null;
  }

  const calculateCost = () => {
    const totalInputTokens =
      inputTokensPerMinute *
      selectedWorkHour.hoursPerDay *
      selectedWorkHour.workDaysPerMonth;
    const totalOutputTokens =
      outputTokensPerMinute *
      selectedWorkHour.hoursPerDay *
      selectedWorkHour.workDaysPerMonth;

    const totalCost =
      (totalInputTokens * inputTokenPrice +
        totalOutputTokens * outputTokenPrice) /
      1000;

    return totalCost;
  };

  const handleToggleEmployee = () => {
    // Create a new URLSearchParams object from the current URL
    const params = new URLSearchParams(searchParams.toString());
    
    // Get current employees list, ensuring we filter out any empty entries
    const currentEmployees = params.get("employees")?.split(",").filter(Boolean) || [];
    
    let newUrl = "";
    
    if (isSelected) {
      // Remove this LLM from the employees list
      const updatedEmployees = currentEmployees.filter(employeeId => employeeId !== id);
      
      if (updatedEmployees.length > 0) {
        params.set("employees", updatedEmployees.join(","));
      } else {
        params.delete("employees");
      }
    } else {
      // Add this LLM to the employees list
      const updatedEmployees = [...currentEmployees, id];
      params.set("employees", updatedEmployees.join(","));
    }
    
    newUrl = `?${params.toString()}`;
    console.log("Navigating to:", newUrl); // Debug output
    
    // Use the router to update the URL with the new parameters
    router.push(newUrl, { scroll: false });
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleToggleEmployee}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleToggleEmployee();
        }
      }}
      className={`border rounded-lg p-3 flex flex-col ${
        isSelected 
          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
          : "border-zinc-200 dark:border-zinc-700"
      } cursor-pointer hover:border-blue-300 dark:hover:border-blue-600 transition-colors dark:bg-zinc-800`}>
      <h2 className="text-lg dark:text-white">{name}</h2>

      {!hideDetails && (
        <ul className="flex flex-col list-disc ml-3 text-xs text-zinc-500 dark:text-zinc-400">
          <li>
            <span>Input Tokens Per Minute: </span>
            <span>{inputTokensPerMinute}</span>
          </li>
          <li>
            <span>Output Tokens Per Minute: </span>
            <span>{outputTokensPerMinute}</span>
          </li>
          <li>
            <span>Input Token Price Per Million: </span>
            <span>${inputTokenPrice}</span>
          </li>
          <li>
            <span>Output Token Price Per Million: </span>
            <span>${outputTokenPrice}</span>
          </li>
        </ul>
      )}

      <span className="text-4xl font-semibold mt-2 dark:text-white">
        ${calculateCost().toFixed(2)}
      </span>

      <a 
        href={referenceLink} 
        className="text-sm mt-2 w-fit text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
        onClick={(e) => e.stopPropagation()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Reference
      </a>
      
      {/* Debug info - can be removed in production */}
      <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
        ID: {id} {isSelected ? "(Selected)" : ""}
      </div>
    </div>
  );
}
