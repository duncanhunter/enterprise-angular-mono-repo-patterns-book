module.exports = {
  name: 'check-in-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/check-in/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
