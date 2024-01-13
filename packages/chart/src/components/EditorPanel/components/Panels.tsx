import ForestPlot from './Panel.ForestPlotSettings'
import SeriesPanel from './Panel.Series.jsx'
import DateHighlighting from './Panel.DateHighlighting'
import Regions from './Panel.Regions'
import General from './Panel.General'
import BoxPlot from './Panel.BoxPlot'
import RightAxis from './Panel.RightAxis'
import Legend from './Panel.Legend'

const Panels = {
  BoxPlot,
  DateHighlighting,
  ForestPlot,
  General,
  Regions,
  Series: SeriesPanel,
  RightAxis,
  Legend
}

export default Panels
