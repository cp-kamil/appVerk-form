export interface IValidationPatterns {
  email: RegExp;
}

export interface Patterns {
  validationPatterns: IValidationPatterns;
}

export const appPatterns: Patterns = {
  validationPatterns: {
    email: /^(?=^(?:(?!.{65,}[@].*)(?:(?!.*[@].{255,})).)*$)(?:([^.@]+)(\.[^.@]+)*@([^.@]+\.)+[^.@]{2,6})$/,
  },
}
