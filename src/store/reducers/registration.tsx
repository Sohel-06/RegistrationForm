const SET_PERSONAL_INFO = "SET_PERSONAL_INFO";
const SET_ADDRESS_INFO = "SET_ADDRESS_INFO";
const SET_CURRENT_STEP = "SET_CURRENT_STEP";
const RESET_INFO = "RESET_INFO";

interface PersonalDetails {
  name: string;
  age: string;
  sex: string;
  mobileNumber: string;
  govtIssuedIdType: string;
  govtIssuedId: string;
}

interface AddressDetails {
  addressline1: string;
  addressline2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

interface RegistrationState {
  currentStep: number;
  personalDetails: PersonalDetails;
  addressDetails: AddressDetails;
}

const initialState: RegistrationState = {
  currentStep: 0,
  personalDetails: {
    name: "",
    age: "",
    sex: "",
    mobileNumber: "",
    govtIssuedIdType: "",
    govtIssuedId: "",
  },
  addressDetails: {
    addressline1: "",
    addressline2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  },
};

type Action = {
  type: string;
  payload?: any;
};

const registration = (state: RegistrationState = initialState, action: Action) => {
  switch (action.type) {
    case SET_PERSONAL_INFO:
      return {
        ...state,
        personalDetails: action.payload,
      };
    case SET_ADDRESS_INFO:
      return {
        ...state,
        addressDetails: action.payload,
      };
    case SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case RESET_INFO:
      return initialState;
  }
  return state;
};

const setPersonalInfo = (payload: PersonalDetails) => {
  return {
    type: SET_PERSONAL_INFO,
    payload,
  };
};

const setAddressInfo = (payload: AddressDetails) => {
  return {
    type: SET_ADDRESS_INFO,
    payload,
  };
};

const setCurrentStep = (payload: number) => {
  return {
    type: SET_CURRENT_STEP,
    payload,
  };
};

const resetInfo = () => {
  return {
    type: RESET_INFO,
  };
};

export { setPersonalInfo, setAddressInfo, setCurrentStep, resetInfo };

export default registration;