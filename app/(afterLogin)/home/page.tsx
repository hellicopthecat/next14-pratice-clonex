import Tab from "@/components/afterLogin/home/tab/Tab";
import TabProvider from "@/components/afterLogin/home/tab/TabProvider";
import styles from "./Home.module.css";
import PostForm from "@/components/afterLogin/home/postForm/PostForm";
import Post from "@/components/afterLogin/Post";
export default function AfterLoginHome() {
  return (
    <div className={styles.home_container}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </div>
  );
}
