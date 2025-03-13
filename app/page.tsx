"use client";

import LLM from "@/components/llm";
import Configs from "@/components/configs";
import { llms } from "@/lib/constants";
import FAQ from "@/components/faq";
import Overview from "@/components/overview";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="p-12 w-full flex justify-center">
      <div className="flex flex-col w-full max-w-3xl items-center">
        <div className="flex flex-col mb-12 gap-y-4">
          <h1 className="text-4xl font-bold">25 Hours AI</h1>

          <div className="flex items-center gap-4">
            <a href="https://github.com/michaelyuhe/25hoursai" target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon className="w-6 h-6" />
            </a>
          </div>

          <p className="text-xl">
            See how much it costs to let AI work tirelessly while you enjoy your
            life. No coffee breaks, no complaints, just pure digital dedication.
          </p>
        </div>

        <Configs />
        
        <Overview />

        <div className="grid grid-cols-2 gap-4 w-full">
          {llms.map((llm) => (
            <LLM key={llm.id} {...llm} />
          ))}
        </div>

        <FAQ />
      </div>
    </div>
  );
}
