export default function AuthorInfo({ formData, setFormData }: any) {
  return (
    <div>
      <input type="text" placeholder="Author's name" value={formData.authorName} onChange={(event) => setFormData({ ...formData, authorName: event.target.value })} />
      <input type="text" placeholder="Author's nationality" value={formData.authorNationality} onChange={(event) => setFormData({ ...formData, authorNationality: event.target.value })} />
      <input type="text" placeholder="Author's birth date" value={formData.authorBirthDate} onChange={(event) => setFormData({ ...formData, authorBirthDate: event.target.value })} />
    </div>
  );
}