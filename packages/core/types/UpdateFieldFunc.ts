export type UpdateFieldFunc<T> = (section: string | null, subsection: string | null, fieldName: string, value: T) => void
