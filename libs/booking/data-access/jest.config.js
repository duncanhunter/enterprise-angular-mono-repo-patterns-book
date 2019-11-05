module.exports = {
  name: 'booking-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
