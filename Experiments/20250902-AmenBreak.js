//     _____                                      
//    /__   \___  __ _  ___     /\/\   __ _  ___  
//      / /\/ __|/ _` |/ _ \   /    \ / _` |/ _ \ 
//     / /  \__ \ (_| | (_) | / /\/\ \ (_| | (_) |
//     \/   |___/\__,_|\___/  \/    \/\__,_|\___/ 
//                                                
// Created by: Tsao Mao
// Date: 9/2/2025
// License: Free reuse and derivation. Would prefer you credit me, if possible, by name at least if not ASCII banners.
//     No reuse willingly granted to fascists.
// Wordpress: https://geekblog.malcolmgin.com/strudel-repl/
// Gitlab Repo: https://github.com/tsaomao/strudel-repl-experiments/
// Goal: Synthesize ubiquitous Amen Break
// Drum pattern:
// C |----------------|----------------|----------------|----------X-----|
// R |x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x---x-x-|
// S |----o--o-o--o--o|----o--o-o--o--o|----o--o-o----o-|-o--o--o-o----o-|
// B |o-o-------oo----|o-o-------oo----|o-o-------o-----|--oo------o-----|
// per: https://www.elephantdrums.co.uk/blog/guides-and-resources/amen-break-drum-groove/
// See also: https://ukf.com/read/10-things-you-need-to-know-about-the-amen-break/
//
// DRAFT - can't get drumbeat notation to work properly
setCps (150/60/4)

const CPATTERN = "----------------------------------------------------------x-----"
const RPATTERN = "x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x---x-x-"
const SPATTERN = "----x--x-x--x--x----x--x-x--x--x----x--x-x----x--x--x--x-x----x-"
const BPATTERN = "x-x-------xx----x-x-------xx----x-x-------x-------xx------x-----"

const CLAP_GAIN            = slider(2.354, 0.1, 5)
const RIM_GAIN             = slider(2.4226, 0.1, 5)
const SNARE_GAIN           = slider(2.8538, 0.1, 5)
const BASS_DRUM_GAIN       = slider(3.1919, 0.1, 5)

const CLAP       = s("tr808_cr").struct(CPATTERN).gain(CLAP_GAIN)
const RIM        = s("tr808_rd").struct(RPATTERN).gain(RIM_GAIN)
const SNARE      = s("tr808_sd").struct(SPATTERN).gain(SNARE_GAIN)
const BASS_DRUM  = s("tr808_bd").struct(BPATTERN).gain(BASS_DRUM_GAIN)

stack(
      BASS_DRUM, 
      CLAP, 
      RIM, 
      SNARE,
     )

