import { Button } from "@/components/ui";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { createClassSchema, type createClassSchemaType } from "@/data";
import { useCreateClassesMutation } from "@/store/api";
import type { ApiResponse, SingleClass } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TextInput } from "../custom-ui";

// interface Props extends React.ComponentProps<"div"> {}

export const CreateClassAction = () => {
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<createClassSchemaType>({
    resolver: zodResolver(createClassSchema),
  });

  const [createClass] = useCreateClassesMutation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const onSubmit = async (data: createClassSchemaType) => {
    try {
      const req = (await createClass({
        title: data.name,
        description: data.description,
        date: new Date().toISOString().split("T")[0],
      })) as ApiResponse<SingleClass>;

      if (req.error && !req.data) throw new Error(req?.error?.data?.error);
      toast.success("Class created successfully");
      return toggleOpen();
    } catch (error) {
      return toast.error((error as Error).message || "something went wrong");
    }
  };

  return (
    <>
      <AlertDialog open={isOpen}>
        <AlertDialogTrigger asChild onClick={toggleOpen}>
          <Button size={"lg"} className="cursor-pointer">
            Create Class
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create Class </AlertDialogTitle>
            <AlertDialogDescription className="sr-only">
              Create a new class
            </AlertDialogDescription>
          </AlertDialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <TextInput
                register={register("name")}
                labelName="Name"
                error={errors.name?.message}
                type="text"
              />
              <TextInput
                register={register("description")}
                labelName="Description"
                error={errors.description?.message}
                type="text"
              />
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={toggleOpen}
                className="cursor-pointer"
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction type="submit" className="cursor-pointer">
                {isSubmitting ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  "Create"
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
