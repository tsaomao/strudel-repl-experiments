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
// DRAFT - First approximation - long form, every hit mapped out in 4 measures
setCps (150/60/4)

$CLAP: s("<- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - cr - - - - ->*16")
  .bank("akaixr10")
  .gain(5)  
$RIM: s("<hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - hh - - - hh - hh ->*16")
  .bank("ace")
  .gain(1)
$SNARE: s("<- - - - sd - - sd - sd - - sd - - sd - - - - sd - - sd - sd - - sd - - sd - - - - sd - - sd - sd - - - - sd - - sd - - sd - - sd - sd - - - - sd ->*16")
  .bank("9000")
  .gain(2.5)
$BASS_DRUM: s("<bd - bd - - - - - - - bd bd - - - - bd - bd - - - - - - - bd bd - - - - bd - bd - - - - - - - bd - - - - - - - bd bd - - - - - - bd - - - - ->*16")
  .bank("9000")
  .gain(5)
  .sustain(2)
