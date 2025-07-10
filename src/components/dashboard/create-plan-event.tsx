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

import { createPlanSchema, type createPlanSchemaType } from "@/data";
import { useCreatePlansMutation } from "@/store/api";
import type { ApiResponse, SingleClass } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TextInput } from "../custom-ui";

export const CreatePlanEvent = () => {
  const [createPlan] = useCreatePlansMutation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<createPlanSchemaType>({
    resolver: zodResolver(createPlanSchema),
  });

  const onSubmit = async (data: createPlanSchemaType) => {
    try {
      const req = (await createPlan(data)) as ApiResponse<SingleClass>;

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
            create new class
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>create new class </AlertDialogTitle>
            <AlertDialogDescription className="sr-only">
              Create a new class
            </AlertDialogDescription>
          </AlertDialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <TextInput
                register={register("title")}
                labelName="Title"
                error={errors.title?.message}
              />

              <TextInput
                register={register("duration")}
                labelName="Duration"
                error={errors.duration?.message}
              />

              <TextInput
                register={register("goals")}
                labelName="Goal"
                error={errors.goals?.message}
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
