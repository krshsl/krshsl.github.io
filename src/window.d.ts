declare global {
  interface Window {
    triggerFanfare?: (count: number) => void;
  }
}

export {};
