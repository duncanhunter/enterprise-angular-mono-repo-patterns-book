module.exports = {
  name: 'shared-seatmap-feature-seatmap',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/shared/seatmap/feature-seatmap',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
