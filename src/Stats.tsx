export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        {" "}
        <em>start adding element You want for Trip🌴</em>
      </p>
    );
  const num = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / num) * 100);
  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You are ready to go!✈"
            : `You have ${num} items on your list, and you have already packed ${numPacked} items (${percentage}%).`}
        </em>
      </footer>
    </>
  );
}
