---
title: Designing and Building the Copper Drive Guitar Pedal
description: Designing and building a custom guitar pedal
keywords: "guitar,drive,fuzz,effects pedal"
date: 2023-12-31
permalink: "box/guitar-pedal-copper-drive-design-build/"
---

# {{ title }}

<p>
    This is a custom overdrive pedal with switchable clipping. The aim was to create a pedal that is somewhere between an overdrive and a fuzz. Something with a nice punchy sound, with options to add some clipping for extra grit. 
</p>

<h2>Designing the Circuit</h2>
<p> 
    The circuit has two gain stages, a JFET pre-amp stage and a BJT amplifier stage. 
</p>
<figure class="photoFigure">
    <img alt="Copper Drive - Schematic" src="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-v1.1-ltspice-schematic.webp" data-full-img="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-v1.1-ltspice-schematic.webp" />
    <figcaption>
        Copper Drive Schematic
    </figcaption>
</figure>

<h3>Stage 1 - JFET Pre-Amp</h3>
<p>
    Stage 1 is based on the <a href="https://runoffgroove.com/fetzervalve.html">Fetzer Valve</a> circuit from <a href="https://runoffgroove.com/">Run Off Groove</a>. This uses a JFET transistor to emulate the first stage found in a typical Fender tube amp (12AX7). While this shapes the tone, it actually looses gain.
</p>
<p>
    The JFET used here is a J112 transistor. All JFETs are slightly different and must be biased correctly to get the desired effect. The Vp and Idss values for the chosen transistor can be measured using the method described here: <a href="https://runoffgroove.com/fetzervalve.html#11">Measurement of Vp and Idss</a>. The values for this J112 are 3.8V and 48mA respectively.
</p>
<p>                
    The <a href="https://runoffgroove.com/fetzervalve.html#12">Fetzer Valve calculator</a> was then used to calculate the source and drain resistor values.
    The calculator gives values of: Rs = 66&#x2126; and Rd = 26&#x2126;.
    The closest standard resistor values are: Rs = 68&#x2126; and Rd = 30&#x2126;.
</p>

<h3>Stage 2 - BJT Amplifier</h3>            
<p>
    Stage 2 is a <a href="https://en.wikipedia.org/wiki/Common_emitter" target="_blank">Common Emitter</a> amplifier with the popular <a href="https://en.wikipedia.org/wiki/2N3904" target="_blank">2N3904</a> NPN transistor to amplify the signal.
</p>

<h4>Tone Control</h4>
<p>
    The tone control is at the start of this stage. It's a basic <a href="https://www.amplifiedparts.com/tech-articles/filter-low-pass-high-pass" target="_blank">High Pass Filter</a> comprised of the 1&micro;F coupling capacitor (between stages 1 & 2), a 5.1k&#x2126; resistor and a 10k&#x2126; linear potentiometer to adjust the cutoff frequency. This allows cutting low-end frequencies, ranging from below below 10Hz to below 30Hz.
</p>

<h4>Clipping</h4>
<p>
    There are two sets of clipping diodes; soft clipping in the feedback loop and hard clipping on the output. Originally I was going to use an On-Off-On switch to toggle between them, however, it sounded good with both on together so I used an On-Off switch on each.
</p>
<p>
    The soft clipping in the feedback loop uses two 1N914 silicon diodes in parallel. There is a 22k&#x2126; resistor in series with one of the diodes to create asymmetric clipping.
</p>
<p>
    The hard clipping at the output uses two BZX55C 9V1 Zener diodes in parallel, shunting to ground.
</p>

<h4>Output</h4>
<p>
    Finally, there is a 100k&#x2126; potentiometer on the output for a volume control.
</p>

<h2>Modelling the Circuit</h2>
<p>
    The circuit was modelled in <a href="https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html" target="_blank">LTspice</a>, with the input signal trace shown here in green and the output signal shown in red.
</p>			
<figure class="photoFigure">
    <img alt="Copper Drive - Trace" src="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-v1.1-ltspice-trace.webp" data-full-img="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-v1.1-ltspice-trace.webp" />
    <figcaption>
        Copper Drive Trace
    </figcaption>
</figure>
<p>
    This trace is plotted over 12 milliseconds showing the four combinations of clipping, for 3 milliseconds each; Off-Off, On-Off, Off-On, On-On. These combinations add different levels of clipping to the signal and different colours to the tone.
</p>

<h2>Prototype</h2>
<p>
    The prototype was built on a breadboard to test the circuit and make adjustments.
