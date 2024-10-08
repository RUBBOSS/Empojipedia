import "./App.css";
import Entry from "./Components/Entry/Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
    return(
      <Entry 
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
        />
    )
}

function App() {
  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </>
  );
}

export default App;
