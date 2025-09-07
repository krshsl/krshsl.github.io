export interface SIMPLE_SOUND {
  url: string;
  id: number;
  sprite?: [number, number];
}
export interface SPRITE_SOUND_COLLECTION {
  url: string;
  keys?: number;
  sprites: Record<string, { id: number; pos: [number, number] }>;
}
