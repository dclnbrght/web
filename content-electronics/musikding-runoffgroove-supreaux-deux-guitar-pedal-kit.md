---
title: Building a Run Off Groove Supreaux Deux Guitar Pedal Kit
description: Building a Run Off Groove Supreaux Deux Guitar Pedal Kit
keywords: "guitar,supreaux deux,supro 16T,effects pedal,stompbox"
date: 2022-01-21
permalink: "box/musikding-runoffgroove-supreaux-deux-guitar-pedal-kit/"
---

# {{ title }}

<p>
    The <a href="http://www.runoffgroove.com/sd.html">Supreaux Deux Amp Sim</a> stompbox circuit was designed by Run Off Groove. It's based on the vintage Supro 16T amplifier which is similar to the amp used by Jimmy Page on Led Zeppelin I. This kit was supplied by <a href="https://www.musikding.de/ROG-Supreaux-Deux-AmpSim-kit">Musikding</a> and it includes a PCB printed by <a href="https://diy.thcustom.com/shop/rog-supreaux-deux-v1-1-pcb/">TH Custom Effects</a>. 
</p>
<p>
    The base kit can be purchased without a pedal enclosure and knobs, but you will probably want to add a blank or pre-drilled 125B enclosure to your order. I generally order a pre-drilled enclosure as it saves a lot of time.
</p>
<p>
    The spacing between the knobs is 17mm so you will need to order knobs which are smaller than that, I got three <a href="https://www.musikding.de/Mini-pointer-knob-blue">16mm mini blue pointer knobs</a>.
</p>
<figure class="photoFigure">
    <img alt="Supreaux Deux Guitar Pedal Kit" src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-kit-200.webp" data-full-img="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-kit.webp" />
    <figcaption>
        Supreaux Deux Guitar Pedal Kit
    </figcaption>
</figure>
<br />

<p>
    Musikding provide a <a href="https://www.musikding.de/ROG-Supreaux-Deux-AmpSim-kit">Bill of Material</a> for the kit on their website. The main build document is provided by <a href="https://diy.thcustom.com/?wpdmdl=3231">TH Custom Effects</a> as they designed this PCB. The <a href="http://www.runoffgroove.com/sd.html">schematic</a> and additional details can also be found on <a href="http://www.runoffgroove.com/sd.html">runoffgroove.com</a>.
</p>

<h2>Preparing the Enclosure</h2>
<p>
    The potentiometers have a tab protruding from their base, to prevent the base from spinning when they're in use, however there were no matching slots in the enclosure. The instructions suggest snapping the tabs off with pliers as they probably aren't needed if the nut is tightened sufficiently. However, I prefer to fit things right so I drilled an additional small hole for the tab beside each existing hole. These smaller holes are not visible when the knobs are installed.
</p>
<figure class="photoFigure">
    <img alt="Guitar Pedal Enclosure - Preparation" src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-enclosure-prep-200.webp" data-full-img="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-enclosure-prep.webp" />
    <img alt="Guitar Pedal Enclosure - Base Paint" src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-enclosure-paint-base-200.webp" data-full-img="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-enclosure-paint-base.webp" />
    <figcaption>
        Pedal Enclosure - Preparation &amp; Base Paint
    </figcaption>
</figure>
<br />

<p>
    The enclosure was sprayed with several coats of light grey paint. After stenciling on some details with acrylic paint it was  finished off with a few coats of matt clear-coat spray.
</p>

<figure class="photoFigure">
    <img alt="Guitar Pedal Enclosure - Stencil 1" src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-enclosure-paint-art-1-200.webp" data-full-img="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-enclosure-paint-art-1.webp" />
    <img alt="Guitar Pedal Enclosure - Stencil 2" src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-enclosure-paint-art-2-200.webp" data-full-img="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-enclosure-paint-art-2.webp" />
    <figcaption>
        Pedal Enclosure - Stenciling
    </figcaption>
</figure>
<br />

<figure class="photoFigure">
    <img alt="Guitar Pedal Enclosure - Painted" src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-enclosure-paint-complete-200.webp" data-full-img="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-enclosure-paint-complete.webp" />
    <figcaption>
        Pedal Enclosure - Painted
    </figcaption>
</figure>
<br />

