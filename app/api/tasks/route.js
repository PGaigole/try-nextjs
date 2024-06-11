import db from "@/utils/db";

export const GET = async (req) => {
  const tasks = await db.task.findMany();
  return Response.json({ data: tasks });
};

export const POST = async (req) => {
  const request = await req.json();
  const data = await db.task.create({
    data: {
      content: request.content,
    },
  });
  return Response.json({ data });
};
