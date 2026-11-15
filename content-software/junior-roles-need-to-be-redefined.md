---
title: Junior Roles Need To Be Redefined. So, How Should We Do That?
description: Expectations of new hires are changing. Employers in AI-exposed occupations are asking junior candidates for judgement, oversight and communication skills that were previously expected after several years in the job. 
keywords: "entry-level jobs,seniorisation,diamond-shaped organisation"
date: 2026-11-13
updated: 2026-11-15
permalink: "/ai/junior-roles-need-to-be-redefined/"
tags: article
---

# {{ title }}

Entry-level jobs are not disappearing as quickly as some headlines suggest. However, the expectations of new hires are changing. Employers in AI-exposed occupations are asking junior candidates for judgement, oversight and communication skills that were previously expected after several years in the job. This is increasingly being called “*seniorisation*”.

<img src="/content-software/images/junior-roles-need-to-be-redefined.webp" alt="Junior Roles Need To Be Redefined" class="article-image-header" />

The good news is that the jobs still exist, and the work sounds more interesting. The challenge is that the skills these roles now demand used to be learned by doing routine work, but that work is increasingly done by AI agents. Raising the bar without defining a way to reach it makes it difficult for young people to start their careers.

Here, we’ll look at what the data says, why raising the bar is not enough on its own, and what a deliberately designed junior role could look like. I focus on software engineering, but most of it applies to other knowledge work. This is the employer-side companion to the [Workplace Readiness Needs to Shift-Left](/software/workplace-readiness-needs-to-shift-left/) article, which looked at what schools and universities should do.

<div id="toc" class="table-of-contents"></div>

## What the Data Says (and Doesn’t)

[PwC’s 2026 AI Jobs Barometer](https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html) analysed 2.4 million entry-level job ads in the US. The entry-level roles most exposed to AI were seven times more likely to require traditionally senior skills such as judgement and leadership. Those roles have grown 35% since 2019, while other entry-level roles shrank by 10%. In the most exposed occupations, senior-level skills such as mentoring and process management made up 52% of the new skills appearing in junior job ads, compared with 7% in the least exposed.

