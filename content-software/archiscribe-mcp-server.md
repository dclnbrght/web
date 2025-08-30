---
title: ArchiScribe MCP Server
description: A Model Context Protocol (MCP) server for providing AI agents with access to information in an ArchiMate model.
keywords: "MCP,ArchiMate,SDLC,AI Agents,AI Coding Agents"
date: 2025-08-29
permalink: "/software/archiscribe-mcp-server/"
---

# {{ title }} 

The importance of providing AI coding assistants and agents with access to rich contextual information is covered in this article: [Power Up Your Software Development Lifecycle with AI](/software/power-up-your-sdlc-with-ai/). The ArchiScribe MCP Server can be used to provide some of that context.

<img src="/content-software/images/archiscribe.webp" alt="ArchiScribe MCP" class="article-image-primary" style="max-width: 100%; margin-bottom: 1em; float:none; padding:0;" />

<div id="toc" class="table-of-contents"></div>

## Background

If you use ArchiMate to model your software architecture, there is an abundance of information available in the model that describes the high level components of your systems and the relationships between them. This is useful contextual information, especially if there are comprehensive descriptions and properties defined on the elements. 

So, how can you leverage this information in your Software Development LifeCycle (SDLC) and make it available to AI coding assistants and agents?

## How It Works
ArchiScribe is a Model Context Protocol (MCP) Server that provides access to information from the views defined within an ArchiMate model. ArchiScribe is configured with access to an ArchiMate model file, in Archimate Exchange Format. A coding agent can then be configured to access the MCP server and make requests.

Tools are included to search view names and retrieve the full details for a particular view. The details returned include titles, descriptions, properties and ArchiMate types of elements and relationships. It can even infer implicit relationships based on nested elements in a view.

## When To Use It
The MCP Server can be used during the SDLC, to provide context about the software architecture directly to software engineers using AI coding assistants / agents. The views from the Application Layer are especially useful to provide context about the related components of the system. 

The information is returned in markdown format which is easily understood by coding assistance / agents. LLMs understand the concepts of ArchiMate and can therefore reason about the elements and relationships to form a comprehensive understanding of the software architecture defined in an ArchiMate view.

### Generate Documentation
If the AI has a good understanding of the architecture view, it can generate good documentation. Here is a prompt that can be used to call the "#archiscribe" MCP tool and generate documentation based on the response:

* *"#archiscribe Write a descriptive overview of the system architecture defined in the \[...\] ArchiMate view. It should be easy to understand, even by non-technical people who don't have a background in software architecture or ArchiMate. Output to a markdown file in the \[...\] directory."*

## Source Code

The source code for *archiscribe-mcp* is available on GitHub:

- [archiscribe-mcp GitHub Repository](https://github.com/dclnbrght/archiscribe-mcp)

<div id="comments" class="comments"></div>