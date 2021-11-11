const dynamoose = require('dynamoose');
const personTable = require('./personSchema.js')

exports.handler = async (event) => {
let data = null;
let status = 500;

try{
  let id = event.queryStringParameters && event.queryStringParameters.id;
  const {lastName, firstName, gender, age} = JSON.parse(event.body);
  data = await personTable.update(
    {id: id},
    { firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender}

  )
    status = 200
}
catch(err){
  data = new Error(err),
  status = 400;
}
  const response = {
      statusCode: 200,
      body: JSON.stringify(data),
  };
  return response;
};
