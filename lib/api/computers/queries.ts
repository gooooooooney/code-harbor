import { db } from "@/lib/db";

// export const getComputers = async () => {
//   const c = await db.computer.findMany();
//   return { computers: c };
// };

// export const getComputerById = async (id: ComputerId) => {
//   const { id: computerId } = computerIdSchema.parse({ id });
//   const c = await db.computer.findFirst({ where: { id: computerId } });
//   return { computer: c };
// };