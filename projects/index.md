# Projects


00:00:57,265 --> 00:00:58,975
- Seq, I'm in.
- Captain.

00:00:59,058 --> 00:01:00,310
- You were right.

00:01:00,393 --> 00:01:01,811
- The skylight was a window pane.

00:01:01,895 --> 00:01:03,396
- I've got serious interference.

00:01:03,480 --> 00:01:04,814
- Weird. It's some kind of Modal.

00:01:04,898 --> 00:01:06,691
- Looks like old code.

00:01:06,775 --> 00:01:08,151
- It feels really familiar.

00:01:08,234 --> 00:01:09,986
- Drop a pin. I'll signal for backup.

00:01:10,069 --> 00:01:11,738
- I'm gonna check it out.
- -Bugs?

00:01:11,821 --> 00:01:13,031
- If the general finds out we've been fishing...

00:01:13,114 --> 00:01:14,783
- A quick peek can't hurt.

00:01:14,866 --> 00:01:16,159
- Did you hear that?

00:01:16,242 --> 00:01:17,619
- Shit. I think our signal was traced.

00:01:17,702 --> 00:01:19,829
- Bugs, this feels like a trap.

00:01:19,913 --> 00:01:21,039
- Bugs!

# Hacking the Telcos...

## Hacking 2G (Fooling MS : Mobile Station, the 2G phone)

Easy ! The MS doesn’t ask authentication from BTS (Base Transceiver Station, the relay antenna). So what to do to intercept ? Be a BTS… and
that’s all just spoof the public values of the BTS (mcc,mnc exemple 208,15 for FreeMobile 208,01 for Orange, etc) and broadcast a stronger
signal and it is done. How the implement a 2G BTS ? there are open-sourced projects like

[![](https://umtrx.org/wp/wp-content/uploads/2013/11/osmocom_logo.png)](https://github.com/osmocom) (OpenBSC Osmo-Trx Osmo-Bts… EOL but usefull) or (Network in the Box Updated)

[![](https://avatars.githubusercontent.com/u/6938234)](https://github.com/RangeNetworks/openbts) 

[![](https://i0.wp.com/yatebts.com/wp-content/uploads/2018/11/500px-YateBTS_Linux_Yate_2015-12-08.png)](https://github.com/vir/yate)

To install it I have scripted it for example for OpenBSC : 

**Radio-Frequencies Protocols :**

A protocol is for computing (quoted from Oxford langage):  

> " A set of rules governing the exchange or transmission of data between devices." ![Oxford Langage](https://www.oed.com/)

The goal like it is said is to make travel information from A-\>B, and (maybe) then B-\>A etcaetera. This information has a weight and it has to move so : energy is spent, at least F(A-\>B). Another goals came obviously from the first depending on
the case of use : spending the less energy possible, have the maximum range, transmit the most data possible, have the best yield, and be the most secure possible (I mean by that, that it can’t be understood by a
machine or an human on an undesired endpoint in a reasonable time at least at the time of conception and from the projected advances in technology), there are also another important points the latency, and
the errors between the message sent and received. We will begin by enumerate some radio protocols, begin by saying their purpose. Then we
gonna try to classify theses protocols by energy, data (raw and useful payload), power, range, frequencies and yield, security, latency, and
error.

**List (non-exhaustive) of Protocols**

Protocol | Purpose
RFID | Traceabitlity / Static Information Exchange
NFC | Bank Operations / Static Information Exchange
GSM/GPRS*/EDGE* | Calls / SMS / Internet
UMTS/HSPA/HSPA_advanced | Calls / SMS / Internet
LTE/LTE_Advanced|Calls / SMS / Internet / IoT 
5G SA/NSA   | Calls / SMS / Internet / IoT 
Wifi| Internet / LAN / Calls (VoWifi)
Bluetooth   | Data exchange / Pairing devices
LoRa/SigFox | Data exchange / IoT
GPS/Galileo | Geolocalization


**Radio-Telephony**

- **Example of SFR:**

**Article 1**

– The French Radiotelephone Company ("Société Française de Radiotéléphonie") is authorized to use, in the 900 and 1800 MHz bands,
the frequencies allocated to it in Article 2 of this decision to establish and operate a radio network open to the public in metropolitan
France. For this, it complies with the provisions of the specifications located in appendix 2 of this decision.

**Article 2**

– The GSM channels allocated to the French Radiotelephone Company are,
in accordance with the definitions in appendix 1:

-   in the 900 MHz band, throughout mainland France: channels 75 to 124;
-   in the 900 MHz band, only in very dense areas: channels 63 to 74;
-   in the 1800 MHz band, throughout mainland France: channels 512 to
525 and 647 to 751

For others Operator (GSM)

 Operator GSM900  | DCS1800
---------------------------
Orange   1→62 | 527→646
SFR  63-74 & 75-124 | 512→525 & 647→751
Bouygues 975-1023 | 752-885

Free = ? (Free didn’t invest much in 2G antenna since 2G will die in 2025 in France the use Orange roaming )


# **A5/1 Cracking**

Download the tables :

[a51_tables](assets/https://infocon.org/rainbow%20tables/A51/)

