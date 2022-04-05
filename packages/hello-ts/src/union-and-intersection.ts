// Unions and Intersections
function flipCoin(): 'heads' | 'tails' {
  if (Math.random() > 0.5) {
    return 'heads';
  }

  return 'tails';
}

const result = flipCoin();

console.log(result);

function maybeGetUserInfo():
  | ['Error', Error]
  | ['Success', { name: string; email: string }] {
  if (flipCoin() === 'heads') {
    return [
      'Success',
      {
        name: 'John',
        email: 'example@email.com',
      },
    ];
  } else {
    return [
      'Error',
      new Error('The coin landed on TAILS :('),
    ];
  }
}

const [type, data] = maybeGetUserInfo();

if (data instanceof Error) {
  console.log(data.message);
} else {
  console.log(data.email);
}

// Intersection

function randomDateFuntion(): Date & {
  end: Date;
} {
  const start = new Date();

  const end = new Date(start.valueOf() + 3);

  return { ...start, end };
}

const dateResult = randomDateFuntion();
