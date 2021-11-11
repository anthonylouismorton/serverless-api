const dynamoose = require('dynamoose');
const personTable = require('./personSchema.js')

exports.handler = async (event) => {


let data = null;
let status = 500;
let id = event.queryStringParameters && event.queryStringParameters.id;
try{

  if(id){
    console.log('in the if')
    let newData = await personTable.query("id").eq(id).exec();
    data = newData[0]
    console.log(data, "getting the right data")
    status = 200
  }
  else{
    console.log(event, "this is the event")
    data = await personTable.scan().exec();
    status = 200

  }
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
