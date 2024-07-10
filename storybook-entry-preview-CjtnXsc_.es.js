import { R as n, r as i } from "./storybook-index-9_ikpx_Z.es.js";
import { u as m, r as d } from "./storybook-react-18-CAuJxRNw.es.js";
const { global: u } = __STORYBOOK_MODULE_GLOBAL__;
var { FRAMEWORK_OPTIONS: s } = u, w = (r, e) => {
  let { id: o, component: t } = e;
  if (!t) throw new Error(`Unable to render story ${o} as the component annotation is missing from the default export`);
  return n.createElement(t, { ...r });
}, E = class extends i.Component {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidMount() {
    let { hasError: r } = this.state, { showMain: e } = this.props;
    r || e();
  }
  componentDidCatch(r) {
    let { showException: e } = this.props;
    e(r);
  }
  render() {
    let { hasError: r } = this.state, { children: e } = this.props;
    return r ? null : e;
  }
}, p = s != null && s.strictMode ? i.StrictMode : i.Fragment;
async function x({ storyContext: r, unboundStoryFn: e, showMain: o, showException: t, forceRemount: l }, a) {
  let c = n.createElement(E, { showMain: o, showException: t }, n.createElement(e, { ...r })), h = p ? n.createElement(p, null, c) : c;
  return l && m(a), await d(h, a), () => m(a);
}
var _ = { renderer: "react" };
export {
  _ as parameters,
  w as render,
  x as renderToCanvas
};
