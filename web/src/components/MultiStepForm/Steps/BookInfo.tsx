export default function BookInfo({ formData, setFormData }: any) {
  return (
    <div>
      <input type="text" placeholder="Nome do livro" value={formData.bookName} onChange={(event) => setFormData({ ...formData, bookName: event.target.value })} />
      <input type="text" placeholder="Categoria do livro" value={formData.bookCategory} onChange={(event) => setFormData({ ...formData, bookCategory: event.target.value })} />
      <input type="text" placeholder="Data de lançamento do livro" value={formData.bookRealiseDate} onChange={(event) => setFormData({ ...formData, bookRealiseDate: event.target.value })} />
    </div>
  );
}