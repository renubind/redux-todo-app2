import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="App border-2  text-blue-900 font-bold font-serif  overflow-y-auto max-w-5xl mx-auto h-80 bg-slate-200 border-blue-900">
        <h1 className="text-4xl my-5">React-redux Todo-app</h1>
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
