const parse = require('pg-connection-string').parse;
    const config = parse(process.env.postgres://u9duj7dfju11vg:pbf7c8ecefeecbfe5439a73777e7bcfa048b14554b2ae5a86ed748491e2285c8c@cc0gj7hsrh0ht8.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d6g7fpmuefahfr);
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: false
          },
        },
        debug: false,
      },
    });