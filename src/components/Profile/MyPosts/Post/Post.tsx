import s from "./Post.module.css";

export type PostPropsType = {
  message: string;
};

const Post = (props: PostPropsType) => {
  return (
    <div>
      <div className={s.item}>
        <img
          src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
          alt="profile"
        />
        <div>{props.message}</div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
