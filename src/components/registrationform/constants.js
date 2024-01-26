const phoneRegex = RegExp(/^[6-9]\d{9}$/);
const aadharRegex = RegExp(/^[2-9]\d{11}$/);
const panRegex = RegExp(/^(\w{10})$/);
const steps = ["Personal Details", "Address Details"];
const addressFields = [
    { name: "Address line 1 ", size: 0 },
    { name: "Address line 2 ", size: 0 },
    { name: "City", size: 6 },
    { name: "State", size: 6 },
    { name: "PinCode", size: 6 },
  ];

export { phoneRegex, aadharRegex, panRegex, steps,addressFields };
