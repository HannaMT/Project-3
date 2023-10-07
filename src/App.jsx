import './App.css';
import {useState} from 'react';
import bears from './assets/Bears.jpeg';
import capybara from './assets/Capybara.jpeg';
import deer from './assets/Deer.jpeg';
import dog from './assets/Dog.jpeg';
import hedgehog from './assets/Hedgehog.jpeg';
import horse from './assets/Horse.jpeg';
import koala from './assets/Koala.jpeg';
import lion from './assets/Lion.jpeg';
import otter from './assets/Otter.jpeg';
import racoon from './assets/Racoon.jpeg';
import redpanda from './assets/Red Panda.jpeg';
import rhino from './assets/Rhino.jpeg';
import shark from './assets/Shark.jpeg';
import sheep from './assets/Sheep.jpeg';
import sloth from './assets/Sloth.jpeg';
import tiger from './assets/Tiger.jpeg';



const App = () => {
  const [isFront,setFront] = useState(true);
  const Flip = () => setFront(!isFront);
  const animals = [
    {
      name: 'BEAR',
      image: bears,
      facts: 'Fun Fact: There are eight bear species in the world. The American black bear, the Asiatic black bear, the brown bear, the giant panda, the polar bear, the sloth bear, the spectacled bear, and the sun bear'
    },
    {
      name: 'CAPYBARA',
      image: capybara,
      facts: 'Fun Fact: Capybaras are the world\'s largest living rodent.'
    },
    {
      name: 'DEER',
      image: deer,
      facts: 'Fun Fact: Only male deer grow antlers, which are shed each year.'
    },
    {
      name: 'DOG',
      image: dog,
      facts: 'Fun Fact: They only sweat from their paws, and have to cool down by panting.'
    },
    {
      name: 'HEDGEHOG',
      image: hedgehog,
      facts: 'Fun Fact: A hedgehog has between 5000 and 7000 quills!'
    },
    {
      name: 'HORSE',
      image: horse,
      facts: 'Fun Fact: Horses can sleep standing up and have nearly 360-degree field of vision.'
    },
    {
      name: 'KOALA',
      image: koala,
      facts: 'Fun Fact: The world Koala means \' no drink\' in australia. It is really interesting since Koala\'s main water intake comes from eating fresh eucalyptus leaves.'
    },
    {
      name: 'LION',
      image: lion,
      facts: 'Fun Fact: Nearly all wild lions live in Africa, but one small population exists elsewhere.'
    },
    {
      name: 'OTTER',
      image: otter,
      facts: 'Fun Fact: River otters can hold their breath for up to 8 minutes while under water.'
    },
    {
      name: 'RACOON',
      image: racoon,
      facts: 'Fun Fact: Raccoons live an average of 5 years in the wild.'
    },
    {
      name: 'RED PANDA',
      image: redpanda,
      facts: 'Fun Fact: Red Pandas Are The First Panda. Red Pandas Are Kinda like Cats. Red Panda\'s Have Six Digits on their Front Paws.'
    },
    {
      name: 'RHINO',
      image: rhino,
      facts: 'Fun Fact: There are 5 species of Rhino. Black and White rhinos in Africa and the Greater one-horned, Sumatran and Javan rhinos in Asia.'
    },
    {
      name: 'SHARK',
      image: shark,
      facts: 'Fun Fact: Sharks do not have bones. Shark skin feels similar to sandpaper.'
    },
    {
      name: 'SHEEP',
      image: sheep,
      facts: 'Fun Fact: Sheep, like goats, have rectangular pupils. Sheep do not have teeth in their upper front jaw.'
    },
    {
      name: 'SLOTH',
      image: sloth,
      facts: 'Fun Fact: Everything is sluggish and slow-moving, even food digestion.'
    },
    {
      name: 'TIGER',
      image: tiger,
      facts: 'Fun Fact: Tigers have soft toe pads which help them walk silently through their habitat.'
    }
  ];

  const [index, setCount] = useState(0);
  const incCount = () => {
    const nextIndex = (index<animals.length-1) ? (index + 1) % animals.length: animals.length-1;
    setCount(nextIndex);
    setFront(true);
  };

  const  decCount= () => {
    const nextIndex = (index==0) ? 0: (index - 1) % animals.length;
    setCount(nextIndex);
    setFront(true);
  };

  const [x, setX] = useState('');
  const [feedback, setFeedback] = useState('');
  const [streak, setStreak] = useState(0);
  const [longest, setLong] = useState(0);
  const check = (e) => {

    e.preventDefault();
    const correct = x.toLowerCase().includes(animals[index].name.toLowerCase());
    (correct) ? setFeedback('Correct!') : setFeedback('Incorrect! Try again?');
    (correct) ? setStreak(streak + 1) : setStreak(0);
    (streak>longest) ? setLong(streak): '';
    }
  return (
    <div className="App">
      <h1>Guess The Animal</h1>
      <h3>Can you guess the animal in the pictures? Lets find out!</h3>
      <h3>Number of Cards in the Stack: 16</h3>
      <h4>Longest Streak: {longest}</h4>
      <h4>Current Streak: {streak}</h4>
      <div id = "flipcard">
        <div id="card" className = {isFront ? '' : 'flipped'} onClick={Flip}>
          <div id="backcard">
            <h1>{animals[index].name}</h1>
            <p>{animals[index].facts}</p>
          </div>
          <div id="frontcard">
            <img src={animals[index].image}/>
          </div>
        </div>
      </div>
      <form onSubmit={check}>
        <label>What is the animal shown?</label>
        <input type="text" value ={x} onChange = {(e) => setX(e.target.value)} placeholder="ANIMAL NAME" className></input>
        <input type="submit"></input>
      </form>
      <p>{feedback}</p>
      <div id="Buttons">
        {(index==0) ? <button onClick={decCount} disabled>Back</button> : <button onClick={decCount}>Back</button>}
        {(index==animals.length-1) ? <button onClick={incCount} disabled>Next</button> : <button onClick={incCount}>Next</button>}
      </div>
    </div>
  )
}

export default App
