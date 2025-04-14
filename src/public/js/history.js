document.addEventListener("DOMContentLoaded", function() {
  fetch("/history/data")
    .then(response => response.json())
    .then(entries => {
      const table = $('#journalTable').DataTable({
        "pageLength": 20,
        "data": entries,
        "ordering": false, // Deshabilitar ordenamiento
        "info": false, // Ocultar "Showing 1 to X of XX entries"
        "searching": false, // Ocultar campo de búsqueda
        "lengthChange": false, // Ocultar "Show X entries"
        "columns": [
          { "data": "fecha", "render": data => new Date(data).toLocaleDateString('es-ES') },
          { "data": "instrumento" },
          { "data": "resultado", "render": function(data) {
              let className = data === "Win" ? "bg-success text-white" : data === "Break Even" ? "bg-warning text-dark" : "bg-danger text-white";
              return `<span class="d-block text-center p-1 rounded ${className}">${data}</span>`;
          }},
          { "data": "estrategia", "className": "text-truncate" }
        ],
        "createdRow": function(row, data) {
          $(row).addClass("expandable-row");
          $(row).data("extra", data);
        }
      });
      
      $(document).on('click', '.expandable-row', function() {
        $(this).toggleClass('expanded-row');
        $(this).find('.text-truncate').toggleClass('text-wrap');

        const extraData = $(this).data("extra");
        if ($(this).hasClass("expanded-row")) {
          $(this).after(`
            <tr class="extra-row">
              <td colspan="4">
                <strong>Emociones Antes:</strong> ${extraData.emocionesAntes}<br>
                <strong>Emociones Durante:</strong> ${extraData.emocionesDurante}<br>
                <strong>Emociones Después:</strong> ${extraData.emocionesDespues}<br>
                <strong>Reflexión Bien:</strong> ${extraData.reflexionesBien}<br>
                <strong>Reflexión Mal:</strong> ${extraData.reflexionMal}<br>
                <strong>Reflexión Aprendizaje:</strong> ${extraData.reflexionAprendizaje}<br>
                ${extraData.screenshot1hr ? `<img src="/${extraData.screenshot1hr}" class="img-fluid" width="50">` : ""}
                ${extraData.screenshot5m ? `<img src="/${extraData.screenshot5m}" class="img-fluid" width="50">` : ""}
                ${extraData.screenshot1m ? `<img src="/${extraData.screenshot1m}" class="img-fluid" width="50">` : ""}
              </td>
            </tr>
          `);
        } else {
          $(this).next(".extra-row").remove();
        }
      });
    })
    .catch(error => console.error("Error cargando los datos:", error));
});
