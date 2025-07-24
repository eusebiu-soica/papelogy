"use client";

import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <div>
      <UserProfile
        appearance={{
          elements: {
            card: "!w-full !h-full shadow-none",
            footer: "hidden",
            cardBox: "!w-screen !h-screen !max-w-none",
          },
          layout: {
            unsafe_disableDevelopmentModeWarnings: true,
          },
        }}
      />
    </div>
  );
}
