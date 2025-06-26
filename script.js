function actualizarContador() {
  const selectores = document.querySelectorAll(".visitado");
  let visitados = 0;
  let total = 0;

  selectores.forEach(sel => {
    const val = sel.value.trim();
    if (val === "Sí") visitados++;
    if (val !== "") total++;
  });

  document.getElementById("visitados").innerText = visitados;
  document.getElementById("faltan").innerText = total - visitados;
}
function exportarExcel() {
  let tabla = document.getElementById("tablaVisitas").outerHTML;
  let blob = new Blob([tabla], { type: "application/vnd.ms-excel" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "visitas_reservorios.xls";
  link.click();
}

function exportarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('l', 'pt', 'a4');
  doc.text("Control de Visitas a Reservorios", 40, 30);
  doc.autoTable({ html: '#tablaVisitas', startY: 50 });
  doc.save("visitas_reservorios.pdf");
}
