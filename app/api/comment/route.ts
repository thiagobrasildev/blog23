import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const { name, email, comment, postId } = data;

  if (!name || !email || !comment || !postId) {
    return NextResponse.json(
      {
        message: "Todos os campos são obrigatórios",
      },
      { status: 400 }
    );
  }

  try {
    const newComment = await client.create({
      _type: "comment",
      name,
      email,
      comment,
      post: {
        _type: "reference",
        _ref: postId,
      },
    });
    return NextResponse.json(
      { message: "Commentário criado com sucesso.", commet: newComment },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Failed", error }, { status: 500 });
  }
}
