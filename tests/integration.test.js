import { expect } from 'chai';
import supertest from 'supertest';

import server from '../src/server';

const request = supertest(server);

describe('GET /numbers', () => {
  it('should fetch all saved phone numbers', async () => {
    const res = await request.get('/api/v1/numbers');
    expect(res.body.data.length).to.be.greaterThan(0);
    expect(res.body.data[0].length).to.equal(10);
  });

  it('should sort returned numbers', async () => {
    const res = await request.get('/api/v1/numbers?order=ASC');
    expect(res.body.data.length).to.be.greaterThan(0);
    const [firstNumber, secondNumber] = res.body.data;
    expect(firstNumber < secondNumber).to.equal(true);
  });
});

describe('POST /numbers', () => {
  it('should create list of phone numbers', async () => {
    const payload = { noOfNumbers: 10 };
    const res = await request.post('/api/v1/numbers').send(payload);
    expect(res.body.data.length).to.equal(10);
  });

  it('should return error response if request body is invalid', async () => {
    const payload = { noOfNumber: 10 };
    const res = await request.post('/api/v1/numbers').send(payload);
    expect(res.body.status).to.equal('error');
    expect(res.body.errors[0]).to.equal('[noOfNumbers] in request body is required');
  });
});
