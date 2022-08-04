export default function BookInfo({formData, setFormData}: any){
  return(
    <div>
      <input type="text" placeholder="Book Category" value={formData.bookName} onChange={(event) => setFormData({...formData, bookName: event.target.value})}/>
      <input type="text" placeholder="Book Name"/>
      <input type="text" placeholder="Book Realise Date"/>
    </div>
  );
}