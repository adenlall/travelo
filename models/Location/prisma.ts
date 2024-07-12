import { InputFieldRef, InputShapeFromFields } from "@pothos/core";
import { Prisma } from "@prisma/client/edge";

export const Create = (args: InputShapeFromFields<{
    country: InputFieldRef<string, "Arg">;
    state: InputFieldRef<string, "Arg">;
    city: InputFieldRef<string, "Arg">;
    tripId: InputFieldRef<string | number | null | undefined, "Arg">;
    profileId: InputFieldRef<string | number | null | undefined>;
}>) : Prisma.LocationCreateInput => {
    let toret = {
        country: args.country,
        state: args.state,
        city: args.city,
    } as Prisma.LocationCreateInput;
    if (args.tripId) {
        toret = {
            ...toret,
            trips: {
                connect: {
                    id: String(args.tripId)
                }
            }
        }
    }
    if (args.profileId) {
        toret = {
            ...toret,
            profiles: {
                connect: {
                    id: String(args.profileId)
                }
            }
        }
    }
    return toret;
}