<h2>Assembling the PCB</h2>
<p>
    This PCB is quite compact and some of the components are a tight fit, but everything is clearly labelled so it's mostly a typical assembly, going from lowest to highest parts; resistors &amp; diodes to capacitors etc. 
<p>
<figure class="photoFigure">
    <img alt="Pedal PCB - Assembly 1" src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-pcb-assembly-1-200.webp" data-full-img="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-pcb-assembly-1.webp" />
    <img alt="Pedal PCB - Assembly 2" src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-pcb-assembly-2-200.webp" data-full-img="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-pcb-assembly-2.webp" />
    <figcaption>
        Pedal PCB - Assembly
    </figcaption>
</figure>
<br />

<p>
    This circuit has three transistors and the kit includes three transistor sockets. However, one of the transistors, the J201 (at Q2 on the PCB), comes as a surface mounted transistor on an adapter board. The kit also includes three right-angled pins for mounting the adapter board, which is fine, however these pins do not fit into the transistor socket, they only fit directly into the main PCB. Thankfully I noticed this before soldering in the socket for the J201.
</p>
<p>
    The adapter board is labelled with DSG, (Drain, Source, Gate) however the main PCB only has the standard transistor symbol, a circle with a flat side. So you need to know how the DSG pinout maps to this symbol. You can easily find this by searching for <a href="https://www.google.com/search?q=j201+pinout">J201 pinout</a> but it's not obvious from the build documents. You can see the J201 installed here:
</p>	
<figure class="photoFigure">
    <img alt="Pedal PCB - Assembly 2" src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-pcb-assembly-3-200.webp" data-full-img="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-pcb-assembly-3.webp" />
    <figcaption>
        Pedal PCB - J201 Transitor
    </figcaption>
</figure>
<br />


<h2>Assembling the Pedal</h2>
<p>
    I completed and tested most of the off-board wiring before mounting in the enclosure. Thankfully everything worked when I plugged it in. When completing the assembly in the enclosure, I used a white LED instead of the red one that came with the kit and also used a higher value resistor to reduce the brightness.
</p>

<figure class="photoFigure">
    <img alt="Pedal - Assembly 1" src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-assembly-1-200.webp" data-full-img="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-assembly-1.webp" />
    <img alt="Pedal - Assembly 2" src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-assembly-2-200.webp" data-full-img="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-assembly-2.webp" />
    <figcaption>
        Pedal - Assembly
    </figcaption>
</figure>
<br />
<p>
    In general, the build was straight forward, however there were some things that might catch you out if you're new to building pedals.
</p>

<h3>Assembly Notes</h3>
<p>
    As mentioned above, the J201 transistor is surface mounted on an adapter board so you need to take care and mount this transistor correctly.
</p>
<p>
    This PCB includes the "bass-boost mod" which is a nice addition, and the kit also included a switch for this mod. As this is an optional feature, there is no hole in the enclosure for the switch so you have to drill it out yourself. No big deal but it's best to do this before you paint and start assembling the components into the enclosure. 
    The instructions don't actually describe how to connect the switch, you can work is out by comparing the schematic to the PCB; connect the switch across the two points labeled "B_B_2" and the bottom right of the PCB, simple enough but it's not obvious in the build documents.
</p>
<p>
    The steps to bias the transistors are described in the build documents, and the three test points are labelled on the PCB, however you do need a multimeter for this step. 
</p>
<p>
    Instructions for the <a href="https://www.google.com/search?q=guitar+pedal+offboard+wiring">off-board wiring</a> (foot-switch, LED, power and jacks) are not included in the build documents, this is not difficult if you've done it before, but it would be confusing for a beginner.
</p>

<h2>The End Result</h2>
<p>
    This is a great pedal for creating some retro tones, the sample below demonstrates the dynamics on offer, it's nice and sweet when played easy but once you dig in, you can get some knarley tones.
</p>

<figure class="photoFigure">
    <img alt="Pedal - Complete" src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/guitar-pedal-complete.webp" style="width:80%" />
    <figcaption>
        Supreaux Deux
    </figcaption>
</figure>

<p>A short demo of the pedal in action:</p>
<div style="text-align:center">
    <audio controls>
            <source src="/content-electronics/images/musikding-runoffgroove-supreaux-deux/SupreauxDeux-Demo.ogg" type="audio/ogg" />
            Your browser does not support the audio tag.
    </audio>
</div>

<div id="comments" class="comments"></div>