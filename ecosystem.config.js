module.exports = {
    apps : [{
      name   : "brysondevio2 Site",
      script : "./bin/www",
      watch: true,
      // Delay between restart
      watch_delay: 1000,
      env_production: {
         NODE_ENV: "production"
      },
      env_development: {
         NODE_ENV: "development"
      }
    }]
  }