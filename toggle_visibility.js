function ToggleBox() {
  let visible = true;

  function toggle() {
    visible = !visible;
    console.log(visible);
  }

  return (
    <div>
      {visible ? <p>You can see me!</p> : <p>I'm hidden.</p>}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
