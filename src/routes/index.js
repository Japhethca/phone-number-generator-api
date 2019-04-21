import { Router } from 'express';
import joi from 'joi';

import validate from './validator';

import {
  getAllNumbers,
  createPhoneNumbers,
  notImplemented,
  rootApi,
} from './controllers';

const router = Router();

router.get('/', rootApi)
  .all('/', notImplemented);

router.get('/numbers',
  validate({
    query: {
      order: joi.string().only(['asc', 'ASC', 'desc', 'DESC']).optional().default('ASC'),
    },
  }),
  getAllNumbers)
  .post('/numbers',
    validate({
      body: {
        noOfNumbers: joi.number().required().min(1).max(10000),
      },
    }),
    createPhoneNumbers)
  .all('numbers', notImplemented);

export default router;
