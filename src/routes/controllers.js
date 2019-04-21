import { generateNNumbers } from '../generator';
import PhoneNumber from '../db/models/PhoneNumber';
import sortNumbers from '../utils/sort';

const successResponse = (res, status, data, message) => res.status(status).json({
  status: 'success',
  data,
  message,
});

const errorResponse = (res, status, message) => res.status(status).json({
  status: 'error',
  message,
});

export function getAllNumbers(req, res) {
  const { order } = req.query;
  let numbers = [];
  try {
    numbers = PhoneNumber.findAll();
  } catch (err) {
    return errorResponse(res, 500, 'There was an error processing your request.');
  }

  if (order) {
    numbers = sortNumbers(numbers, order.toLowerCase());
  }

  return successResponse(res, 200, numbers.length > 0 ? numbers : []);
}

export function createPhoneNumbers(req, res) {
  const { noOfNumbers } = req.body;
  let numbers = [];

  if (noOfNumbers && noOfNumbers > 0) {
    numbers = generateNNumbers(noOfNumbers);
  }

  if (!noOfNumbers) {
    numbers = generateNNumbers();
  }

  try {
    PhoneNumber.create(numbers);
  } catch (err) {
    return errorResponse(res, 500, 'Something went wrong while create numbers');
  }
  return successResponse(res, 200, numbers);
}

export function notImplemented(req, res) {
  return errorResponse(res, 405, `${req.method.toUpperCase()} method was not implemented on this endpoint.`);
}

export function rootApi(req, res) {
  return successResponse(res, 200, null, 'Welcome to Phone Number Generetor API.');
}
