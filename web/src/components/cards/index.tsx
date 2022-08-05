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
      <h1 className="card-title" >Nome: {props.bookName}</h1>
      <p className="card-cost" >Categoria: {props.bookCategory}</p>
      <p className="card-category" >Data de lancamento: {props.bookRealiseDate}</p>
      <p className="card-category" >Autor: {props.authorName}</p>
      <p className="card-category" >Data de nascimento do Autor: {props.authorBirthDate}</p>
      <p className="card-category" >Nacionalidade do autor: {props.authorNationality}</p>
      <p className="card-cost" >Quantidade em estoque: {props.quantityInStock}</p>
      <button>Deletar</button>
    </div>
  )
}