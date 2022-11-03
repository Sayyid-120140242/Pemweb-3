const tentangTOKO = `<h2 id="tentang">Tentang Toko</h2>
<div class="text">
  <p>
    Khalida Collection merupakan Toko Boutique yang berdiri sejak 2018,
    yang dimana di dirikan oleh seorang ibu rumah tangga, bernama Novi Silvia.
    Toko Khalida Collection membuat serta menggunakan bahan - bahan yang berasal
    dari seluruh penjuru Indonesia. Khalida Collection juga membuat pakaian untuk segala usia
    baik wanita maupun pria.
  </p>
</div>`;
const ProdukTOKO = `<h2 id="produk">Produk Toko</h2>
<div class="kolom">
  <table border="1">
    <thead>
      <tr>
        <th rowspan="2">NO</th>
        <th rowspan="2">NAMA BAJU</th>
        <th rowspan="2">BAHAN BAJU</th>
        <th rowspan="2">HARGA</th>
        <th rowspan="2">JUMLAH PRODUK</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-align="center">1</td>
        <td>Khalida Busana</td>
        <td>Katun</td>
        <td>400.000</td>
        <td>4</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Khalida Tunik</td>
        <td>Jumputan</td>
        <td>325.000</td>
        <td>6</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Kemeja Pria Blaze</td>
        <td>Batik Silky</td>
        <td>225.000</td>
        <td>3</td>
      </tr>
    </tbody>
  </table>
</div>`;
const SurveyTOKO = `<h2 id="survey">Survey Toko</h2>
<div class="survey">
    <div class="nama">
      <label>Nama </label>
      <input type="text" id="fname" />
    </div>
    <div class="survey">
      <label for="pil">Apakah anda puas dengan produk kami?</label>
      <div>
        <input
          type="radio"
          name="opsi"
          id="puas"
          value="puas"
        />
        <label>Puas</label>
        <input
          type="radio"
          name="opsi"
          id="belum"
          value="belum"
        />
        <label>Belum</label>
      </div>
    </div>
    <button class="kirim" type="submit">KIRIM</button>
  </form>
</div>`;
function tombol() {
  const table = document.getElementById("table");
  table.classList.remove("table");
  table.classList.add("table");
  const title = document.getElementById("title");
  title.innerText = "Khalida Collection";
  const utama = document.getElementById("utama");
  utama.innerHTML = ` <img src="logo khalida.png" alt />
  <h1>Khalida Collection</h1>
  <nav>
    <ul>
      <a href="#" onclick="tentang()">Tentang Toko</a>
      <a href="#" onclick="produk()">Produk Toko</a>
      <a href="#" onclick="survey()">Survey Toko</a>
    </ul>
  </nav>
  <div id="content">${tentangTOKO}${ProdukTOKO}${SurveyTOKO}</div> `;
  const footer = document.getElementById("footer");
  footer.innerHTML =
    "<a href='https://www.instagram.com/khalida.collectionss/'>instagram</a>";
}
function tentang() {
  const content = document.getElementById("content");
  content.innerHTML = `${tentangTOKO}${ProdukTOKO}${SurveyTOKO}`;
}
function produk() {
  const content = document.getElementById("content");
  content.innerHTML = ProdukTOKO;
}
function survey() {
  const content = document.getElementById("content");
  content.innerHTML = SurveyTOKO;
}
