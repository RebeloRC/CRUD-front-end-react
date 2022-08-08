export default function StockInfo({ formData, setFormData }: any) {
  return (
    <div>
      <label>Quantidade em estoque: </label>
      <input type="number" placeholder="Quantidade de exemplares em estoque" value={formData.quantityInStock} onChange={(event) => setFormData({ ...formData, quantityInStock: event.target.value })} />
    </div>
  );
}