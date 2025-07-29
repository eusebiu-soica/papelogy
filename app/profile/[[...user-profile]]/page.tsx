import { UserProfile } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server"; // <-- Importă currentUser

export async function generateMetadata() {
  const user = await currentUser();

  const userName = user?.firstName || user?.username || "Profile";

  return {
    title: `${userName}'s Profile`,
  };
}

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
