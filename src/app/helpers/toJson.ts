import { camelCaseToUnderscore } from './strings';

export function toJson(object: {}): {} {

  return Object(object).keys().map((key: string) => camelCaseToUnderscore(key));

}
