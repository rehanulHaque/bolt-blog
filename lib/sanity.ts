import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
export const revalidate = 30;
export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_APIVERSION,
    useCdn: false
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)


export const getCategoryFromRef = async (ref: string) => {
    const query = `*[_type == 'category']{
        title, _id}`
    const data = await client.fetch(query)
    let title = ''
    data.forEach((item: {_id: string, title: string}) => {
        if (item._id == ref) {
            title = item.title
        }
    })
    return title
}

export const getRefFromCategory = async (title: string) => {
    const query = `*[_type == 'category']{
        title, _id}`
    const data = await client.fetch(query)
    let ref = ''
    data.forEach((item: {_id: string, title: string}) => {
        if (item.title == title) {
            ref = item._id
        }
    })
    return ref
}