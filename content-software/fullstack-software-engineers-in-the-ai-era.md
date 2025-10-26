---
title: Fullstack Software Engineers Are Well Positioned In the AI Era
description: Architectural thinking is the new competitive advantage.
keywords: "Fullstack Software Engineer, Agentic Software Development"
date: 2025-10-25
permalink: "/software/fullstack-software-engineers-in-the-ai-era/"
---

# {{ title }} 

From my observations, I believe that fullstack software engineers have a distinct advantage over specialist software engineers as we move further into the era of agentic AI. Specialist engineers will still be required in many domains, but for the general development of small to medium sized systems, the balance will most likely swing in favour of fullstack software engineers.

<img src="/content-software/images/fullstack-software-engineer.webp" alt="Fullstack Software Engineer" class="article-image-primary" style="max-width: 100%; margin-bottom: 1em; float:none; padding:0;" />

## Let’s start by taking a step back in time

Before taking on software architecture and management roles, I worked as a software engineer for many years, across several industries, in companies of various sizes. My job title was always *“Software Engineer”*, with various prefixes to indicate my level of experience, from junior to principal. However, my  job title never included words such as frontend, mobile, backend, QA, devops, infrastructure, site reliability etc, I was just a software engineer that developed and delivered software for customers. 

Working at smaller companies was especially fun because there were opportunities to wear many different hats, effectively as a *“one person”* team. Although I didn’t think about it this way at the time, performing many roles was just part of the job.

When a new product feature / module / app was to be developed, I started by putting on my *“product owner”* hat and went to visit the customer, to gather requirements (including trips in a field technicians van and the jumpseat of a commercial airliner). I took notes and when I got back to the office I put on my *“software architect”* hat, sketched out some amazing masterpieces on a whiteboard; component diagrams, data models, integration flows etc. These were discussed with my peers or my boss and once everyone was happy I put on my *“product owner”* hat again, to create a work breakdown and a best guess at a delivery timeline. 

Then for the most fun part of the job, coding. I would work iteratively on the database, the backend services and the frontend (web / mobile) app, writing unit tests etc, then deploying it to an environment (often building the environment beforehand). Sometimes there was a dedicated QA team or person, sometimes there wasn’t, in which case I also wore a *“QA”* hat. 

Then it was back to the customer, with my *“solutions consultant”* hat on, to deploy and configure the system in their environment, set up their users, do some training etc. In most cases I left them with smiles on their faces, before heading home to start the next project. Sounds like fun? Well, it was fun and I learnt a lot\!

## It certainly wasn’t perfect

This way of working has its pros and cons. On the plus side, it was really interesting to learn about and use a wide variety of technologies. I got to know these business domains to a deep level, and without the friction of communication across teams, things could move fast. If the customer reported an issue I knew exactly where to look, how to investigate it, often implementing a fix and deploying it before the end of the day. There were several of us who worked this way as the company was growing.

On the negative side, I was on the hook for that customer and I was a single point of knowledge for the products / features that I implemented. Transferring that deep knowledge to someone else (even to cover holidays) was a challenge, as everyone else had their own projects keeping them busy. 

This way of working doesn’t scale to very large projects, however it worked well enough for us, and the projects we were working on at that time. Thinking back on it, even though we were effectively “one person” teams, we delivered huge amounts of rich functionality and value for our customers.

*"But things were simpler then"* you might say, well yes, that is true. Since then, JavaScript frameworks have proliferated, UX design has become much better and backend frameworks are more scalable. 

Even so, learning about a new technology / framework / platform for a project was a normal thing to do. When asked to work with something new, my response was “I’ll figure it out”, although I’m sure my first Angular and React projects weren’t up to the standard delivered by today’s experienced frontend developers. 

## Coming back to recent times

The developer ecosystem is quite different now, frameworks have become more comprehensive and complex. Software engineering roles have become specialised to deal with the higher cognitive load required to work in each area. 

These specialised roles generally work well together in highly functioning teams, however, I've observed some cases where engineers in specialised roles have developed a very narrow view of their responsibilities, particularly at junior and mid levels. Narrow to the point of not being interested in understanding how other parts of the system work.

For example, I’ve had discussions with junior/mid frontend engineers about issues such as page load times, asking them to review the bundle size, load sequence, render-blocking etc, and they genuinely don’t seem interested. 

