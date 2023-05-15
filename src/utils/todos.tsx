export const getHilgthedText = (words: string, inputText: string) => {
  if (!inputText) {
    return words;
  }
  const regex = new RegExp(`(${inputText})`, "gi");

  return words.split(regex).map((match, index) =>
    match.toLowerCase() === inputText.toLowerCase() ? (
      <span key={index} className="highlight-text">
        {match}
      </span>
    ) : (
      match
    )
  );
};
