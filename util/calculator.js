export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null,
  };
  
  export const handleNumber = (value, state) => {
    if (state.currentValue === "0") {
      return { currentValue: `${value}` };
    }
  
    return {
      currentValue: `${state.currentValue}${value}`,
    };
  };
  
  const handleEqual = (state) => {
    const { currentValue, previousValue, operator } = state;
  
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = { operator: null, previousValue: null };
  
    switch (operator) {
      case "+":
        return {
          currentValue: `${previous + current}`,
          ...resetState,
        };
      case "-":
        return {
          currentValue: `${previous - current}`,
          ...resetState,
        };
      case "*":
        return {
          currentValue: `${previous * current}`,
          ...resetState,
        };
      case "/":
        return {
          currentValue: `${previous / current}`,
          ...resetState,
        };
  
      default:
        return state;
    }
  };
  
  const calculator = (type, value, state) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
      case "clear":
        return initialState;
      case "posneg":
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`,
        };
      case "percentage":
        return {
          currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        };
      case "pow2":
        return {
          currentValue: `${parseFloat(Math.pow(state.currentValue,2))}`,
        };
      case "sqrt":
        return {
          currentValue: `${parseFloat(Math.sqrt(state.currentValue))}`,
        };
      case "log":
        return {
          currentValue: `${parseFloat(Math.log10(state.currentValue))}`,
        };
      case "ln":
        return {
          currentValue: `${parseFloat(Math.LN2* Math.log2(state.currentValue))}`,
        };
      case "sin":
        return {
          currentValue: `${parseFloat(Math.sin(state.currentValue))}`,
        };
      case "cos":
        return {
          currentValue: `${parseFloat(Math.cos(state.currentValue))}`,
        };
      case "tan":
        return {
          currentValue: `${parseFloat(Math.tan(state.currentValue))}`,
        };
      case "cot":
        return {
          currentValue: `${parseFloat(1 / Math.tan(state.currentValue))}`,
        };
      case "operator":
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: "0",
        };
      case "equal":
        return handleEqual(state);
      default:
        return state;
    }
  };
  
  export default calculator;