"use client";

import { Suspense } from "react";
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
          <h1 className="text-4xl font-bold text-foreground">25 Hours AI</h1>

          <a
            href="https://github.com/michaelyuhe/25hoursai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            <GitHubLogoIcon className="w-6 h-6" /> Modify LLM Data on GitHub
          </a>

          <p className="text-xl text-gray-700 dark:text-gray-200">
            See how much it costs to let AI work tirelessly while you enjoy your
            life. No coffee breaks, no complaints, just pure digital dedication.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="text-gray-700 dark:text-gray-300">
              Loading configuration...
            </div>
          }
        >
          <Configs />
        </Suspense>

        <Suspense
          fallback={
            <div className="text-gray-700 dark:text-gray-300">
              Loading overview...
            </div>
          }
        >
          <Overview />
        </Suspense>

        <div className="grid grid-cols-2 gap-4 w-full">
          <Suspense
            fallback={
              <div className="text-gray-700 dark:text-gray-300">
                Loading LLM data...
              </div>
            }
          >
            {llms.map((llm) => (
              <LLM key={llm.id} {...llm} />
            ))}
          </Suspense>
        </div>

        <FAQ />
      </div>
    </div>
  );
}
