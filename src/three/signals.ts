import { createSignal } from "solid-js";
import { Mesh } from "three";

export const [Electron, setElectron] = createSignal<Mesh>();
export const [Nucleus, setNucleus] = createSignal<Mesh>();
export const [AtomicNumber, setAtomicNumber] = createSignal<number>(1);
export const [NuclearRadius, setNuclearRadius] = createSignal<number>(0);
export const [CurrentElement, setCurrentElement] = createSignal<string>();
