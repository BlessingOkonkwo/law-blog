import { IArticle, IArticleData, IUser } from "@/components/types";

export default function mergeAttorneyArticles(
  posts: IArticle[],
  authors: IUser[],
  searchQuery: string // Add a parameter for the search query
): IArticleData[] {
  return posts
    .filter(post => {
      // Filter posts based on search query matching title or author name
      return post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
             authors.find(author => author.id === post.userId)?.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .map((post) => {
      const author = authors.find((author) => author.id === post.userId);
      if (author) {
        return {
          title: post.title,
          body: post.body,
          name: author.name,
          phone: author.phone,
        };
      } else {
        return {
          title: post.title,
          body: post.body,
          name: "Unknown",
          phone: "Unknown",
        };
      }
    });
}
