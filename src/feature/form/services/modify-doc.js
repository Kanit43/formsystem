import { degrees, PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

async function modifyDoc(id, data) {
  const url = `/static/file/${id}`;
  console.log(url)
  const existingPdfBytes = await fetch(url + ".pdf").then((res) => res.arrayBuffer());
  const jsonArray = await fetch(url + ".json")
    .then((res) => res.text())
    .then((data) => JSON.parse(data));

  jsonArray.pages.forEach((e) => {
    e.boxes.forEach((b) => b.text = data[b.key])
  })

  console.log(jsonArray);

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  const thaiFontBtyes = await fetch("/static/font/THSarabunNew.ttf").then((res) => res.arrayBuffer());
  const thaiFont = await pdfDoc.embedFont(thaiFontBtyes, { subset: true });

  const pages = pdfDoc.getPages();
  const defaultFont = 16;

  jsonArray.pages.forEach((e) => {
    const page = pages[e.page];
    const { width, height } = page.getSize();
    e.boxes.forEach((b) => {
      page.drawText(b.text, {
        x: b.x,
        y: b.y,
        size: b.size || defaultFont,
        font: b.font || thaiFont,
        color: b.color || rgb(31/255, 31/255, 31/255),
        rotate: degrees(b.rotate || 0),
      });
    });
  });

  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, jsonArray.filename);
}

const download = (byteArray, name) => {
  const arr = new Uint8Array(byteArray);
  const url = URL.createObjectURL(new Blob([arr]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", name);

  document.body.appendChild(link);

  link.click();

  link.parentNode.removeChild(link);
};

export default modifyDoc;
