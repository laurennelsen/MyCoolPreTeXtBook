var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Great Section!",
  "body": " Great Section!  This is our section!  This is so much fun....     A mountain is.....    Look at     This is a great theorem     kjkljkjkj   This is an exercise   This is an example!   type words....  "
},
{
  "id": "def-mountain",
  "level": "2",
  "url": "sec-section-name.html#def-mountain",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A mountain is.....   "
},
{
  "id": "thm-awesome-theorem",
  "level": "2",
  "url": "sec-section-name.html#thm-awesome-theorem",
  "type": "Theorem",
  "number": "1.1.2",
  "title": "",
  "body": "  This is a great theorem   "
},
{
  "id": "sec-section-name-8",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-8",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": " kjkljkjkj  "
},
{
  "id": "sec-section-name-9",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-9",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "",
  "body": "This is an exercise "
},
{
  "id": "sec-section-name-10",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-10",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": " This is an example!  "
},
{
  "id": "sec-interactive-problems",
  "level": "1",
  "url": "sec-interactive-problems.html",
  "type": "Section",
  "number": "2.1",
  "title": "Interactive Problems",
  "body": " Interactive Problems  This is our section!   UCCS was founded in 1965.    Problem instructions....    A  1    "
},
{
  "id": "true-false",
  "level": "2",
  "url": "sec-interactive-problems.html#true-false",
  "type": "Checkpoint",
  "number": "2.1.1",
  "title": "",
  "body": " UCCS was founded in 1965.  "
},
{
  "id": "sec-interactive-problems-4",
  "level": "2",
  "url": "sec-interactive-problems.html#sec-interactive-problems-4",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "",
  "body": " Problem instructions....    A  1   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
