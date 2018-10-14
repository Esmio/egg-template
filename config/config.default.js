'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538649280647_3401';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    }
  }

  return config;
};
