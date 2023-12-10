# How to improve test isolation in integration testing using Jest and testcontainers

Imagine having an e2e and integration that both interact with the database. Each of these tests live in different files, need to work with MongoDB database and the same collection. Most likely, you need to clear your collection, or seed data for each test. 

If this happens, both tests are not properly isolated. How do you ensure that both have a unique database instance then is the question.

I wrote about this, specifically using Jest and testcontainers.

Read full article at [linkedin](https://www.linkedin.com/pulse/how-improve-test-isolation-integration-testing-using-jest-akinwale-ont6f) or at [dev.to](https://dev.to/akinwalehabib/how-to-improve-test-isolation-in-integration-testing-using-jest-and-testcontainers-1ca)