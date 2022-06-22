module.exports = function toReadable (number) {
  const strFromNumber = number + '';
  const endOfNumber = strFromNumber.slice(-2);
  const a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if(number === 0) {
    return 'zero';

  } else if(number < 10) {
    return a[number - 1];

  } else if(number < 20) {
    return b[number - 10];

  } else if(number < 100) {
    if(number % 10 === 0) {
      return c[number / 10 - 2];
    } else {
      return c[strFromNumber[0] -2] + ' ' + a[strFromNumber[1] - 1];
    }

  } else if(number < 1000) {
    if(number % 100 === 0) {
      return a[number / 100 - 1] + ' hundred';

    } else if(9 < endOfNumber && endOfNumber < 20) {
      return a[strFromNumber[0] - 1] + ' hundred ' + b[endOfNumber - 10];

    } else if(number % 10 === 0 && endOfNumber !== 10) {
      return a[strFromNumber[0] - 1] + ' hundred' + ' ' + c[strFromNumber[1] - 2];

    } else {
        if(strFromNumber[1] == 0) {
          return a[strFromNumber[0] - 1] + ' hundred ' + a[strFromNumber[2] - 1];
        } else {
          return a[strFromNumber[0] - 1] + ' hundred ' + c[strFromNumber[1] - 2] + ' ' + a[strFromNumber[2] - 1];
        }
    }
  }
}
