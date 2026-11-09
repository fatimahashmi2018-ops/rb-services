import { defineType,defineField } from "sanity";
export default defineType({
    name:"category",
    title: "Category",
    type:"document",
    fields:[
        defineField({
            name:"title",
            title:"Title",
            type: "string",
            validation:(rule)=>rule.required()
     
     
           }),

        defineField({
            name:"image",
            title:"Background Image",
            type:"image",
            options:{hotspot:true},
            validation: (rule)=>rule.required(),
        }),
        defineField({
      name: "shape",
      title: "Decorative SVG",
      type: "file",
      options: {
        accept: ".svg,image/svg+xml",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "href",
      title: "Link",
      type: "string",
      description: 'Example: "#kitchens"',
      validation: (Rule) => Rule.required(),
    }),
    ],

})