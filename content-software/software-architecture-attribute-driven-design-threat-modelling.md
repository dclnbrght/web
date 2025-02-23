---
title: Attribute Driven Design with Threat Modelling
description: Aligning threat modelling with the software design process.
keywords: "software architecture, attribute driven design, ADD 3.0, ADD 3.1, threat modelling, STRIDE"
author: Declan Bright
date: 2019-08-25
permalink: "software-architecture-attribute-driven-design-threat-modelling/"
---

#  {{ title}}

<img src="/content-software/images/threat-modelling.png" alt="Threat Modelling" class="article-image-primary" />

This article expands on the topic of <a href="/software-architecture-attribute-driven-design">Attribute Driven Design in Software Architecture</a> to include <a href="https://en.wikipedia.org/wiki/Threat_model" target="_blank">threat modelling</a> as a design activity.

<div id="toc" class="table-of-contents"></div>

## Threat Modelling

[Threat modelling](https://en.wikipedia.org/wiki/Threat_model) is the proactive process of identifying potential threats to a software system. Once identified, countermeasures are then defined to prevent or mitigate the threats.

Performing threat modelling early in the software development life-cycle, i.e. as part of the initial design activities, can prevent the need for costly refactoring work later on. However, threat modelling is not a singular task, the models should evolve in an iterative manner throughout the life-cycle of the software.

## STRIDE

[STRIDE](https://en.wikipedia.org/wiki/STRIDE_(security)) is one of several approaches to threat modelling, it's an acronym for the common threat categories: **S**poofing, **T**ampering, **R**epudiation, **I**nformation disclosure, **D**enial of service & **E**levation of privilege.

Each of these threat categories align with one or more [quality attributes](https://en.wikipedia.org/wiki/List_of_system_quality_attributes), therefore this approach overlaps nicely with the [Attribute Driven Design](/software-architecture-attribute-driven-design) process as it also focuses on [quality attributes](https://en.wikipedia.org/wiki/List_of_system_quality_attributes).

The associated [quality attributes](https://en.wikipedia.org/wiki/List_of_system_quality_attributes) are listed for each threat category below:

    <h3>Spoofing</h3>
    <p>A <a href="https://en.wikipedia.org/wiki/Spoofing_attack" target="_blank">spoofing attack</a> is where a person or program successfully masquerades as another.</p>
    <dl class="definition-list">
        <dt>Quality Attribute/s:</dt>
        <dd>Securability (Authenticity/Authentication)</dd>
        <dt>Remediations:</dt>
        <dd>encryption, strong password policy, session management, authentication token lifetime, multi-factor authentication, authorisation policy</dd>
    </dl>
    <br/>
    
    <h3>Tampering</h3>
    <p>Tampering is where an attacker maliciously modifies; data in transit, data at rest or data in process.</p>
    <dl class="definition-list">
        <dt>Quality Attribute/s:</dt>
        <dd>Integrity</dd>
        <dt>Remediations:</dt>
        <dd>validation/scrubbing of users' input, security scans with static code analysis and composition analysis tools (scanning 3rd party dependencies) to identify known security vulnerabilities</dd>
    </dl>
    <br/>
    
    <h3>Repudiation</h3>
    <p>Repudiation is where there is no proof that an attacker did something they shouldn't have done.</p>
    <dl class="definition-list">
        <dt>Quality Attribute/s:</dt>
        <dd>Auditability</dd>
        <dt>Remediations:</dt>
        <dd>comprehensive logging and auditing with write-only access from the system creating the audit records</dd>
    </dl>
    <br/>
    
    <h3>Information disclosure</h3>
    <p>Information disclosure is where an attacker gains access to (and/or extracts) data they shouldn't have access to, also known as a data breach.</p>
    <dl class="definition-list">
        <dt>Quality Attribute/s:</dt>
        <dd>Securability (Confidentiality)</dd>
        <dt>Remediations:</dt>
        <dd>data encryption (HTTPS/TLS), only expose the necessary services/data stores/files to users, role-based access controls (RBAC), data masking, exclude business data and <a href="https://en.wikipedia.org/wiki/Personal_data" target="_blank">PII</a>/<a href="https://en.wikipedia.org/wiki/Protected_health_information" target="_blank">PHI</a> from logs, data leak/loss protection (DLP)</dd>
    </dl>
    <br/>
    
    <h3>Denial of Service</h3>
    <p><a href="https://en.wikipedia.org/wiki/Denial-of-service_attack" target="_blank">Denial of Service (DoS)</a> is where an attacker performs activities to prevent legitimate users from utilising the system, i.e. submits superfluous requests to; consume available resources (CPU/memory/connections), fill up storage/disk space etc.</p>
    <dl class="definition-list">
        <dt>Quality Attribute/s:</dt>
        <dd>Availability, Reliability, Resilience &amp; Recoverability</dd>
        <dt>Remediations:</dt>
        <dd>monitoring/alerting, log rotation &amp; separation, auto-scaling limits, network rate-limiting, firewalls, intrusion prevention/detection systems</dd>
    </dl>
    <p>
        The major cloud vendors provide solutions to mitigate DoS attacks: <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-best-practices-ddos-resiliency/aws-best-practices-ddos-resiliency.html" target="_blank">AWS</a>, <a href="https://azure.microsoft.com/en-us/services/ddos-protection/" target="_blank">Azure</a>, <a href="https://cloud.google.com/armor/" target="_blank">GCS</a>
    </p>
    <br/>
    
    <h3>Elevation of Privilege</h3>
    <p>Elevation of privilege is where an attacker manipulates the system to gain a higher level of access than intended.</p>
    <dl class="definition-list">
        <dt>Quality Attribute/s:</dt>
        <dd>Securability (Authorisation)</dd>
        <dt>Remediations:</dt>
        <dd>role-based access controls (RBAC), apply the <a href="https://en.wikipedia.org/wiki/Principle_of_least_privilege" target="_blank">principle of least privilege</a></dd>
    </dl>
    <br/>

## Tooling for Threat Modeling

Threats generally follow data therefore it's quite common to use data flow diagrams when modelling a system for threats.

The [Microsoft Threat Modeling Tool](https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling) is a useful tool for visually modelling the; components, data flows and security boundaries of a system. Once the data flows have been modelled, this tool applies a set of rules to automatically generate a list of threats, where each threat is assigned to one of the STRIDE threat categories. Custom rules can also be configured.

## Performing Threat Modelling as a Design Activity

The threat models should be evaluated during each design iteration of the [Attribute Driven Design](/software-architecture-attribute-driven-design) process and updated where appropriate. Changes to the threat model will most likely generate new potential threats. As you work through the mitigation for each threat you can ensure that it is covered by the [quality attribute scenarios](/software-architecture-attribute-driven-design#quality-attribute-scenarios) and update the system design if required.

## Conclusion

By performing threat modelling, you examine a software system from a security perspective, using a structured and proven approach. Practicing it as an ongoing design activity, during each iteration of the [Attribute Driven Design](/software-architecture-attribute-driven-design) process, ensures that security is considered early in the software development life-cycle, and will help to keep your system safe and secure as it evolves.

## Further Reading

- [Attribute Driven Design in Software Architecture](/software-architecture-attribute-driven-design)
- [Microsoft Security Development Lifecycle](https://www.microsoft.com/en-us/securityengineering/sdl/)


<div id="comments" class="comments"></div>