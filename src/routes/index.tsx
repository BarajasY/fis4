import { lazy, onMount } from "solid-js";
import Credits from "~/components/Credits/Credits";
import Header from "~/components/Header/Header";
import Main from "~/components/Main/Main";

export default function Home() {

  //Lazy loading in order for document to be available.
  onMount(() => {
    const Three = import("../three/index")
  })

  return (
    <main>
      <Credits />
      <Header />
      <Main />
    </main>
  );
}
