export default {
    name: 'blog',
    type: "document",
    title: "Blog",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: "Title of the blog"
        },
        {
            name: 'slug',
            type: 'slug',
            title: "Dlug of your blog",
            options: {
                source: "title"
            }
        },
        {
            name: "categoty",
            type: "reference",
            title: "Category",
            to: [
                {
                    type: "category"
                }
            ]
        },
        {
            name: 'titleImage',
            type: 'image',
            title: "Title image"
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: "Small Description"
        },
        {
            name: 'content',
            type: 'array',
            title: "Content",
            of: [
                {
                    type: 'block'
                }
            ]
        },
    ]
}