import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CompletedTasks from "../CompletedTasks/CompletedTasks";
import Tasks from "../Tasks/Tasks";

function Home() {
  return (
    <>
      <Header></Header>
      <Tasks></Tasks>
      <CompletedTasks></CompletedTasks>
      <Footer></Footer>
    </>
  );
}

export default Home;
