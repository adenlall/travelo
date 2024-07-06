import { builder } from "./builder";
import"./scalars"
import "../models/User"
import "../models/Profile"
import "../models/Trip"
import "../models/Location"
import "../models/Address"
import "../models/TripsOnUsers"

export const schema = builder.toSchema()