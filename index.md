---
title: Home
description: Declan Bright - Chief Technology Officer based in Dublin, Ireland.
keywords: "Declan Bright, Chief Technology Officer"
author: Declan Bright
layout: layouts/home.njk
---

<style>
    /* Hero */
    .home-hero {
        margin: 0.6em 0 0.4em 0;
    }
    .home-hero-eyebrow {
        font-size: 75%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;
        color: var(--heading-color);
        margin: 0;
    }
    .home-hero-statement {
        font-size: clamp(1.3em, 3.5vw, 1.6em);
        line-height: 1.4;
        color: var(--heading-color);
        margin: 0.5em 0 0.5em 0;
        max-width: 100%;
    }
    .home-hero-statement em {
        font-style: italic;
        color: var(--text-color);
    }
    .home-hero-sub {
        color: var(--text-color);
        opacity: 0.8;
        margin: 0.5em 0 0 0;
    }
    /* Featured latest article */
    .home-featured {
        margin-bottom: 0.6em;
    }
    .home-featured a {
        display: block;
        padding: 0.8em;
        border: solid 1px var(--border-color);
        background-color: var(--card-bg);
        border-radius: 0.3em;
        text-decoration: none;
        box-shadow: 0 0.5em 1em -0.5em rgba(100,100,100,0.3);
        transition: border-color 0.3s ease;
    }
    .home-featured a:hover { border-color: var(--text-color); }
    .home-featured-image {
        width: 100%;
        height: 16em;
        background-size: cover;
        background-position: center;
        border-radius: 0.2em;
        margin-bottom: 1em;
    }
    .home-featured-title {
        font-size: 1.25em;
        font-weight: bold;
        color: var(--heading-color);
        line-height: 1.35;
        margin: 0 0 0.5em 0;
    }
    .home-featured-desc {
        color: var(--text-color);
        opacity: 0.75;
        line-height: 1.6;
        margin: 0 0 0.8em 0;
    }
    .home-featured-read {
        font-size: 0.8em;
        font-weight: 600;
        color: var(--heading-color);
    }
    @media screen and (min-width: 600px) { 
        .home-featured-image {
            height: 30em;
        }
        .home-featured a {
            padding: 1.4em;
        }
    }
    @media screen and (min-width: 840px) {
        .home-hero-eyebrow {
            text-align: left;
        }
    }
</style>

<section class="home-hero animate-duration-medium animate-fade-in">
    <p class="home-hero-eyebrow">CTO &amp; AI Officer · Dublin, Ireland</p>
    <p class="home-hero-statement"><em>The future of work depends on how well we guide people through AI transformation.</em></p>
    <p class="home-hero-sub">I share what I learn from my experiences, for the leaders and teams who need pragmatic guidance, not hype.</p>
</section>

<!-- Featured latest article -->
<div class="home-featured animate-duration-medium animate-fade-in">
    <h2 class="section-label">Featured Article</h2>
    <a href="/ai/ai-utopia-well-maybe/">
        <div class="home-featured-image" style="background-image:url('/content-software/images/ai-utopia-well-maybe.webp');"></div>
        <p class="home-featured-title">AI Utopia, Well Maybe?</p>
        <p class="home-featured-desc">The dream of a shorter work week, more free time and shared prosperity is not naive, but the distance between here and there is real. A look at the governance gaps, distribution problems, and the generation at risk of being stalled before they start.</p>
        <span class="home-featured-read">Read article →</span>
    </a>
</div>

<h2 class="section-label">Recent Articles</h2>

