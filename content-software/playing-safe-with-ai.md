---
title: Playing Safe With AI
description: Practical guidance for using AI safely
keywords: "AI Safety, AI Governance, Data Privacy"
date: 2025-11-22
permalink: "/software/playing-safe-with-ai/"
---

# {{ title }}

Everything related to generative AI is evolving incredibly fast. AI chatbots, tools, assistants, services and agents are becoming more capable every day. With all this buzz and excitement it's easy to lean to one side of the convenience versus safety trade-off. 

This rapidly expanding space creates many opportunities for the bad guys to exploit weaknesses in security and data privacy. This could affect your personal data, your finances, or your company's data. 

Being aware of what could go wrong is your best defense. In this article, we'll go through the most common risks, with recommendations to help you play safe with AI.

<img src="/content-software/images/ai-safety.webp" alt="AI Safety" class="article-image-primary" style="max-width: 100%; margin-bottom: 1em; float:none; padding:0;" />

<div id="toc" class="table-of-contents"></div>

## Those Terms & Conditions Matter

Most generative AI service providers offer different plans: free versions with limited capability and paid pro/business/enterprise tiers with advanced features. While paid services typically include robust data protection measures, free services often come with a hidden cost. Companies offering free AI services need something in return, and their terms of service often state they may use *your* data to improve their AI models.

Consider this scenario: you use a free AI service to create a product roadmap for your management team. If the service provider trains their next AI model on that information, your competitors could gain insight into your business strategy the next time they use that service for competitor analysis. 

Improper usage of AI services can also lead to violations of data privacy regulations like GDPR, HIPAA, and data residency laws.

**Minimise the Risk**

* Never enter personal data or sensitive company information (including intellectual property) into free AI services. Either subscribe to a paid service with data protection guarantees, or fully anonymise and generalise the information before using free services.  
* Organisations must establish and publish clear AI usage policies, including a list of approved AI services and guidance for safe usage. Backup these policies with staff training programs and technical controls such as Data Loss Prevention (DLP) tools to detect and block unauthorised AI usage.

## Prompt Injection

Prompt injection is arguably the most serious and fundamental vulnerability facing AI systems today, affecting every application category from chatbots to agentic browsers. These attacks exploit a core weakness: Large Language Models (LLMs) struggle to distinguish between legitimate prompts from trusted users and malicious instructions hidden in untrusted external content. 

Since LLMs process both your prompts and external content as plain text in the same context window, it's quite easy for attackers to inject malicious instructions through websites, emails, PDFs, APIs, MCP server responses, or even images.

**How Attackers Hide Instructions**

Attackers use various subtle methods to conceal malicious instructions:

* Hidden text in web pages or emails using small fonts, white text on white backgrounds, or CSS tricks.  
* Steganographic techniques in images using subtle color variations imperceptible to the human eye but readable by AI through Optical Character Recognition (OCR).  
* Malicious data embedded in image metadata or emoji encodings.  
* Malformed URLs that bypass validation when pasted into an AI-enabled browser's omnibox (combined address and search bar), causing the browser to interpret them as natural language prompts instead of web addresses.

When an AI agent processes seemingly harmless content containing hidden instructions, it can execute dangerous actions, such as running commands with *your* permissions or leaking *your* private data.

**Minimise the Risk**

* Stay vigilant, as there is currently no foolproof defense against prompt injection. Be careful what you copy/paste into AI services, and carefully control the permissions you grant to AI agents. Never allow autonomous action on high-risk tasks such as financial transactions.  
* Implement technical security controls downstream of LLM output rather than relying solely on AI model guardrails. Monitor and validate the actions AI agents plan to take, maintain comprehensive audit trails, and deploy LLM Firewalls or moderation models that filter suspicious or harmful inputs and outputs.

## Using MCP Servers

The Model Context Protocol (MCP) is a standardised framework for connecting Large Language Models (LLMs) to other systems and data sources. Often described as the "USB-C for AI applications," it allows AI agents to access information and execute commands on your behalf. MCP has been rapidly adopted since its introduction, but it was designed primarily for functionality, not robust security, creating numerous security blind spots.

When an AI agent uses an MCP server, it acts on *your* behalf with all of *your* permissions. If an AI misinterprets a request, it might execute MCP tools that cause unintended consequences. For example, a request to remove old database records could result in deleting all data.

