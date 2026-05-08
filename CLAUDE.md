# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server with hot reload (http://localhost:5173)
npm run build    # tsc type-check then Vite production bundle
npm run preview  # serve the production build locally
```

## Architecture

React 18 + TypeScript SPA built with Vite. No routing or external state management library.

### State management

`src/hooks/useTodos.ts` is the single source of truth. It owns the `Todo[]` array and `Filter` state, persists both to `localStorage`, and exposes CRUD operations. `App.tsx` calls this hook and fans props down one level — there is no prop drilling beyond direct children.

### Component tree

```
App
├── TodoInput    — controlled input; submits on Enter or Add button click
├── TodoList     — renders TodoItem per todo; shows empty-state message when list is empty
│   └── TodoItem — checkbox toggle + hover-reveal delete button
└── TodoFilter   — All / Active / Completed filter tabs + "Clear completed"
```

### Data types

`src/types/todo.ts` defines the two shared types used across the whole app:

- `Todo` — `{ id, text, completed, createdAt }`; IDs use `crypto.randomUUID()`
- `Filter` — `'all' | 'active' | 'completed'`

`useTodos` filters the raw array before returning it, so consumers always receive the already-filtered list.
