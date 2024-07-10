import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/AuthContext";
import PostStats from "./PostStats";
import { formatDateToSeconds } from "../../lib/utils";

type GridPostListProps = {
  posts: Models.Document[];
  showUser?: boolean;
  showStats?: boolean;
  filterBy?: string | undefined;
};

const GridPostList = ({
  posts,
  showUser = true,
  showStats = true,
  filterBy = "All",
}: GridPostListProps) => {
  const { user } = useUserContext();

  switch (filterBy) {
    case "Newest":
      posts.sort((a, b) => {
        return (
          formatDateToSeconds(a.$createdAt) - formatDateToSeconds(b.$createdAt)
        );
      });
      break;
    case "Oldest":
      posts.sort((a, b) => {
        return (
          formatDateToSeconds(b.$createdAt) - formatDateToSeconds(a.$createdAt)
        );
      });
      break;
    case "Update":
      posts.sort((a, b) => {
        return (
          formatDateToSeconds(a.$updatedAt) - formatDateToSeconds(b.$updatedAt)
        );
      });
      break;
    case "Likes":
      posts.sort((a, b) => {
        return b.likes.length - a.likes.length;
      });
      break;
  }

  return (
    <ul className="grid-container">
      {posts.map((post) => (
        <li key={post.$id} className="relative min-w-80 h-80">
          <Link to={`/posts/${post.$id}`} className="grid-post_link">
            <img
              src={post.imageUrl}
              alt="post"
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="grid-post_user">
            {showUser && (
              <div className="flex items-center justify-start gap-2 flex-1">
                {post.creater.imageUrl && (
                  <img
                    src={post.creater.imageUrl}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                )}
                <p className="line-clamp-1">{post.creater.name}</p>
              </div>
            )}
            {showStats && <PostStats post={post} userId={user.id} />}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GridPostList;
