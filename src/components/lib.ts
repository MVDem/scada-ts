import { IUser, IuserSystem, storePriducts, systems } from './type';

export function renderBlock(elementId: string, html: string) {
  const element = document.getElementById(elementId);
  if (element instanceof HTMLElement) {
    element.innerHTML = html;
  } else {
    console.log('lib.ts: element is not HTMElement');
  }
}
//===================================================

export async function getDataUser(
  id: string,
  callback: (options: IUser) => void
) {
  // const url: string =
  // 'https://raw.githubusercontent.com/MVDem/scada-ts/dev/API/v1/user.json';

  const url: string =
    'https://raw.githubusercontent.com/MVDem/scada-ts/dev/API/v1/user2.json';

  // const url: string =
  //   'https://raw.githubusercontent.com/MVDem/scada-ts/dev/API/v1/user1input.json';

  let response = await fetch(url);
  if (!response.ok) {
    return console.log('Данные пользователя осутствуют');
  }
  let result: IUser = await response.json();
  console.log('Получены данные пользователя ', id);
  return callback(result);
}

export async function getDatasystem(
  optoinsProduct: IuserSystem,
  callback: (options: systems) => void
) {
  let response = await fetch(optoinsProduct.url);
  if (!response.ok) {
    return console.log('Данные системы осутствуют');
  }
  let result: systems = await response.json();
  console.log('Получены данные системы ', optoinsProduct.name);
  return callback(result);
}

export function objToArrayStore(options: IUser): Array<storePriducts> {
  const objects: Array<storePriducts> = [];
  Object.keys(options.products).forEach((elem) => {
    const b: storePriducts = [];
    const a = options.products[elem];
    if (a) {
      b.push(a?.objname);
    }

    Object.keys(a!.systems).forEach((elem) => {
      const c = a?.systems[elem];
      if (c !== undefined) {
        b.push(c);
      }
    });
    if (a !== undefined) {
      objects.push(b);
    }
  });
  return objects;
}
