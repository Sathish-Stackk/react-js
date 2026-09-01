function NameInput() {
  let name = "";

  function handleChange(event) {
    name = event.target.value;
    console.log(name);
  }

  return (
    <div>
      <h2>Enter your name:</h2>
      <input type="text" onChange={handleChange} placeholder="Type here" />
    </div>
  );
}