<div class="card-container">
    <div class="card">
        <a href="/media/saros-insights-podcast/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-media/images/saros-insights-podcast.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>Saros Insights Podcast</strong>
                <br>AI governance as a growth strategy
            </div>
        </a>
    </div>
    <div class="card">
        <a href="/ai/strategic-ai-network/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-media/images/sain-logo-org.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>Strategic AI Network</strong>
                <br>Executive Committee Membership
            </div>
        </a>
    </div>
    <div class="card">
        <a href="/ai/workplace-readiness-needs-to-shift-left/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/workplace-readiness-shift-left.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>Workplace Readiness<br>Needs to Shift-Left</strong>
            </div>
        </a>
    </div>
    <div class="card">
        <a href="/ai/the-mindset-for-navigating-ai-transformation/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/mindset-for-navigating-ai-transformation.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>The High Agency Mindset for Navigating AI Transformation</strong>
            </div>
        </a>
    </div>
    <div class="card">
        <a href="/software/the-ai-adoption-gap-why-regulated-companies-cant-move-as-fast-as-the-hype/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/tension-between-ai-adoption-and-grc.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>Why Regulated Companies Can't Move As Fast As The Hype</strong>
            </div>
        </a>
    </div>
    <div class="card">
        <a href="/software/ai-agent-as-learning-coach/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/ai-agent-learning-coach.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>AI Agent as a Software Engineering Learning Coach</strong>
            </div>
        </a>
    </div>
    <div class="card">
        <a href="/software/career-planning-in-the-ai-era/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/career-planning.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>Career Planning in the AI Era</strong>
                <br />The future of work shaped by AI
            </div>
        </a>
    </div>
    <div class="card">
        <a href="/software/playing-safe-with-ai/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/ai-safety.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>Playing Safe With AI</strong>
                <br />Practical guidance for using AI safely
            </div>
        </a>
    </div>
    <div class="card">
        <a href="/software/fullstack-software-engineers-in-the-ai-era/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/fullstack-software-engineer.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>Fullstack Software Engineers Are Well Positioned In the AI Era</strong>
            </div>
        </a>
    </div>
    <div class="card">
        <a href="/software/ai-assisted-threat-modelling/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/ai-assisted-threat-modelling.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>AI Assisted Threat Modelling</strong>
                <br />Data flow diagram &rarr; Threat Report
            </div>
        </a>
    </div>
    <div class="card">
        <a href="/software/driving-ai-adoption-from-resistance-to-results/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/driving-ai-adoption.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>Driving AI Adoption</strong>
                <br />From Resistance to Results
            </div>
        </a>
    </div>  
    <div class="card">
        <a href="/software/ai-governance-and-the-journey-to-ISO-42001/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/ai-governance.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>AI Governance</strong>
                <br />And the Journey To ISO 42001
            </div>
        </a>
    </div>
</div>
<h2 class="section-label">Software Projects</h2>
<div class="card-container">
    <div class="card">
        <a href="/software/archiscribe-mcp-server/">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/archiscribe.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>ArchiScribe MCP Server</strong>
                <br />Software architecture &rarr; AI Agent
            </div>
        </a>
    </div>
    <div class="card">
        <a href="archimate-graph-explorer">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/archimate-graph-explorer.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>ArchiMate Graph Explorer</strong>
                <br />Browse an ArchiMate model graph
            </div>
        </a>
    </div>
    <div class="card">
        <a href="eolvis">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-software/images/eolvis-screenshot.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>eolvis</strong>
                <br />Software End Of Life Visualisation
            </div>
        </a>
    </div>
</div>
<h2 class="section-label">Electronics</h2>
<div class="card-container">
    <div class="card">
        <a href="/electronics/guitar-pedal-copper-drive-design-build">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-electronics/images/guitar-pedal-copper-drive/guitar-pedal-complete.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>Copper Drive - Custom Guitar Pedal, Design &amp; Build</strong>
            </div>
        </a>
    </div>
    <div class="card">
        <a href="/box/musikding-runoffgroove-supreaux-deux-guitar-pedal-kit">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-pcb-assembly-4.webp');background-size:110%;"></div>
            </div>
            <div class="card-body">
                <strong>Building a Run Off Groove Supreaux Deux Guitar Pedal Kit</strong>
            </div>
        </a>
    </div>
    <!--
    <div class="card">
        <a href="/box/musikding-der-muff-guitar-pedal-kit">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-electronics/images/musikding-der-muff-american/guitar-pedal-pcb-assembly-2.webp');background-size:100%;"></div>
            </div>
            <div class="card-body">
                <strong>Building a Musikding Der Muff American Guitar Pedal Kit</strong>
            </div>
        </a>
    </div>
    <div class="card">
        <a href="/box/musikding-germanium-fuzz-guitar-pedal-kit">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-electronics/images/musikding-germanium-fuzz/guitar-pedal-assembled.webp');background-size:114%;"></div>
            </div>
            <div class="card-body">
                <strong>Building a Musikding Germanium Fuzz Guitar Pedal Kit</strong>
            </div>
        </a>
    </div>	
    -->
    <div class="card">
        <a href="/box/marantz-pm66se-amplifier-repair">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-electronics/images/marantz-pm66se/marantz-pm66se-reassembled.webp');background-size:114%;"></div>
            </div>
            <div class="card-body">
                <strong>Marantz PM66SE Amplifier Repair</strong>
                <br />Restoring an old Marantz hi-fi amplifier
            </div>
        </a>
    </div>
    <!--
    <div class="card">
        <a href="/box/queens-university-belfast-two-stroke-engines-motorcycle-grand-prix-racing-legends-ray-mccullough-jeremy-mcwilliams">
            <div class="card-header">
                <div class="card-header-image" style="background-image:url('/content-box/images/RayMcCullough.jpg');"></div>
            </div>
            <div class="card-body">
                <strong>QUB, Two-Stroke Engines and Motorcycle Grand Prix Racing Legends</strong>
                <br />
            </div>
        </a>
    </div>
    -->
</div>