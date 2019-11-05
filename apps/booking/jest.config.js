module.exports = {
  name: 'booking',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/booking',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
