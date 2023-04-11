export function renderBlock(elementId: string, html: string) {
  const element = document.getElementById(elementId);
  if (element instanceof HTMLElement) {
    element.innerHTML = html;
  } else {
    console.log('lib.ts: element is not HTMElement');
  }
}
