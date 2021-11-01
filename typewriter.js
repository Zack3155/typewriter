const printWithDelay = function (text) {
  const interval = 50;
  let counter = 0
  let result = "";

  const type = function () {
    if (counter < text.length) {
      result += text[counter];
      process.stdout.write(result[counter]);
      if (counter === text.length - 1) console.log('');
      counter++;
      setTimeout(type, interval);
    }
  }

  setTimeout(type, interval);
};

printWithDelay('hello there from lighthouse labs');
