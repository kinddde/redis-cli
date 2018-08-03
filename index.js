const redis = require("redis");

require("kin-promise-finally");

class client {
  constructor(config, logger = false) {
    if (!config) {
      throw new Error("redis config can not null");
    }
    this.logger = logger;
    this.config = config;
    this.globalClient = null;
    this.globalListenFlag = false;
  }

  getClient() {
    this.globalClient = this.globalClient || redis.createClient(this.config);

    !this.globalListenFlag && this.clientListen();

    return this.globalClient;
  }

  clientListen() {
    this.globalListenFlag = true;
    this.globalClient.on("connect", data => {
      this.logger &&
        console.log(
          "Redis connect success, connection_id : ",
          this.globalClient.connection_id
        );
    });

    this.globalClient.on("end", () => {
      this.logger &&
        console.log(
          "Redis connect end, connection_id : ",
          this.globalClient.connection_id
        );
      this.globalClient = null;
      this.globalListenFlag = false;
    });

    this.globalClient.on("error", error => {
      this.logger && console.log("Redis error, error ----> ", error);
    });
  }

  clientFactory(db) {
    return new Promise((resolve, reject) => {
      const client = this.getClient();
      client.on("connect", () => {
        client.select(db, () => {
          this.logger && console.log(`select db : `, db);
          resolve(client);
        });
      });
      client.on("error", err => {
        reject(err);
      });
    });
  }

  start(db) {
    let client = null;
    return this.clientFactory(db)
      .then(cli => {
        client = cli;
        return client;
      })
      .finally(() => {
        process.nextTick(() => {
          client && client.quit();
        });
      });
  }
}

module.exports = client;
