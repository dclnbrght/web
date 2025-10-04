# Software Architecture Design Template

*{{ Based on [ADD 3.0 (Attribute Driven Design)](https://www.sei.cmu.edu/documents/2545/2018_010_001_513930.pdf) software architecture design process from the SEI. **Replace text in curly brackets**.}}*

## Design Objective

{{ Describe the purpose and scope of the project, including links to functional requirement documents or any other artifacts which provide background information. }}

**{ TABLE OF CONTENTS }**

---

## Definitions & Acronyms

- **{term}** - {description}

---

## Design Inputs

### Use Cases

The architecturally significant technical & functional, use cases & requirements:

| Id | Use Case | Notes |
|----|----------|-------|
| UC-10 | {{ i.e. a downstream system can request X from Y }} | |

### Quality Attribute Scenarios

The [quality attributes](https://en.wikipedia.org/wiki/List_of_system_quality_attributes) / [non-functional requirements (NFRs)](https://en.wikipedia.org/wiki/Non-functional_requirement) relevant to this design and how they relate to the use cases listed above:

| Id | Quality Attribute | Scenario | Associated Use Case Ids |
|----|-------------------|----------|-------------------------|
| QA-10 | {{ i.e. Security }} | {{ i.e. all requests must be authorised }} | UC-10 |

### Constraints

Limitations or restrictions on this design:

| Id | Constraint | Notes |
|----|------------|-------|
| CON-10 | {{ i.e. Must be compatible with X }} | |

### Architectural Concerns

Other concerns, external drivers etc

| Id | Concern | Notes |
|----|---------|-------|
| CRN-10 | {{ i.e. Limited developer resources available }} | |

### Current State Architecture

{{ description / diagrams / links where applicable }}

---

## Design Iterations

### 1. {{ Iteration Title }}

{{ Description of the problem tackled in this iteration, multiple iteration sections can be added here as required or created as separate documents }}

#### Decision & Rationale

**{{ DATE }} | {{ OPTION ID }}** - {{ The rational for making the decision }}

#### Option 1.1 - {{ Option Title }}

{{ Detailed description of the option explored; patterns/data flows/frameworks etc. Use component/class/sequence diagrams where appropriate }}

#### Option 1.2 - {{ Option Title }}

{{ Detailed description of the option explored; patterns/data flows/frameworks etc. Use component/class/sequence diagrams where appropriate }}

#### Option Comparison

| Id | Pros | Cons | Notes |
|----|------|------|-------|
| OPT-1.1 | <ul><li>...</li></ul> | <ul><li>...</li></ul> | |
| OPT-1.2 | <ul><li>...</li></ul> | <ul><li>...</li></ul> | |

---

### 2. {{ Iteration Title }}

{{ Design Iteration template which can be used when selecting a technology, component, service or framework as part of a solution design. }}

#### Decision & Rationale

**{{ DATE }} | {{ OPTION ID }}** - {{ The rational for making the decision }}

#### Option Comparison

{{ Matrix of the options being evaluted, based on their capabilities or characteristics. }}

| Capability | {{ i.e. Technology A }} | {{ i.e. Technology B }} | {{ i.e. Technology C }} | {{ i.e. Technology ... }} |
|------------|-------------------------|-------------------------|-------------------------|---------------------------|
| {{ i.e. Interface Type }} | | {{ i.e. RESTful API }} | {{ i.e. SDK }} | |
| {{ i.e. Licensing Model }} | | {{ i.e. Commercial }} | | {{ i.e. MIT }} |
| {{ i.e. Documentation }} | | | | {{ i.e. Comprehensive on-line docs }} |

---

## Resources

Links to relevant material:

- ...
