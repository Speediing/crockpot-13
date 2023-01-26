"use client";
import { headers } from "next/headers";
import { StatsigProvider } from "statsig-react";

export function Providers({ ip, children }: any) {
  return (
    <StatsigProvider
      sdkKey="client-9Aeut9tEZMVfDQiHWc6u4Fu6ZdARWnml5GFxXNZQsWU"
      user={{ ip: ip || "" }}
      waitForInitialization={true}
      options={{
        environment: { tier: "staging" },
      }}
    >
      {children}
    </StatsigProvider>
  );
}
