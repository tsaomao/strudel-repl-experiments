//     _____                                      
//    /__   \___  __ _  ___     /\/\   __ _  ___  
//      / /\/ __|/ _` |/ _ \   /    \ / _` |/ _ \ 
//     / /  \__ \ (_| | (_) | / /\/\ \ (_| | (_) |
//     \/   |___/\__,_|\___/  \/    \/\__,_|\___/ 
//                                                
// Remixed by: Tsao Mao
// Date: 8/28/2025
// License: Free reuse and derivation. Would prefer you credit me, if possible, by name at least if not ASCII banners.
// Wordpress: https://geekblog.malcolmgin.com/strudel-repl/
// Gitlab Repo: https://gitlab.com/tsaomao/strudel-repl-experiments
//
// From: https://strudel.cc/learn/synths/
samples('bubo:waveforms');
note("<[g3,b3,e4]!2 [a3,c3,e4] [b3,d3,f#4]>")
.n("<1 2 3 4 5 6 7 8>/2").room(0.5).size(0.9)
.s('wt_flute').velocity(0.25).often(n => n.ply(2))
.release(0.125).decay("<0.1 0.5 0.3 0.4>").sustain(0)
.cutoff(2000).cutoff("<500 1000 2000 4000>").fast(4)
._scope()