import ForestPlot from './Panel.ForestPlotSettings'
import SeriesPanel from './Panel.Series.jsx'
import Regions from './Panel.Regions'
import General from './Panel.General'
import BoxPlot from './Panel.BoxPlot'
import RightAxis from './Panel.RightAxis'
import LeftAxis from './Panel.LeftAxis'
import Legend from './Panel.Legend'
import DateCategory from './Panel.DateCategory'

const Panels = {
  BoxPlot,
  ForestPlot,
  General,
  Regions,
  Series: SeriesPanel,
  RightAxis,
  Legend,
  LeftAxis,
  DateCategory
}

export default Panels
