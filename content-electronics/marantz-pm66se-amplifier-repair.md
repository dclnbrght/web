---
title: Marantz PM66SE Amplifier Repair
description: A restoration project to repair an old Marantz hi-fi amplifier
keywords: "marantz,PM66SE"
date: 2020-12-06
permalink: "box/marantz-pm66se-amplifier-repair/"
---

# {{ title }}

<img alt="Marantz PM66SE" src="/content-electronics/images/marantz-pm66se/marantz-pm66se-open-300.png" data-full-img="/content-electronics/images/marantz-pm66se/marantz-pm66se-open.png" class="article-image-primary" />
<p>
    This Marantz PM66SE (Special Edition) was given to me by a friend as he hadn't used it for a few years. The PM66SE was released in 1997 and it received favourable reviews at the time, with excellent sound quality for the price.
</p>
<p>
    It was working when I received it however there were some issues. It seemed to be low in output and the balance of the speakers wasn't even, although it we still usable with the balance control adjusted to one side.
</p>
<p>
    I used it for a while until the speaker protection relay started tripping periodically and eventually it wouldn't power up, so it was time to open it up.
</p>
<div id="toc" class="table-of-contents"></div>

    <div class="adBlock">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1545747396691566"
            crossorigin="anonymous"></script>
        <ins class="adsbygoogle"
            style="display:block; text-align:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-1545747396691566"
            data-ad-slot="9769321843"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </div>			
<h2>Research</h2>
<p>
    The <a href="https://www.vintageshifi.com/repertoire-pdf/pdf/telecharge.php?pdf=Marantz-PM-66-SE-Service-Manual.pdf">service manual</a> was easy to find on-line and there were some very useful forum posts and videos (<a href="https://www.youtube.com/watch?v=41I1Pz5tKfs">here</a> &amp; <a href="https://www.youtube.com/watch?v=4re-WVf4TI0">here</a>) which describe similar or common problems with these amplifiers.
</p>

<h2>Disassembly</h2>
<p>
    After opening it up and taking out the main board, an initial inspection revealed a few obvious things to investigate: 
</p>
<img alt="Marantz PM66SE - Disassembled" src="/content-electronics/images/marantz-pm66se/marantz-pm66se-disassembled-200.png" data-full-img="/content-electronics/images/marantz-pm66se/marantz-pm66se-disassembled.png" class="article-image" />
<ul class="">
    <li>
        a stacked resistor, what looked like a previous lazy repair! 
    </li>
    <li>
        nasty looking glue around the smoothing capacitors, which was spread over one of the resistors
    </li>
    <li>
        numerous dry/cracked solder joints on the under side of the main PCB
    </li>
    <li>
        the fuse at the power input was black, which explained why it wasn't powering up anymore
    </li>
</ul>

<h2>Repairs</h2>
<h3>Stacked Resistor - Position: R802</h3>
<p>				
    After referencing the service manual it was evident that the stacked resistor from the previous repair was bridging a blown fusible resistor, however it had an incorrect rating of 18&ohm;. It should have been a 47&ohm; 0.25W fusible resistor, so this was probably the cause of the balance issue. A fusible resistor with of the correct rating was sourced (<a href="https://ie.rs-online.com/web/p/through-hole-fixed-resistors/2671610/">FRN25J47R</a>) and fitted.				
</p>
<figure class="photoFigure">
    <img alt="Marantz PM66SE - Stacked Resistor Repair - Before" src="/content-electronics/images/marantz-pm66se/marantz-pm66se-stackedresistor-200.png" data-full-img="/content-electronics/images/marantz-pm66se/marantz-pm66se-stackedresistor.png" />
    <img alt="Marantz PM66SE - Stacked Resistor Repair - After" src="/content-electronics/images/marantz-pm66se/marantz-pm66se-stackedresistor-repair-200.png" data-full-img="/content-electronics/images/marantz-pm66se/marantz-pm66se-stackedresistor-repair.png" />
    <figcaption>
        Stacked resistor repair, Before and After
    </figcaption>
</figure>
<br />

<h3>Glue Contaminated Resistor - Position: RN12</h3>
<p>
    To gain access to the glue covered resistor, one of the large smoothing capacitors had to be removed temporarily. With it out of the way, the offending glue could be carefully scraped away. After removing the contaminated resistor I could see that the glue had corroded some of the contact on the under side of the PCB but there was just enough to solder a new resistor on to. The service manual was referenced and a new 100K&ohm; resistor was fitted.				
