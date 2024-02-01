import MultiConfigTabs from './MultiConfigTabs'
import MultiTabs from './MultiTabs'

const Tabs: React.FC<{ isEditor: boolean }> = ({ isEditor = false }) => {
  return isEditor ? <MultiConfigTabs /> : <MultiTabs />
}

export default Tabs
