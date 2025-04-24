import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId: "85lh20rx",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-25",
})

const builder = imageUrlBuilder(client);

export function urlFor(source:any){
    return builder.image(source);
}
