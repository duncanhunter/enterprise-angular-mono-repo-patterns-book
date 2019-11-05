module.exports = {
  name: 'check-in',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/check-in',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
