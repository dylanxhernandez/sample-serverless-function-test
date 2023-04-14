exports.handler = async (event, context) => {
  const { op, num1, num2 } = event.queryStringParameters;

  let result;
  switch (op) {
    case "add":
      result = Number(num1) + Number(num2);
      break;
    case "subtract":
      result = Number(num1) - Number(num2);
      break;
    case "multiply":
      result = Number(num1) * Number(num2);
      break;
    case "divide":
      result = Number(num1) / Number(num2);
      break;
    default:
      result = "Invalid operator";
  }

  return {
    statusCode: 200,
    body: result.toString(),
  };
};

// Make the function accessible at the /api/arithmetic path
exports.handler.path = "/api/arithmetic";
