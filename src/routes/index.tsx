import { lazy, onMount } from "solid-js";
import Header from "~/components/Header/Header";
import Main from "~/components/Main/Main";

export default function Home() {

  //Lazy loading in order for document to be available.
  onMount(() => {
    const Three = import("../three/index")
  })
  return (
    <main>
      <Header />
      <Main />
    </main>
  );
}
