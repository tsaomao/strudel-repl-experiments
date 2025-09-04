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
// DRAFT - Third approximation - Mini Notation and cat
setCps (150/60/4)

const C1 = "~!16"
const C4 = "~!10 cr ~!5"
const R1 = "{hh ~}!8"
const R4 = "{hh ~}!5 ~!2 {hh ~}!2"
const S1 = "~!4 bd ~!2 {bd ~}!2 ~ bd ~!2 bd"
const S3 = "~!4 bd ~!2 {bd ~}!2 ~!3 bd ~"
const S4 = "~ {bd ~ ~}!2 {bd ~}!2 ~!3 bd ~"
const B1 = "{bd ~}!2 ~!6 bd!2 ~!4"
const B3 = "{bd ~}!2 ~!6 bd ~!5"
const B4 = "~!2 bd!2 ~!6 bd ~!5"

$:  s(cat(C1, C1, C1, C4))
  .bank("akaixr10")
  .gain(2)
  ._punchcard({ labels:1})
$: s(cat(R1, R1, R1, R4))
  .bank("ace")
  .gain(0.15)
  ._punchcard({ labels:1})
$: s(cat(S1, S1, S3, S4))
  .bank("9000")
  .gain(2.5)
  ._punchcard({ labels:1})
$: s(cat(B1, B1, B3, B4))
  .bank("9000")
  .gain(2.5)
  ._punchcard({ labels:1})
