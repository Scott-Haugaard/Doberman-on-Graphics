``` ==== TO DO ================

Site works wll well locally, not on GitHug
GitHub doesn't like Header in JS
Footer is wonky - Should be in JS

```
``` ==== PAGE BUILD ===========

PAGE			VER		STATE	

Index 			0.2		Needs work
Design 			0.2		Add Images
Branding		0		
Illustration	0		
Photography		0		
About 			0		
Site Map 		0		
Navbar			0.1		GitHub doesn't like JS delivery
Footer			0.1		Wonky


SCRIPTS			STATUS	STATE	

Style Sht		OK 		Done 
JavaScript		OK		Done

```
``` ==== GITHUB ===============

    ==== TURN OFF GITHUB ===============
File>Preferences>Settings>Extensions>Edit in settings.json
It was hard to find, so search "settings.json"

Disable Altoghether in settings.json:
{
  "git.enabled": false
}

Disable Pending Changes in settings.json:
{
  "scm.providers": null
}

```
``` ==== MEDIA QUERIES ========

@media screen and (max-width: 900px) and (min-width: 600px) {}

Common Media Sizes
	Mobile: 320px - 480px
	Tablet: 481px - 768px
	Small Laptop/Desktop: 769px - 1024px
	Large Desktop: 1025px - 1200px

Bootstrp Breakpoints
	@media (max-width: 575.9px) { }		/*XS*/
	@media (min-width: 576px) { }    	/*SM*/
	@media (min-width: 768px) { }      	/*MD*//
	@media (min-width: 992px) { }       /*LG*/
	@media (min-width: 1200px) { }      /*XL*/

```
``` ==== SEMANTIC ELEMENTS ====

Tags, you are it ..

<article>		Defines independent, self-contained content
<aside>			Defines content aside from the page content
<details>		Defines additional details that the user can view or hide
<figcaption>	Defines a caption for a <figure> element
<figure>		Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
<footer>		Defines a footer for a document or section
<header>		Specifies a header for a document or section
<main>			Specifies the main content of a document
<mark>			Defines marked/highlighted text
<nav>			Defines navigation links
<section>		Defines a section in a document
<summary>		Defines a visible heading for a <details> element
<time>			Defines a date/time

```
``` ==== UNICODE ==============
Unicode Space in Different Environments ====================

\value (CSS escape sequence)
\uvalue (CSS escape sequence and JavaScript escape sequence)
char(value) (CSS function)
U+value (Unicode code point value)
#value (HTML entity code)
\xvalue (JavaScript escape sequence)
String.fromCodePoint(value) (JavaScript method)
                       
```