import "./App.css";
import Card from "./component/Card";

function App() {
  let object = {
    name: "Param",
    age: 20,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-2xl p-4 mb-2">
        Tailwind Test
      </h1>
      <Card username="Param" {...object} />
      {/* this object is in the deep copy in js form that is anything written in {text} as it is jayega */}
      <Card username="Gurjas" btnText="Click Me" />
    </>
  );
}

export default App;
