# DOCX-to-HTML converter

This is a simple script that uses the Mammoth and Cherio libraries to convert DOCX to HTML for WordPress. Simply copy the output HTML into the "Text" tab of posts and pages in WordPress. 

The output file is saved in the same directory as the DOCX. Currently, images are ignored but I might add more functionality in the future.

No warranty is implied in this example - please feel free to modify as needed.

## Requirements

* [NodeJS 12.x installed](https://nodejs.org/en/download/)

## Installation Instructions

1. Clone the repo onto your local development machine using `git clone`.

1. Run `npm install`.

1. To convert a docx file, run the command:

`node ./app.js ./myfilename.docx`

==============================================

SPDX-License-Identifier: MIT-0
