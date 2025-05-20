import { _ as a } from "./storybook-lodash-a4231e1c.es.js";
const t = [
  ["*", "Asterisk"],
  ["†", "Dagger"],
  ["§", "Section Symbol"],
  ["¶", "Paragraph Symbol"]
], m = t.concat(t.map(([o, s]) => [o + o, "Double " + s])), e = a.fromPairs(a.map(m, ([o, s]) => [s, o]));
export {
  e as a,
  m as f
};
