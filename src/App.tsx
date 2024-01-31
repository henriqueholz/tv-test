import './App.css'
import { Menu } from './Menu/Menu'

const menuItems = ['Home', 'Movies', 'TV Shows', 'Sports', 'Music', 'News', 'Kids', 'Lifestyle', 'Entertainment', 'More'];

function App() {
  return (
  <div className="font-sans text-center">
    <div className="bg-purple-900 w-1440 h-810 flex flex-row">
      <Menu focusKey="MENU" items={menuItems} />
      {/* <Content rows={rows} focusKey="CONTENT" /> */}
    </div>
  </div>
  )
}

export default App
