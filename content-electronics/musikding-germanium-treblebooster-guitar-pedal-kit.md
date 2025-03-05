---
title: Building a Musikding Germanium Treblebooster Guitar Pedal Kit
description: Building a Musikding Germanium Treblebooster Guitar Pedal Kit
keywords: "guitar,treblebooster,pedal,germanium"
date: 2021-03-03
permalink: "box/musikding-germanium-treblebooster-guitar-pedal-kit/"
---

# {{ title }}

<p>
    <a href="https://www.musikding.de/The-Range-Germanium-Treblebooster-kit">The Range - Germanium Treblebooster kit</a> from Musikding is based on the famous <a href="https://www.electrosmash.com/dallas-rangemaster">Dallas Rangemaster Treble Booster</a>. The Rangemaster was used by many great guitar players including; <a href="https://rorygallagher.com/treble-booster/">Rory Gallagher</a> &amp; <a href="https://fryerguitars.com/history-of-brian-mays-treble-boosters-and-pedalboard-used-with-queen-from-1970-to-around-1986/">Brian May</a>, to create a driving lead tone.
</p>
<p>
    The base kit can be purchased without a pedal enclosure and knobs, however they provide an option to purchase a blank or pre-drilled 125B enclosure, and they also stock a wide variety of knobs. I opted for a pre-drilled enclosure and a <a href="https://www.musikding.de/Black-Fluted-Yellow-Center-20mm">black fluted yellow center bakelite knob</a>.
</p>
<figure class="photoFigure">
    <img alt="Rangemaster Guitar Pedal - Kit" src="/content-electronics/images/musikding-range-treblebooster/guitar-pedal-kit-200.webp" data-full-img="/content-electronics/images/musikding-range-treblebooster/guitar-pedal-kit.webp" />
    <figcaption>
        Treblebooster Guitar Pedal - Kit
    </figcaption>
</figure>
<p>
    The build documents are available on their website, these include: Installation guide, Schematic, Wiring layout &amp; Parts list. 
</p>

<h2>Preparing the Enclosure</h2>
<p>
    I sprayed the enclosure with several coats of matt black paint. In a tribute to one of my favourite guitarists; Rory Gallagher, I named the pedal <i>"Rory"</i>, using some yellow acrylic paint.  
</p>
<figure class="photoFigure">
    <img alt="Guitar Pedal Enclosure - Painted" src="/content-electronics/images/musikding-range-treblebooster/guitar-pedal-enclosure-painted-200.webp" data-full-img="/content-electronics/images/musikding-range-treblebooster/guitar-pedal-enclosure-painted.webp" />
    <figcaption>
        Pedal Enclosure - Painted
    </figcaption>
</figure>
<br />

<h2>Assembling the PCB</h2>
<p>
    While the paint was drying on the enclosure I got on with soldering the components to the main PCB. 
    The PCB is quite small but there aren't many components so it's relatively easy to assemble. The volume potentiometer and toggle switch are also mounted on the main PCB. 
<p>
    The footswitch has a separate PCB which keeps the wiring tidy, the LED is also connected to this board when it is mounted.  
</p>
<figure class="photoFigure">
    <img alt="Treblebooster Guitar Pedal - PCB Assembled" src="/content-electronics/images/musikding-range-treblebooster/guitar-pedal-pcb-assembled-200.webp" data-full-img="/content-electronics/images/musikding-range-treblebooster/guitar-pedal-pcb-assembled.webp" />
    <img alt="Treblebooster Guitar Pedal - PCB Wired" src="/content-electronics/images/musikding-range-treblebooster/guitar-pedal-footswitch-pcb-assembled-200.webp" data-full-img="/content-electronics/images/musikding-range-treblebooster/guitar-pedal-footswitch-pcb-assembled.webp" />
    <figcaption>
        Pedal PCBs - Assembled &amp; Wired
    </figcaption>
</figure>
<br />

