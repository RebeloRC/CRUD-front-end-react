export default function StockInfo({ formData, setFormData }: any) {
  return (
    <div>
      <input type="text" placeholder="Quantity in stock" value={formData.quantityInStock} onChange={(event) => setFormData({ ...formData, quantityInStock: event.target.value })} />
    </div>
  );
}