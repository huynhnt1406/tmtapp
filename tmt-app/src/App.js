import './App.css'
import Actions from './components/Actions'
import Intro from './components/Intro'
import Header from './core/Header'
import Contact from './components/Contact'
import SignupCondition from './components/SignupCondition'
import Reasons from './components/Reasons'
import QandA from './components/QandA'
import Attendtion from './components/Attendtion'
function App() {
  return (
    <div className="app">
      <Header/>
      <Intro/>
      <Actions/>
      <SignupCondition/>
      <Reasons/>
      <Contact/>
      <QandA/>
      <Attendtion/>
    </div>
  );
}

export default App;
