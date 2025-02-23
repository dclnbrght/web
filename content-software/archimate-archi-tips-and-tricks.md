---
title: ArchiMate - Archi Tips and Tricks
description: Tips and Tricks when using ArchiMate
keywords: "ArchiMate, Enterprise Architecture, Archi"
date: 2018-01-07
permalink: "archimate-archi-tips-and-tricks/"
---

# {{ title }}

			<img src="/content-software/images/archi-logo.png" alt="Archi" class="article-image-primary" style="max-width:130px" />

			<p>
				<i>This article is part of the <a href="/archimate-series">The ArchiMate Series</a></i>
			</p>
			<p>
				The <a href="https://www.archimatetool.com/" target="_blank">Archi</a> application is an excellent, mature ArchiMate editor which is very easy to use. If you are just starting out then I highly recommend the <a href="https://www.archimatetool.com/downloads/release/Archi%20User%20Guide.pdf" target="_blank">Archi User Guide</a>, it's a relatively light read with lots of time-saving information.
			</p>
			<p>
				Below are some additional tips and tricks which I use on a regular basis:
			</p>
			<div id="toc" class="table-of-contents"></div>

			<h2>Element Properties</h2>
				<div class="adBlock">
					<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1545747396691566"
						crossorigin="anonymous"></script>
					<ins class="adsbygoogle"
						style="display:block; text-align:center;"
						data-ad-layout="in-article"
						data-ad-format="fluid"
						data-ad-client="ca-pub-1545747396691566"
						data-ad-slot="9769321843"></ins>
					<script>
						(adsbygoogle = window.adsbygoogle || []).push({});
					</script>
				</div>			
            <p>
				Element Properties are a name / value list where you can add related details to your model elements, just select an element on a view, then navigte to the Properties tab. By adding element properties, you can search and filter your model is lots of useful ways. The built-in search box even lists your property names making it easy to find what you need.
			</p>
			<p>
				Here are some suggested properties to add to your elements:
			</p>
			<ul>
				<li><b>Repo</b> - useful for application components,  it helps you quickly navigate to the related code in the code base</li>
				<li><b>Status</b> - I don't add this property to every element but usually add a status of "Future" to elements which don't exist yet or "Deprecated" to elements on their way out</li>
				<li><b>Stereotype</b> - great for adding domain specific terminology to your elements, more below</li>
			</ul>
			
			<br />
			
			<h2>Label Expressions</h2>
			<p>
				<a href="https://github.com/archimatetool/archi/wiki/Label-Expressions">Label Expressions</a> is a great feature that was introduced in Archi 4.7, it allows you to expose more details on your diagrams. Just select an element on a view, then navigte to the Label tab. Some example expressions:
			</p>			
			
			<h3>Example Label Expression 1:</h3>
			<pre class="code">(${type})
${name}</pre>
			<figure>
				<img src="/content-software/images/archimate-label-expressions-example1.png" alt="Label Expressions - Example 1" />
				<figcaption>Fig 1. Label Expressions - Example 1</figcaption>
			</figure>
			<p>
				Fig 1. shows an element using a Label expression which takes the element {type} &amp; {name} and renders them on separate lines.
			</p>
			
			<h3>Example Label Expression 2:</h3>			
			<pre class="code">«${property:Stereotype}»
&nbsp;
Type: ${type}
&nbsp;
Name: ${name}
&nbsp;
Documentation: 
${documentation}
&nbsp;
Repo: ${property:Repo}</pre>
			<figure>
				<img src="/content-software/images/archimate-label-expressions-example2.png" alt="Label Expressions - Example 2" />
				<figcaption>Fig 2. Label Expressions - Example 2</figcaption>
			</figure>
			<p>
				Fig 2. shows the same element from example 1 but with a different Label Expression to show additional details.
			</p>		
			
			<br />
					
			<h2 id="specialisation-with-stereotypes">Specialisation with Stereotypes</h2>
			<p>
				In the <a href="https://pubs.opengroup.org/architecture/archimate31-doc/chap15.html#_Toc90784462" target="_blank">Specialization of Elements and Relationships</a> section of the <a href="http://pubs.opengroup.org/architecture/archimate3-doc/" target="_blank">ArchiMate specification</a>, it states that: <q>The stereotype notation with angled brackets may also be used to denote a specialised concept.</q>
			</p>
			<p>
				Fig 3. shows a Business Actor with a specialisation of &laquo;Organisation Unit&raquo; and an Assignment Relationship with a specialisation of &laquo;Temporary Assignment&raquo;. The specialisation name is wrapped in <a href="https://en.wikipedia.org/wiki/Guillemet" target="_blank">Guillemet</a> characters, making it clear to the reader that a specialised concept is being represented. 
			</p>
			<figure>
				<img src="/content-software/images/archimate-specialisation-actor-organisation-unit.png" alt="Element and Relationship Specialisation using Stereotypes" />
				<figcaption>Fig 3. Element and Relationship Specialisation using Stereotypes</figcaption>
			</figure>			
			<p>
				A stereotype can be added to an element as an <a href="#element-properties">Element Property</a> and rendered using a <a href="#label-expressions">Label Expression</a> as described above.
			</p>			
			<pre class="code">«${property:Stereotype}»
