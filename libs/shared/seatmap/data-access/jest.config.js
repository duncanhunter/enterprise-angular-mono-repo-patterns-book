module.exports = {
  name: 'shared-seatmap-data-access',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/seatmap/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
