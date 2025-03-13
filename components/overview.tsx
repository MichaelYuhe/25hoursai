"use client";

import { useSearchParams } from "next/navigation";
import { llms, workHours } from "@/lib/constants";

export default function Overview() {
  const searchParams = useSearchParams();
  
  // Get selected employees from URL params
  const employeesParam = searchParams.get("employees") || "";
  const employeeIds = employeesParam ? employeesParam.split(",").filter(Boolean) : [];
  
  // Get work hour configuration
  const workHourId = searchParams.get("workHourId") || workHours[0].id;
  const selectedWorkHour = workHours.find(wh => wh.id === workHourId) || workHours[0];
  
  // Find employee data from llms list
  const selectedEmployees = llms.filter(llm => employeeIds.includes(llm.id));
  
  // Calculate total cost
  const calculateTotalCost = () => {
    return selectedEmployees.reduce((total, llm) => {
      const totalInputTokens =
        llm.inputTokensPerMinute *
        selectedWorkHour.hoursPerDay *
        selectedWorkHour.workDaysPerMonth;
      
      const totalOutputTokens =
        llm.outputTokensPerMinute *
        selectedWorkHour.hoursPerDay *
        selectedWorkHour.workDaysPerMonth;
      
      const llmCost = 
        (totalInputTokens * llm.inputTokenPrice +
         totalOutputTokens * llm.outputTokenPrice) / 1000;
      
      return total + llmCost;
    }, 0);
  };
  
  const totalCost = calculateTotalCost();
  
  return (
    <div className="w-full border rounded-lg p-4 mb-6 bg-white dark:bg-zinc-800 dark:border-zinc-700 shadow-sm">
      <h3 className="text-xl font-semibold mb-2 dark:text-white">Team Overview</h3>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-700 dark:text-gray-300 mb-1">Work Schedule:</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{selectedWorkHour.description}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {selectedWorkHour.hoursPerDay} hours/day × {selectedWorkHour.workDaysPerMonth} days/month
          </p>
        </div>
        
        <div className="text-right">
          <p className="text-gray-700 dark:text-gray-300">Total Monthly Cost:</p>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">${totalCost.toFixed(2)}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">per month</p>
        </div>
      </div>
      
      <div>
        <p className="text-gray-700 dark:text-gray-300 mb-2">Employees ({selectedEmployees.length}):</p>
        {selectedEmployees.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selectedEmployees.map(employee => (
              <span 
                key={employee.id}
                className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full px-3 py-1 text-sm"
              >
                {employee.name}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">No employees selected. Click on LLM cards below to add them to your team.</p>
        )}
      </div>
    </div>
  );
}
