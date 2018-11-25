'use strict';

// had enabled by egg
// exports.static = true;

module.exports.security = {
  csrf: {
    enable: false,
  },
};

module.exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
