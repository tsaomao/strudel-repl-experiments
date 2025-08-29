//     _____                                      
//    /__   \___  __ _  ___     /\/\   __ _  ___  
//      / /\/ __|/ _` |/ _ \   /    \ / _` |/ _ \ 
//     / /  \__ \ (_| | (_) | / /\/\ \ (_| | (_) |
//     \/   |___/\__,_|\___/  \/    \/\__,_|\___/ 
//                                                
// Created by: Tsao Mao
// Date: 8/28/2025
// License: Free reuse and derivation. Would prefer you credit me, if possible, by name at least if not ASCII banners.
//     No reuse willingly granted to fascists.
// Wordpress: https://geekblog.malcolmgin.com/strudel-repl/
// Gitlab Repo: https://github.com/tsaomao/strudel-repl-experiments/
// Tweaking inspired by Switch Angel
setcps(140/60/4)

$: note("d3*4")
  .s("pulse").distort("3:0.3")
  .lpf("800 1000 500 200")
  ._scope()