---
title: ArchiScribe MCP Server
description: A Model Context Protocol (MCP) server for providing AI agents with access to information in an ArchiMate model.
keywords: "MCP,ArchiMate,SDLC,AI Agents,AI Coding Agents"
date: 2025-08-29
permalink: "/software/archiscribe-mcp-server/"
---

# {{ title }} 

The importance of providing AI coding assistants and agents with access to rich contextual information is covered in this article: [Power Up Your Software Development Lifecycle with AI](/software/power-up-your-sdlc-with-ai/).

<img src="/content-software/images/archiscribe.webp" alt="ArchiScribe MCP" class="article-image-primary" style="max-width: 100%; margin-bottom: 1em; float:none; padding:0;" />

If you use ArchiMate to model your software architecture, there is an abundance of information available in the model that describes the high level components of your systems and the relationships between them. 

This is useful contextual information, but how do you leverage it in your Software Development LifeCycle (SDLC) and make the information available to AI coding assistants and agents?

## How It Works
ArchiScribe is a Model Context Protocol (MCP) server that provides access to information from the views defined within an ArchiMate model. Tools are included to search view names and retrieve the full details for a particular view. The details include titles, descriptions, properties and ArchiMate types of elements and relationships. It can even infer implicit relationships based on nested elements in a view.

## When To Use It
The MCP Server can be used during the SDLC, to provide context about the software architecture directly to software engineers using AI coding assistants / agents with MCP server integration. The views from the Application layer are especially useful to provide context about the related components of the system. 

The information is provided in markdown format which is easily understood by coding assistance / agents. LLMs understand the concepts of ArchiMate and can therefore reason about the elements and relationships to form a comprehensive understanding of the software architecture defined in the model.

## Source Code

The source code for *archiscribe-mcp* is available on GitHub:

- [archiscribe-mcp GitHub Repository](https://github.com/dclnbrght/archiscribe-mcp)

<div id="comments" class="comments"></div>