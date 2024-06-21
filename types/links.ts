export type LinkItem = {
    name: string;
    url: string;
};
export type LinksList = Array<LinkItem>;

export type Links = {
    twitter: string,
    website: string,
    others: LinksList
}