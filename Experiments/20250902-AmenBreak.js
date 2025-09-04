//     _____                                      
//    /__   \___  __ _  ___     /\/\   __ _  ___  
//      / /\/ __|/ _` |/ _ \   /    \ / _` |/ _ \
//     / /  \__ \ (_| | (_) | / /\/\ \ (_| | (_) |
//     \/   |___/\__,_|\___/  \/    \/\__,_|\___/
//                                                
// Created by: Tsao Mao
// Date: 9/4/2025
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
//           https://tidalcycles.org/docs/reference/mini_notation/
// DRAFT - Second approximation - Mini Notation
setCps (150/60/4)

$:  s("{~!48 ~!10 cr ~!5}/4")
  .bank("akaixr10")
  .gain(2)
  ._punchcard({ labels:1})
$: s("{{hh ~}!24 {hh ~}!5 ~!2 {hh ~}!2}/4")
  .bank("ace")
  .gain(0.15)
  ._punchcard({ labels:1})
$: s("{{~!4 sd ~ ~ sd ~ sd ~ ~ sd ~ ~ sd}!2 {~!4 sd ~ ~ sd ~ sd ~ ~ ~ ~ sd ~}!2}/4")
  .bank("9000")
  .gain(2.5)
  ._punchcard({ labels:1})
$: s("{{bd ~}!2 ~!6 bd!2 ~!4 {bd ~}!2 ~!6 bd!2 ~!4 {bd ~}!2 ~!6 bd ~ ~!6 bd!2 ~!6 bd ~!5}/4")
  .bank("9000")
  .gain(5)
  ._punchcard({ labels:1})
