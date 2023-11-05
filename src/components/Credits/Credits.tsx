import { Show, createSignal } from "solid-js";
import { ImCancelCircle } from 'solid-icons/im'
import "./Credits.scss";

export default function Credits() {

  const [ShowCredits, setShowCredits] = createSignal<boolean>(true)

  return (
    <Show when={ShowCredits()}>
      <div class="credits-container">
        <div class="credits">
          <ImCancelCircle
            class="close"
            onclick={() => setShowCredits(false)}
          />
          <div class="name">
            <p class="one">Yahir Moreno Barajas</p>
            <p class="two">2128081</p>
          </div>
          <div class="name">
            <p class="one">Jesús Martínez Rodríguez</p>
            <p class="two">2024378</p>
          </div>
          <div class="name">
            <p class="one">Luis Oswaldo Gutiérrez Cuellar</p>
            <p class="two">2072149</p>
          </div>
          <div class="name">
            <p class="one">Efren Romeo Hiracheta Hernández</p>
            <p class="two">1915961</p>
          </div>
        </div>
      </div>
    </Show>
  );
}
