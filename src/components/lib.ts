import {
  IStoreObjects,
  // IStoreObjects,
  IUser,
} from './type';

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
  const url: string =
    'https://raw.githubusercontent.com/MVDem/scada-ts/dev/API/v1/user.json';

  // const url: string =
  //   'https://raw.githubusercontent.com/MVDem/scada-ts/dev/API/v1/user2.json';

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        return console.log('Данные пользователя осутствуют', id);
      }
      return response.json();
    })
    .then((data) => {
      return callback(data);
    });

  // let result: IUser = await response.json();
  // console.log('Получены данные пользователя ', id);
  // return callback(result);
}

// export async function getDatasystem(
//   options: IuserSystem
//   // callback: (options: systems) => void
// ) {
//   let response = await fetch(options.url);
//   if (!response.ok) {
//     return console.log('Данные системы осутствуют');
//   }
//   let result: systems = await response.json();
//   console.log('Получены данные системы ', options.name);
//   return result;
// }

export function objToArrayStore(options: IUser): Array<IStoreObjects> {
  const objects: Array<IStoreObjects> = [];
  Object.keys(options.products).forEach((elem) => {
    const a = options.products[elem];
    const b: IStoreObjects = {
      objId: null,
      objName: null,
      objAdress: null,
      objSystems: [],
    };
    b.objId = a!.objId;
    b.objName = a!.objName;
    b.objAdress = a!.objAdress;
    if (a?.objSystems) {
      Object.keys(a!.objSystems).map((elem) => {
        const c = a.objSystems[elem];
        if (c !== undefined) {
          b.objSystems.push(c);
          return c;
        }
        return null;
      });
    }
    if (a !== undefined) {
      objects.push(b);
    }
  });
  return objects;
}
