---
title: ArchiMate Graph Explorer
description: A web application that renders an interactive force directed graph of an ArchiMate model.
keywords: "ArchiMate, Enterprise Architecture, Archi, graph, D3.js"
date: 2021-09-25
permalink: "archimate-graph-explorer/"
---

# {{ title }}

    <p>The ArchiMate Graph Explorer is a web application which renders an interactive <a href="https://en.wikipedia.org/wiki/Force-directed_graph_drawing">force directed graph</a> of an ArchiMate model.</p>
    <p><b>TL;DR -> Jump straight to the demo <a href="/app/archigraph/" target="_blank">ArchiMate Graph Explorer</a></b></p>

    <figure>
        <img src="/content-software/images/archimate-graph-explorer.webp" alt="ArchiMate Graph Explorer" />
        <figcaption>Fig 1. ArchiMate Graph Explorer</figcaption>
    </figure>
    <p><i>Note: The <a href="https://github.com/archimate-models/archisurance">ArchiSurance Case Study</a> has been included as an example model.</i></p>

    <div id="toc" class="table-of-contents"></div>

    <h2>Background</h2>
    <p>
        The objective of the ArchiMate Graph Explorer is to provide an alternative way of browsing and exploring an ArchiMate model in a web browser. 
    </p>
    <p>
        The underlying structure of an ArchiMate model is a graph data structure, with elements (nodes/vertices) and relationships (links/edges) connected together. Creating visualisations of graph data structures can be fun and <a href="https://d3js.org/">D3.js</a> is a great JavaScript library for creating this type of data visualisation.
    </p>			
    <p>
        The <a href="https://www.archimatetool.com/">Archi</a> tool has a built-in "Visualier" feature which will display a graph visualisation from the perspective of the selected element with a breadth first search of the related elements. It also has options for depth and filters by element type, relationship type etc. This is really useful in the context of a single element but there are other ways you might want to search and browse the model graph.
    </p>

    <h2>How it works</h2>
    <p>
        The ArchiMate Graph Explorer web application is relatively simple, there are no fancy build systems, no transpilers, no endless list of dependencies, just some vanilla JavaScript (ES6 modules) and a few libraries; <a href="https://d3js.org/">D3.js</a> for generating the <a href="https://github.com/d3/d3-force">force directed graph</a> visualisation, <a href="https://github.com/wolffe/tail.select.js">tail.select.js</a> for some nice multi-select downdown lists, <a href="https://tarekraafat.github.io/autoComplete.js/#/">autoComplete.js</a> for an auto-complete search box and some CSS. 
    </p>
    <p>
        It can read a model from an <a href="https://www.opengroup.org/open-group-archimate-model-exchange-file-format">ArchiMate Model Exchange Format</a> file or the native file format from <a href="https://www.archimatetool.com/">Archi</a>. Most major ArchiMate tools support the exchange format so this application should work with models from any of those tools, however it has only been tested with files created by <a href="https://www.archimatetool.com/">Archi</a>. The model data is loaded into a <a href="https://github.com/d3/d3-force">D3.js force simulation</a> and rendered using SVG. Conditional styling is applied to the elements and relationships so they have the familiar ArchiMate icons, colours, arrowheads etc.
    </p>
    <p>
        The UI is designed with the mobile first approach so that it works on various screens sizes; from smartphones to large desktop monitors. It supports touch, pinch zoom, pan and the elements can be dragged around to rearrange them to fixed positions.
    </p>
    <p>
        The application has been developed using ES6 therefore it only works with modern browsers such as Chrome and MS Edge.
    </p>
    <!--<details>
        <summary>Here is an outline of the data structure:</summary>			
    </details>-->
    
    <h2>Search/Filter Modes</h2>
    <p>The application supports two primary modes of searching &amp; filtering; flat filtering and breadth first search.</p>
    <h3>Flat Filtering</h3>
    <p>
        If a root element has not been selected, filters can be applied across all elements and relationships in the model. An "Unrelated Elements" checkbox is available in this mode, checking it will display elements that do not have any relationships to other elements (depending on the selections in the "Element types" &amp; "Relationship types" filters).
    </p>
    <h3>Breadth First Search</h3>
    <p>
        Similar to the Visualiser in Archi, a breadth first search can be performed from a selected root element. You can either use the "Element name" search box to search for an element or double-click on an element to set it as the root element. A "Depth" filter is available in this mode. Clear the "Element name" search box to return to flat filtering mode.
    </p>

    <h3>Deep Linking</h3>
    <p>
        When a root element is selected, its "elementid" is appended to the URL querystring. Other filter values are not automatically appended to the querystring due to the potential excessive length if most or all filter values were selected, however, they can be specified manually, e.g.
    </p>
    <ul>
        <li><a href="/app/archigraph/?elementid=id-46613&elementtypes=All&relationshiptypes=All&depth=2">Root Element: Customer | Element Types: All | Relationship Types: All | Depth: 2</a></li>
        <li><a href="/app/archigraph/?elementid=id-47098&elementtypes=CommunicationNetwork,Device,Node&relationshiptypes=All&depth=2">Root Element: ArchiSurance WAN - Element Types: Communication Network, Device, Node - Relationship Types: All - Depth: 2</a></li>
        <li><a href="/app/archigraph/?elementtypes=Driver,Goal,Stakeholder,Value&relationshiptypes=All&unrelatedelements=false">Element Types: Driver, Goal, Stakeholder, Value - Relationship Types: All</a></li>
    </ul>
    
    <h2>Using the Graph Explorer</h2>
    <p>
        So, what is the application useful for you might ask? First of all, it allows you to see a broader view of a model, to see all of it at once if you want to. While this can be interesting, it starts to become more useful as you filter by the various element and relationship types to examine how the model is linked together. 
    </p>
    <p>
        As you explore, you will probably find gaps and mistakes in your model, such as missing relationships i.e. elements or clusters of elements that don't link to anything else or Application Services which don't have any Serving relationships to other Application Services or Business Services/Processes/Functions, or where a Trigger relationship was used by mistake, instead of a Serving relationship etc.
    </p>
    <p>
        You can use this application with your own ArchiModel model by exporting it to an exchange format file. You can either download the <a href="https://github.com/dclnbrght/archimate-graph-explorer">source code</a> and host the application yourself (configure the path to the model file in <i>settings.js</i>) or you can load it into this <a href="/app/archigraph/" target="_blank">ArchiMate Graph Explorer</a> by clicking on the settings (gear) icon, and dropping your model file into the drop zone. Your model will <em>not</em> be uploaded to a remote server, it will <em>only</em> be loaded directly into your web browser's session storage. You can delete it at any time by closing your browser tab.				
    </p>
    <p>
        It's a nice simple interface that can be shared with colleagues, just like the web report from Archi, allowing others to explore your model via a web browser without needing to install any additional tools.
    </p>

    <h2>Additional Features</h2>
    <p>
        Custom properties can be added to the elements of an ArchiMate model and these can be used in interesting ways. The graph explorer has some optional features that can be enabled to utilise custom element properties.  
    </p>

    <h3>Lifecycle Status Filter</h3>
    <p>
        A lifecycle <em>Status</em> property is a useful way to identify Current state, Future state and Deprecated elements in a model. The status values only have to be set for non-Current elements, everything else is assumed to be "Current" state. The values in the Element Status dropdown list filter can be configured in the settings.js file.
    </p>

    <h3>Stereotype Label</h3>
    <p>
        Adding a <em>Stereotype</em> property to elements is a really useful way to improve the understandability of you model. This is covered in more detail in the <a href="/archimate-archi-tips-and-tricks/">Archi Tips and Tricks</a> page. A label which displays the stereotype property (inside guillemet characters) beside each element can be enabled/disabled by a flag in the settings.js file.
    </p>

    <h3>Data Classification Styling</h3>
    <p>
        It's imperative to have a solid understanding of data classification to effectively manage data privacy across an organisation. A <em>DataClassificationLevel</em> property can be used to label data objects with the appropriate classification. A common approach is to use <a href="https://en.wikipedia.org/wiki/Traffic_Light_Protocol">TLP</a>; Red, Amber & Green. This feature uses the <em>DataClassificationLevel</em> property to set the colour of the nodes based on a configurable colour map, which is useful to  highlight how sensitive data is managed across the architecture. This feature can be configured in the settings.js file.
    </p>
    
    <h2>Source Code</h2>
    <p>The source code is available on GitHub:</p>
    <ul>
        <li><a href="https://github.com/dclnbrght/archimate-graph-explorer">archimate-graph-explorer</a></li>
    </ul>

<div id="comments" class="comments"></div>