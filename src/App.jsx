import "./App.css";
import Calculator from "./components/Calculator";

function App() {

  return (
    <div className="w-screen h-screen bg-slate-900 text-slate-200 flex flex-col items-center py-8">
      <h1 className="text-5xl text-center">React calculator</h1>
      <p className="text-lg mt-2">Maybe this time it will work...</p>
      <div className="mt-8">
      	<Calculator />
      </div>
    </div>
  );
}

export default App;
