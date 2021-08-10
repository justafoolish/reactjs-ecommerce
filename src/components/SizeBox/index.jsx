import "./radioButton.scss";
const SizeBox = ({ sizeAvailable, pickSize }) => {
  const updateSize = (e) => pickSize && pickSize(e.target.value);
  return (
    sizeAvailable && (
      <ul className="size--list">
        {sizeAvailable.map((item, index) => (
          <li key={index}>
            <label>
              <input type="radio" name="size" value={item} onClick={(e) => updateSize(e)} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    )
  );
};

export default SizeBox;
