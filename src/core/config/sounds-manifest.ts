import {
  MENU,
  CHARGING,
  STARTUP,
  CLICK,
  SKIP_BUTTON,
  TYPING,
  POP_CLICK,
  ENABLE_SOUND,
  DISABLE_SOUND,
  REGISTER,
  COIN,
  FANFARE_THEME,
  BATTERY,
  COMPLETED_THEME,
} from "./sounds";

function calculateCompletionBitmap(): bigint {
  let bitmap = 0n;

  const addIdToBitmap = (id: number) => {
    bitmap |= 1n << BigInt(id - 1);
  };

  addIdToBitmap(CLICK.id);
  addIdToBitmap(STARTUP.id);
  addIdToBitmap(SKIP_BUTTON.id);
  addIdToBitmap(ENABLE_SOUND.id);
  addIdToBitmap(DISABLE_SOUND.id);
  addIdToBitmap(REGISTER.id);
  addIdToBitmap(COIN.id);
  addIdToBitmap(BATTERY.id);
  addIdToBitmap(COMPLETED_THEME.id);

  Object.values(MENU).forEach((sound) => addIdToBitmap(sound.id));
  Object.values(CHARGING).forEach((sound) => addIdToBitmap(sound.id));

  Object.values(TYPING.sprites).forEach((sprite) => addIdToBitmap(sprite.id));

  POP_CLICK.forEach((sound) => addIdToBitmap(sound.id));

  addIdToBitmap(FANFARE_THEME.id);

  return bitmap;
}

export const ALL_SOUNDS_BITMAP = calculateCompletionBitmap();
