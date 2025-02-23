---
title: ArchiMate - Application Component, Bending the Rules
description: Rules are made to be broken!
keywords: "ArchiMate, Enterprise Architecture, Archi, Application Component, UML"
date: 2018-01-05
permalink: "archimate-application-component-bending-the-rules/"
---

# {{ title }}

			<p>
				<i>This article is part of the <a href="/archimate-series">The ArchiMate Series</a></i>
			</p>
			
			<p>
				ArchiMate is an enterprise architecture modelling language for modelling the high level architecture of complex systems, its metamodel of layers and aspects, is great for representing the <em>big picture</em>. For example, the ArchiMate application layer has elements for modelling components, interfaces, services etc but when it comes to representing the lower level details of the solution or application architecture then UML diagrams are more suitable.
			</p>
			<p>
				We create architecture models and diagrams with the intention of communicating a clear and concise message. Whether representing the big picture or the low level details, there are many decisions to be made regarding the level of detail to include or exclude from any given diagram.
			</p>
			<p>
				When the stakeholders of a particular architecture diagram are software developers it is important to get down to a level of detail where they know what needs to be implemented and how that implementation fits into an existing code base. This can be tricky as the boundary between enterprise architecture and solution/software/application architecture isn't clear cut. In order to have meaningful conversations across this boundary we need a means of transitioning across it.
			</p>
			<p>
				We often need to show how a new piece of code fits into the bigger picture. In this scenario, we can represent the high level components in ArchiMate and the lower level details in UML. We can bridge the gap between the two models by representing an application component in both modelling languages, elaborating on the detailed design in UML, with classes etc. This is all possible but there is a disconnect between the two models which breaks up the story, making it more difficult to communicate some concepts.
			</p>

			
			<h2>So what are the options with ArchiMate?</h2>
			<h3>The Data Object</h3>
			<p>
				According to the ArchiMate specification, the <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Application-Layer.html#sec-Data-Object" target="_blank">Data Object</a> can be <q>used in the same way as data objects (or object types) in well-known data modeling approaches, most notably the "class" concept in UML class diagrams</q>. However, this doesn't work for behavioral elements as it's a <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Application-Layer.html#sec-application-Passive-Structure-Elements" target="_blank">Passive</a> element which can only represent data objects.
			</p>
			<h3>The Application Component</h3>
			<p>
				According to the ArchiMate specification, <q>An <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Application-Layer.html#sec-Application-Component" target="_blank">Application Component</a> is a self-contained unit. As such, it is independently deployable, re-usable, and replaceable.</q>  The specification also states that "The application component element is used to model entire applications and individual parts of such applications, at all relevant levels of detail."
			</p>
			
			<h2>Bending the Rules</h2>
			<p>
				Now for the <em>bending the rules</em> part, I often use the <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Application-Layer.html#sec-Application-Component" target="_blank">Application Component</a> to represent a code class, purists may baulk but pragmatism wins out for me here. While a code class isn't "independently deployable", the piece about "all relevant levels of detail" lets me use it with a clear conscience if its a valid part of the message being communicated by a diagram.
			</p>
			<p>
				Now, I don't suggest that you try to create full class diagrams in ArchiMate, you will hit a wall very quickly as the language certainly doesn't have full support for OOP concepts. However, having a class represented on a ArchiMate diagram does provide a nice way to bridge between ArchiMate and UML class diagrams, a reader can see how a class fits into the big picture and they can then jump into the lower-level detail of the UML class diagram or even better, into the code itself.
			</p>
			
			<h2>Class Stereotype</h2>
			<p>
				In the <a href="https://pubs.opengroup.org/architecture/archimate31-doc/chap15.html#_Toc90784462" target="_blank">Specialization of Elements and Relationships</a> section of the ArchiMate specification it states that: <q>The stereotype notation with angled brackets may also be used to denote a specialized concept.</q> In the example given for specialisation of an Application Component it also mentions that it must be a <q>deployable component of functionality</q>. Ok, so we're back to "deployable" but that's the <em>bending the rules</em> part!
			</p>
			<p>
				By adding a &laquo;class&raquo; stereotype to the element (using <a href="https://en.wikipedia.org/wiki/Guillemet" target="_blank">Guillemet</a> characters) it makes it clear that we are representing a class. Fig 1. shows a simple example where the <em>Orders Web API</em> is composed of the <em>AuthenticationHandler</em> class which is served by the <em>Authentication Provider</em> interface. 
			</p>
			<p>
				<em>See the <a href="/archimate-archi-tips-and-tricks#specialisation-with-stereotypes">Archi Tips and Tricks</a> article for more details on adding stereotypes.</em>
			</p>			
			<figure>
				<img src="/content-software/images/archimate-application-component-class-example.png" alt="Application Component with Class Stereotype" />
				<figcaption>Fig 1. Application Component with Class Stereotype</figcaption>
			</figure>			
			
			<h2>Modelling Tools</h2>
			<p>
				Some architecture modelling tools support both ArchiMate and UML views in the one model, allowing links between the elements, this works well for those who have access to such tools but not so well for those who don't.
			</p>
			<p>
				<a href="https://www.archimatetool.com/" target="_blank">Archi</a> is a great tool for modelling in ArchiMate, it does not support UML, but it does generate very nice ArchiMate diagrams for use in architecture documentation and presentations.
			</p>
			
			<h2>Further Reading</h2>
			<ul>
				<li><a href="/archimate-archi-tips-and-tricks">Archi Tips and Tricks</a></li>
				<li><a href="https://publications.opengroup.org/white-papers/archimate/w134" target="_blank">How to Use the ArchiMate&reg; Language with UML</a> - Open Group Whitepaper</li>
			</ul>

<div id="comments" class="comments"></div>