const NelsonRubensTypes = {
  request: 'request',
  response: 'response',
  create: 'create',
  update: 'update',
  delete: 'delete',
  query: 'query',
  http: ({ name }) => `http[${name}]`,
  webhook: ({ name }) => `webhook[${name}]`,
  queue: ({ name }) => `queue[${name}]`,
}

module.exports = NelsonRubensTypes;