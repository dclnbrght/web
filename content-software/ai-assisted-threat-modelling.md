---
title: AI Assisted Threat Modelling
description: Use an AI agent to assist with threat modelling exercises.
keywords: "AI SDLC, Threat Modelling, STRIDE"
date: 2025-09-28
permalink: "/software/ai-assisted-threat-modelling/"
---

# {{ title }} 

Modern software is built fast, but threats evolve even faster. Threat modelling is an important practice for developing secure software systems, however is can be a time consuming exercise. 

<a href="https://github.com/dclnbrght/ai-assisted-threat-modelling" class="action-button-primary">TL;DR - Jump straight to the ai-assisted-threat-modelling repo</a>

As discussed in the [Power Up Your Software Development Lifecycle with AI](/software/power-up-your-sdlc-with-ai/) article, AI agents can be leveraged throughout the SDLC. This includes providing assistance with comprehensive security and threat analysis. 

Here we will explore how AI agents can accelerate your threat modelling practice, by using carefully crafted prompts, templates, and workflows to help software developers, architects, and security experts to better identify and manage security threats. 

Built on the [STRIDE](https://en.wikipedia.org/wiki/STRIDE_model) methodology, and incorporating best practices and considerations from [OWASP](https://owasp.org/) and [NIST](https://www.nist.gov/), this solution streamlines the threat modelling process, making it accessible, robust, and repeatable.

<img src="/content-software/images/ai-assisted-threat-modelling.webp" alt="AI Assisted Threat Modeling" class="article-image-primary" style="max-width: 100%; margin-bottom: 1em; float:none; padding:0;" />

<div id="toc" class="table-of-contents"></div>

## Understanding the Data Flows

Threat modelling relies heavily on understanding the components of a system, the data flows between them, and where the data flows cross trust boundaries. For an AI agent to assist, this contextual information must be structured and accessible. 

The most efffective approach is to use semantically rich dataflow diagrams to represent systems in a way that AI can accurately reason about.

## The AI Assisted Threat Modelling Workflow
The high-level workflow has the following steps:
- Create a dataflow diagram of your system 
- Run the threat modelling prompt
- Analyse the generated report
- Create work items to mitigate the identified threats

### Diagram Preparation and Input
Start by creating a dataflow diagram of your system using either [Mermaid](https://mermaid.js.org/) or [ArchiMate](https://www.opengroup.org/archimate-forum/archimate-overview). 

If you're not sure how to create a Mermaid flow diagram, you can write a description of the system components and data flows in a text file and use the prompt provided to create a Mermaid diagram.

If you're familiar with ArchiMate you can use the [ArchiScribe MCP Server](https://github.com/dclnbrght/archiscribe-mcp) to fetch data directly from your ArchiMate models.

### Automated Threat Identification
Once the input diagram is ready, instruct your AI agent to run the threat modelling exercise, to identify potential threats across the system's components and data flows. 

This automation reduces manual effort, uncovers non-obvious attack vectors, and ensures a thorough assessment.

### Report Generation and Analysis
The process will generate a standard threat modelling report by default, however a "lite" or "extended" report can also be generated depending on your needs. 

These reports not only identify threats but also suggest mitigations, making them excellent starting points for prioritising and planning the mitigation work.

### Follow-Up Actions
Beyond threat model analysis, AI agents can assist in generating actionable work items in your work management system via MCP integration, further streamlining the remediation workflow. 

This end-to-end approach helps integrate security considerations smoothly into the software development lifecycle.

## Demo Projects

The demo projects include dataflow diagrams of an example system which includes a mobile app, a STS (Secure Token Service), a backend API gateway, service & database, and a 3rd party AI agent service. These components are grouped into three threat boundaries; internet, cloud host and 3rd party host.

This is an ArchiMate diagram representing the dataflows of the example system:

<img src="/content-software/images/threat-model-dataflow-archimate.png" alt="Threat Model Dataflow - Archimate" class="article-image-primary" style="max-width: 100%; margin-bottom: 1em; float:none; padding:0;" />

## Conclusion

AI assisted threat modelling can transform how teams identify and address security risks, shifting from a manual process, to a comprehensive AI augmented practice. 

By leveraging powerful AI analysis, organisations can "shift-left" and build security into their software designs early and effectively.

## Source Code

The *ai-assisted-threat-modelling* project is available on GitHub:

- [ai-assisted-threat-modelling GitHub Repository](https://github.com/dclnbrght/ai-assisted-threat-modelling)

<div id="comments" class="comments"></div>