Their expected way of working is to receive a ticket and a UX design, they develop the React components to match the design and hook it up to an existing backend API, and that’s it, no interest in understanding how it’s loaded and rendered in the browser, no interest in optimising for performance, or how it’s deployed, just get it working, check-in the code and move on to the next ticket. 

I’ve had similar discussions with junior/mid backend engineers, many who have only ever interacted with a database via an ORM. When it comes to diagnosing a poor performing query they don’t know what to do. 

The concern is that today's typical career path, starting narrow and gradually expanding, will not prepare engineers fast enough for an AI assisted world where broader architectural thinking is an important skill from day one, not just at senior levels.

Is the software developed today better than before? Yes absolutely, the user experience is much better, systems are more scalable and accesssible etc. but the ways of working in the industry aren’t always optimal, certainly not for longer term career development in the AI era.

## So why is this becoming a bigger problem?

Let’s think about where we’re heading with agentic AI. Recent advances have given us AI coding assistants that can dramatically boost developer productivity, if used well. While early research on productivity improvements is showing mixed results, productivity gains are becoming more consistent as models improve and practices for directing AI agents mature. 

A skilled engineer can write prompts and instruction files to direct an AI agent (or a swarm of agents), to write code in their preferred language, using their preferred technologies & frameworks, and following their preferred coding conventions and standards. They can break down large pieces of work into a development plan and guide the agent through it, reviewing the generated code along the way and steering the agent to deliver quality software that follows best practices and patterns. 

From my observations to date, the software engineers that do this best are those who are, or have previously worked as fullstack engineers. A skilled and experienced fullstack engineer, uses an AI agent like an extension of their own thought process, working across all parts of the stack, delivering complete features in very short time frames. 

For example, a fullstack engineer on my team recently used an AI agent to build a complete feature including database migrations, API endpoints, and React components in three days, something that would have previously taken at least two weeks to coordinate across a typical feature team.

I’ve observed specialist engineers utilise AI agents with reasonable success too, automating their flow and boosting their productivity, however they’re often limited in what they can deliver since they’re dependent on the backend services and the database being implemented by someone else. While they might quickly “vibe code” a working backend with AI, this approach usually lacks the architectural rigor required for enterprise software.

## Keeping humans in the loop

Human code review is a really important part of the software development process, especially in regulated industries such as healthcare and finance. As AI agents become more capable of generating full product features, we need an efficient process for conducting code reviews. 

If different parts of the code have to be reviewed by mutiple specialist engineers it will slow down the process significantly. The code review process will be a real pinch point in the efficient delivery of software and slowing down the time to market. 

This is where fullstack engineers have a distinct advantage, they can review the code across the full stack, so that it can be released sooner.

## Why scale is different with AI?

You might be thinking: *“This doesn't apply to large codebases with millions of lines across dozens of services.”* But here’s what is changing: AI agents are becoming increasingly capable of navigating and modifying complex codebases in ways that would take any engineer months to understand. The bottleneck is no longer *“who has deep knowledge of each specific subsystem”*, it's *“who can architect the right solution and direct AI agents to implement it correctly, across the stack.”*

In large companies, the most valuable engineers are those who can: understand the broader system architecture, break down complex problems into AI directable tasks, and review the generated code for security, performance, maintainability etc. regardless of which part of the stack it touches. This is architectural design thinking and understanding, not specialist depth.

## Preparing for the future

Specialist software engineers have an opportunity now, to think ahead and prepare for their future careers. They don’t need to become deep experts in the whole stack, but they need to know how the system works as a whole and what good looks like in each area. 

They need to learn how to design full stack systems following best practices and design patterns. With a good level of knowledge in these areas, they can review the generated code to ensure the AI agent is developing the software as designed. 

There is also concern for students who are about to enter the job market. Universities and collages need to prepare students to work in this new reality of the AI era. Students need tuition in prompting and managing AI agents, understanding broader system architecture and reviewing AI generated code.

It will likely become more challenging for small/medium companies to onboard new engineers, however we all have to adapt to this new normal. The engineers who develop architectural thinking skills alongside AI fluency will be the ones who thrive in the agentic AI era, whether they've built those skills through experience in fullstack roles or by intentionally broadening from a specialist career path.

<div id="comments" class="comments"></div>