
exports.min = function min (array) {
  for (let i = 0, endI = array.length - 1; i < endI; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            wasSwap = true;
        }
    }
    if (!wasSwap) break;
  }
  return array[0];
}

exports.max = function max (array) {
  for (let i = 0, endI = array.length - 1; i < endI; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            wasSwap = true;
        }
    }
    if (!wasSwap) break;
  }
  array.reverse();
  return array[0];
}

exports.avg = function avg (array) {
  return array.reduce((a, b) => (a + b)) / array.length;
}