${name}</pre>
			
			<p>
				To create <a href="https://en.wikipedia.org/wiki/Guillemet" target="_blank">Guillemet</a> characters on MS Windows use the following:
			</p>
			<ul>
				<li>"&laquo;": hold down the <i>Alt</i> key and type 174</li>
				<li>"&raquo;": hold down the <i>Alt</i> key and type 175</li>
			</ul>
			<p>
				<em>Note: this only works with the number keypad, not the numbers along the top of your keyboard or you can copy/paste from here.</em>
			</p>
			
			<br />
			
			<h2>Multi-line Element Names</h2>
			<p>
				<span style="text-decoration:line-through">As of <a href="https://www.archimatetool.com/" target="_blank">Archi</a> v4.2, there is no way to include a line break in the name of an element, long text wraps based on the width of the element.</span>
				<br />
				<i>UPDATE: This has changed somewhat as of v4.7, the <a href="#label-expressions">Label Expression</a> feature gives us the ability to add details in multiple lines, however a long name still wraps based on the width of the element so this tip is still useful.</i>
			</p>
			<p>
				This trick gives us some control over where line breaks occur in the element name, by grouping words together.
			</p>
			<p>
				Fig 4. shows a Business Process element which has a name of "1st Line 2nd Line 3rd Line". As you can see in the first element, the line break occurs on the space after "2nd" and we really want it to occur on the space before "2nd".
			</p>
			<figure>
				<img src="/content-software/images/archimate-multiline-element-name-example.png" alt="Multi-line Element Name Example" />
				<figcaption>Fig 4. Multi-line Element Name, before and after adding non-breaking space characters</figcaption>
			</figure> 
			<p>
				By adding non-breaking space characters between the words we want to keep together it forces the line breaks to occur on the normal spaces, i.e. after "1st" will keep "1st Line" together, after "2nd" will keep "2nd Line" and after "3rd" will keep "3rd Line" together.
			</p>
			<p>
				Creating a non-breaking space character varies between environments, see the <a href="https://en.wikipedia.org/wiki/Non-breaking_space#Keyboard_entry_methods" target="_blank">keyboard entry methods</a> section in this "non-breaking space" Wikipedia article for more information. For Example, to create a <a href="https://en.wikipedia.org/wiki/Non-breaking_space" target="_blank">Non-Breaking Space</a> character on MS Windows use the following:
			</p>
			<ul>
				<li>hold down the <i>Alt</i> key and type 255</li>
			</ul>
			<p>
				<em>Note: this only works with the number keypad, not the numbers along the top of your keyboard.</em>
			</p>
			
			<br />
			
			<h2>Finer Layout Control</h2>
			<p>
				When laying out a view the elements snap to a grid to allows for easy alignment of elements. The default grid size (of 12) works well in most cases but if you would like finer control of the layout then setting to grid size to a smaller value is helpful.
			</p>
			<p>
				From the <i>Edit</i> menu, go to Preferences/Diagram/General/Grid Size, I usually set it to 6.
			</p>
			
			<br />

			<h2>Default Figures</h2>
			<p>
				I prefer the clean box figures in Archi as they give a more consistent look and feel to the views. I change the default figures for the following elements; Application Component, Device and Node. 
			</p>
			<figure>
				<img src="/content-software/images/archimate-default-figures.png" alt="Archi Default Figures" />
				<figcaption>Fig 5. Default Figures</figcaption>
			</figure>
			<p>
				From the <i>Edit</i> menu, go to Preferences/Diagram/Default Figures.
			</p>
			
			<br />

			<h2>Alternative Colour Scheme</h2>
			<p>
				If you don't like the default colour scheme you can create your own. See the <a href="/archimate-muted-colour-scheme">Archimate Muted Colour Scheme</a> article for more information.
			</p>

			<br />
			
			<h2>Further Reading</h2>
			<ul>
				<li>The example ArchiMate model is available from <a href="/archimate-series#downloads">downloads section</a> on the introduction page</li>
				<li><a href="http://forum.archimatetool.com/index.php?topic=88.0" target="_blank">Multi line object names</a> topic on the Archi Forum</li>
			</ul>


<div id="comments" class="comments"></div>