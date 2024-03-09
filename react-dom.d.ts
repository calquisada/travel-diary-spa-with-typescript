import { Root } from 'react-dom';
declare module 'react-dom' {
  export function createRoot(container: Element | DocumentFragment | null): Root;
}
