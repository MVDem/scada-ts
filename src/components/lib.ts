import { user } from '../pages/HomePage';

export function renderBlock(elementId: string, html: string) {
  const element = document.getElementById(elementId);
  if (element instanceof HTMLElement) {
    element.innerHTML = html;
  } else {
    console.log('lib.ts: element is not HTMElement');
  }
}
//===================================================

export async function getDataUser() {
  const url: string =
    'https://raw.githubusercontent.com/MVDem/scada-ts/main/API/v1/user.json';
  let response = await fetch(url);
  if (response.ok) {
    let result = await response.json();
    console.log('ok');
    return user.setUserData(result);
  }
}
