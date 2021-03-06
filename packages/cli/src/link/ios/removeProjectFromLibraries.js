/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Given an array of xcodeproj libraries and pbxFile,
 * it removes it from that group by comparing basenames
 *
 * Important: That function mutates `libraries` and it's not pure.
 * It's mainly due to limitations of `xcode` library.
 */
module.exports = function removeProjectFromLibraries(libraries, file) {
  // eslint-disable-next-line no-param-reassign
  libraries.children = libraries.children.filter(
    library => library.comment !== file.basename
  );
};
