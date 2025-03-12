---
title: eolvis
description: A web application that creates visualisations of component End-of-Life (EOL) information.
keywords: "eolvis, Software Lifecycle, EOL, visualisation"
date: 2023-09-30
permalink: "eolvis/"
---

# {{ title }} - Software End Of Life Timeline Visualisation

<img src="/content-software/images/eolvis-logo.png" alt="eolvis logo" class="article-image-primary" style="max-width: 6em;" />

Effective software supply chain management involves planning for software component upgrades to ensure that your systems are always using supported components. This means being proactive about scheduling upgrades *before* components reach their EOL (End-Of-Life) date. By doing this, you can maintain system security and avoid potential issues with outdated software.

The *eolvis* web application is a user-friendly tool to help software developers and managers visualise the lifecycle of software components, from initial release to end of life. It can be used when planning a technical roadmap, to track the planned usage of components and to identify component versions that are approaching their EOL date.

<a href="/app/eolvis/" class="action-button-primary">TL;DR - Jump straight to the demo</a>

<figure>
    <img src="/content-software/images/eolvis-screenshot.webp" alt="eolvis EOL Visualisation" />
    <figcaption>Fig 1. eolvis EOL Visualisation</figcaption>
</figure>

<div id="toc" class="table-of-contents"></div>

## Background

I created the *eolvis* as a replacement for a software end-of-life tracker that I maintained in MS Excel for many years. Re-creating this tracker as a web application has several benefits such as data validation and dynamic styling to highlight items that need attention over time.

## How it works

Information is entered about each item; Name, Version, Type, Supported From and To dates, Use From and To dates etc. Each item is then rendered as a bar on a timeline.

The components on the timeline can be filtered by Type, Name and timeframe (Past/Current/Future).

<figure>
    <img src="/content-software/images/eolvis-dataentryform.webp" alt="eolvis Data Entry Form" />
    <figcaption>Fig 2. eolvis Data Entry Form</figcaption>
</figure>

The Supported From and To dates are represented as a bar with a solid outline. Extended Support is represented with a dashed outline. The Use From and To dates are represented as an inner bar with a solid color. The color of the inner bar depends on its position on the timeline relative to the current date.

- Grey = Use From and To dates are in the future or in the past
- Green = Use From and To dates are between the Supported From and To dates, and Current date is between the Use From and To dates
- Amber = Current date is near (i.e. 90 days (configurable)) to a future Use To date
- Red = the Use To date is in the future and after the Supported To date

## Data Export

Data can be exported in two JSON formats:

- eolvis data format - a flat JSON file format
- CycloneDX - item types defined in the *softwareBomTypeMap* config can be exported in [CycloneDX](https://cyclonedx.org/) format

## Technologies

*eolvis* is a web application written in vanilla JavaScript (Web Components & ES6 modules), wrapped in an ASP.NET Web API application.

It uses [Azure Table Storage](https://azure.microsoft.com/en-us/products/storage/tables) for data storage.

It can be hosted as an [Azure App Service](https://azure.microsoft.com/en-us/products/app-service).

## Source Code

The source code for *eolvis* is available on GitHub:

- [eolvis GitHub Repository](https://github.com/dclnbrght/eolvis)

## Demo

- [eolvis](/app/eolvis/)

<div id="comments" class="comments"></div>