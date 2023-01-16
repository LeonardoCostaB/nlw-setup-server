import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors)

app.get("/", async () =>{
   const habits = await prisma.habit.findMany();

   return habits;
});

app.listen({
   port: 5000,
}).then(() => console.log("Listening on http://localhost:5000"));