The picture for overall junior hiring is less clear. [IDA Ireland’s latest Labour Market Pulse](https://www.irishtimes.com/business/2026/10/14/entry-level-hiring-in-ai-augmented-sectors-drops-by-16/) reported that entry-level hiring in AI-augmented occupations fell 16.2% year on year in the second quarter of 2026, against a 10.8% fall across those occupations overall. Software engineering and data analysis saw a sharper pullback in junior recruitment, but the report found no clear evidence that the slowdown is concentrated in AI-exposed jobs.

Nobody can say yet how much of the junior hiring slowdown is caused by AI. What the sources do agree on is that the requirements of entry-level jobs are changing.

Employers are responding in different ways, though more are planning to cut junior roles than to grow them. In a global [Oliver Wyman survey of CEOs](https://fortune.com/2026/05/16/ai-job-market-leverage-older-workers-entry-level-positions/), more than 40% planned to cut junior roles over the next one to two years, while only 17% planned to make them a bigger part of the mix. Consultant [Ravin Jesuthasan](https://www.ravinjesuthasan.com/) describes the logic as employers wanting “someone who’s actually done this before”, with the experience and critical thinking that brings.

IBM appears to be an outlier. It said it will [triple its US entry-level hiring in 2026](https://www.techspot.com/news/111343-ibm-triple-entry-level-hiring-roles-told-ai.html), including software engineering roles with more focus on customer engagement and oversight of AI rather than routine coding. IBM’s chief HR officer argued that the companies best placed three to five years from now will be the ones that kept hiring juniors, and warned that cutting now risks a shortage of mid-level people in the future.

Some are changing the shape of the organisation. In a traditional pyramid, a wide base of recent hires does the routine work. As AI agents take over that work, some companies are narrowing the base and repurposing the middle tier to train, oversee and manage the agents. PwC calls the result a [diamond-shaped organisation](https://www.pwc.com/us/en/tech-effect/ai-analytics/agentic-ai-workforce-redesign.html): a small leadership team at the top, a strong middle layer and a narrow base of new talent. PwC’s advice is that the diamond should be a deliberate choice rather than a default, because shrinking the base can limit the apprenticeship that produces future senior people. For knowledge-intensive firms, PwC suggests an hourglass, which keeps a strong early-career base, can be a better choice, and says it is building one in-house. Either way, each junior role that remains has to do more to develop future senior people.

The World Economic Forum and PwC reach a similar conclusion in their [joint report on entry-level work](https://www.pwc.com/gx/en/services/workforce/ai-future-entry-level-work.html); employers should redesign these roles rather than eliminate them. The report also admits something important, which is that clear models for how to design entry-level roles are often still lacking. That gap is what we’ll explore below.

## Why Raising the Bar Doesn’t Work on Its Own

A job description can ask for judgement, but on what basis? Judgement comes from experiencing real-world scenarios, making mistakes and learning from them. Previous generations of software engineers gained that experience by writing and debugging code, but now that code is increasingly written by AI agents.

This leaves a junior engineer in an awkward position. They are expected to review and direct agent output, but they have not built the mental models that writing the code would have given them. I described this gap in [Career Planning in the AI Era](/software/career-planning-in-the-ai-era/). Reviewing code you could not have written yourself is hard, and it’s easy to mistake plausible output for correct output.

Medical education has put a name to the risk. In a JAMA article published on 14 October 2026, Jesse Burk-Rafel and Robert Wachter describe “*never-skilling*”, where trainees fail to develop core skills because technology does the work from the start ([as summarised by RTÉ](https://www.rte.ie/news/a-european-perspective/2026/1023/1596627-artificial-intelligence-doctors/)). Their proposed remedies include:

* **Calibrated trust**: adjusting how far you rely on an AI tool depending on the tool, the task and the consequences of being wrong.  
* **Metacognition**: the habit of examining your own reasoning.  
* **Practice with and without AI**, so the underlying skill does not fade.  
* **Simulated cases with embedded errors**, so trainees learn to catch mistakes.  
* **Assessment that separates the trainee’s contribution from the AI’s contribution.**

Software engineering has no comparable tradition of structured training, so teams will have to design it themselves.

## A Junior Role Built as an Apprenticeship

Below are six elements, adapting the medical education ideas to software engineering. They are a starting point rather than a proven recipe, so adjust them to your needs.

1. **Start with reviewing, in a safe place.** Let juniors review agent-generated changes in low-risk areas first, such as tests, documentation and internal tools. A senior then reviews the junior’s review. The aim is to practise spotting problems before the stakes are high.  
2. **Plant defects on purpose.** Prepare agent-style changes containing known problems: a missing authorisation check, an outdated dependency, a plausible but non-existent API, an off-by-one error. See what gets caught. 
3. **Practise without the agent.** Set aside regular time to build or debug small things unaided. Frame it as keeping a skill sharp, in the way other professions maintain manual skills.  
4. **Teach specification and decomposition.** Writing a clear task, with context and acceptance criteria, is now a core engineering skill. Review their prompts and plans, not just their code.  
5. **Give small, real accountability.** Let them own something: a runbook or a small service, alongside a mentor. [LeadDev](https://leaddev.com/career-development/junior-engineers-are-skipping-straight-to-architect-level-thinking) highlights that handling real production incidents is key to developing critical experience and judgement.  
6. **Assess judgement, not output.** Ask juniors to keep a short decision log: what the agent proposed, what they accepted or rejected, and why. Use it to start conversations in 1:1s, not to produce a score.

LeadDev also suggests that AI use should scale through three phases, from tutor to copilot to accelerator, with the scaffolding loosening as judgement develops. That is a sensible principle to borrow. Close review and pairing are in place at the start, and they relax as the evidence of good judgement builds up.

In my organisation, we assign junior developers coding tasks outside their comfort zone, for example, giving a backend engineer a frontend task. We also assign senior team members to mentor, guide and review their work. These junior engineers gain confidence and autonomy as they grow.

## The Cost Is Senior Time

Onboarding a new employee is never free; the main cost is senior employees’ time. Apprenticeships need real dedicated bandwidth from senior team members to work effectively.

That bandwidth is already under pressure. In [AI Utopia, Well Maybe?](/software/ai-utopia-well-maybe/) I wrote about *botsitting*, the hours spent supervising agents, which one survey puts at more than six hours a week for digital workers. Asking the same seniors to mentor on top of that, in their spare time, will not work. Mentoring needs to be a planned and recognised part of the senior role, with time allocated to it.

If companies don’t invest in upskilling junior employees, they will eventually need to hire mid-level and senior people externally, which is more expensive. Those hires would also have to learn the company’s systems from scratch.

For regulated organisations there is a second argument. As I covered in [AI Literacy Is Your Legal Obligation](/ai/ai-literacy-is-your-legal-obligation/), human oversight of high-risk AI systems has to be assigned to people with the competence, training, authority and support to do it. 

The junior people you hire and develop now are the likely candidates for those oversight roles in the future. If their only experience is accepting agent output, you will struggle to show that they are competent.

## This Isn’t Only About Software Engineering

The same pattern appears wherever routine work used to teach judgement: analysts, paralegals, marketers, and clinicians. The six elements outlined above translate to these other roles too. Review-first exercises, planted errors, unaided practice and decision logs work just as well for a financial analyst as for a software engineer.

It also connects to the [CWA 18398](https://www.cencenelec.eu/media/CEN-CENELEC/CWAs/RI/2026/cwa18398_2026.pdf) categories referenced in my [literacy article](/ai/ai-literacy-is-your-legal-obligation/). These junior employees are “*Professional users*”, personally accountable for how AI shapes their professional judgement. Their training has to be built around the decisions they will actually make.

## Where to Start

1. **List the tasks agents now do for your junior roles.** For each one, note what a junior used to learn from doing it.  
2. **Replace each lost lesson with a deliberate exercise.** If debugging taught how the system fits together, create a structured debugging exercise.  
3. **Name a mentor and protect their time.** Make it a defined part of their senior roles and responsibilities.  
4. **Pilot with one team.** Track learning and judgement alongside output.  
5. **Review each quarter.** Loosen the scaffolding where the evidence supports it, and tighten it where it doesn’t.

## Conclusion

It’s easy to write a job description that asks for judgement; it’s harder to define how judgement is taught, and to find people who can teach it. Employers who reframe junior roles without understanding that will end up with job descriptions that nobody can meet.

If you manage junior engineers, here is a question to start with: what was the first lesson a junior would have learned from a task that an AI agent now does for them?

**Further Reading**

* [Workplace Readiness Needs to Shift-Left](/software/workplace-readiness-needs-to-shift-left/)  
* [Career Planning in the AI Era](/software/career-planning-in-the-ai-era/)  
* [AI Agent as a Software Engineering Learning Coach](/software/ai-agent-as-learning-coach/)

<div id="comments" class="comments"></div>
