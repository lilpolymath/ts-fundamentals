// @errors: 2578
type JSONPrimitive = string | number | boolean | null;

type JSONObject = {
  [key: string]: JSONValue;
};

type JSONArray = JSONValue[];

type JSONValue = JSONObject | JSONArray | JSONPrimitive;

////// DO NOT EDIT ANY CODE BELOW THIS LINE //////
function isJSON(arg: JSONValue) {}

// POSITIVE test cases (must pass)
isJSON('hello');
isJSON([4, 8, 15, 16, 23, 42]);
isJSON({ greeting: 'hello' });
isJSON(false);
isJSON(true);
isJSON(null);
isJSON({ a: { b: [2, 3, 'foo'] } });

// NEGATIVE test cases (must fail)
isJSON(() => '');

isJSON(class {});

isJSON(undefined);

isJSON(BigInt(143));

isJSON(isJSON);
