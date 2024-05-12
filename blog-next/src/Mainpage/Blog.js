import Link from "next/link";
const styles = {
  blog: {
    border: "1px solid #333",
    padding: "1rem",
    margin: "1rem 1rem"
  },
  blogContent: {
    textAlign: "center"
  }
};


function Blog(props) {
  return (
    <div style={styles.blog}>
      <Link href="http://" target="_blank" rel="noopener noreferrer">
        <h1>{props.title}</h1>
      </Link>
      <p>{props.content}</p>
    </div>
  )
}

export default Blog
