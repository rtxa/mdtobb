# Half-Life: Zombie Mod X

![Author](https://img.shields.io/badge/Author-rtxA-red) ![Version](https://img.shields.io/badge/Version-1.1-red) ![Last Update](https://img.shields.io/badge/Last%20Update-27/9/2019-red)

## ☉ Description

Zombie Mod X is a server-side modification for Half-Life. The game-play is a classic zombie outbreak scenario. Each round, a player is infected with a virus and he must infect the others in order to multiply. Round is won by exterminating the opposing force.

### ☉ Infection mode

- Humans spawns in different locations, the virus is released after a while and someone turns out into a zombie.
- Zombies must infect all humans to win.
- Humans must eliminate all zombies to win.
- Every infection gives you one frag, every zombie you kill gives you five frags.

## ☰ Commands

### ☉ General

- **zx_restart** - *restart the round.*
- **zx_setzombie** [name or #userid] - *turns you or the specified player into a zombie.*
- **zx_sethuman** [name or #userid] - *turns you or the specified player into a human.*
- **zx_debug** [0/1] - *shows useful information to debug the plugin.*
- **zx_light** [a-z] - *sets the map lighting level. [a = brightness; m = default; z = darkness]. Default: "f".*
- **zx_sky** "blood_" - *sets the map sky. If you leave it empty, the sky of the map will remain unchanged.*
- **zx_minplayers** [0-32] - *minimum players to start a round. Default: 2*
- **zx_firstroundtime** 15 - *countdown to start the first round (in seconds).*
- **zx_roundtime** 240 - *sets how many seconds longs the round.*
- **zx_freezetime** 3 - *sets how many seconds longs freeze period.*
- **zx_hud_x** [-1.0 **-** 1.0] - *sets position of HUD that shows player status on X axis.*
- **zx_hud_y** [-1.0 - 1.0] - *sets position of HUD that shows player status on Y axis.*
- **zx_hud_color** "r g b" - *sets color of HUD that shows player status.*
- **zx_nightvision_color** "r g b" - *sets color of nightvision on zombies.*

### ☉ Zombie

- **zombie_health** 500 - *zombie health points.*
- **zombie_armor** 250 - *zombie armor points.*
- **zombie_gravity** 0.5 - *zombie gravity.*
- **zombie_maxspeed** 360 - *zombie max speed.*
- **zombie_frags_infection** 1 - *frags given by infecting a human.*

### ☉ Human

- **human_health** 100 - *human health points.*
- **human_armor** 0 - *human armor points.*
- **human_gravity** 1.0 - *human gravity.*
- **human_maxspeed** 300 - *human max speed.*
- **human_frags_kill** 5 - *frags given by killing a zombie.*

## ☉ Preview

[youtube]W2CXI91Flxo[/youtube]

## ☰ Requirements

- [AMX Mod X 1.9](https://www.amxmodx.org/downloads-new.php) or newer.

## ⚙ Installation

- **Download** files *resources.zip* and *zx\_plugin\_\** and **extract** their content inside of the folder *valve* (e.g. "C:\Half-Life\valve").
- **Compile** the file *zx.sma* and **paste** it (*zx.amxx*) in plugins folder ("valve/addons/amxmodx/plugins").
- **Go to** configs folder ("valve/addons/amxmodx/configs"), open *plugins.cfg* and **add** a line at the end that says *zx.amxx debug* and save it.
- In the folder *valve*, **open** the file *server.cfg* and **add** those commands at the end, separated line by line.

```php
mp_teamplay 1
mp_teamlist "hgrunt;zm_cso_host"
mp_defaultteam 1 // blocks change team
sv_maxspeed 400 // increase it to allow zombies to use custom speed.
```

## ⛏ To do

- ☑ Add **night-vision** for zombies.
- ☐ Add **zombie classes** (use HL Player Models API).
- ☐ Add **more modes** (Nemesis, Survivor, etc.).
- ☐ Create an **API** to **increase** plugin extensibility.

## ☉ Notes

- The mod has **multi-language** support. You can translate the plugin into any language editing **zx.txt** and **zx_help.txt** in lang's folder.
- Ambience music is **not** included but you can **add** one by yourself. Just name a MP3 file to "ambience1.mp3" and **save it** in "valve/sound/zx/".

## ⚛ Additional plugins

- **Double Jump for zombies** (you can find it on attachments).

## ☆ Thanks to:

- **Anggara_Nothing**, when I started, his HLZM help me to understand better about how to create plugins for HL, etc.
- **Koshak** - Port to HL of zombie model from CSO.

Most of resources are from **CSO**.

## ☉ Available Languages:

- English and Spanish - [rtxA](https://forums.alliedmods.net/member.php?u=284439)
- Turkish - [quLeryuzz](https://forums.alliedmods.net/member.php?u=77648)
- Finish - [rautamiekka](https://forums.alliedmods.net/member.php?u=46690)
- Albanian - [thEsp](https://forums.alliedmods.net/member.php?u=281156)
- Macedonian - [OciXCrom](https://forums.alliedmods.net/member.php?u=239716)

