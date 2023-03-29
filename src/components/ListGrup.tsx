function ListGrup() {
  let nama_kota = [
    "Batam",
    "Tanjung Pinang",
    "Bintan",
    "Karimun",
    "Lingga",
    "Natuna",
    "Anambas",
  ];
  nama_kota = [];
  //   const cek_kota = nama_kota.length === 0 ? <p>Tidak Ada Nama Kota</p> : null;
  return (
    <>
      <h2>List Item</h2>
      {/* {nama_kota.length === 0 ? <p>Tidak Ada Nama Kota</p> : null} */}
      {nama_kota.length === 0 && <p>Tidak Ada Nama Kota</p>}
      {/* {cek_kota} */}
      <ul className="list-group">
        {nama_kota.map((kota) => (
          <li key={kota}>{kota}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGrup;
