const App = () => {
  const [displayText, setDisplayText] = React.useState("Something Playing");

  const playAudioClip = (e) => {
    e.target.classList.add("active");
    e.target.children[0].play();

    setDisplayText(e.target.innerText + " "+ e.target.id);
    setTimeout(() => {
      e.target.classList.remove("active");
    }, 300);
  };

  return (
    <>
      <div id="display">{displayText}</div>
      <div id="pad">
        {bankOne.map((drumpad) => (
          <DrumPad
            key={drumpad.keyCode}
            id={drumpad.keyCode}
            text={drumpad.keyTrigger}
            audio={drumpad.url}
            playAudioClip={playAudioClip}
          />
        ))}
      </div>
    </>
  );
};

const DrumPad = (props) => {
  return (
    <div
      className="drum-pad"
      id={`drum-pad-${props.id}`}
      onClick={props.playAudioClip}
    >
      {props.text}
      <audio src={props.audio} className="clip" id={props.text}></audio>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("drum-machine"));
