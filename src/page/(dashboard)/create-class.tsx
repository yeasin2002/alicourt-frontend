import { DashboardLayout } from "@/components/layout";

export function CreateClassPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center h-full p-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Create Class</h1>
          <p className="text-gray-600">Create and manage your classes here</p>
          <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-md">
            <p className="text-gray-500">
              Class creation interface coming soon...
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
