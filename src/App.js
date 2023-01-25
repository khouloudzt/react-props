import './App.css';
import Profile from './profile/Profile';
import img1 from './image/image1.jpg';


function App() {
  function handleName(fullName) {
    alert(`Hello ${fullName}`);
  }
   
  return (
    <div className="App">
      <Profile handleName={handleName}>
        <img src={img1} alt="" />
      </Profile>
    </div>
  );
};

export default App;
