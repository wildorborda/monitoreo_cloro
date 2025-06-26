<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $codigo = $_POST['codigo'];
  $nombre = $_POST['nombre'];
  $visitado = $_POST['visitado'];

  // Guardar en archivo o base de datos
  echo "Datos recibidos: $codigo, $nombre, $visitado";
}
?>
