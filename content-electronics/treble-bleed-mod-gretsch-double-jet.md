---
title: Treble Bleed Mod - Gretsch Double Jet
description: Adding a treble bleed to a Gretsch Double Jet
keywords: "gretsch,electromatic,double jet,treble bleed,G5445T,FilterTron"
date: 2022-12-13
permalink: "box/treble-bleed-mod-gretsch-double-jet/"
---

# {{ title }}

<p>
    The FilterTron pickups in my Gretsch G5445T are quite versatile, they can sound bright like single-coils and they can sound knarly like humbuckers when you dig in.
</p>
<p>
    However, like many people experience, the tone can darken quite a bit when the volume is rolled back. This may not bother some people or it may not be very noticable depending on the rig, but I found it very frustrating, especially when I wanted to vary the volume but also wanted the tone to remain consistent.
</p>
<p>
    Thankfully, this is a well known problem with a well known solution, called the Treble Bleed mod. Well, it's a solution with many variations, so you'll have to experiment to find the variation that works best for your guitar, your playing style, your desired sound. It's a (reversable) mod, where one or two components are added across the input and output lugs on the master volume pot of the guitar. 
</p>
<p>
    I'm not going to explain how it works here because it's very well documented already, i.e. <a href="https://www.youtube.com/watch?v=Z8-tTDzVQls">here</a>, <a href="https://www.youtube.com/watch?v=uxrFn1bekNQ">here</a> and <a href="https://www.seymourduncan.com/blog/latest-updates/3-popular-treble-bleed-mods-what-you-need-to-know">here</a>.				
</p>
<p>            
    There are three options; capacitor only, capacitor + resistor in parallel and capacitor + resistor in series. The tricky bit is deciding which option works best for you and which values for the capacitor and resistor to use.
</p>
<p>
    My general approach was to watch some video's and read some articles as a starting point and then experiment from there. For the capacitor, the smaller the value the more high/treble frequencies are let through. The FilterTron pickups are already quite bright so I didn't want to go too small, so I opted for a 2.2nF (nano-Farad) / 0.0022uF (micro-Farads) / 2200pF (pico-Farads) capacitor. 
</p>
<p>
    <em>Tip: crocodile clip wires make if really easy to experiment with different combinations.</em>
</p>
<p>
    The capacitor on it's own worked quite nicely as I started to reduce the volume (from full) but it became ear-piercing as the I dropped the volume right down, with too many high frequencies coming through. 
</p>
<p>
    This can be addressed by adding a resistor in parallel. A good starting point is to use a resistor that is roughly half the value of the pot i.e. 500K pot, therefore 250K&#8486; resistor. This does reduce the treble at lower volumes however it introduces another problem, it reduces the volume sweep of the pot, the volume changes very little from 10 to 2 and the changes a lot from 2 to 0. I tried several values between 200K&#8486; and 300K&#8486; but couldn't find one that I was happy with.
</p>
<figure class="photoFigure">
    <img alt="Experimenting with different combinations" src="/content-electronics/images/treble-bleed-mod/treble-bleed-mod-experimenting-200.webp" data-full-img="/content-electronics/images/treble-bleed-mod/treble-bleed-mod-experimenting.webp" />
    <figcaption>
        Experimenting with different combinations
    </figcaption>
</figure>
<p>
    This leaves the third option of a capacitor + resistor in series (AKA Kinman treble bleed). With this option, I found that the effect of the treble bleed was less pronounced, however the volume pot did retain a normal sweep. Again I tried multiple values for the resistor and settled on 100K&#8486;. This combination gives a nice balance with so I soldered these in place. I thought about adding a switch so I could toggle the treble bleed on and off but that is another project for another day!
</p>
<figure class="photoFigure">
    <img alt="Treble bleed mod soldered" src="/content-electronics/images/treble-bleed-mod/treble-bleed-mod-soldered-200.webp" data-full-img="/content-electronics/images/treble-bleed-mod/treble-bleed-mod-soldered.webp" />
    <figcaption>
        Treble bleed mod soldered
    </figcaption>
</figure>
<p>
    After the mod, it does take a little getting used to. The EQ controls on my amp and pedals needed some adjustments to compensate for the change, and some combinations of pedals sound slightly different, especially at lower volumes. Overall these changes were minor and it was well worth it to have more consistent tone as the guitar volume is reduced.
</p>
<figure class="photoFigure">
    <img alt="Treble bleed mod complete" src="/content-electronics/images/treble-bleed-mod/treble-bleed-mod-complete-200.webp" data-full-img="/content-electronics/images/treble-bleed-mod/treble-bleed-mod-complete.webp" />
    <figcaption>
        Treble bleed mod complete
    </figcaption>
</figure>
<br />

<div id="comments" class="comments"></div>