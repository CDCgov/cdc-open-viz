/**
 * regex
 * - /\w\S* replaces zero or more whitespace characters
 * - g makes it find all matches in the string
 * - the callback function capitalizes the word
 * */
export const capitalizeSplitAndJoin = function (splittingCharacter: string = ' ', joiningCharacter: string = '') {
  return this.split(splittingCharacter)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(joiningCharacter)
}
