
import Post from "../components/Post";
import Header from "../components/Header";
import Category from "../components/Category";
import RecentPost from "../components/RecentPost";

function App() {
  return (
    <main className="">
     <Header/>
     <div className="flex  w-full mt-10 justify-center items-center">
      <div className="flex gap-12">

      <div>
      <Category/>
     <Post id = "66bbb1574408ad7e9224cfe9"/>
      </div>
<RecentPost />
      </div>

     </div>
    </main>
  );
}

export default App;
