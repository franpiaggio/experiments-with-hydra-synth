import Hydra from 'hydra-synth'
import { sources, effects, r, rl } from "./sources"
const options = { 
  detectAudio: false,
  width: window.innerWidth,
  height: window.innerHeight
}

const hydraInstance = new Hydra(options)
const generateAndRun = () => {
  // 1. Pick 1 surce
  let source = [rl(sources)]
  // 2. Add N effects
  const effectsCount = r(2,4)
  for(let i = 0; i < effectsCount; i++){
    source.push(rl(effects))
  }
  // 3. Get the code and names
  let finalCode = source.map(source => source.code()).join("")
  finalCode += ".out()"
  const finalText = source.map(source => source.name).join("\n 👉 ")
  document.getElementById("code").innerText = finalText
  eval(finalCode)
}

generateAndRun()
document.addEventListener("click", () => {
  generateAndRun()
})