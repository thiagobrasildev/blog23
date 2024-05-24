import Header from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import { Post, Tag } from "@/app/utils/Interface";
import { client } from "@/sanity/lib/client";
import React from "react";

interface Params {
  params: {
    slug: string;
  };
}

async function getPostsByTags(tag: string) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    tags[]-> {
      _id,
      slug,
      name  
    }
  }
  `;
  const posts = client.fetch(query);
  return posts;
}

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const posts: Post[] = await getPostsByTags(params?.slug);

  return (
    <div>
      <Header title={`#${params?.slug}`} tags />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
};

export default page;
