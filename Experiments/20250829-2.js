//     _____                                      
//    /__   \___  __ _  ___     /\/\   __ _  ___  
//      / /\/ __|/ _` |/ _ \   /    \ / _` |/ _ \ 
//     / /  \__ \ (_| | (_) | / /\/\ \ (_| | (_) |
//     \/   |___/\__,_|\___/  \/    \/\__,_|\___/ 
//
// Drum experiments 1
//                                                
// Created by: Tsao Mao
// Date: 8/29/2025
// License: Free reuse and derivation. Would prefer you credit me, if possible, by name at least if not ASCII banners.
//     No reuse willingly granted to fascists.
// Wordpress: https://geekblog.malcolmgin.com/strudel-repl/
// Gitlab Repo: https://github.com/tsaomao/strudel-repl-experiments/
// Tweaking inspired by Switch Angel
const dbank = "tr909"
setcps(140/60/4)
$: stack(
  s("bd*8")
  .bank(dbank)
  .gain(1.2)
  ._scope(),
  s("oh:1*8")
  .bank(dbank)
  .gain(0.2)
  ._scope(),
  ).gain(2)
   .mask("0 0 1 1 0 0 0 1")