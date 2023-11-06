function n() {
  const t = /* @__PURE__ */ new Date();
  return new Date(t.getTime() - t.getTime() % 9e5).toISOString();
}
export {
  n as c
};
