module.exports = {
  name: 'booking-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
