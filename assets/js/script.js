/*TOOLTIP*/
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  
  $(document).ready(function () {
    /*VARIABLES */
    let btnInicio = $("#Inicio");
    let btnQuienesSomos = $("#Quienes Somos");
    let btnDestacados = $("#Destacados");
    let btnContacto = $("#Contacto");
    let p = $("p");
  
  
    /*FUNCIONES */
    btnInicio.click(function () {
      alert("El inicio...");
    });
    btnQuienesSomos.click(function () {
      alert("Se llega a la seccion!");
    });
    btnDestacados.click(function () {
      alert("Se llega a la seccion!");
    });
    btnContacto.click(function () {
      alert("Se llega a la seccion!");
    });
    /*FUNCION GLOBAL*/
    p.click(function () {
      ocultarTexto.toggle();
    });
  });