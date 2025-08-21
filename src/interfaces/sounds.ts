export type SIMPLE_SOUND = {
  url: string;
  id: number;
  sprite?: [number, number];
};
export type SPRITE_SOUND_COLLECTION = {
  url: string;
  keys?: number;
  sprites: { [key: string]: { id: number; pos: [number, number] } };
};
