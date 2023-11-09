import { AtomicNumber, CurrentElement, setAtomicNumber, setCurrentElement } from "~/three/signals";
import "./Header.scss";
import { createEffect } from "solid-js";
import elements from "~/three/elements";

const r0 = 1.25E-15

export default function Header() {

  createEffect(() => {
    setCurrentElement(elements.get(AtomicNumber()!))
  }, [AtomicNumber()])

  return (
    <div class="header">
      <div class="element">
        <h1 class="name">Elemento: <span>{CurrentElement()}</span></h1>
        <p class="radius">Radio Nuclear = <span>{r0 * (Math.pow(AtomicNumber(), .33))} m</span></p>
      </div>
      <div class="slider">
        <p class="title">Ajuste el número atómico</p>
        <input
          type="range"
          name="ma"
          class="input"
          min={1}
          max={118}
          value={1}
          onchange={(e) => setAtomicNumber(Number(e.target.value))}
          oninput={(e) => setAtomicNumber(Number(e.target.value))}
          />
        <p class="number">Número Atòmico: {AtomicNumber()}</p>
      </div>
    </div>
  );
}
