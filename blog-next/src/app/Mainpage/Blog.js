import Link from "next/link";
import styles from "@/Styles/Blog.module.css";

function Blog(props) {
  return (
    <div className={styles.blog}>
      <Link href="http://" target="_blank" rel="noopener noreferrer">
        <h1>{props.title}</h1>
      </Link>
      <p>{props.content}</p>
    </div>
  )
}

export default Blog
