export type SchemaType = "string" | "number" | "boolean" | "object" | "array";
export interface SchemaNode {
  key: string;
  title: string;
  type: SchemaType;
  value?: any;
  children?: SchemaNode[];
}

export interface ArchetypeValue {
  [key: string]: any;
}
