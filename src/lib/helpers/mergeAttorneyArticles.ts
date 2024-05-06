import { IArticle, IArticleData, IUser } from "@/components/types";

export default function mergeAttorneyArticles(
  posts: IArticle[],
  authors: IUser[],
  searchQuery: string | null // Modify the type of searchQuery to accept null
): IArticleData[] {
  // Check if searchQuery is null, then set it to an empty string
  const normalizedSearchQuery = searchQuery ?? '';

  return posts
    .filter(post => {
      // Filter posts based on search query matching title or author name
      return post.title.toLowerCase().includes(normalizedSearchQuery.toLowerCase()) || 
             authors.find(author => author.id === post.userId)?.name.toLowerCase().includes(normalizedSearchQuery.toLowerCase());
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