MCP server responses can also contain malicious instructions (see [Prompt Injection](#prompt-injection) above).

It's incredibly tempting to connect everything together without properly considering the security and data privacy risks, unintentionally giving AI agents excessive agency. It's like handing a bored kid your phone to play a game, next thing you know, they're deleting your photos and messaging your boss\!

**Key Risks**

MCP servers are deployed either locally on your laptop or remotely on a server. Both configurations present significant risks:

* Users often download and install MCP servers from public repositories without verification, creating supply chain risks. Compromised servers (like the vulnerable mcp-remote npm package, CVE-2025-6514) execute with user permissions, potentially stealing data or credentials.  
* Locally installed MCP servers are frequently misconfigured to bind to 0.0.0.0 (all network interfaces), making them accessible to anyone on the same network, whether at a coffee shop or on office WiFi, who could then access data or execute commands.  
* MCP servers often handle credentials insecurely, sometimes storing sensitive tokens for connected systems (Gmail, GitHub, enterprise systems) in plaintext configuration files.  
* Command injection occurs when attacker-controlled input includes system commands without proper sanitisation, enabling malicious commands that delete files or download and execute malware.  
* Tool poisoning involves malicious instructions embedded in MCP tool descriptions. The AI reads and follows these hidden instructions, which may not be obvious to the user.

**Minimise the Risk**

IT and software engineering teams must implement stringent security practices when deploying MCP servers:

* Develop your own MCP servers where possible to maintain full control over the allowed operations and behaviours.  
* Never bind MCP servers to 0.0.0.0; use localhost (127.0.0.1) for local-only access and apply firewall rules with network segmentation.  
* Never install unverified MCP servers without thorough review. Run approved servers in isolated environments (Docker containers) following the principle of least privilege.  
* Sanitise all user input before passing it to system commands to prevent command injection attacks.  
* Use secure credential management solutions and never store credentials in plaintext.  
* Ensure servers use robust authentication such as OAuth with PKCE or narrowly scoped, short-lived Personal Access Tokens.

## Agentic Frameworks

Agentic systems leverage LLMs and orchestration frameworks to autonomously or semi-autonomously perform tasks, make decisions, and interact with external systems. They combine multiple components including language models, tools, orchestration layers, access protocols (MCP), and agent-to-agent (A2A) communication.

**The Autonomy Challenge**

The more autonomous the agent, the higher the potential safety risk. This creates a familiar trade-off between convenience and security, introducing specific risks and vulnerabilities:

* AI agents can easily receive excessive permissions and misinterpret goals, leading to unintended actions. For example, an agent asked to "advise on how to run projects more efficiently" could loop through all projects and update the status of every task to "Complete."
* Attackers can poison an agent's memory (such as vector databases), causing it to store false information, bypass security checks, or make systematically flawed decisions.  
* Autonomous agents can execute fully automated security attack campaigns using sophisticated instructions which evade guardrails.

**Minimise the Risk**

* Implement Human-in-the-Loop (HITL) controls requiring human approval for high-risk actions or any operations the agent hasn't performed before. Strong governance and oversight are essential to prevent unintended or harmful decisions.  
* Design robust security into the entire agent architecture, including authentication, authorisation, and rate-limiting controls. Deploy comprehensive monitoring and auditing to detect anomalies like task replay, infinite delegation, or hallucination loops.  
* Secure agent memory by validating every update and isolating memory by session or user identity to prevent cross-contamination and poisoning attacks.

## AI Web Browsers

AI-enabled web browsers and browser extensions are of particular concern. They enable agentic browsing, allowing the AI to navigate websites, fill forms, click buttons, and complete multi-step tasks on your behalf. These tools create a wide attack surface because they get unprecedented access to your digital life, including login credentials, browsing history, and cookies.

**Key Risks**

* Many browser extensions request excessive permissions ("Read and modify ALL web content on ALL websites") or are outright malware. AI Sidebar Spoofing is when an extension renders a fake AI sidebar that provides malicious advice, such as recommending the execution of dangerous commands.
* AI browsers become high-value targets because they access your credentials and track everything you type, browse, search, and potentially leak access to years of browsing history and payment details.  
* The AI's ability to act independently can lead to unintended consequences, such as unauthorised purchases or document modifications, particularly when tricked by malicious websites or prompt injection attacks (including omnibox attacks where malformed URLs bypass validation). See the [Prompt Injection](#prompt-injection) section above.

**Minimise the Risk**

* Use separate web browsers for sensitive activities (banking, healthcare, confidential work) and general AI-assisted browsing. Stay vigilant when AI acts on your behalf.  
* Research the reputation of the developers and review the requested permissions before installing any AI browser or extension. Be extremely cautious of extensions requesting broad access. Organisations must approve specific AI browsers through clear policies.  
* Wait before granting broad control to these early-stage tools, especially for high-risk activities.

## Conclusion

AI is transforming how we work and play. The goal is not to discourage the use of AI, but to harness its benefits while minimising the risks. By reviewing the critical areas of AI security and data privacy, two key themes emerge for building safe AI practices:

* **People and Process:** Strong AI safety requires both awareness and governance. Organisations must provide Responsible AI Awareness training, establish clear usage policies, approve enterprise-grade tools, and foster a security-conscious culture. Since autonomous agents create new attack surfaces and prompt injection remains unsolved, user vigilance and segmentation are critical defenses. AI safety and security must be everyone's responsibility.  
* **Technology and Controls:** New AI infrastructure creates new risks requiring technical safeguards. Essential controls include robust authentication, authorisation, comprehensive monitoring, sandboxing and DLP tools. These technical measures work alongside human oversight to create defense-in-depth protection.

**Risk Matrix**  
Here is simple way to think about the risks when using AI:

* **Low Risk:** brainstorming, creative writing (non-sensitive), checking grammar  
* **Medium Risk:** coding for personal projects, code review, data analysis (with anonymised data), meeting transcription   
* **High Risk:** AI agents with enterprise system or database access, production code generation, autonomous financial transactions, automated client email responses, AI-driven system configuration & deployment

Finally, it’s important to stay informed as the AI landscape is continuously evolving.

## Further Reading

* [https://genai.owasp.org/](https://genai.owasp.org/)

<div id="comments" class="comments"></div>