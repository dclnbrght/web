---
title: "The AI Adoption Gap: Why Regulated Companies Can't Move As Fast As The Hype"
description: Practical guidance for regulated organisations that want to move faster with AI without compromising their compliance posture.
keywords: "AI adoption,AI transformation,regulated companies,GRC,ISO 42001,EU AI Act"
date: 2026-03-07
permalink: "/software/the-ai-adoption-gap-why-regulated-companies-cant-move-as-fast-as-the-hype/"
tags: article
---

# {{ title }} 

There is a gap in the pace of AI adoption between two types of companies.

<img src="/content-software/images/tension-between-ai-adoption-and-grc.webp" alt="The AI Adoption Gap" class="article-image-header" />

On one side, there are companies that can move fast. They spin up AI agent swarms, adopt the latest Model Context Protocol (MCP) servers, let software engineers vibe-code their way to working features, with whatever tools they choose, and ship products. They try things, break things, learn quickly, and iterate. For them, AI transformation is genuinely transformative.

On the other side, there are established companies operating in regulated industries: healthcare, finance, insurance, legal, critical infrastructure etc. They watch the same YouTube videos, listen to the same podcasts, attend the same conferences, and feel the same excitement. But when a software engineer arrives into work on Monday morning ready to spin-up the latest AI coding agent, the conversation that follows with their manager can be disappointing. The eye rolling is mutual. The software engineer thinks management doesn't understand the technology. Management thinks the software engineer doesn't understand the security and compliance constraints. 

Both are partly right.  

This article is for both parties, we’ll explore why this tension exists between AI adoption and Governance, Risk, and Compliance (GRC), why it matters, and how to navigate it without sacrificing your compliance posture or your competitive edge.

<div id="toc" class="table-of-contents"></div>

## What’s Changed

The pace of AI advancement in the last few years has been extraordinary. It isn’t just that AI tools are better; it is that the category of tool has fundamentally changed.

The first wave of AI coding tools were essentially autocomplete on steroids. Useful, but contained. A software engineer accepted or rejected a suggestion. The human was firmly in the loop, reviewing the generated content and making every decision, all relatively low risk.

Agentic AI is a different beast. An AI agent doesn't just suggest the next line of code; it browses the filesystem, reads configuration files, writes to databases, calls external APIs, spins up sub-agents, and takes action autonomously. 

MCP servers extend this further, giving AI agents access to enterprise systems, data sources, and tools. A single software engineer can now orchestrate an agent swarm that touches every layer of your stack simultaneously.

This is genuinely powerful. It is also genuinely complicated if you operate under ISO 27001, SOC 2, HIPAA, or any other compliance framework. These frameworks were designed for deterministic systems built by humans, not for non-deterministic agents that write, modify, and deploy code (semi-)autonomously.

The compliance frameworks haven't adjusted to this new reality. Your certification doesn't come with an asterisk that reads *"except for AI agents"*. All the same controls still apply. The auditors are still coming to audit your GRC program, and the tools your software engineers want to use were possibly not in scope when you went through your last audit cycle.

## Why Regulated Companies Can't Just Move Fast

It’s worth being precise about what the constraints actually are, because vague references to "compliance" aren't helpful to anyone.

**The regulatory landscape is real and expanding.** If your system processes Personally Identifiable Information (PII) using AI: the GDPR applies. If you're operating in the EU and your AI system interacts with people, the EU AI Act imposes obligations depending on how that system is classified. The EU Cyber Resilience Act introduces security requirements for products with digital components, and there is a serious legal argument that AI generated code which has not been properly reviewed is a compliance risk under this framework. The NIS2 Directive introduces stricter incident reporting timelines, supply chain security requirements, and management accountability for cybersecurity failures, all of which become harder to demonstrate when AI agents are making autonomous changes to your systems. These are not theoretical future concerns; they are live regulatory obligations for many organisations today.

**Certification scope is not static.** When you introduce a new tool that processes sensitive data, connects to internal systems, or generates code that goes into production, you are potentially expanding the scope of your ISO 27001 or SOC 2 programme. Every new MCP server, every AI agent with access to your enterprise systems, every cloud-based coding assistant that receives your source code as context: all of these are candidates for inclusion in your next audit. Ignoring them doesn't make them go away; it leaves you open to non-conformities / findings.

**Demonstrating compliance gets harder when you don't write the code.** This is a genuine and underappreciated challenge. Regulatory compliance doesn't disappear because AI wrote the code. When an auditor asks you to demonstrate that your authentication implementation follows your security policy, *"the AI wrote it and it looked fine"* is not a sufficient answer. You need evidence that the output was reviewed against your requirements, that it was tested, and that it meets your documented standards.

**Security is a double-edged sword.** AI coding agents are genuinely good at spotting common vulnerabilities and generating secure patterns. They know about SQL injection, they know about the OWASP Top 10. But they also make mistakes, sometimes subtle ones that a competent reviewer would catch and an inattentive one wouldn't. Just because an AI knows about a class of vulnerability doesn't mean it won't generate vulnerable code under certain conditions. In regulated industries, the consequence of a security flaw isn't just a bad week; it can mean regulatory investigation, data breach notification, and significant reputational damage.

