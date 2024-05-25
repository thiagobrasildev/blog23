import { defineType } from "sanity";

export const comment = defineType({
  name: "comment",
  title: "Comentários",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nome",
      type: "string",
      readOnly: true,
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      readOnly: true,
    },
    {
      name: "comment",
      title: "Comentário",
      type: "text",
      readOnly: true,
    },
    {
      name: "post",
      title: "Post",
      type: "reference",
      to: [{ type: "post" }],
    },
  ],
});
