---
title: ArchiScribe MCP Server
description: A Model Context Protocol (MCP) server for providing AI agents with access to information in an ArchiMate model.
keywords: "MCP,ArchiMate,SDLC,AI Agents,AI Coding Agents"
date: 2025-08-29
permalink: "/software/archiscribe-mcp-server/"
---

# {{ title }} 

Providing AI coding assistants and agents with access to rich contextual information is essential for ensuring high-quality output, as outlined in: [Power Up Your Software Development Lifecycle with AI](/software/power-up-your-sdlc-with-ai/). 

The **ArchiScribe MCP Server** bridges the gap between your ArchiMate architecture models and your AI tools, making architectural context easily accessible throughout the software development lifecycle.

<img src="/content-software/images/archiscribe.webp" alt="ArchiScribe MCP" class="article-image-primary" style="max-width: 100%; margin-bottom: 1em; float:none; padding:0;" />

<div id="toc" class="table-of-contents"></div>

## Background

If you use ArchiMate to model your software architecture, your models already contain a wealth of information about the high‑level components of your systems and the relationships between them.

This is useful contextual information, especially if there are comprehensive descriptions and properties defined on the elements and relationships. 

The question is: how can you leverage this information in your Software Development LifeCycle (SDLC) and make it available to AI coding assistants and agents?

## How It Works
ArchiScribe is a Model Context Protocol (MCP) Server that provides access to information from the views defined within an ArchiMate model. 

**Setup:**

* Configure ArchiScribe with access to an ArchiMate model file, in **ArchiMate Exchange Format** (an XML‑based interoperability standard).

* Configure your AI coding agents to connect to the MCP server and make requests.

**Available Tools:**

* **SearchViews** – Find views names by keyword.

* **GetViewDetails** – Get the titles, descriptions, properties, and ArchiMate types for all elements and relationships in a view. (It will also infer implicit relationships based on nested elements.)

**Output**:

The information is returned from the MCP Server in markdown format which is easily understood by coding assistants/agents. Large Language Models (LLMs) already understand the concepts of ArchiMate and can therefore reason about the elements and relationships to form a comprehensive understanding of the software architecture defined in a view.

## When To Use It
Use the MCP Server during the SDLC to provide context about the software architecture directly to software engineers using AI coding assistants/agents. The views from the Application Layer are especially useful to provide context about related system components that are under active development. 

### Generate Documentation
Now that the AI has a good understanding of the architecture, it can generate documentation. Here is a prompt that can be used to call the "#archiscribe" MCP server, asking it to generate documentation based on the response from ArchiScribe:

* *"#archiscribe Write a clear, non-technical overview of the architecture in the \[...\] ArchiMate view. Include key components, their roles, and how they interact. Output as a markdown file in the \[...\] folder."*

## Source Code

The source code for *archiscribe-mcp* is available on GitHub:

- [archiscribe-mcp GitHub Repository](https://github.com/dclnbrght/archiscribe-mcp)

<div id="comments" class="comments"></div>