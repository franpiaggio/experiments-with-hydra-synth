const r = (min, max) => !max ? Math.floor(fxrand() * min).toFixed(2) : Math.floor(fxrand() * (max - min + 1) + min).toFixed(2)
const rl = l => l[Math.floor(fxrand() * l.length)]
const sources = [
    {
        name: "Awesome oscilator 👾",
        code: () => `osc(4, 0.5, ${r(2, 4)})`
    },
    {
        name: "Totally normal oscilator",
        code: () => `osc(10, 0.5, 0.5)`
    },
    {
        name: "Super boring oscillator",
        code: () => `osc(10, 0.5, 2)`
    },
    {
        name: "Noisy Pixels",
        code: () => `noise(10, 0.5, 0.5).pixelate(20)`
    },
    {
        name: "Super cool voronoi distorted with noise",
        code: () => `voronoi(5., 0.3, 0.3).modulate(noise(10, 0.2, 2))`
    }
]
const effects = [
    {
        name: "modulated with pixel noise",
        code: () => `.modulate(noise(4, 0.2, 1).pixelate( ${r(4, 8)} ))`
    },
    {
        name: "with a rotating Kaleid",
        code: () => `.kaleid(${r(2, 3)})`
    },
    {
        name: "repeating over x axis",
        code: () => `.modulateRepeatX(osc(${r(4, 10)}), 5.0, ({time}) => Math.sin(time * 0.02) * 5)`
    },
    {
        name: "with a little bit of blur",
        code: () => `.blend(o0, 0.5).blend(o0, 0.5)`
    },
    {
        name: "rotating a lot",
        code: () => `.modulateRotate(osc(1,0.5,0).kaleid(50).scale(0.5),15,0).mult(osc(50,-0.1,8).kaleid(9))`
    }
]

export { sources, effects, r, rl }