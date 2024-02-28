export type UpdateFieldFunc<T> = (section: string | null, subsection: string | number | null, fieldName: string, value: T) => void
