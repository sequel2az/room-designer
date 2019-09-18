let jsPDF
if (typeof window !== `undefined`) {
  import("jspdf").then(m => (jsPDF = m.default))
}

const DonwloadPdf = ({ imgRef: { current }, children }) => {
  return children(() => {
    if (typeof window !== `undefined`) {
      const canvas = document.createElement("canvas")
      canvas.height = current.naturalHeight
      canvas.width = current.naturalWidth
      const ctx = canvas.getContext("2d")
      ctx.drawImage(current, 0, 0, canvas.width, canvas.height)
      const imgData = canvas.toDataURL()
      const doc = new jsPDF()
      doc.addImage(imgData, "JPEG", 15, 40, 180, 160)
      doc.save("Test.pdf")
    }
  })
}

export default DonwloadPdf
