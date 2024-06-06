import { builder } from "./builder";
import "@/models/User"
import "@/models/Trip"

export const schema = builder.toSchema()