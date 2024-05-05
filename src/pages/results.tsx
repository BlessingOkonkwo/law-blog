import ArticleCard from "@/components/results/article-card";
import axios from "axios";
import { useEffect, useState } from "react";

const Results = () => {
  const [posts, setPosts] = useState<
    { userId: number; id: number; title: string; body: string }[]
  >([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {posts &&
        posts.length > 0 &&
        posts.map((post, index) => (
          <ArticleCard key={index} title={post.title} description={post.body} />
        ))}
    </div>
  );
};

export default Results;
