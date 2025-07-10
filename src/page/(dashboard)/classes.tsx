import { CreateClassAction } from "@/components/dashboard";
import { DashboardLayout } from "@/components/layout";
import { PageLoader } from "@/components/shared";
import { useGetClassesQuery } from "@/store/api";
import { Folder } from "lucide-react";

export function ClassesPage() {
  const { data, isLoading, error } = useGetClassesQuery();
  const files = data || [];
  const isEmpty = !isLoading && !error && data?.length === 0;

  if (isLoading) return <PageLoader />;
  if (isEmpty) return <InitialClass />;

  return (
    <DashboardLayout className="p-4">
      <div className="flex justify-end ">
        <div className="flex w-1/2 justify-between  ">
          <h1 className="text-2xl font-bold text-gray-800 font-montserrat ">
            My Classes
          </h1>
          <CreateClassAction />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {files.map((file, index) => (
          <div
            key={index}
            className=" bg-gradient-to-r from-[#081963] to-[#581DA8]  cursor-pointer flex items-center  px-4 py-2 border-b border-gray-200  rounded-md text-primary-foreground  gap-x-2"
          >
            <Folder className="text-white fill-white size-8" />
            <p className="text-sm font-semibold font-montserrat ">
              {" "}
              {file.description}{" "}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}

export const InitialClass = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center h-full p-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Create Class</h1>
          <p className="text-gray-600">Create and manage your classes here</p>

          <CreateClassAction />
        </div>
      </div>
    </DashboardLayout>
  );
};
