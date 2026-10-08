// Vite exposes JSON fields as named exports; webpack exposes the same JSON
// through default when a library build leaves the import for webpack to load.
export const unwrapJsonModule = <T>(module: T | { default: T }): T =>
  (module as { default?: T }).default ?? (module as T)
