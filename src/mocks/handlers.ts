// src/mocks/handlers.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const handlers = [
  // Handles a POST /login request
  rest.post('/test', (req, res, ctx) => res(ctx.status(200))),

  // Handles a GET /user request
  rest.get('/test', (req, res, ctx) =>
    res(
      ctx.status(403),
      ctx.json({
        errorMessage: 'Request Failed',
      })
    )
  ),
];

export default handlers;
