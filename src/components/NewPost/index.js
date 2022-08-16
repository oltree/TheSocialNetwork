import AvatarProfile from "../../static/images/avatarProfile.jpg";

import styles from "./index.module.scss";

const NewPost = ({ id, textPost, handleRemovePost }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img className={styles.avatar} src={AvatarProfile} alt="avatar" />
      </div>
      <div className={styles.post}>
        <p className={styles.text}>{textPost}</p>
      </div>
      <button onClick={() => handleRemovePost(id)}>delete</button>
    </div>
  );
};

export default NewPost;