<h2>Assembling the Pedal</h2>
<p>
    The LED (&amp; bezel) must be fitted before the footswitch, making it quite fiddly to get the LED pins through the holes on the underside of footswitch PCB, it's like shooting in the dark so this takes some patience. 
</p>
<p>
    Refer to the schematic document to find the correct position for the transistor socket for your transistor type.
    The germanium transistor is quite tall when installed in the socket, is has to be bent over to allow the base plate of the enclosure to fit into place. 				
</p>
<p>
    I generally power my pedals using the DC power jack but there is plenty of room in the enclosure for a 9v battery.
</p>			
<figure class="photoFigure">				
    <img alt="Treblebooster Guitar Pedal - Off-Board Wiring Complete" src="/content-electronics/images/musikding-range-treblebooster/guitar-pedal-assembled-200.webp" data-full-img="/content-electronics/images/musikding-range-treblebooster/guitar-pedal-assembled.webp" />
    <figcaption>
        Guitar Pedal - Wiring &amp; Assembly
    </figcaption>
</figure>
<br />

<h2>Time to play</h2>	
<p>
    Currently, I don't have a guitar with single-coil pickups so I can't demonstrate that famous single coil tone. However, here are some recorded samples using my Gretsch on the bridge pickup (Filter'Tron), straight into the pedal, through an audio interface and into a computer. 
</p>
<p>
    The toggle switch on the pedal changes how the signal flows through the three input capacitors, changing the shape of the tone. The lower the capacitance, the more bass and mid tones are filtered from the signal.
</p>
<br />

<h3>Down Position</h3>
<p>
    <b>3.3nF + 2.2nF capacitors</b>: this position is the closest to the 5nF capacitor in the original Rangemaster. 
</p>
<div style="text-align:center">
    <audio controls>
            <source src="/content-electronics/images/musikding-range-treblebooster/RangeTrebleboosterDemo-ToggleDown.ogg" type="audio/ogg" />
            Your browser does not support the audio tag.
    </audio>
</div>

<h3>Middle Position</h3>
<p>
    <b>3.3nF capacitor</b>: the lower capacitance in this position removes more of the mids, resulting in an intense treble tone.
</p>
<div style="text-align:center">
    <audio controls>
            <source src="/content-electronics/images/musikding-range-treblebooster/RangeTrebleboosterDemo-ToggleMiddle.ogg" type="audio/ogg" />
            Your browser does not support the audio tag.
    </audio>
</div>

<h3>Up Position</h3>
<p>
    <b>3.3nF + 6.8nF capacitors</b>: this position widens the range, keeping more mids, but still with plenty of treble. This is the best option when you're playing without a bass player and drummer.
</p>
<div style="text-align:center">
    <audio controls>
            <source src="/content-electronics/images/musikding-range-treblebooster/RangeTrebleboosterDemo-ToggleUp.ogg" type="audio/ogg" />
            Your browser does not support the audio tag.
    </audio>
</div>

<h2>
    The End Result
</h2>
<figure class="photoFigure">
<img alt="Treblebooster Guitar Pedal" src="/content-electronics/images/musikding-range-treblebooster/guitar-pedal-complete.webp" style="width:100%" />
    <figcaption>
        Guitar Pedal - Complete
    </figcaption> 
</figure>
<br />
<p>
    The kit is of good quality and it's easy to assemble. The end result is a really nice pedal which compliments the others on my pedalboard. The tone is quite clean when the guitar volume is below 95%, but it can be thickened up by stacking another drive pedal after it. Now I just need to buy a <a href="https://guitar.com/features/artist-rigs/rare-guitars-rory-gallaghers-1961-fender-stratocaster/">beaten up strat</a>!
</p>			
<p>
    To get a better understanding of how this circuit works, see:
</p>
<ul>
    <li>
        <a href="/electronics/guitar-pedal-range-treblebooster-circuit-simulator">Range Treblebooster Guitar Pedal Circuit Simulation</a>
    </li>
</ul>
<br />
<br />

<div id="comments" class="comments"></div>