const initialState = {
  salary: 0,
  federaltax: 0,
  statetax: 0,
  sideincome: 0,
  healthcare: 0,
  rent: 0,
  mortgage: 0,
  car: 0,
  gas: 0,
  school: 0,
  water: 0,
  food: 0,
  clothes: 0,
  gym: 0,
  restaurants: 0,
  entertainment: 0,
  travel: 0
};

const UPDATE_SALARY = "UPDATE_SALARY";
const UPDATE_FEDERALTAX = "UPDATE_FEDERALTAX";
const UPDATE_STATETAX = "UPDATE_STATETAX";
const UPDATE_SIDEINCOME = "UPDATE_SIDEINCOME";
const UPDATE_HEALTHCARE = "UPDATE_HEALTHCARE";
const UPDATE_RENT = "UPDATE_RENT";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_CAR = "UPDATE_CAR";
const UPDATE_GAS = "UPDATE_GAS";
const UPDATE_SCHOOL = "UPDATE_SCHOOL";
const UPDATE_WATER = "UPDATE_WATER";
const UPDATE_FOOD = "UPDATE_FOOD";
const UPDATE_CLOTHES = "UPDATE_CLOTHES";
const UPDATE_GYM = "UPDATE_GYM";
const UPDATE_RESTAURANTS = "UPDATE_RESTAURANTS";
const UPDATE_ENTERTAINMENT = "UPDATE_ENTERTAINMENT";
const UPDATE_TRAVEL = "UPDATE_TRAVEL";

function statementReducer(state = initialState, action) {
  console.log("REDUCER HIT: Action ->", action);

  switch (action.type) {
    case UPDATE_SALARY:
      return { ...state, salary: action.payload };
    case UPDATE_FEDERALTAX:
      return { ...state, federaltax: action.payload };
    case UPDATE_STATETAX:
      return { ...state, statetax: action.payload };
    case UPDATE_SIDEINCOME:
      return { ...state, sideincome: action.payload };
    case UPDATE_HEALTHCARE:
      return { ...state, healthcare: action.payload };
    case UPDATE_RENT:
      return { ...state, rent: action.payload };
    case UPDATE_MORTGAGE:
      return { ...state, mortgage: action.payload };
    case UPDATE_CAR:
      return { ...state, car: action.payload };
    case UPDATE_GAS:
      return { ...state, gas: action.payload };
    case UPDATE_SCHOOL:
      return { ...state, school: action.payload };
    case UPDATE_WATER:
      return { ...state, water: action.payload };
    case UPDATE_FOOD:
      return { ...state, food: action.payload };
    case UPDATE_CLOTHES:
      return { ...state, clothes: action.payload };
    case UPDATE_GYM:
      return { ...state, gym: action.payload };
    case UPDATE_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    case UPDATE_ENTERTAINMENT:
      return { ...state, entertainment: action.payload };
    case UPDATE_TRAVEL:
      return { ...state, travel: action.payload };
    default:
      return state;
  }
}

export function updateLoanType(salary) {
  return {
    type: UPDATE_SALARY,
    payload: salary
  };
}
export function updatePropertyType(federaltax) {
  return {
    type: UPDATE_FEDERALTAX,
    payload: federaltax
  };
}
export function updateCity(statetax) {
  return {
    type: UPDATE_STATETAX,
    payload: statetax
  };
}
export function updateProp(sideincome) {
  return {
    type: UPDATE_SIDEINCOME,
    payload: sideincome
  };
}
export function updateFound(healthcare) {
  return {
    type: UPDATE_HEALTHCARE,
    payload: healthcare
  };
}
export function updateRealEstateAgent(rent) {
  return {
    type: UPDATE_RENT,
    payload: rent
  };
}
export function updateCost(mortgage) {
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  };
}
export function updateDownPayment(car) {
  return {
    type: UPDATE_CAR,
    payload: car
  };
}
export function updateCredit(gas) {
  return {
    type: UPDATE_GAS,
    payload: gas
  };
}
export function updateHistory(school) {
  return {
    type: UPDATE_SCHOOL,
    payload: school
  };
}
export function updateAddLineOne(water) {
  return {
    type: UPDATE_WATER,
    payload: water
  };
}
export function updateAddLineTwo(food) {
  return {
    type: UPDATE_FOOD,
    payload: food
  };
}
export function updateAddLineThree(clothes) {
  return {
    type: UPDATE_CLOTHES,
    payload: clothes
  };
}
export function updateFirstName(gym) {
  return {
    type: UPDATE_GYM,
    payload: gym
  };
}
export function updateLastName(restaurants) {
  return {
    type: UPDATE_RESTAURANTS,
    payload: restaurants
  };
}
export function updateEmail(entertainment) {
  return {
    type: UPDATE_ENTERTAINMENT,
    payload: entertainment
  };
}
export function updateEmail(travel) {
  return {
    type: UPDATE_TRAVEL,
    payload: travel
  };
}

export default statementReducer;
