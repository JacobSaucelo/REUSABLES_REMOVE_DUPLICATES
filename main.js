const testArray = [
  {
    id: 1,
    testValue: "24de",
  },
  {
    id: 2,
    testValue: "24de3",
  },
  {
    id: 3,
    testValue: "24d3e",
  },
  {
    id: 4,
    testValue: "24de",
  },
];
const testArray2 = [21, 21, 21, 21, 3, 5, 2, 6];

//?         ARRAY OF OBJECTS
const REUSABLES_REMOVE_DUPLICATES = function (
  PARAM_CONTAINER,
  PARAM_FILTER_BY
) {
  const RESULT = PARAM_CONTAINER.filter(
    (FILTER_VALUE, FILTER_INDEX, FILTER_SELF) =>
      FILTER_INDEX ===
      FILTER_SELF.findIndex(
        (T) => T[PARAM_FILTER_BY] === FILTER_VALUE[PARAM_FILTER_BY]
      )
  );

  return RESULT;
};

//?         ARRAY OF STRINGS || NUMBER
const REUSABLES_REMOVE_DUPLICATES_VAR = function (PARAM_CONTAINER) {
  const SET_TEMPLATE = new Set();
  let RESULT = [];

  PARAM_CONTAINER.forEach((CONTAINER_ITEM) => {
    SET_TEMPLATE.add(CONTAINER_ITEM);
  });

  RESULT = Array.from(SET_TEMPLATE);

  return RESULT;
};

const value = REUSABLES_REMOVE_DUPLICATES(testArray, "testValue");
const value2 = REUSABLES_REMOVE_DUPLICATES_VAR(testArray2);
console.log("value: ", value);
console.log("value2: ", value2);
