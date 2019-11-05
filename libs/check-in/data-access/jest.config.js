module.exports = {
  name: 'check-in-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/check-in/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
