---
title: Designing and Building a Peppermint Tin Fuzz Guitar Pedal
description: Designing and building a custom guitar pedal
keywords: "guitar,bazz buzz,fuzz,altoid tin,effects pedal"
date: 2022-06-21
permalink: "electronics/guitar-pedal-peppermint-tin-fuzz-design-build/"
---

# {{ title }}

<p>
    This is a custom guitar pedal that I designed and built, although describing it as <em>"designed"</em> might be a stretch, it's basically a <a href="http://home-wrecker.com/bazz.html">Bazz Fuzz</a> circuit with some changes and additions.
</p>
<p>
    A <a href="https://www.musikding.de/Basic-Kit">base kit</a> was purchased from Musikding which includes all the off-board parts you need to build a guitar pedal; audio jacks, foot switch, LED with bezel &amp; DC power jack.
</p>
<p>
    I didn't want to build a straight Bazz Fuzz, I wanted to experiment and build something a little different. After studying other circuits I ordered a bunch of parts; transistors, diodes, capacitors, resistors, pots and some <a href="https://www.musikding.de/Stripboard-50x100mm">stripboard</a>.
</p>

<h2>Modelling the Circuit</h2>
<p>
    A great way to learn and understand what is happening inside a circuit is to model it in <a href="https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html">LTspice</a>. You can model an existing circuit and then experiment by adding, removing &amp; changing components to see how the output signal is affected.
</p>
<p>
    The <a href="http://home-wrecker.com/bazz.html">Bazz Fuzz v2</a> is a simple circuit which uses a MPSA13 <a href="https://en.wikipedia.org/wiki/Darlington_transistor">Darlington transistor</a>. This creates a direct and heavy fuzz tone, which sounds pretty good considering how few parts are used. I was hoping to create something more subtle with a bit more character.
</p>
<p>
    It was a interative process; modelling and prototyping various circuit configurations, experimenting with different capacitor values, different types of diodes and diode configurations, adding and changing resistor values etc.
    Once I could see and interesting change in the shape of the output signal in <a href="https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html">LTspice</a>, I would build it on the breadboard and listen to how it sounded, eventually arriving at the following:
</p>

<figure class="photoFigure">
    <img alt="Peppermint Tin Fuzz - Prototype" src="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/guitar-pedal-prototype-200.webp" data-full-img="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/guitar-pedal-prototype.webp" />
    <figcaption>
        Peppermint Tin Fuzz Prototype
    </figcaption>
</figure>
<br >
<figure class="photoFigure">
    <img alt="Peppermint Tin Fuzz - Schematic" src="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/PeppermintTinFuzz-v1.0-LTSpice-200.webp" data-full-img="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/PeppermintTinFuzz-v1.0-LTSpice.webp" />
    <figcaption>
        Peppermint Tin Fuzz Schematic &amp; Plot
    </figcaption>
</figure>
<br >
<p>
    For comparison, here is the original Bazz Fuzz v2 schematic and plot which has a more pronounced square wave:
</p>
<figure class="photoFigure">
    <img alt="Bazz Fuzz v2 - Schematic" src="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/BazzFuzz-v2-LTSpice-200.webp" data-full-img="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/BazzFuzz-v2-LTSpice.webp" />
    <figcaption>
        Bazz Fuzz Schematic &amp; Plot
    </figcaption>
</figure>
<br >

<h2>Designing the Circuit Board Layout</h2>
<p>
    There are software applications to help with creating stripboard layouts but this is a relatively simple circuit so it was easy to sketch it out with pencil and paper. A craft knife was used to split a few of the copper strips (x's on the sketch), allowing a smaller board to be used.
</p>

<figure class="photoFigure">
    <img alt="Peppermint Tin Fuzz Circuit Board Layout" src="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/guitar-pedal-circuitboard-layout-200.webp" data-full-img="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/guitar-pedal-circuitboard-layout.webp" />
    <figcaption>
        Peppermint Tin Fuzz Circuit Board Layout
    </figcaption>
</figure>
<br >
<p>
    Sockets were used for some components; input capacitor, clipping diode &amp; transistor, so they can be swapped out later if required. 
</p>
<figure class="photoFigure">
    <img alt="Peppermint Tin Fuzz Circuit Board" src="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/guitar-pedal-circuitboard-complete-200.webp" data-full-img="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/guitar-pedal-circuitboard-complete.webp" />
    <figcaption>
        Peppermint Tin Fuzz Circuit Board
    </figcaption>
</figure>
<br >

<h2>Preparing the Enclosure</h2>
<p>
    Altoid tins are quite versatile due to their compact size, with many people finding <a href="https://www.pinterest.ie/sherron/altoid-tin-crafts/">creative uses</a> for them. I had one lying around and decided to use it as an enclosure for this pedal. 
</p>
<p>
    As some components are mounted in the base and some in the lid, the layout took a bit of planning to ensure everything would fit together when the tin was closed. This wasn't too difficult as the circuit board is small.
</p>
<p>
    The tin is reasonably rigid but care is needed with the step drill-bit to avoid warping or tearing the metal. There isn't quite enough height below the lid for the audio jacks so a notch had to be drilled from these too, some careful filing was also required to accommodate the washer and nut.
</p>
<p>
    A couple of strips of duct tape were put on the inside of the tin to avoid shorting on the base of the circuit board.
</p>

<figure class="photoFigure">
    <img alt="Peppermint Tin Fuzz Enclosure" src="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/guitar-pedal-enclosure-200.webp" data-full-img="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/guitar-pedal-enclosure.webp" />
    <figcaption>
        Peppermint Tin Fuzz Enclosure
    </figcaption>
</figure>
<br >

<h2>Assembling the Pedal</h2>
<p>
    The wiring of the off-board components was done with the lid open so I had to consider how the wires would fold when the tin was closed.
</p>
<figure class="photoFigure">
    <img alt="Peppermint Tin Fuzz Assembled" src="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/guitar-pedal-assembled-200.webp" data-full-img="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/guitar-pedal-assembled.webp" />
    <figcaption>
        Peppermint Tin Fuzz Enclosure
    </figcaption>
</figure>
<br>

<h2>
    The End Result
</h2>
<p>
    This was a really fun and satisfying project. The pedal sounds great, it's responsive to guitar volume and pick attack so it can produce a nice variety of tones.
</p>

<figure class="photoFigure">
    <img alt="Pedal - Complete" src="/content-electronics/images/guitar-pedal-peppermint-tin-fuzz/guitar-pedal-complete.webp" style="width:80%" />
    <figcaption>
        Peppermint Tin Fuzz
    </figcaption>
</figure>
<br />

<h2>
    Circuit JS Circuit Simulator
</h2>
<ul>
    <li>
        <a href="/electronics/guitar-pedal-peppermint-tin-fuzz-circuit-simulator">Peppermint Tin Fuzz Guitar Pedal Circuit Simulator</a>
    </li>
</ul>

<div id="comments" class="comments"></div>