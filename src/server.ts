import fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = fastify();

app.register(cors);
app.register(appRoutes);

app.listen({
   port: 5000,
}).then(() => console.log("Listening on http://localhost:5000"));
