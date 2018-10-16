const Redis = require("./next");

const redis = new Redis(config);

redis
  .start(0)
  .then(client => {
    client.get("test", (error, data) => {
      console.log(error, data);
    });
    console.log(123);

    return client;
  })
  .then(client => {
    console.log(456);

    client.get("test", (error, data) => {
      console.log(error, data);
    });
    return client;
  });
