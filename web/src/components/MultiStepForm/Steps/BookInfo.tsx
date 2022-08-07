export default function BookInfo({ formData, setFormData }: any) {
  return (
    <div>
      <input type="text" placeholder="Book Name" value={formData.bookName} onChange={(event) => setFormData({ ...formData, bookName: event.target.value })} />
      <input type="text" placeholder="Book Category" value={formData.bookCategory} onChange={(event) => setFormData({ ...formData, bookCategory: event.target.value })} />
      <input type="text" pattern="/^\d{2}-\d{2}-\d{4}$/" placeholder="Book Realise Date" value={formData.bookRealiseDate} onChange={(event) => setFormData({ ...formData, bookRealiseDate: event.target.value })} />
    </div>
  );
}