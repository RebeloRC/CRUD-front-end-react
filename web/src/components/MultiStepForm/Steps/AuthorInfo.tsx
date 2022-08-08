export default function AuthorInfo({ formData, setFormData }: any) {
  return (
    <div>
      <input type="text" placeholder="Nome do autor" value={formData.authorName} onChange={(event) => setFormData({ ...formData, authorName: event.target.value })} />
      <input type="text" placeholder="Nacionalidade do autor" value={formData.authorNationality} onChange={(event) => setFormData({ ...formData, authorNationality: event.target.value })} />
      <input type="text" placeholder="Data de nascimento do autor" value={formData.authorBirthDate} onChange={(event) => setFormData({ ...formData, authorBirthDate: event.target.value })} />
    </div>
  );
}