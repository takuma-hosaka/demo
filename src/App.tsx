import { useTodos } from './hooks/useTodos'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoFilter } from './components/TodoFilter'
import './App.css'

function App() {
  const { todos, filter, setFilter, addTodo, toggleTodo, deleteTodo, clearCompleted, activeCount, completedCount } =
    useTodos()

  return (
    <div className="app">
      <h1>todos</h1>
      <div className="card">
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        <TodoFilter
          filter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={clearCompleted}
        />
      </div>
    </div>
  )
}

export default App
