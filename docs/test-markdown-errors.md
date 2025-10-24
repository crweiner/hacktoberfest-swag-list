# Test Markdown File with Formatting Errors!

This is a test file specifically created to test the Reviewdog Markdownlint GitHub action. It contains intentional markdown formatting errors.

###Missing H2 Level (MD001 error)

This should trigger MD001 as we skipped from H1 to H3.

##Missing space after hash (MD018 error)
This heading has no space after the hash symbols.

# Multiple headings with the same content

Some content here.

# Multiple headings with the same content

More content here - this should NOT trigger MD024 since it's disabled.

## Heading with trailing punctuation!

This heading ends with exclamation mark - should NOT trigger MD026 since it's disabled.

## List Problems

Here's a list with inconsistent indentation (should NOT trigger MD005/MD007 since disabled):

* Item 1
   * Sub-item with 3 spaces
     * Sub-sub-item with 5 spaces
  * Another sub-item with 2 spaces
* Item 2
       * Deep indented item

-Mixed list types
* In same list
+ Different bullets

## Link Issues

Here are some bare URLs that should trigger errors:
https://example.com
www.google.com

[Click here](https://example.com) - this should NOT trigger MD059 since it's disabled.

## Line Length Test

This is an extremely long line that exceeds typical line length limits and should normally trigger MD013 but won't because MD013 is disabled in the markdownlint configuration file for this project.

## Whitespace Issues

There are trailing spaces at the end of this line
And this line has trailing spaces too

	This line starts with a tab character (should trigger MD010)

## Empty Elements

[](empty-link-text)

## Emphasis Problems

**This is bold text that spans
across multiple lines**

*This italic text also spans
multiple lines*

## Code Block Issues

```
No language specified for code block
This should trigger MD040
```

## HTML in Markdown

<br>
Some inline HTML that may trigger warnings.

<div>
Block level HTML
</div>

## Raw HTML

<script>alert('This should definitely trigger MD033')</script>

## Inconsistent ATX Heading Styles

# ATX Style 1

## ATX Style 2 ##

### ATX Style 3

## Reference Links

This has a [reference link][1] but no definition.

[unreferenced]: https://example.com "This reference is never used"

## Final Section

This markdown file intentionally contains various formatting errors to test the linting process.
