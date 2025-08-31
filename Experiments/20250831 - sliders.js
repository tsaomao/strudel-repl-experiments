//     _____                                      
//    /__   \___  __ _  ___     /\/\   __ _  ___  
//      / /\/ __|/ _` |/ _ \   /    \ / _` |/ _ \ 
//     / /  \__ \ (_| | (_) | / /\/\ \ (_| | (_) |
//     \/   |___/\__,_|\___/  \/    \/\__,_|\___/ 
//                                                
// Created by: Tsao Mao
// Date: 8/31/2025
// License: Free reuse and derivation. Would prefer you credit me, if possible, by name at least if not ASCII banners.
//     No reuse willingly granted to fascists.
// Wordpress: https://geekblog.malcolmgin.com/strudel-repl/
// Gitlab Repo: https://github.com/tsaomao/strudel-repl-experiments/
// Tweaking inspired by LearningTheWires
setCps(150/60/4)

// == SLIDERS ==
// -- Roller Bass--
const BASS_ROLL_GAIN   = slider(0.7, 0.1, 1, 0.1)
const BASS_ROLL_LPF    = slider(1200, 300, 8000, 300)
const BASS_ROLL_HPF    = slider(240, 80, 800, 80)
const BASS_ROLL_DECAY  = slider(0.15, 0.05, 0.5, 0.05)
const BASS_ROLL_ROOM   = slider(0.22, 0.0, 1, 0.01)
const BASS_ROLL_DELAY  = slider(0.1, 0.0, 0.5, 0.01)
const BASS_ROLL_COARSE = slider(4, 1, 12, 1)

// -- Deep Sub Bass --
const BASS_SUB_GAIN    = slider(0.8, 0.1, 1, 0.1)
const BASS_SUB_LPF     = slider(800, 200, 4000, 100)
const BASS_SUB_HPF     = slider(200, 50, 800, 50)
const BASS_SUB_DECAY   = slider(0.25, 0.05, 0.5, 0.05)
const BASS_SUB_ROOM    = slider(0.22, 0.0, 1, 0.01)
const BASS_SUB_STRUCT  = "<x!16>"

// -- Drum Sliders --
const KICK_GAIN        = slider(0.559, 0.1, 1)
const CLAP_GAIN        = slider(0.7831, 0.1, 1)
const HAT_GAIN         = slider(0.703, 0.1, 1)
const OHAT_GAIN        = slider(0.6391, 0.1, 1)
const SHAKE_GAIN       = slider(0.2548, 0.1, 1)

const BASSLINE_ROLLER = note("f#3 a3 c#4 d4 a3 d4 f#3 a3")
.sound("sawtooth")
.gain(BASS_ROLL_GAIN)
.lpf(BASS_ROLL_LPF)
.hpf(BASS_ROLL_HPF)
.decay(BASS_ROLL_DECAY)
.coarse(BASS_ROLL_COARSE)
.delay(BASS_ROLL_DELAY)
.struct("x!8")
.room(BASS_ROLL_ROOM)
._punchcard({ width:600, height:100})

const BASSLINE_SUB = note("d2 d3 <a2 a3> f#2 c#3")
.sound("gm_synth_bass_1")
.gain(BASS_SUB_GAIN)
.lpf(BASS_SUB_LPF)
.hpf(BASS_SUB_HPF)
.decay(BASS_SUB_DECAY)
.struct("x-")
.slow(2)
.room(BASS_SUB_ROOM)
._punchcard({ width:600, height:100 })

// -- Rhythm Patterns --
const KICK  = s("tr808_bd:3").struct("x---x---x-x---x-").gain(KICK_GAIN)
const CLAP  = s("tr808_sd:5").struct("----x-------x---").gain(CLAP_GAIN)
const HATS  = s("tr808_hh:0").struct("x.x.x.x.x.x.x.x.").gain(HAT_GAIN)
const OHATS = s("tr808_oh:2").struct("--------x-------").gain(OHAT_GAIN)
const SHAKE = s("tr808_shake").struct("x-x-xx-x-x-xx-x-").gain(SHAKE_GAIN)

stack(BASSLINE_ROLLER, BASSLINE_SUB, KICK, CLAP, HATS, OHATS, SHAKE)