import { FaUserCircle } from "react-icons/fa";
function App() {
  return (
    <main className="p-3 max-w-[900px] flex-1 flex-grow  mx-auto my-0 text-black ">
      <header className="flex justify-between mb-2">
        <a href="">BlogHub</a>
        <nav className="flex gap-5 text-md">
          <a href="" className="hover:text-white transition-all">
            Login
          </a>
          <a href="" className="hover:text-white transition-all">
            Register
          </a>
        </nav>
      </header>
      <hr className="text-gray-400 bg-gray-600" />

      {/* Posts  */}
      <div className="mt-10  flex-col md:flex-row overflow-hidden  h-[350px] md:h-[300px] w-full py-2 px-2 shadow-xl shadow-black rounded-md justify-between ">
        <img
          src="https://www.livemint.com/lm-img/img/2024/07/08/600x338/2-1_1720408341185_1720408352762.png"
          alt=""
          className="w-[100%] md:w-[50%] h-[60%] md:h-full object-cover bg-cover"
        />

        <div>
          <h2 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            perferendis reiciendis dolores.
          </h2>
          <div className="flex gap-2 items-center mt-2">
          <FaUserCircle size={28}/>
          <p>Rico</p>
          </div>
          <p className="hidden md:block">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quasi aspernatur esse deserunt id accusantium laborum consequuntur,
            deleniti obcaecati illum, debitis tempora a voluptatibus maiores.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
