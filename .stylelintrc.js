"use strict";

module.exports = {
    "rules": {
        "at-rule-disallowed-list": [],
        "at-rule-empty-line-before": [
            "always",
            {
                "except": [
                    "blockless-after-blockless",
                    "first-nested"
                ],
                "ignore": "after-comment"
            }
        ],
        "at-rule-name-case": "lower",
        "at-rule-name-newline-after": "always-multi-line",
        "at-rule-name-space-after": "always",
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "content",
                    "each",
                    "for",
                    "function",
                    "if",
                    "include",
                    "mixin",
                    "return"
                ]
            }
        ],
        "at-rule-no-vendor-prefix": true,
        "at-rule-semicolon-newline-after": "always",
        "at-rule-semicolon-space-before": "never",
        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always",
        "block-closing-brace-space-after": "always-single-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-no-empty": true,
        "block-opening-brace-newline-after": "always",
        "block-opening-brace-newline-before": "never-single-line",
        "block-opening-brace-space-after": "never-single-line",
        "block-opening-brace-space-before": "always",
        "color-hex-case": "upper",
        "color-hex-length": "short",
        "color-named": "never",
        "color-no-invalid-hex": true,
        "comment-empty-line-before": "always",
        "comment-no-empty": true,
        "comment-whitespace-inside": "always",
        "comment-word-disallowed-list": [],
        "custom-media-pattern": "",
        "custom-property-empty-line-before": "always",
        "custom-property-pattern": "",
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-no-duplicate-properties": [
            true,
            {
                ignore: [
                    "consecutive-duplicates"
                ]
            }
        ],
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-newline-before": "never-multi-line",
        "declaration-block-semicolon-space-after": "never-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-newline-after": null,
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-empty-line-before": [
            "always", {
                except: [
                    "after-comment",
                    "after-declaration",
                    "first-nested"
                ]
            }
        ],
        "declaration-no-important": true,
        "declaration-property-unit-disallowed-list": {},
        "declaration-property-value-disallowed-list": {},
        "font-family-name-quotes": "always-where-recommended",
        "font-family-no-duplicate-names": true,
        "function-disallowed-list": [],
        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-after": "always-multi-line",
        "function-comma-newline-before": "never-multi-line",
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never",
        "function-url-no-scheme-relative": true,
        "function-url-quotes": "always",
        "function-url-scheme-disallowed-list": [
          "ftp",
          "http"
        ],
        "function-url-scheme-allowed-list": [
          "data",
          "https"
        ],
        "function-whitespace-after": "always",
        "indentation": 4,
        "keyframe-declaration-no-important": true,
        "length-zero-no-unit": true,
        "max-empty-lines": 2,
        "max-line-length": [
            100,
            {
                "ignore": [
                    "comments"
                ],
                "ignorePattern": "/^@import\\s+/"
            }
        ],
        "max-nesting-depth": 3,
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-disallowed-list": [],
        "media-feature-name-case": "lower",
        "media-feature-name-no-unknown": true,
        "media-feature-name-no-vendor-prefix": true,
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "never-multi-line",
        "media-query-list-comma-newline-before": "never-multi-line",
        "media-query-list-comma-space-after": "always",
        "media-query-list-comma-space-before": "never",
        "no-descending-specificity": true,
        "no-duplicate-selectors": true,
        "no-empty-source": true,
        "no-eol-whitespace": true,
        "no-extra-semicolons": true,
        "no-invalid-double-slash-comments": null,
        "no-missing-end-of-source-newline": true,
        "no-unknown-animations": true,
        "number-leading-zero": "always",
        "number-max-precision": 3,
        "number-no-trailing-zeros": true,
        "property-disallowed-list": [],
        "property-case": "lower",
        "property-no-unknown": [
            true,
            {
                ignoreProperties: [
                    "box-flex",
                    "box-orient",
                    "font-icon",
                    "font-smooth",
                    "user-drag"
                ]
            }
        ],
        "property-no-vendor-prefix": true,
        "rule-empty-line-before": [
            "always",
            {
                "except": "first-nested"
            }
        ],
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-disallowed-list": [],
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-quotes": "always",
        "selector-class-pattern": "",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-descendant-combinator-no-non-space": true,
        "selector-id-pattern": "",
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-newline-before": "never-multi-line",
        "selector-list-comma-space-after": "always-single-line",
        "selector-list-comma-space-before": "never",
        "selector-max-attribute": 1,
        "selector-max-class": 4,
        "selector-max-combinators": 4,
        "selector-max-compound-selectors": 5,
        "selector-max-empty-lines": 0,
        "selector-max-id": 0,
        "selector-max-specificity": "0,6,1",
        "selector-max-type": 3,
        "selector-max-universal": 1,
        "selector-nested-pattern": "",
        "selector-no-qualifying-type": [
            true,
            {
                ignore: [
                    "class"
                ]
            }
        ],
        "selector-no-vendor-prefix": [
            true,
            {
                ignoreSelectors: [
                    "::-webkit-input-placeholder",
                    ":-ms-input-placeholder",
                    ":-moz-placeholder",
                ]
            }
        ],
        "selector-pseudo-class-disallowed-list": [],
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "single",
        "selector-pseudo-element-no-unknown": [
            true,
            {
                ignorePseudoElements: [
                    "ng-deep"
                ]
            }
        ],
        "selector-type-case": "lower",
        "selector-type-no-unknown": [
            true,
            {
                ignore:
                [
                    "custom-elements"
                ]
            }
        ],
        "shorthand-property-no-redundant-values": true,
        "string-no-newline": true,
        "string-quotes": "single",
        "time-min-milliseconds": 100,
        "unit-disallowed-list": [],
        "unit-case": "lower",
        "unit-no-unknown": true,
        "value-keyword-case": "lower",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0,
        "value-no-vendor-prefix": true
    }
}
