export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div>
        <strong>Synonyms :</strong>
        <ul className="Synonyms">
          <li>{props.synonyms[0]}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
