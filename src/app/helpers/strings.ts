export function camelCaseToUnderscore(str: string) {
  return str.replace(/(?:^|\.?)([A-Z])/g, (x, y) => '_' + y.toLowerCase()).replace(/^_/, '');
}
