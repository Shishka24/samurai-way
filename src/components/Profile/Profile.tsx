import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

export const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
          alt="bg0"
        />
      </div>
      <div>Ava + Desc</div>
      <MyPosts />
    </div>
  );
};
