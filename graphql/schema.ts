import { builder } from "./builder";
import "@/models/User"
import "@/models/Trip"
import "@/models/Location"
import "@/models/Profile"

export const schema = builder.toSchema()