export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Product name",
        }
        
        ,{
            name: "image",
            type: "array",
            title: "Product image",
            of: [{type: "image", }],
        },
       
        {
            name: "description",
            type: "text",
            title: "Product description",
        }        
        ,{
            name: "slug",
            type: "string",
            title: "Slug",
            
        },
        {
            name: "price",
            type: "number",
            title: "price"

        }
        ,{
            name : "category",
            type: "reference",
            to: {
                type: "category"
            }
        }
    ]
}