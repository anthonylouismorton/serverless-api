const dynamoose = require('dynamoose');
const personTable = require('./personSchema.js')

exports.handler = async (event) => {

let data = null;
let status = 500;
let person = event.queryStringParameters && event.queryStringParameters.id;
try{
    
    let deleteRecord = await personTable.delete({id: person})
    data = 'Record successfully destroyed'
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
