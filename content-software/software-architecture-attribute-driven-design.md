---
title: Software Architecture - Attribute Driven Design
description: A light-weight, structured approach to software design
keywords: "software architecture, attribute driven design, ADD 3.0, ADD 3.1"
date: 2019-03-01
permalink: "software-architecture-attribute-driven-design/"
---

#  Attribute Driven Design in Software Architecture

Attribute Driven Design is a software architecture design process which originates from the <a href="https://www.sei.cmu.edu/" target="_blank">Carnegie Mellon University Software Engineering Institute (SEI)</a>. It has evolved over the years; <a href="https://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=CB5D2D877F1767AB791EF10046D587E6?doi=10.1.1.97.5395&rep=rep1&type=pdf" target="_blank">ADD 1.0</a> was published by Felix Bachmann and Len Bass in 2001, <a href="https://resources.sei.cmu.edu/asset_files/TechnicalReport/2006_005_001_14795.pdf" target="_blank">ADD 2.0</a> was published in 2006 and ADD 3.0 was published in 2016 in the excellent book by Humberto Cervantes and Rick Kazman; <a href="https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=454919" target="_blank">Designing Software Architectures: A Practical Approach</a>. I've used this process for many years and find it incredibly useful.

The process brings structure to your thought process when designing software, it help overcome your own internal bias towards the first solution you thought of and also helps to bring a common understanding across the team. It's light-weight and you only use the parts you need on any given project.

The initial focus on Design Inputs helps to avoid making assumptions and solutioning before fully understanding the problem space. <em>If you jump straight to documenting the solution you are going to implement then you are not designing!</em>

Capturing the <a href="https://en.wikipedia.org/wiki/List_of_system_quality_attributes" target="_blank">quality attributes</a> / <a href="https://en.wikipedia.org/wiki/Non-functional_requirement" target="_blank">non-functional requirements (NFRs)</a> at the start of the process reduces the chance of missing these considerations when the pressure of a deadline is looming. The cross-referencing of the Design Inputs, especially the mapping between the <a href="https://en.wikipedia.org/wiki/List_of_system_quality_attributes" target="_blank">quality attributes</a> and use cases is really helpful. It’s like a mental checklist, prompting you to investigate avenues and to cross reference your thoughts and ideas against the design criteria.

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

### Step 1. Review Design Inputs
All of the Design Inputs must be reviewed (and updated if required) at the start of each Design Iteration.

### Step 2. Establish the iteration goal based on the (prioritised) Design Inputs
The iteration goal is determined based on a number of factors; the size and complexity of the project, the clarity of the requirements etc.

### Step 3. Choose one or more elements / aspects of the system to refine
For small projects which can be covered by a single Design Iteration, all elements of the system are considered together. For larger projects, the first iteration is generally scoped to considering the system design at a high level of abstraction, such as choosing a reference architecture, or choosing the primary technology platform or application framework. Subsequent Design Iterations then focus on more specific areas of the system.

### Step 4. Choose one or more design concepts which satisfy the Design Inputs
At least two options should always be explored. Listing the Pro's and Con's of each helps to highlight the most suitable option. Where appropriate, a Proof-Of-Concept (POC) should be developed to validate the design assumptions, if possible, the output of POC should include quantitative metrics.

### Step 5. Document the design for each concept; sketches / diagrams, data flows, interfaces etc.
This will vary based on the elements being designed. Simple diagrams or (photographs of) white board sketches are often sufficient to describe each concept at an early stage.

### Step 6. Peer review, record design decisions and rationale
Discussion and validation of the design concepts with other architects and the development team, once consensus has been reached on the best option/s, record the decision/s and the rationale for making those decision/s.

### Step 7. Review iteration goal and coverage of Design Inputs
Review how well the Design Inputs have been satisfied, to determine if another Design Iteration is required.

#### _Go to Step 1 if all Design Inputs have not been satisfied, otherwise proceed to the Design Outputs._

## Design Outputs
### Step 8. Document the architecture and communicate to stakeholders
See the Documentation section below.

<br>

## Documentation

All design documentation should be readily available to anyone in the organization. Openness promotes trust and collaboration across teams.

The following documentation is produced during the process:

### Architecture Design Documentation

The Design Inputs and the Design Iterations are captured in the Architecture Design Documentation. This can be a single document or, for larger projects, the Design Inputs and each Design Iteration can be captured in separate linked documents. The primary stakeholders in the creation of Architecture Design documents are architects, technical leads, senior software engineers, and project sponsors.

### Development Specification Documentation

The primary stakeholders for Development Specification documents are the development team/s that will build the software. These documents are optional; however, the main reason to create separate development specifications is to avoid confusion. These documents only include the option/s chosen during the Architecture Design, and the other options are excluded. Where appropriate, more details can be added, i.e., negative test scenarios or additional sequence diagrams, to aid the understanding of the development team. The Development Specification Document must include a link back to the Architecture Design Document for reference.

### Architecture Description Documentation

The Architecture Description documentation, including release documentation, architecture models, etc., must be updated to reflect the changes made as a result of the design and development processes. Content can be copied and pasted from the development specification, but the text must be changed from future tense to present tense to reflect the current state of the system. Specific details about the implementation should also be added, i.e., the location of the code in the source code repository.

## Size Matters

There isn't a "one size fits all" when it comes to performing a software architecture design. Here are some guidelines describing what you should aim for:

- **Small Project**
    - The ADD process may not be required for very small projects.
    - Capture Design Inputs and Decisions in the development team's task management system.
    - Or create a short Development Specification document.
- **Medium Project**
    - Capture Design Inputs, Design Iterations, and Decisions in a single Architecture Design document.
    - Perform one or two design iterations.
- **Large Project**
    - Capture Design Inputs, Design Iterations, and Decisions in multiple Architecture Design documents.
    - Perform two or more design iterations.

## Design Document Template

Ideally, the Design Document is created in a team wiki to promote collaboration. These templates in HTML and MS Word formats will give you a starting point:

- [software-architecture-design-template.htm](/content-software/downloads/software-architecture-design-template.htm)
- [Software-Architecture-Design-Template.docx](/content-software/downloads/Software-Architecture-Design-Template.docx)

## Further Reading

- [Attribute Driven Design with Threat Modelling](/software-architecture-attribute-driven-design-threat-modelling)

<div id="comments" class="comments"></div>