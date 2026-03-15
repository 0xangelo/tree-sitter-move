/**
 * @file Move grammar for tree-sitter
 * @author Angelo <12701614+0xangelo@users.noreply.github.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "move",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
