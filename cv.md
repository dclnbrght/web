---
title: About
description: Declan Bright - Chief Technology and AI Officer based in Dublin, Ireland working at the intersection of technology strategy, enterprise software and GRC. 
keywords: "Declan Bright,CV,Curriculum Vitae,Resume,CTO,Chief Technology Officer,Chief Software Architect,AI Officer,ArchiMate,GRC,ISO 27001,ISO 27701,ISO 42001,HIPAA,IASA,ICS,SAIN,Dublin"
date: 2026-06-24
pagination:
  data: paths
  size: 1
  alias: path
paths:
  - cv
  - about
permalink: /{{ path }}/
---

<style>
    .cv-intro {
        margin-bottom: 2em;
    }
    .cv-capability {
        line-height: 1.6;
        padding: 0 0 1em 0;
        margin: 0;
    }
    .cv-capability strong {
        display: block;
        margin-bottom: 0.2em;
    }
    .cv-capability-last {
        padding: 0;
    }
    .cv-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        margin: 0 0 1.8em 0;
    }
    .cv-tag {
        font-size: 80%;
        letter-spacing: 0.04em;
        color: var(--text-color);
        background-color: var(--tag-bg);
        padding: 0.3em 0.75em;
        border: solid 1px var(--border-color);
        border-radius: 2em;
    }
</style>

# {{title}}

<p class="cv-intro">
    I'm a Chief Technology and AI Officer based in Dublin, Ireland, working at the intersection of technology strategy, enterprise software and GRC. I have been working with organisations in regulated industries for over <span id="years-experience">27</span> years, building systems that work reliably, securely and at scale. I believe good technology leadership is about clarity of thinking as much as technical depth, and that AI transformation needs intentional change management.
</p>

<h2 class="section-label">What I do</h2>

<p class="cv-capability">
    <strong>Technology Strategy &amp; Roadmap</strong>
    I lead the development and execution of technology strategy, working across the business to align engineering objectives with commercial outcomes to deliver innovative products for our customers.
</p>
<p class="cv-capability">
    <strong>AI Leadership &amp; Governance</strong>
    I drive AI adoption from strategy through to implementation, owning the AI-SDLC, the AI Management System (AIMS) and maintaining ISO&nbsp;42001 certification, building AI capability that is sustainable and auditable.
</p>
<p class="cv-capability">
    <strong>Software Engineering &amp; IT Leadership</strong>
    I lead software architecture, software engineering, IT operations and information security teams.
</p>
<p class="cv-capability">
    <strong>Security &amp; Data Privacy</strong>
    I am the business owner of the Information Security Management System (ISMS) and Privacy Information Management System (PIMS), maintaining ISO&nbsp;27001, ISO&nbsp;27701 and HIPAA compliance across multiple global jurisdictions.
</p>
<p class="cv-capability">
    <strong>Project Sponsorship &amp; Delivery</strong>
    I sponsor major programmes including system modernisation, platform re-architecture and AI transformation, keeping business value, timeline and risk in balance throughout delivery.
</p>
<p class="cv-capability">
    <strong>Stakeholder Communication</strong>
    I present technology strategy and system architecture to internal, external, technical and non-technical stakeholders, adapting framing and depth to the audience.
</p>
<p class="cv-capability cv-capability-last">
    <strong>Technical Sales Support</strong>
    I contribute to commercial engagements, RFP responses and customer due diligence, translating technical capability into business confidence.
</p>

<h2 class="section-label">Industries</h2>

<div class="cv-tags">
    <span class="cv-tag">Healthcare</span>
    <span class="cv-tag">Aviation</span>
    <span class="cv-tag">Financial Services</span>
    <span class="cv-tag">Telecommunications</span>
</div>

<h2 class="section-label">Governance, Risk &amp; Compliance</h2>

<div class="cv-tags">
    <span class="cv-tag">ISO 27001: Information Security</span>
    <span class="cv-tag">ISO 27701: Data Privacy</span>
    <span class="cv-tag">ISO 42001: AI</span>
    <span class="cv-tag">HIPAA</span>
</div>

<h2 class="section-label">Industry Groups</h2>

<div class="cv-tags">
    <span class="cv-tag">Irish Computer Society</span>
    <span class="cv-tag">Strategic AI Network</span>
</div>

<p></p>

<script>
    const yrs = document.getElementById("years-experience");
    if (yrs) yrs.innerHTML = new Date().getFullYear() - 1999;
</script>