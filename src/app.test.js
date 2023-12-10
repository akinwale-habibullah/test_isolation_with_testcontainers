const request = require('supertest')
const { GenericContainer } = require('testcontainers')


describe('app', () => {
  let container;
  let app
  let connection

  beforeAll(async () => {
    container = await new GenericContainer('mongo')
      .withExposedPorts(27017)
      .start()


    const connectionUrl = `mongodb://${container.getHost()}:${container.getMappedPort(27017)}/kittytest`
    process.env.MONGODB_URI = connectionUrl
    app = require('./app').server
    connection = require('./app').connection
  });
  
  test('app runs without crashing', async () => {
    await request(app).get('/').expect(200)
  })
  
  afterAll(async () => {
    app.close()
    connection.close()
    await container.stop()
  });
})