</p>
<figure class="photoFigure">
    <img alt="Copper Drive - Prototype" src="/content-electronics/images/guitar-pedal-copper-drive/guitar-pedal-prototype-200.webp" data-full-img="/content-electronics/images/guitar-pedal-copper-drive/guitar-pedal-prototype.webp" />
    <figcaption>
        Copper Drive Prototype
    </figcaption>
</figure>

<h2>Designing the Circuit Board Layout</h2>
<p>
    <a href="https://veecad.com/" target="_blank" >VeeCAD</a> was used to design the stripboard layout, using a 15 x 16 hole board, with a few cuts in the strips. 
</p>
<figure class="photoFigure">
    <img alt="Copper Drive Circuit Stripboard Layout" src="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-stripboard-layout-200.webp" data-full-img="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-stripboard-layout.webp" />
    <figcaption>
        Copper Drive Circuit Stripboard Layout
    </figcaption>
</figure>

<h2>Building the Circuit</h2>
<p>
    Pretty standard circuit build, with sockets for the transistors.
</p>
<figure class="photoFigure">
    <img alt="Copper Drive Circuit Board Build" src="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-circuit-board-build-200.webp" data-full-img="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-circuit-board-build.webp" />
    <img alt="Copper Drive Circuit Board Complete" src="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-circuit-board-complete-200.webp" data-full-img="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-circuit-board-complete.webp" />
    <figcaption>
        Copper Drive Circuit Board Build
    </figcaption>
</figure>

<h2>Preparing the Enclosure</h2>
<p>
    I had two copper coloured knobs from a previous project, so I decided to go for a rustic steampunk theme, rather than a plain paint job.
</p>
<p>
    After the enclosure had been drilled for the pots, switches, jacks etc, it was etched with course sandpaper in cross-hatch pattern. This was given a light spray of matt black paint. Once dry is was sanded again with finer sandpaper to remove the paint from the high points, leaving the low points black. Finally, it was given a few coats of clear coat to protect the finish.
</p>
<p>
    The "Circuit Breaker" decal around the LED is something I found in an old box of bits &amp; pieces, not sure where it came from but it looks kinda cool!
</p>
<figure class="photoFigure">
    <img alt="Copper Drive Enclosure" src="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-enclosure-200.webp" data-full-img="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-enclosure.webp" />
    <figcaption>
        Copper Drive Enclosure
    </figcaption>
</figure>
<br >
    
<h2>Off Board Wiring & Assembly</h2>
<p>
    Nothing unusual with the off board wiring; jacks, power, LED, and a standard bypass setup on the footswitch. Two toggle switches were added for the clipping diodes. The back of the pots and inside of the enclosure was covered with insulating tape to prevent shorting out on the stripboard.
</p>
<figure class="photoFigure">
    <img alt="Copper Drive Off Board Wiring" src="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-off-board-wiring-200.webp" data-full-img="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-off-board-wiring.webp" />
    <img alt="Copper Drive Assembled" src="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-assembled-200.webp" data-full-img="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-assembled.webp" />
    <figcaption>
        Copper Drive Off Board Wiring & Assembly
    </figcaption>
</figure>

<h2>
    The End Result
</h2>
<p>
    It turned out quite well, and it stacks well with other drive and fuzz pedals.
</p>
<figure class="photoFigure">
    <img alt="Copper Drive" src="/content-electronics/images/guitar-pedal-copper-drive/guitar-pedal-complete-2-200.webp" data-full-img="/content-electronics/images/guitar-pedal-copper-drive/guitar-pedal-complete-2.webp" />
    <img alt="Copper Drive" src="/content-electronics/images/guitar-pedal-copper-drive/guitar-pedal-complete-3-200.webp" data-full-img="/content-electronics/images/guitar-pedal-copper-drive/guitar-pedal-complete-3.webp" />
</figure>
<figure class="photoFigure">
    <img alt="Copper Drive Pedal - Complete" src="/content-electronics/images/guitar-pedal-copper-drive/guitar-pedal-complete.webp" style="width:90%" data-full-img="/content-electronics/images/guitar-pedal-copper-drive/guitar-pedal-complete.webp" />
    <figcaption>
        Copper Drive
    </figcaption>
</figure>

<h2>Demos</h2>
<p>A short demo of the Copper Drive, this was recorded through a Headrush Gigboard with a Vox AC 30 amp simulation.</p>			
<p>Both clipping switches are toggled on for the rythmn track and toggled off for the lead track:</p>
<div style="text-align:center">
    <audio controls>
        <source src="/content-electronics/images/guitar-pedal-copper-drive/copper-drive-demo.ogg" type="audio/ogg" />
        Your browser does not support the audio tag.
    </audio>
</div>

<div id="comments" class="comments"></div>