**Supply chain risk is real, and it compounds with AI.** AI coding agents introduce dependencies. They make choices about libraries, frameworks, and integrations that human software engineers would normally deliberate over. The Software Bill of Materials (SBoM) that many regulated industries now require doesn't govern itself just because AI wrote the code. AI agents based on LLMs that have only been trained up to a certain date, often use libraries that are deprecated rather than searching for the latest version. It’s vital that someone verifies the dependencies being introduced, ensuring they are maintained, patched, and free from known vulnerabilities. With AI agents that write and commit code faster than any human, the potential for unreviewed dependency issues becomes a big problem.

## The Software Engineer - Manager Impasse

The Monday morning conversation described earlier tends to go one of two ways, and neither is ideal.

In the first scenario, the software engineer is told "No", with minimal explanation beyond a reference to compliance requirements. They nod, go back to their desk, and quietly find a workaround: their personal laptop, a free-tier account that bypasses corporate controls, or just using the tool and not mentioning it. This is the shadow AI problem, and it’s quite possibly happening in your organisation right now.

In the second scenario, the software engineer makes a compelling enough case that the tool gets approved without proper scrutiny. Someone fills in a vendor assessment form superficially, ticks the boxes, and the tool goes into use. Three months later it surfaces in an audit, and there is no documented risk assessment, no data processing agreement, and no evidence that anyone thought carefully about the risks or what data is flowing where.

Neither outcome serves the organisation well. The software engineer ends up feeling frustrated or unsupported, or the compliance programme is either circumvented or weakened.

The underlying problem is not that regulated companies don't want to adapt or that software engineers are too impatient. It is that most organisations don't have a clear, fast, repeatable process for evaluating AI tools against their compliance requirements. Without that process, every request becomes a one-off negotiation, and one-off negotiations tend to produce inconsistent outcomes.

## How to Navigate It

What follows is practical guidance for regulated organisations that want to move faster with AI without compromising their compliance posture. It’s structured around the decisions that actually need to be made, rather than around specific tools. The goal is to avoid giving a direct “No” to new tool requests, it’s much better to provide a safe alternative with an explanation of why it’s better for the organisation.

### Start With Data Classification

Before evaluating any AI tool, the first question is: what data will be processed and/or stored?

Data classification is a standard control in ISO 27001 and SOC 2. But it deserves particular emphasis with AI tools because the answer is often less obvious than it seems.

An AI coding assistant that receives your source code and product documentation as context is most likely processing sensitive intellectual property. An MCP server that connects to your production database is ingesting whatever data lives there. An AI agent that reads your email to help you draft responses has access to communications that may include personal data or confidential business content.

Get specific about what data is in scope before you evaluate anything else. If the data is classified at a level that prohibits processing by third-party cloud services, that is a constraint that applies regardless of how useful the tool might be. If the data is lower sensitivity, a lighter-touch assessment may be appropriate.

This step also forces a useful conversation between software engineers and their GRC team. Software engineers often don't think about the data their AI coding tools handle or the overhead of onboarding new suppliers because they've never needed to. GRC teams may not understand what data actually flows through AI coding tools because they're unaware of how MCP servers are being used. Bringing both sides to the table to define the data classification tends to produce better outcomes than a late-stage compliance review. A table-top incident response exercise is another great way to bring teams to a shared understanding of the compliance obligations.

### Establish a Standard Assessment Process for AI Tools

Standard assessment processes, as they exist in most regulated organisations, were not designed for AI tools and services. They ask questions about data centre locations, contractual terms, and information security certifications. These questions still matter, but they’re not sufficient to cover AI tools and services.

A thorough assessment of an AI service provider must also establish: what data is sent to their model, is it used for model training, where it is stored and for how long, what sub-processors have access to it, and what happens to data submitted through integrations like MCP servers or APIs. 

MCP servers may seem like simple connectors but they can open up a significant attack surface. For example, a prompt injection attack via an MCP server that instructs an agent to perform thousands of requests and send all data to a remote server. Many MCP servers don’t have RBAC to segregate read tools versus write & execute tools. Write & execute tools should have a full audit trail (who, what, when), and they should have rate-limiting to prevent an AI agent from unintentionally executing a high volume of requests.

The major vendors have published detailed documentation on these questions, and most offer enterprise tiers with stronger data protection commitments than their free consumer tiers.

The goal is to make the assessment process: fast, repeatable, and consistent enough that the software engineer can get an answer in days rather than months. A well designed assessment template, pre-populated with common questions and acceptable answers, can reduce the assessment time dramatically while still gathering the evidence your auditors will want to see.

### Understand the Scope Impact Before You Approve

