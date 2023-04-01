import { degrees, PDFDocument, rgb, grayscale } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { DateTime } from "luxon";
import _ from 'lodash';
import { ref, getDownloadURL } from "firebase/storage"
import { storage } from "../../../firebase"

const thaiYear = "๐๑๒๓๔๕๖๗๘๙";
const defaultColor = rgb(31 / 255, 31 / 255, 31 / 255);

async function modifyDoc(form, json, data, id) {
  const url = `/static/file/${id}`;
  console.log(url);
  const existingPdfBytes = await fetch(url + ".pdf").then((res) =>
    res.arrayBuffer()
  );
  const jsonArray = await fetch(url + ".json")
    .then((res) => res.text())
    .then((data) => JSON.parse(data));
  // const formRef = ref(storage, form)
  // const formUrl = await getDownloadURL(formRef)
  // const existingPdfBytes = await fetch(formUrl).then((res) =>
  //   res.arrayBuffer()
  // );

  // const jsonRef = ref(storage, json)
  // const jsonUrl = await getDownloadURL(jsonRef)
  // const jsonArray = await fetch(jsonUrl)
  //   .then((res) => res.text())
  //   .then((data) => JSON.parse(data));
  

  let date = DateTime.fromISO(data["date"])
    .setLocale("th-Th")
    .toLocaleString(DateTime.DATE_FULL);
  data.day = date.substring(0, 2);
  data.month = date.substring(2, date.length - 5);
  data.year = date.substring(date.length - 2, date.length);
  // data.year =
  //   thaiYear.charAt(data.year.charAt(0)) + thaiYear.charAt(data.year.charAt(1));

  jsonArray.pages.forEach((e) => {
    e.boxes.forEach((b) => {
      b.text = data[b.key];
    });
  });

  console.log(jsonArray);

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  const thaiFontBtyes = await fetch("/static/font/THSarabunNew.ttf").then(
    (res) => res.arrayBuffer()
  );
  const thaiFont = await pdfDoc.embedFont(thaiFontBtyes, { subset: true });

  const pages = pdfDoc.getPages();
  const defaultFont = 16;

  jsonArray.pages.forEach((e) => {
    const page = pages[e.page];
    e.boxes.forEach((b) => {
      if (b.type === "checkbox") {
        let index = b.sub.findIndex((e) => e.key === b.text);
        let sub = b.sub[index];
        console.log(sub)
        page.drawText("/", {
          x: sub.x,
          y: sub.y,
          size: b.size || defaultFont,
          font: b.font || thaiFont,
          color: b.color || defaultColor,
          rotate: degrees(b.rotate || 0),
        });
      }
      else if (b.key === "title") {
        let index = b.sub.findIndex((e) => e.key === b.text);
        let sub = b.sub[index];
        page.drawEllipse({
          x: sub.x,
          y: sub.y,
          xScale: sub.xScale || 10,
          yScale: sub.yScale || 5,
          size: sub.size || 5,
          borderWidth: sub.width || 1,
          borderColor: sub.borderColor || defaultColor,
          color: sub.color || defaultColor,
          opacity: 0,
          borderOpacity: 1,
        });
      } else {
        if (b.key === "purpose" && _.isArray(b.x)) {
          let textArr = b.text.match(/.{1,100}/g)
          console.log(textArr)
          _.map(_.range(textArr.length), (i) => {
            if (i <= b.x.length)
            page.drawText(textArr[i], {
              x: b.x[i],
              y: b.y[i],
              size: b.size || defaultFont,
              font: b.font || thaiFont,
              color: b.color || defaultColor,
              rotate: degrees(b.rotate || 0),
            });
          })
        }
        else
        page.drawText(b.text, {
          x: b.x,
          y: b.y,
          size: b.size || defaultFont,
          font: b.font || thaiFont,
          color: b.color || defaultColor,
          rotate: degrees(b.rotate || 0),
        });
      }
    });
  });

  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, jsonArray.filename);
}

export const download = (byteArray, name) => {
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
