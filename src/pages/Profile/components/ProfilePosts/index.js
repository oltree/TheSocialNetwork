import { memo } from "react";

import NewPost from "../NewPost";
import PostsForm from "../PostsForm";

import styles from "./index.module.scss";

const ProfilePosts = ({ posts, handleAddPost, handleRemovePost }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>My Posts</h2>

      <PostsForm handleAddPost={handleAddPost} />

      <div className={styles.posts}>
        {posts.map(({ id, textPost }) => (
          <NewPost
            key={id}
            id={id}
            textPost={textPost}
            handleRemovePost={handleRemovePost}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ProfilePosts);
