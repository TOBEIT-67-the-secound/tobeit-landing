import Navbar from './page/Navbar';
import Landpage from './page/landpage';
import Camppage from './page/Camppage';
import Schedule from './page/Schedule';
import Picpage from './page/Picpage';
import FAQpage from './page/FAQpage';
// หน้าหลัก หน้าเริ่มต้น

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="bgpic">
        <Landpage />
      </div>
      <div class="bg-green-500">
        <Camppage />
      </div>
      <div class="bg-Blue-500">
        <Schedule />
      </div>
      <div class="bg-green-500">
        <Picpage />
      </div>
      <div class="bg-green-500">
        <FAQpage />
      </div>
    </div>
    
  );
}

export default App;
