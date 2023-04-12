import { HightVolt } from './HightVolt';
import { LowVolt } from './LowVolt';

// export const objects: Array<{}> = [];

export const systems: Array<HightVolt | LowVolt> = [];

export function createSystems(obj: object): void {
  systems.length = 0;
  const o = Object.keys(obj) as Array<keyof typeof obj>;
  o.forEach((p) => {
    if (p === 'userHightVolt') {
      const system = new HightVolt(obj[p]);
      systems.push(system);
    } else if (p === 'userLowVolt') {
      const system = new LowVolt(p);
      systems.push(system);
    }
  });
}
