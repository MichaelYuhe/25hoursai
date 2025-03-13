import { LLMProps } from "@/components/llm";

export const llms: LLMProps[] = [
  {
    name: "Claude 3.7 Sonnet",
    inputTokensPerMinute: 1200,
    outputTokensPerMinute: 1200,
    inputTokenPrice: 3.75,
    outputTokenPrice: 15,
    referenceLink: "https://www.anthropic.com/pricing#anthropic-api",
    id: "claude-3-7-sonnet",
  },
  {
    name: "GPT-4o Mini",
    inputTokensPerMinute: 1000,
    outputTokensPerMinute: 1000,
    inputTokenPrice: 0.15,
    outputTokenPrice: 0.6,
    referenceLink: "https://openai.com/api/pricing/",
    id: "gpt-4o-mini",
  },
  {
    name: "GPT-4o",
    inputTokensPerMinute: 800,
    outputTokensPerMinute: 800,
    inputTokenPrice: 2.5,
    outputTokenPrice: 10,
    referenceLink: "https://openai.com/api/pricing/",
    id: "gpt-4o",
  },
  {
    name: "o1",
    inputTokensPerMinute: 1500,
    outputTokensPerMinute: 1500,
    inputTokenPrice: 15,
    outputTokenPrice: 60,
    referenceLink: "https://openai.com/api/pricing/",
    id: "o1",
  },
  {
    name: "GPT-4.5",
    inputTokensPerMinute: 1200,
    outputTokensPerMinute: 1200,
    inputTokenPrice: 75,
    outputTokenPrice: 150,
    referenceLink: "https://openai.com/api/pricing/",
    id: "gpt-4-5",
  },
  {
    name: "Gemini Flash 2",
    inputTokensPerMinute: 1200,
    outputTokensPerMinute: 1200,
    inputTokenPrice: 0.1,
    outputTokenPrice: 0.4,
    referenceLink: "https://ai.google.dev/pricing",
    id: "gemini-flash-2",
  },
  {
    name: "DeepSeek R1",
    inputTokensPerMinute: 900,
    outputTokensPerMinute: 900,
    inputTokenPrice: 0.55,
    outputTokenPrice: 2.19,
    referenceLink: "https://www.deepseek.com/",
    id: "deepseek-r1",
  },
  {
    name: "DeepSeek V3",
    inputTokensPerMinute: 900,
    outputTokensPerMinute: 900,
    inputTokenPrice: 0.6,
    outputTokenPrice: 2.4,
    referenceLink: "https://www.deepseek.com/",
    id: "deepseek-v3",
  },
  {
    name: "Llama 3.3 70B",
    inputTokensPerMinute: 900,
    outputTokensPerMinute: 900,
    inputTokenPrice: 1.5,
    outputTokenPrice: 1.5,
    referenceLink: "https://llama.meta.com/",
    id: "llama-3-3-70b",
  },
  {
    name: "Grok 2",
    inputTokensPerMinute: 1000,
    outputTokensPerMinute: 1000,
    inputTokenPrice: 2,
    outputTokenPrice: 10,
    referenceLink: "https://grok.x.ai/",
    id: "grok-2",
  },
];

export interface WorkHour {
  id: string;
  description: string;
  hoursPerDay: number;
  workDaysPerMonth: number;
}

export const workHours: WorkHour[] = [
  {
    id: "996",
    description: "Start at 9am and work until 9pm, 6 days a week",
    hoursPerDay: 12,
    workDaysPerMonth: 25,
  },
  {
    id: "007",
    description: "Start at 0am and work until 0am, 7 days a week",
    hoursPerDay: 24,
    workDaysPerMonth: 30,
  },
];
