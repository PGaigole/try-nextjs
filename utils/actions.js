"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z, { string } from "zod";

export const createTask = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const newTask = formData.get("newTask");
  // zod validation
  const zodTask = z.object({
    content: z.string().min(5),
  });
  try {
    zodTask.parse({
      content: newTask,
    });
    await prisma.task.create({
      data: {
        content: newTask,
      },
    });

    // Trigger revalidation asynchronously without blocking
    // setTimeout(() => {
    revalidatePath("/todo-list");
    // }, 0);
    return { message: "Success", status: 200 };
  } catch (error) {
    return { message: error.errors[0]?.message || "Error", status: 400 };
  }
};

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const deleteTask = async (formData) => {
  const id = formData.get("deleteTask");
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/todo-list");
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const updateTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");
  await prisma.task.update({
    where: { id },
    data: {
      content,
      completed: completed === "on",
    },
  });
  redirect("/todo-list");
};
