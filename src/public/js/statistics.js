document.addEventListener("DOMContentLoaded", function () {
  const downloadCsvBtn = document.getElementById("downloadCsv");

  if (downloadCsvBtn) {
    downloadCsvBtn.addEventListener("click", function () {
      window.location.href = "/statistics/download-csv";
    });
  }
});
