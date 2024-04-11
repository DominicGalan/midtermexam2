import './App.css';

function Galan({ display }) {
  return (
    <div className='Galan'>
      {display}
    </div>
  );
}

function Galan2() {
  return (
    <div class="Galan2">
      <div className='top'>
        <div className='tl'>
          <div class="item1">1</div>
          <div class="item2">2</div>
        </div>
        <div className='tr'>
          <div class="item3">3</div>  
          <div class="item4">4</div>
        </div>
      </div>

      <div className='bottom'>
        <div class="item5">5</div>
        <div class="item6">6</div>
        <div class="item7">7</div>  
        <div class="item8">8</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Galan display="hello world"/>
      <Galan2/>
    </div>
  );
}