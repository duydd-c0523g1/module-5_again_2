function StudentsInfo({ id, sName, age, address }) {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{sName}</td>
      <td>{age}</td>
      <td>{address}</td>
    </tr>
  );
}
export default StudentsInfo