// schemaTypes/project.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "image", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: "category", type: "reference", to: [{ type: "category" }], validation: (r) => r.required() }),
  ],
});