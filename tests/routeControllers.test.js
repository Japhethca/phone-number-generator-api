// import sinon from 'sinon';
// import { expect } from 'chai';

// import { createPhoneNumbers, getAllNumbers } from '../src/routes/controllers';
// import PhoneNumber from '../src/db/models';
// import * as generatorFns from '../src/generator';

// const numbersMock = [
//   '0037973179',
//   '0064748713',
//   '0134619394',
//   '0444797863',
//   '0477152830',
//   '0491550722',
//   '0553716973',
// ];

// const mockRequest = fields => fields;
// const mockResponse = () => ({
//   status: () => ({
//     json: data => data,
//   }),
// });

// describe('controllers', () => {
//   describe('createPhoneNumbers', () => {
//     beforeEach(() => {
//       sinon.stub(PhoneNumber, 'create');
//       sinon.stub(PhoneNumber, 'findAll').returns(numbersMock);
//       sinon.stub(generatorFns, 'generateNNumbers').returns(numbersMock);
//     });

//     afterEach(() => {
//       sinon.restore();
//     });

//     it('should create and save phone numbers of given length', () => {
//       const res = mockResponse();
//       const req = mockRequest({ body: { noOfNumbers: 5 } });
//       const apiResponse = createPhoneNumbers(req, res);

//       expect(generatorFns.generateNNumbers.called).to.be.equal(true);
//       expect(PhoneNumber.create.calledWith(numbersMock)).to.equal(true);
//       expect(apiResponse.status).toBe('success');
//     });

// it('should generate default number of phone numbers', () => {
//   const res = mockResponse();
//   const req = mockRequest({ body: {} });
//   const apiResponse = createPhoneNumbers(req, res);
//   expect(generateNumbersSpy).toHaveBeenCalledWith();
//   expect(apiResponse.status).toBe('success');
// });
// });

// describe('getAllNumbers controller', () => {
//   let getPhoneNumbersSpy;

//   beforeEach(() => {
//     getPhoneNumbersSpy = spyOn(numberManagers, 'getPhoneNumbers')
//       .and
//       .returnValue(['0123456789', '00000011111']);
//   });

//   it('should return all phone numbers in the database', () => {
//     const res = mockResponse();
//     const req = mockRequest({ query: {} });
//     const apiResponse = getAllNumbers(req, res);
//     expect(getPhoneNumbersSpy).toHaveBeenCalled();
//     expect(apiResponse.data.length).toEqual(2);
//     expect(apiResponse.data).toEqual(['0123456789', '00000011111']);
//   });

//   it('should sort returned phone numbers in ascending order', () => {
//     const res = mockResponse();
//     const req = mockRequest({ query: { order: 'asc' } });
//     const apiResponse = getAllNumbers(req, res);
//     expect(apiResponse.data).toEqual(['00000011111', '0123456789']);
//   });

//   it('should sort returned phone numbers in descending order', () => {
//     const res = mockResponse();
//     const req = mockRequest({ query: { order: 'desc' } });
//     const apiResponse = getAllNumbers(req, res);
//     expect(apiResponse.data).toEqual(['0123456789', '00000011111']);
//   });

//   it('should limit returned phone numbers', () => {
//     const res = mockResponse();
//     const req = mockRequest({ query: { order: 'desc', limit: 1 } });
//     const apiResponse = getAllNumbers(req, res);
//     expect(apiResponse.data).toEqual(['0123456789']);
//   });
// });
// });
