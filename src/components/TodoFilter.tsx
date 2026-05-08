import type { Filter } from '../types/todo'

interface Props {
  filter: Filter
  onFilterChange: (filter: Filter) => void
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
}

const FILTERS: Filter[] = ['all', 'active', 'completed']

export function TodoFilter({ filter, onFilterChange, activeCount, completedCount, onClearCompleted }: Props) {
  return (
    <div className="todo-footer">
      <span className="count">
        {activeCount} item{activeCount !== 1 ? 's' : ''} left
      </span>
      <div className="filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn${filter === f ? ' active' : ''}`}
            onClick={() => onFilterChange(f)}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <div className="clear-slot">
        {completedCount > 0 && (
          <button className="clear-btn" onClick={onClearCompleted}>
            Clear completed
          </button>
        )}
      </div>
    </div>
  )
}
