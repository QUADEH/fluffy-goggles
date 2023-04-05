const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
let makeGrn = document.querySelector("#makeGreen");

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

function handleMakeGreen() {
  makeGreen();
  let output = "Text is now green!";
  console.log(output);
}

makeGrn.addEventListener('click', handleMakeGreen);

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string!', '+poop');
    
    // Styled
    console.log('%c I am some great text',
    'font-size:50px, background:red; text-shadow: 10px 10px 0 blue');

    // warning!
    console.warn('OH NOOO');

    // Error :|
    console.error('Shit!');

    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing
    let p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    // clearing
    //console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    //console.clear();

    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years
      old`);
    });

    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');
    console.count('Wes');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);

