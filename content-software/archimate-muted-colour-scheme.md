---
title: ArchiMate - Muted Colour Scheme
description: A colour scheme for less visual noise in your ArchiMate views
keywords: "ArchiMate, Enterprise Architecture, Archi"
date: 2018-01-06
permalink: "archimate-muted-colour-scheme/"
---

# {{ title }}

			<p>
				<i>This article is part of the <a href="/archimate-series">The ArchiMate Series</a></i>
			</p>
			
			<p>
				The ArchiMate specification is colour-neutral although some common colour schemes are in use, e.g. yellow, blue and green being used for either the core layers or core aspects. This colour scheme ain't the prettiest in my opinion and it doesn't fit in very well with the colour palettes used by most companies. While not the prettiest, it is functional and does allow a reader to easily distinguish between elements across the various layers and aspects.
			</p>
			<p>
				Fig 1. shows a subset of the elements from the core metamodel with a common colour scheme:
			</p>
			<figure>
				<img src="/content-software/images/archimate-colour-scheme-common.png" alt="ArchiMate Colour Scheme Common" />
				<figcaption>Fig 1. Common ArchiMate Colour Scheme</figcaption>
			</figure>
			<p>
				When creating a detailed model in ArchiMate we generally use elements from several layers in one view. Since these views have several layers they can be quite colourful and visually busy. I wouldn't normally share these views with stakeholders as they contain too much detail and would cause confusion.
			</p>

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
				Breaking the model down into smaller view makes it easier to digest, e.g. a view representing the steps in a business process, a view representing the application and another view showing how the high level elements of the business process are served by the application services. Similarly, a view for the technology layer and another showing the application components allocated to nodes. These views are much easier for stakeholders to read and understand.
			</p>
			
			<h2>The Muted Colour Scheme</h2>
			<p>
				Fig 2. shows a subset of the elements from the core metamodel with a muted colour scheme, this reduces the visual noise in the views:
			</p>
			<figure>
				<img src="/content-software/images/archimate-colour-scheme-muted.png" alt="ArchiMate Colour Scheme" />
				<figcaption>Fig 2. Muted ArchiMate Colour Scheme</figcaption>
			</figure>
			
			<h2>Stakeholder Views</h2>
			<p>
				When creating a view to share with stakeholders, start by selecting the elements being discussed in the documentation or presentation, e.g. a future state where new business process steps or application components are being introduced, this should be a relatively small set. Then add some additional related elements for context. To improve readability, highlight the main elements being discussed by setting the fill colour to the primary colour from your corporate branding guidelines, set the font weight to bold and the font colour to a contrasting colour i.e. white. 
			</p>
			<p>
				These diagrams fit in quite nicely when used with corporate document or presentation templates. Fig 3. shows a simple example where the <em>Order Validation</em> component is highlighted:
			</p>
			<figure>
				<img src="/content-software/images/archimate-colour-scheme-example.png" alt="ArchiMate Colour Scheme Example" />
				<figcaption>Fig 3. Example with Muted Colour Scheme</figcaption>
			</figure>
			
			<h2>Download</h2>
			<p>
				This colour scheme is available as a <em>prefs</em> file for <a href="https://www.archimatetool.com/" target="_blank">Archi</a>:
			</p>
			<ul>
				<li><a href="/content-software/downloads/ArchiColours-v1.2.prefs" target="_blank">ArchiColours-v1.2.prefs</a></li>
			</ul>
			<p>
				<em>In Archi, navigate to Edit/Preferences/Colours and Fonts and click on "Import Scheme..."</em>
			</p>
						
			<h2>Further Reading</h2>
			<ul>
				<li><a href="https://ea.rna.nl/2013/11/25/9-colour-scheme-for-archi-open-source-archimate-tool/" target="_blank">9-Colour Scheme for Archi</a> - from Gerben Wierda</li>
				<li><a href="http://www.umlchannel.com/en/enterprise-architect/item/211-mastering-archimate-alternate-colour-scheme-with-archimate-3" target="_blank">Mastering ArchiMate alternate colour scheme with Archimate 3</a></li>
			</ul>


<div id="comments" class="comments"></div>