import './App.css';
import YouTubeHeader from './YouTubeHeader'
import MainBody from './MainBody'

function App() {
  return (
    <div className="main__body">
      {/* Header */}
      <YouTubeHeader />
      {/* Side Bar and main Body */}
      <MainBody />
    </div>
  );
}

export default App;
