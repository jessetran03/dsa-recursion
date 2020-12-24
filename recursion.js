const sumOf = function(list) {
  // Base case
  if (list.length === 1) {
    return list[0];
  }
  // General case
  return list[0] + sumOf(list.slice(1));
}

let lst = [2,4,6,8,10];
console.log('sumOf:')
console.log(sumOf(lst));

// 1. Counting Sheep

function countSheep(number) {
  if (number === 0) {
    console.log('All sheep jumped over the fence')
    return number;
  }
  console.log(number + ': Another sheep jumps over the fence')
  return number + countSheep(number - 1)
}

countSheep(3);

// 2. Power Calculator

function powerCalculator(base, exponent) {
  if (exponent < 0) {
    return 'exponent should be >= 0'
  }
  if (exponent === 1) {
    return base;
  }
  return base * powerCalculator(base, exponent - 1)
}

console.log(powerCalculator(10, 2))

// 3. Reverse String

function reverseString(string) {
  if (string === "")
    return "";
  else
    return reverseString(string.substr(1)) + string.charAt(0);
}

console.log(reverseString('Hello'))

// 4. nth Triangular Number

function nthTriangularNumber(number) {
  if (number === 1)
    return number;
  else
    return number + nthTriangularNumber(number - 1)
}

console.log(nthTriangularNumber(6))

//5. String Splitter

function stringSplitter(string, sep) {
  if (string.length === 0 )
    return "";
  else if (string[0] === sep) {
    return stringSplitter(string.slice(1), sep);
  }
  else {
    return string[0] + stringSplitter(string.slice(1), sep)
  }
}

console.log(stringSplitter('03/30/2000', '/', []))

// 6. Fibonacci

function fibonacci(num) {
  if (num <= 1)
    return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(7))

// 7. Factorial

function factorial(num) {
  if (num <=1)
    return num;
  return num * factorial(num - 1);
}

console.log(factorial(5))

// 8. Find a way out of the maze

function escapeMaze(maze, i=0, j=0, path='') {
  if (maze[i][j] === 'e') {
    return path;
  }
  try {
    if (maze[i + 1][j] === ' ' || maze[i + 1][j] === 'e') {
      maze[i][j] = '*';
      path = path + 'D'
      return escapeMaze(maze, i + 1, j, path);
    }
    else if (maze[i][j + 1] === ' ' || maze[i][j + 1] === 'e') {
      maze[i][j] = '*';
      path = path + 'R'
      return escapeMaze(maze, i, j + 1, path);
    }
    else if (maze[i - 1][j] === ' ' || maze[i - 1][j] === 'e') {
      maze[i][j] = '*';
      path = path + 'U'
      return escapeMaze(maze, i - 1, j, path);
    }
    else if (maze[i][j - 1] === ' ' || maze[i][j - 1] === 'e') {
      maze[i][j] = '*';
      path = path + 'L'
      return escapeMaze(maze, i, j - 1, path);
    }
  }
  catch {
    try {
      if (maze[i][j + 1] === ' ' || maze[i][j + 1] === 'e') {
        maze[i][j] = '*';
        path = path + 'R'
        return escapeMaze(maze, i, j + 1, path);
      }
      else if (maze[i - 1][j] === ' ' || maze[i - 1][j] === 'e') {
        maze[i][j] = '*';
        path = path + 'U'
        return escapeMaze(maze, i - 1, j, path);
      }
      else if (maze[i][j - 1] === ' ' || maze[i][j - 1] === 'e') {
        maze[i][j] = '*';
        path = path + 'L'
        return escapeMaze(maze, i, j - 1, path);
      }
    }
    catch {
      try {
        if (maze[i - 1][m] === ' ' || maze[n - 1][m] === 'e') {
          maze[n][m] = '*';
          path = path + 'U'
          return escapeMaze(maze, i - 1, m, path);
        }
        else if (maze[n][m - 1] === ' ' || maze[n][m - 1] === 'e') {
          maze[n][m] = '*';
          path = path + 'L'
          return escapeMaze(maze, i, m - 1, path);
        }
      }
      catch {
        if (maze[n][m - 1] === ' ' || maze[n][m - 1] === 'e') {
          maze[n][m] = '*';
          path = path + 'L'
          return escapeMaze(maze, i, m - 1, path);
        }
      }
    }
  }
}

let mySmallMaze = [
  [' ', '*', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];
let myMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
console.log(escapeMaze(mySmallMaze))
console.log(escapeMaze(myMaze))

// 10. Anagrams

function anagram(word, prefix='') {
  if (word.length <= 1) {
    console.log(prefix + word);
  }
  for (let i = 0; i < word.length; i++) {
    const before = word.substring(0, i);
    const after = word.substring(i + 1);
    const current = word.substring(i, i + 1);
    anagram(before + after, prefix + current)
  }
}

anagram('east')

//12. Binary Representation

function binary(num) {
  if (num === 0) {
    return '';
  }
  return binary(Math.floor(num / 2)) + (num % 2)
}

console.log(binary(25))