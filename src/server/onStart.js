const WAITINGS = [500, 1000, 1000, 1000, 2000, 3000, 0];

let i = 0;

export default () => {
  const started = new Date();

  console.log('Hello!');

  setTimeout(() => {
    console.log('I\'m simple nonamed webserver.');

    setTimeout(() => {
      console.log('I\'m not very smart and the only protocol which I can is HTTP. =(');

      setTimeout(() => {
        console.log('But I belong for this task.');

        setTimeout(() => {
          console.log('And of course I\'ll do my best for you.');

          setTimeout(() => {
            console.log('But if you need something else you are able to improve me as you wish.');

            setTimeout(() => {
              console.log(`Oh! In despite of my monologue and slopping over I have got started. And I'm waiting for your responses about ${(new Date().getTime() - started.getTime()) / 1000} seconds.`);

              setTimeout(() => console.log('Let\'s work!'), WAITINGS[i++]);
            }, WAITINGS[i++]);
          }, WAITINGS[i++]);
        }, WAITINGS[i++]);
      }, WAITINGS[i++]);
    }, WAITINGS[i++]);
  }, WAITINGS[i++]);
};
