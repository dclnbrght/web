---
title: ArchiMate - Wish List
description: Things I wish the ArchiMate specification contained
keywords: "ArchiMate, Enterprise Architecture, Archi"
date: 2018-02-03  
permalink: "archimate-wish-list/"
---

# {{ title }}

			<p>
				<i>This article is part of the <a href="/archimate-series">The ArchiMate Series</a></i>
			</p>
			<p>I have used ArchiMate for several years with great success but there are times when I wish the specification contained some additional elements, here is my wish list:</p>

			<div id="toc" class="table-of-contents"></div>
						
			<h2>Decision Element</h2>
			<p>
				Neither the <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Motivation-Elements.html" target="_blank">Motivation</a> or <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Strategy-Layer.html" target="_blank">Strategy</a> layers have an element to explicitly represent a decision.
			</p>
			<p>
				The <a href="hhttps://pubs.opengroup.org/architecture/archimate3-doc/ch-Motivation-Elements.html#sec-Assessment" target="_blank">Assessment</a> element alludes to a decision to a degree, from the specification; <q>an assessment represents the result of an analysis of the state of affairs of the enterprise with respect to some driver</q>. But we often carry out assessments for several alternative options, and then make a decision to proceed with one of them. 
			</p>
			<p>
				The <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Motivation-Elements.html#sec-Outcome" target="_blank">Outcome</a> element <q>represents an end result that has been achieved</q>, not necessarily what we decided to do so this doesn't really cover it either. 
			</p>
			<p>
				A <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Strategy-Layer.html#sec-Course-of-Action" target="_blank">Course of Action</a> element <q>represents what an enterprise has decided to do</q>, and <q>can be categorized as strategies and tactics</q>. The example in the specification shows two Courses of Action influencing two separate Outcomes which influence Goals in either a Positive or Negative way but there is no explicit Decision, it's not making a choice between the options. 
			</p>
			<p>
				The example in Fig 1. shows two Capabilities, joined by an Or junction which is explained using a Meaning element, realising one Course of Action, influencing an Outcome, this almost works but doesn't feel quite right.
			</p>
			<figure>
				<img src="/content-software/images/archimate-courseofaction-example.png" alt="Course of Action" />
				<figcaption>Fig 1. Capabilities realising a Course of Action influencing an Outcome</figcaption>
			</figure>
			<p>
				Given the importance of decisions in documenting an architecture I think they deserve to be first class citizens in ArchiMate. Fig 2. shows what a <em>Decision</em> element might look like.
			</p>
			
			<figure>
				<img src="/content-software/images/archimate-decision-element.png" alt="Decision Element" />
				<figcaption>Fig 2. Proposed Decision Element</figcaption>
			</figure>
			
			<br />
			
			<h2>Rationale Element</h2>
			<p>
				Similar to the Decision element above, the <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Motivation-Elements.html" target="_blank">Motivation</a> layer doesn't have an element to represent the rationale behind decisions which have been made. 
			</p>
			<p>
				According to the specification, the <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Motivation-Elements.html#sec-Meaning" target="_blank">Meaning</a> element can be used to <q>represent the knowledge or expertise present in, or the interpretation given to, a core element in a particular context</q>, <q>a description that expresses the intent of that element</q>. I guess this could be used to represent rationale but, similar to decisions, I think that the Rationale behind decisions deserves to be represented as a first class citizen in ArchiMate. 
				<br />Fig 3. shows what a <em>Rationale</em> element might look like.
			</p>
			<figure>
				<img src="/content-software/images/archimate-rationale-element.png" alt="Rationale Element" />
				<figcaption>Fig 3. Proposed Rationale Element</figcaption>
			</figure>
			
			<br />
			
			<h2>Data Storage Element</h2>
			<p>
				How many times have you seen a system architecture diagram where a cylinder is used to represent a database or other type of data store? It's easily recognisable and well understood, probably because it looks like a big barrel of data and it just feels right.
			</p>
			<p>
				Representing a database with a <em>System Software</em> element or a <em>Technology Service</em> element along with an <em>Artifact</em> doesn't convey the same message, it feels awkward. A <em>System Software</em> element could be stereotyped with RDBMS but its not the same, people expect to see a cylindrical element or at least a cylinder shaped icon.
			</p>
			<figure>
				<img src="/content-software/images/archimate-database-examples.png" alt="Database Examples" />
				<figcaption>Fig 4. Database Examples</figcaption>
			</figure>
			
			<p>
				A Data Storage element would be an Active Structure element, it could be used to represent multiples types of data storage; databases, document management systems, code repositories etc. Fig 5. shows what a <em>Data Storage</em> element might look like.
			</p>
			<figure>
				<img src="/content-software/images/archimate-datastorage-element.png" alt="Data Storage Element" />
				<figcaption>Fig 5. Proposed Data Storage Element</figcaption>
			</figure>
			
			<br />
			
			<h2>Bi-Directional Flow Relationship</h2>
			<p>
				Information quite often flows in both directions so it would be useful if the <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Relationships-and-Relationship-Connectors.html#sec-Flow-Relationship" target="_blank">Flow</a> relationship was bi-directional, just like the <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Relationships-and-Relationship-Connectors.html#sec-Access-Relationship" target="_blank">Access</a> relationship. I'm not sure how this would be implemented however, the <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Relationships-and-Relationship-Connectors.html#sec-Access-Relationship" target="_blank">Access</a> relationship is not truly bi-directional, it is always from a <em>behaviour</em> element to a <em>passive</em> element, the access type is where the directionality comes from, the options being; read, write and read-write.
			</p>
			
			<br />
			
			<h2>Path Relationship</h2>
			<p>
				In the technology layer, we can use tbe <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Technology-Layer.html#sec-Path" target="_blank">Path</a> element to <q>model the logical communication relations between nodes</q>. We can also use the <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Relationships-and-Relationship-Connectors.html#sec-Flow-Relationship" target="_blank">Flow</a> relationship to represent the direction of the communication. A <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Technology-Layer.html#sec-Path" target="_blank">Path</a> is the logical realisaton of a physical <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Technology-Layer.html#sec-Communication-Network" target="_blank">Communications Network</a>. 
			</p>
			<figure>
				<img src="/content-software/images/archimate-network-path-example.png" alt="Communications Network and Path Example" />
				<figcaption>Fig 6. Communications Network and Path Example</figcaption>
			</figure>
			<p>
				This works fine where there are a small number of nodes in a view but quickly becomes cumbersome as more nodes are added. Fig 7. shows four nodes with the Paths between them.
			</p>
			<figure>
				<img src="/content-software/images/archimate-node-paths-example.png" alt="Nodes and Paths Example" />
				<figcaption>Fig 7. Nodes and Paths Example</figcaption>
			</figure>
			<p>
				In Fig 8. the <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Technology-Layer.html#sec-Path" target="_blank">Path</a> elements have been removed. By using direct <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Relationships-and-Relationship-Connectors.html#sec-Flow-Relationship" target="_blank">Flow</a> relationships  this view is much easier to read.
			</p>
			<figure>
				<img src="/content-software/images/archimate-node-flows-example.png" alt="Nodes and Flows Example" />
				<figcaption>Fig 8. Nodes and Flows Example</figcaption>
			</figure>
			<p>
				While the <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Relationships-and-Relationship-Connectors.html#sec-Flow-Relationship" target="_blank">Flow</a> relationship does the job it would be more explicit if the <a href="https://pubs.opengroup.org/architecture/archimate3-doc/ch-Technology-Layer.html#sec-Path" target="_blank">Path</a> element was a relationship. 
			</p>
			
			<br />
			
			<h2>Further Reading</h2>
			<ul>
				<li><a href="https://modelingtheenterprise.wordpress.com/archimate-wishlist/" target="_blank">Modeling The Enterprise - ArchiMate Wishlist</a></li>
				<li><a href="https://ea.rna.nl/2015/04/07/the-archimate-wish-list-group/" target="_blank">R&amp;A Enterprise Architecture - The #ArchiMate Wish List: Group</a></li>
				<li><a href="https://ea.rna.nl/2014/11/02/modelling-networking-using-the-networking-concepts-of-archimate/" target="_blank">Modelling networking using the networking concepts of ArchiMate</a></li>
			</ul>


<div id="comments" class="comments"></div>