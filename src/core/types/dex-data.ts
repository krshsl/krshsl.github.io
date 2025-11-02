export interface DexData {
  id: string;
  name?: string;
  company?: string;
  university?: string;
  role?: string;
  degree?: string;
  duration?: string;
  description: string | string[];
  tech?: string[];
  live?: string;
  websiteName?: string;
  repo?: string;
  gpa?: number;
  links?: Record<string, unknown>;
  tags?: string[];
  icon: string;
}
