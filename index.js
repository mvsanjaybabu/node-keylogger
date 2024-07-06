const keypress = require('keypress');

keypress(process.stdin);

process.stdin.on('keypress', function(ch, key) {
  if (key) {
    console.log(`Got keypress: ${key.name}`);
  } else {
    console.log(`Got keypress: ${ch}`);
  }

  if (key && key.ctrl && key.name === 'c') {
    process.stdin.pause();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
