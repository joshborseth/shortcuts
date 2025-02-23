import { createSignal, type Component } from "solid-js";
import { createKeyboardNavigator, KeyboardNavigator, useKeyboardNavigator } from "./lib/keyboard-navigator";
import { Checkbox } from "./components/ui/checkbox";
import { For } from "solid-js";

type Issue = {
  focus?: boolean;
  title: string;
};

const App: Component = () => {
  const [issues] = createSignal<Issue[]>([
    { title: "Issue 1" },
    { title: "Issue 2" },
    { title: "Issue 3" },
    { title: "Issue 4" },
    { title: "Issue 5" },
    { title: "Issue 6" },
    { title: "Issue 7" },
    { title: "Issue 8" },
    { title: "Issue 9" },
  ]);

  const navigator = createKeyboardNavigator({
    target: "[data-element='issue']",
    onSelect: (el) => (el.querySelector("a") as HTMLElement).click(),
    onPeek: (el, event) => {
      if (event === "open") {
        el.querySelector("input")?.click();
      }
    },
  });
  return (
    <main>
      <h1>Hello World!</h1>
      <h3>This is a solid app.</h3>
      <div class="flex flex-col gap-3">
        <KeyboardNavigator value={navigator}>
          <For each={issues()}>{(issue) => <Issue {...issue} />}</For>
        </KeyboardNavigator>
      </div>
    </main>
  );
};

const Issue = (props: Issue) => {
  return (
    <div data-element="issue" class="data-[focus]:bg-red-500" data-focus={props.focus ? true : undefined}>
      <p>{props.title}</p>
      <Checkbox />
      <a class="underline text-blue-500" href="https://joshborseth.com" target="_blank">
        joshborseth.com
      </a>
    </div>
  );
};

export default App;
