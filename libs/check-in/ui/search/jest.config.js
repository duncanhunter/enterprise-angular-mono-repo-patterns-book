module.exports = {
  name: 'check-in-ui-search',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/check-in/ui/search',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