</p>
<figure class="photoFigure">
    <img alt="Marantz PM66SE - Glue Contamination Repair - Before" src="/content-electronics/images/marantz-pm66se/marantz-pm66se-gluecontamination-200.png" data-full-img="/content-electronics/images/marantz-pm66se/marantz-pm66se-gluecontamination.png" />
    <img alt="Marantz PM66SE - Glue Contamination Repair - After" src="/content-electronics/images/marantz-pm66se/marantz-pm66se-gluecontamination-repair-200.png" data-full-img="/content-electronics/images/marantz-pm66se/marantz-pm66se-gluecontamination-repair.png" />
    <figcaption>
        Glue contaminated resistor repair, Before and After
    </figcaption>
</figure>
<br />

<h3>Dry Solder Joints</h3>
<p>
    Numerous dry/cracked solder joints on the main board were re-soldered, mostly at the power input, speaker terminals and output transistors. Apparently this is a common problem with these amplifiers as they age.
</p>
<figure class="photoFigure">
    <img alt="Marantz PM66SE - Dry Solder Joint Repair - Before" src="/content-electronics/images/marantz-pm66se/marantz-pm66se-drysolder-200.png" data-full-img="/content-electronics/images/marantz-pm66se/marantz-pm66se-drysolder.png" />
    <figcaption>
        Dry solder joints on one of the output resistors (forgot to take an After photo)
    </figcaption>
</figure>
<br />

<h3>Speaker Protection Relay - Position: LN01</h3>
<p>
    Based on the various posts by others, it is advised to replace the speaker protection relay on these old amplifiers. The contacts become oxidised over time, causing them to trip, especially at low volumes.
</p>
<p>
    The original Takamisawa 24 VDC 5 Amp DPST-NO (Double Pole Single Throw - Normally Open) relay is discontinued but there are others with similar specifications.
    I should have ordered a DPNO (Double Pole Normally Open)(<a href="https://ie.rs-online.com/web/p/non-latching-relays/6838731/">G2R-2A 24DC</a>) relay but in error I ordered the DPDT (Double Pole Double Throw)(<a href="https://ie.rs-online.com/web/p/non-latching-relays/0366338/">G2R-2 24DC</a>). The DPDT has two additional contacts and pins for the Normally Open position, however since they are not used in this scenario the relay behaves the same as a DPNO once these pins are removed. 				
</p>
<figure class="photoFigure">
    <img alt="Marantz PM66SE - Relay Comparison" src="/content-electronics/images/marantz-pm66se/marantz-pm66se-relaycomparison-200.png" data-full-img="/content-electronics/images/marantz-pm66se/marantz-pm66se-relaycomparison.png" />
    <figcaption>
        The original and new speaker protection relays
    </figcaption>
</figure>
<br />			

<h3>Mains Fuse - Position: F001</h3>
<p>
    There were a few dry solder joints on the mains power board. A new T1.6A Amp 250V slow-blow fuse was sourced and fitted. 
</p>
<figure class="photoFigure">
    <img alt="Marantz PM66SE - Power Board" src="/content-electronics/images/marantz-pm66se/marantz-pm66se-powerboard-disassembled-200.png" data-full-img="/content-electronics/images/marantz-pm66se/marantz-pm66se-powerboard-disassembled.png" />
    <figcaption>
        Mains power board disassembled
    </figcaption>
</figure>


<h2>Adjustment &amp; Testing</h2>
<p>
    After reassembling the main board and back plate (which provides a common ground between the board and the chassis) it was ready to power up. Thankfully, the new speaker protection relay engaged as expected, and staying engaged while powered.
</p>
<p>
    The <a href="https://www.vintageshifi.com/repertoire-pdf/pdf/telecharge.php?pdf=Marantz-PM-66-SE-Service-Manual.pdf">service manual</a> describes how to measure (the voltage across R767 &amp; R768) and adjust the idling current via the adjustable resistors (at R755 &amp; R756).
    The values were quite close to the desired 14 mV, requiring only minor adjustment after the amplifier had warmed up. 
</p>
<p>
    The output voltage at the speaker terminals was also checked and found to be 8 mV at both channels, well within acceptable limits.
</p>
<figure class="photoFigure">
    <img alt="Marantz PM66SE - Reassembled" src="/content-electronics/images/marantz-pm66se/marantz-pm66se-reassembled-200.png" data-full-img="/content-electronics/images/marantz-pm66se/marantz-pm66se-reassembled.png" />
    <figcaption>
        Reassembled &amp; cleaned
    </figcaption>
</figure>

<h2>Conclusion</h2>
<p>
    The amplifier is now back on the stand where it belongs and it sounds great, the balance problem has been resolved and its output level is back to normal. The parts cost about the same as a sandwich and it was an interesting project to work on, so well worth doing. Hopefully it will last for a few more years.
</p>
<img alt="Marantz PM66SE" src="/content-electronics/images/marantz-pm66se/marantz-pm66se.png" data-full-img="/content-electronics/images/marantz-pm66se/marantz-pm66se.png" style="width:100%" />
			


<div id="comments" class="comments"></div>