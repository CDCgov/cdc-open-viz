/**
 * Represents a single row of data in a visualization dataset.
 * Each row can have dynamically named columns containing primitive values.
 */
export type DataRow = {
  uid?: string | number // optional unique identifier for the row
  [key: string]: string | number | boolean | null | undefined // allowing primitive data types for dynamic columns
}
