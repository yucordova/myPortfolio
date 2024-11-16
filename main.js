let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('I offer business growth through software development and predictive analytics.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
