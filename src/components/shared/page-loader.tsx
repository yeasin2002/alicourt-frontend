import { Loader2Icon } from "lucide-react";
import { DashboardLayout } from "../layout";

export const PageLoader = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center h-full p-4 gap-x-2">
        <Loader2Icon className="animate-spin size-8" />
        <p>Loading Page Data ...</p>
      </div>
    </DashboardLayout>
  );
};
