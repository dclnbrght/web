---
title: ArchiMate - Diagram Layout Techniques
description: Tips to improve the layout of your ArchiMate views
keywords: "ArchiMate, Enterprise Architecture, Archi"
date: 2018-01-14    
permalink: "archimate-diagram-layout-techniques/"
---

# {{ title }}

			<p>
				<i>This article is part of the <a href="/archimate-series">The ArchiMate Series</a></i>
			</p>
			
			<h2>Nesting Interface Elements</h2>
			<p>
				Gerben Wierda's excellent book; <a href="https://ea.rna.nl/the-book-edition-iii/" target="_blank">Mastering ArchiMate</a> (I have edition 2), has a chapter on aesthetics which covers various techniques you can use to improve the readability of your ArchiMate diagrams. 
			</p>
			<p>
				There is also a section in the book on <em>Nesting</em>, which highlights the issues of using nested elements and how this can result in ambiguity. There are several relationship types which can be represented by placing one element inside another but is it not always obvious to the reader which relationship type was intended.
			</p>
			<p>
				So, nesting ArchiMate elements must be done with some caution. Here is a nested element technique which can be used to reduce the visual clutter and size of diagrams while preserving the original intent.
			</p>
			<p>
				Fig 1. shows an technology interface component called "Database Client" and an application interface called "Orders Data Interface".  This simple example has five elements stacked vertically which is a lot of elements to represent three layers; business logic, data access and data storage. We could simplify the diagram by removing the interface elements but then we would have to add additional relationships between the components.
			</p>
			<figure>
				<img src="/content-software/images/archimate-interface-layout-default-example.png" alt="Common Element Layout" />
				<figcaption>Fig 1. Common Element Layout</figcaption>
			</figure>
			<p>
				Fig 2. has the same elements in a more condensed layout. The height of the interface elements have been reduced and they have been nested inside their parent element. The names of the parent elements have also been aligned to the bottom. This diagram has the same information as Fig 1. but it is much easier to read.
			</p>
			<figure>
				<img src="/content-software/images/archimate-interface-layout-condensed-example.png" alt="Condensed Element Layout" />
				<figcaption>Fig 2. Condensed Element Layout</figcaption>
			</figure>
									
			<h2>Further Reading</h2>
			<ul>
				<li><a href="https://ea.rna.nl/the-book-edition-iii/" target="_blank">Mastering ArchiMate</a> - from Gerben Wierda</li>
			</ul>

<div id="comments" class="comments"></div>