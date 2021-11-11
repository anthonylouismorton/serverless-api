const dynamoose = require('dynamoose');
const personTable = require('./personSchema.js')
const {v4: uuidv4} = require('uuid');
exports.handler = async (event) => {
  const jsonBody = JSON.parse(event.body);
  let data = null;
  let status = 500;
  try{
    const id = uuidv4();
    let person = new personTable({id,...jsonBody})
    data = await person.save();
    status = 200;
  }
  catch(e){
    status = 400;
    data = new Error(e)
  }
  const response = {
    statusCode: status,
    body: JSON.stringify(data),
  };
  return response;
};
