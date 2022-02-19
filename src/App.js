import { useEffect } from 'react'
import { themeChange } from 'theme-change'
function App() {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <div>
      <select data-choose-theme>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='dracula'>Dracula</option>
        <option value='valentine'>valentine</option>
      </select>
    </div>
  )
}

export default App
