import { LinksList } from "@/types/links";

export const linksValidator = (links: any): boolean => {
    if (!links) {
        return false;
    }
    if (!twitter(links.twitter) && !website(links.website)) {
        return false
    }
    if (websiteList(links.others)) {
        return true;
    }
    return false;
}

const twitter = (username: string | null): boolean => {
    if (username === null) {
        return true;
    }
    const parsed = username.split("@");
    if (parsed.length && parsed[1]) {
        return true;
    }
    return false;
}
const website = (website: string | null): boolean => {
    if (website === null) {
        return true;
    }
    const regex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi)
    if (website.match(regex)) {
        return true;
    }
    return false;
}
const websiteList = (websites: LinksList | null): boolean => {
    if (websites === null) {
        return true;
    }
    for (let i = 0; i < website.length; i++) {
        if (!websites[i].name || !websites[i].url || !website(websites[i].url)) {
            return false;
        }
    }
    return true;
}