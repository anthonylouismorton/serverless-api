'use strict'

const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  'id': String,
  'firstName': String,
  'lastName': String,
  'gender': String,
  'age': Number
})

module.exports = dynamoose.model('people', personSchema)