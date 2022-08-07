/* eslint-disable no-restricted-globals */
import axios from 'axios';
import '../cards/styles.scss';

type CardType = {
  key: React.Key
  listCard: any;
  setListCard: any;

  id: string;
  bookName: string;
  bookCategory: string;
  bookRealiseDate: string;
  authorName: string;
  authorBirthDate: string;
  authorNationality: string;
  quantityInStock: string;
}




export default function Card(props: CardType) {

  return (
    <div className="card-container">
      <h1 className="card-title" >{props.bookName}</h1>
      <p>{props.bookCategory}</p>
      <p>{props.bookRealiseDate}</p>
      <p>{props.authorName}</p>
      <p>{props.authorBirthDate}</p>
      <p>{props.authorNationality}</p>
      <p>{props.quantityInStock}</p>

      <button className="button-delete"
        onClick={() => {
          axios.delete(`http://localhost:8080/delete/${props.bookName}`).then((response) => {
            history.go(0)
          })
        }} >Excluir</button>

    </div>
  )
}