Every AI tool that: processes personal data, connects to enterprise systems, generates code for or integrates with production systems is a candidate for inclusion in your compliance scope. Depending on the scenario, a more formal [AI Impact Assessment (AIIA)](/software/ai-governance-and-the-journey-to-ISO-42001/#conduct-ai-impact-assessments) may be required. For example; a chatbot that provides assistance to your customers would require an AIIA, because it could potentially respond to some users with bias based on their demographic information.

A key question to ask before approving any AI tool is: if this tool were included in our next ISO 27001 or SOC 2 audit, what additional controls would we need to demonstrate? Sometimes the answer is straightforward: the tool is already covered by existing controls and the additional impact on scope is minimal. Sometimes the answer reveals that it would require significant additional work.

This is not a reason to automatically reject the request. It’s information that helps the business make an informed decision based on Return On Investment (ROI). A tool that requires significant scope expansion might still be worth adopting if the productivity gain justifies the compliance investment. But that is a decision that should be made consciously, not discovered during an audit.

### Implement Compensating Controls While Formal Assessment Is Underway

One of the most useful things a GRC team can do for software engineers is to define a set of compensating controls that allow tools to be used on a provisional or constrained basis while a full assessment is completed.

This is not a loophole; it is standard risk management practice. The controls need to be real and documented, but they can be pragmatic. For example, a software engineer can be permitted to use a new AI coding assistant with the constraint that it only processes code from non-production repositories, that no customer data or credentials are ever included in prompts, and that all generated code goes through an enhanced code review process. These constraints reduce the risk sufficiently while allowing time for a thorough formal assessment to take place.

This approach has another advantage beyond reducing risk: it builds goodwill. Software engineers who are given a pragmatic path to using new tools, rather than given a flat “No”, are much more likely to engage constructively with the compliance process and much less likely to find workarounds.

When a tool is approved for general use, it’s important to communicate to all the relevant teams, or if applicable, the entire company, e.g. included in weekly company updates. Acknowledging and thanking the requestor in those communications is a nice touch that also builds trust.

### Establish Ongoing Monitoring, Not Just Point-in-Time Approval

Approving a tool once is not sufficient. AI products change rapidly. Models are updated, new features and MCP tools are added, data handling practices evolve, and new integrations and connectors become available. A tool that was appropriately scoped and controlled three months ago may look quite different today.

Build a review cadence into your programme. At a minimum, revisit approved AI tools during your annual ISO or SOC 2 review cycle. For high-risk tools with access to sensitive data, a more frequent review is recommended. Subscribe to the security and privacy update channels from your top-tier AI vendors so that significant changes don't catch you by surprise.

### A Note on ISO 42001

If your organisation is considering or has already achieved ISO 42001 certification for your AI Management System, you have a head start on some of these challenges. The standard provides a framework for managing AI systems throughout their lifecycle.

That said, ISO 42001 is not a substitute for the controls above. It provides a management system framework rather than prescriptive technical controls, and it does not resolve the specific challenges of integrating rapidly evolving AI tools into an existing ISO 27001 or SOC 2 scope. Think of it as complementary rather than comprehensive: a useful governance layer, but not the whole answer.

For those who are curious about the ISO 42001 journey specifically, I covered this in more detail here: [AI Governance and the Journey to ISO 42001](/software/ai-governance-and-the-journey-to-ISO-42001).

## The Competitive Reality

It’s an uncomfortable reality that all of this creates a competitive disadvantage for regulated companies. Unregulated companies can move faster with AI adoption, at least for now.

But there are two important counter-arguments worth keeping in mind.

The first is that the gap narrows over time. Compliance frameworks will evolve to accommodate agentic AI and AI vendors will improve their security and data protection offerings. Regulatory guidance will become clearer. The organisations that have built robust AI governance processes now will be better positioned to accelerate adoption as those frameworks mature, rather than scrambling to retrofit compliance onto tools that have been in use for years.

The second is that regulated industries exist for a reason. Healthcare, finance, and similar sectors handle data and make decisions that have serious consequences for real people. The friction in your AI adoption process is, in part, a reflection of the trust that your customers and regulators place in your company. Moving fast and breaking things is not a viable strategy when you might compromise a patient record or a financial transaction.

The goal is not to eliminate the friction. It is to make it proportionate, transparent, and fast enough that your teams can move forward with confidence rather than frustration. 

## Where to Start

If you’re a software engineer frustrated by slow AI tool approvals, the most useful thing you can do is make it easy for your GRC team to say “Yes”. Document what data the tool will access, what you propose to do with it, what compensating controls you're willing to work within, and what the productivity uplift is. A well-prepared request is much faster to assess than a vague one-liner.

If you’re in a GRC or security role feeling overwhelmed by the pace of AI tool requests, the most useful thing you can do is build a repeatable process rather than evaluating each request in an ad hoc manner. A lightweight but consistent assessment template, a clear set of compensating controls, and a defined review timeline will let you say “Yes” more often, and more quickly, without compromising your programme. AI agents can also assist with enhancing your GRC program, especially when reviewing and researching new threats and regulations.

If you are leading an engineering organisation in a regulated industry, the conversation your teams need to have is not "how fast can we move?" but "how do we move faster responsibly?". That is a meaningful distinction. Aim to be a fast follower rather than living on the bleeding edge. The organisations that figure it out will have a significant advantage over those that either move recklessly or not at all.

The tension between AI transformation and GRC is real. But it is navigable and it does not have to constrain innovation. The organisations that navigate it pragmatically will be better placed in the long term than those that chose one side over the other.

<div id="comments" class="comments"></div>