---
title: Software Architecture - Attribute Driven Design
description: A light-weight, structured approach to software design
keywords: "software architecture, attribute driven design, ADD 3.0, ADD 3.1"
author: Declan Bright
date: 2019-03-01
permalink: "software-architecture-attribute-driven-design/"
---

#  Attribute Driven Design in Software Architecture

Attribute Driven Design is a software architecture design process which originates from the <a href="https://www.sei.cmu.edu/" target="_blank">Carnegie Mellon University Software Engineering Institute (SEI)</a>. It has evolved over the years; <a href="https://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=CB5D2D877F1767AB791EF10046D587E6?doi=10.1.1.97.5395&rep=rep1&type=pdf" target="_blank">ADD 1.0</a> was published by Felix Bachmann and Len Bass in 2001, <a href="https://resources.sei.cmu.edu/asset_files/TechnicalReport/2006_005_001_14795.pdf" target="_blank">ADD 2.0</a> was published in 2006 and ADD 3.0 was published in 2016 in the excellent book by Humberto Cervantes and Rick Kazman; <a href="https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=454919" target="_blank">Designing Software Architectures: A Practical Approach</a>. I've used this process for many years and find it incredibly useful.

The process brings structure to your thought process when designing software and also helps to bring a common understanding across the team. It's light-weight and you only use the parts you need on any given project.

The initial focus on Design Inputs helps to avoid making assumptions and solutioning before fully understanding the problem space. Capturing the <a href="https://en.wikipedia.org/wiki/List_of_system_quality_attributes" target="_blank">quality attributes</a> / <a href="https://en.wikipedia.org/wiki/Non-functional_requirement" target="_blank">non-functional requirements (NFRs)</a> reduces the chance of missing these considerations when the pressure of a deadline is looming. The cross-referencing of the Design Inputs, especially the mapping between the <a href="https://en.wikipedia.org/wiki/List_of_system_quality_attributes" target="_blank">quality attributes</a> and use cases is really helpful. It’s like a mental checklist, prompting you to investigate avenues and to cross reference your thoughts and ideas against the design criteria.

After the Design Inputs have been captured, the process defines an iterative set of steps called a Design Iteration. The duration of each Design Iteration will vary depending on the project. Where appropriate, the Design Iterations can follow an agile sprint cycle, where a software architect (or senior engineer) works on the next phase of the design in the sprint ahead of the development team. In some cases, Design Iterations will span longer periods of time, especially if the architect is working across multiple design projects simultaneously while waiting for clarity on functional requirements.

<div id="toc" class="table-of-contents"></div>

## ADD 3.1

I have no affiliation with the <a href="https://www.sei.cmu.edu/" target="_blank">SEI</a> and therefore no authority to declare a new version of the process however I have made some changes to ADD 3.0 to more closely reflect the way I use the process

- added Current State Architecture to the design inputs
- altered the description of Step 6 to include; “peer review” and "record design decisions"

## Process Flow

This is the process modelled using ArchiMate:
<img alt="ADD 3.1" src="{{ '/content-software/images/attribute-driven-design-3.1.png' | url }}" data-full-img="{{ '/content-software/images/attribute-driven-design-3.1.png' | url }}" class="article-image-primary" style="width: 100%;" />

## Design Inputs
### Step 0. Capture Design Inputs
#### Design Objectives

The design objectives describe the business and/or technical rationale and the scope of the design project. Links to functional requirement documentation or any other artefacts which provide background information should be included. The project sponsors and other key stakeholders can also be listed.

#### Use Cases

A list of the architecturally significant use cases and requirements, both technical and functional, also known as <a href="https://en.wikipedia.org/wiki/Architecturally_significant_requirements" target="_blank">Architecturally Significant Requirements (ASRs)</a>, i.e. "the system must support a minimum of 10,000 concurrent users", "each transaction must be processed in less than 2 seconds".

#### Quality Attribute Scenarios

A list of the <a href="https://en.wikipedia.org/wiki/List_of_system_quality_attributes">quality attributes</a>&nbsp;/ <a href="https://en.wikipedia.org/wiki/Non-functional_requirement" target="_blank">non-functional requirements (NFRs)</a> relevant to the design project, with scenarios and how they relate to the Use Cases, i.e. Security - "the system must implement role based access controls". Refer to <a href="https://iso25000.com/en/iso-25000-standards/iso-25010" target="_blank">ISO/IEC 25010</a> for more information on software quality evaluation.

#### Constraints

A list of limitations or restrictions on the design, i.e. "the design must cater for both on-premise and cloud based deployments".

#### Concerns

Other concerns or external drivers, i.e. "the development team allocated to the project have limited experience with this part of the system".

#### Current State Architecture

If this design is related to existing system/s, provide a description or references to any documentation describing the current state architecture.

### Design Input Prioritisation

As an optional activity, Design Inputs can be prioritised in consultation with the project sponsor/s and based on the architectural significance of each design input. This is a useful exercise in larger projects where the design activities span across multiple Design Iterations and the sequence of development work needs to be agreed.

## Design Iterations



<script>
    window.onload = () => { 
        generateTOC(document.getElementById('toc'));
    }
</script>