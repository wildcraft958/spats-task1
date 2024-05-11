import Navbar from "@/Components/Navbar";
import Intro from "@/Components/Intro";
import Blog from "@/Components/Blog"; // Assuming you have a Blog component
import Landing from "@/Components/Landing";
import styles from "./page.module.css";

export default function Home() {

  const isLandingPage = true;

  return (
      <>
      <Landing/>
      </>
      );
}
