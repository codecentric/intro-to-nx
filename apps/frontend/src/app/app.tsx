import { useCallback, useState } from 'react';

export function App() {
  const [input, setInput] = useState<string>('');
  const [message, setMessage] = useState<string>();
  const onButtonClick = useCallback(async () => {
    if (input) {
      const response = await fetch(
        `/api?my_name_is=${encodeURIComponent(input)}`
      );

      const jsonResult = await response.json();
      setMessage(jsonResult.message);
    }
  }, [input]);

  return (
    <>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </label>
      <button onClick={onButtonClick}>Click me</button>
      {message ? <pre>{message}</pre> : null}
    </>
  );
}

export default App;
