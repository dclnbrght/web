---
title: Factory Fuzz Guitar Pedal Circuit Simulation
description: Creating a simulation of the circuit from a fuzz guitar pedal circuit
keywords: "fuzz,electronic circuit,simulation"
date: 2021-02-06
permalink: "electronics/guitar-pedal-factory-fuzz-circuit-simulation/"
---

# {{ title }}

<p>
    <i>If you'd like to jump straight to the interactive circuit simulator you can find it here:</i>
</p>

<a href="/electronics/guitar-pedal-factory-fuzz-circuit-simulator" class="action-button-primary">Factory Fuzz Guitar Pedal Circuit Simulator</a>

<p>
    <i>Note: the simulator is best viewed on a large screen</i>
</p>

<h2>Musikding Germanium Fuzz Guitar Pedal Kit</h2>
<p>
    The <a href="/box/musikding-germanium-fuzz-guitar-pedal-kit">Musikding Germanium Fuzz Guitar Pedal Kit</a> is based on the famous Fuzz Factory circuit. After building the kit I thought it would be interesting to see how the circuit actually works. From analysing the schematic, the basic flow through the gain stages is relatively easy to follow but it's difficult to imagine how the clean input signal from the guitar gets transformed into the square wave output signal which creates the fuzz sound.
</p>

<h2>Electronic Circuit Simulator</h2>
<p>
    The <a href="https://lushprojects.com/circuitjs/">Electronic Circuit Simulator from Lushprojects.com</a> (<a href="https://github.com/sharpie7/circuitjs1">source code</a>) is a web based circuit simulator derived from an original project from <a href="http://www.falstad.com/circuit/">falstad.com</a>. When a circuit is modelled and run in the simulator, it shows a visual animation of the electric current flow. Virtual oscilloscopes can also be added to observe the behaviour of the circuit.
</p>

<h2>Creating the Simulation</h2>
<p>
    The <a href="https://www.musikding.de/docs/musikding/factory/factoryschalt.pdf">schematic</a> for <a href="https://www.musikding.de/The-Factory-germanium-fuzz-kit">The Factory fuzz pedal kit</a> is available from the Musikding website as part of the set of build documents for the kit.
</p>
<figure class="photoFigure">
    <img alt="Musikding Die Factory Schematic" src="/content-electronics/images/musikding-germanium-fuzz/die-factory-schematic.webp" style="width:100%" />
    <figcaption>
        Musikding Die Factory Schematic
    </figcaption> 
</figure>
<br />

<p>
    Modelling the circuit in the simulator is a matter of working through the schematic, component by component, making sure to connect everything correctly. The web editor allows you to export circuit model as text (<a href="/content-electronics/factoryfuzz-pedal-circuitjs-source.txt">source model</a>) so that you can save and re-import it later.
</p>
<p>
    Oscilloscopes were added to the input and output signals, the resulting chart is shown at the bottom of the editor. The green sine wave is the input signal and the red asymmetric square wave is the output signal. When running in the simulator, the animation shows the current flow flipping between the output stage transistors as the square wave changes from high to low.		
</p>
<p>
    This asymmetric square wave is what gives the fuzz circuit it's distinctive sound. This is similar to the charts that others have created from analysing the <a href="https://www.electrosmash.com/fuzz-face">fuzz face</a> circuit.
</p>
<p>
    The potentiometers are labeled in the simulation as they are on the pedal: Vol, Gate, Comp, Drive, Stab. Their values can be adjusted using the sliders on the right hand side of the simulator and the changes can be observed in the scope charts in real-time.
</p>
<br />

<figure class="photoFigure">
    <img alt="Fuzz Guitar Pedal Simulation" src="/content-electronics/images/musikding-germanium-fuzz/fuzz-pedal-circuitjs-simulation-full.webp" style="width:100%" />
    <figcaption>
        Fuzz Guitar Pedal Simulation
    </figcaption> 
</figure>
<br />

<p>
    As with any model, this simulation propably isn't 100% accurate, however it's output does seem to be a reasonable representation. 
</p>
<p>
    The interactive circuit simulator is best viewed on larger screen devices, i.e. laptop, desktop monitor:
</p>
<ul>
    <li>
        <a href="/electronics/guitar-pedal-factory-fuzz-circuit-simulator">Factory Fuzz Guitar Pedal Circuit Simulator</a>
    </li>
</ul>
<br />
<br />

<div id="comments" class="comments"></div>