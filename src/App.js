import React, { useState } from "react";
import "./App.css";
import FormularioTerreno from "./components/FormularioTerreno";
import FormularioUbicacionTerreno from "./components/FormularioUbicacionTerreno";
import FormularioEstratoEconomico from "./components/FormularioEstratoEconomico";
import FormularioTopografiaTerreno from "./components/FormularioTopografiaTerreno";
import FormularioServiciosPublicos from "./components/FormularioServiciosPublicos";
import FormularioAccesoVias from "./components/FormularioAccesoVias";
import FormularioUsoActualTerreno from "./components/FormularioUsoActualTerreno";
import FormularioPotencialValorizacion from "./components/FormularioPotencialValorizacion";
import FormularioSeguridadSector from "./components/FormularioSeguridadSector";
import FormularioTelecomunicaciones from "./components/FormularioTelecomunicaciones";
import Resultado from "./components/Resultado";

function PaginaPrincipal() {
  const [infoTerreno, setInfoTerreno] = useState(null);
  const [infoUbicacion, setInfoUbicacion] = useState(null);
  const [infoEstrato, setInfoEstrato] = useState(null);
  const [infoTopografia, setInfoTopografia] = useState(null);
  const [infoServicios, setInfoServicios] = useState(null);
  const [infoAccesoVias, setInfoAccesoVias] = useState(null);
  const [infoUsoActual, setInfoUsoActual] = useState(null);
  const [infoPotencialValorizacion, setInfoPotencialValorizacion] =
    useState(null);
  const [infoSeguridadSector, setInfoSeguridadSector] = useState(null);
  const [infoTelecomunicaciones, setInfoTelecomunicaciones] = useState(null);
  const [prom, setProm] = useState(null);

  const guardarInformacion = (tipo, info) => {
    switch (tipo) {
      case "terreno":
        setInfoTerreno(info);
        break;
      case "ubicacion":
        setInfoUbicacion(info);
        break;
      case "estrato":
        setInfoEstrato(info);
        break;
      case "topografia":
        setInfoTopografia(info);
        break;
      case "servicios":
        setInfoServicios(info);
        break;
      case "accesoVias":
        setInfoAccesoVias(info);
        break;
      case "usoActual":
        setInfoUsoActual(info);
        break;
      case "potencialValorizacion":
        setInfoPotencialValorizacion(info);
        break;
      case "seguridadSector":
        setInfoSeguridadSector(info);
        break;
      case "telecomunicaciones":
        setInfoTelecomunicaciones(info);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      infoTerreno === null ||
      infoUbicacion === null ||
      infoEstrato === null ||
      infoTopografia === null ||
      infoServicios === null ||
      infoAccesoVias === null ||
      infoUsoActual === null ||
      infoPotencialValorizacion === null ||
      infoSeguridadSector === null ||
      infoTelecomunicaciones === null ||
      infoTerreno.tamTerreno === "" ||
      infoUbicacion.ubicacion === "" ||
      infoEstrato.estrato === "" ||
      infoTopografia.topografia === "" ||
      infoServicios.servicios === "" ||
      infoAccesoVias.accesoVias === "" ||
      infoUsoActual.usoActual === "" ||
      infoPotencialValorizacion.potencialValorizacion === "" ||
      infoSeguridadSector.seguridadSector === "" ||
      infoTelecomunicaciones.telecomunicaciones === ""
    ) {
      alert("Por favor, llene todos los valores.");
    } else {
      setProm(
        (parseFloat(infoTerreno.tamTerreno) +
          parseFloat(infoUbicacion.ubicacion) +
          parseFloat(infoEstrato.estrato) +
          parseFloat(infoTopografia.topografia) +
          parseFloat(infoServicios.servicios) +
          parseFloat(infoAccesoVias.accesoVias) +
          parseFloat(infoUsoActual.usoActual) +
          parseFloat(infoPotencialValorizacion.potencialValorizacion) +
          parseFloat(infoSeguridadSector.seguridadSector) +
          parseFloat(infoTelecomunicaciones.telecomunicaciones)) /
          10
      );
    }
  };

  return (
    <>
      <header className="header">
        <h1>Bienvenido a construcciones marca ACME</h1>
        <h2>Aqui te ayudaremos a tomar la mejor decision posible</h2>
      </header>
      <main className="main">
        <section className="forms">
          <form onSubmit={handleSubmit} className="form">
            <FormularioTerreno
              onGuardar={(info) => guardarInformacion("terreno", info)}
            />
            <FormularioUbicacionTerreno
              onGuardar={(info) => guardarInformacion("ubicacion", info)}
            />
            <FormularioEstratoEconomico
              onGuardar={(info) => guardarInformacion("estrato", info)}
            />
            <FormularioTopografiaTerreno
              onGuardar={(info) => guardarInformacion("topografia", info)}
            />
            <FormularioServiciosPublicos
              onGuardar={(info) => guardarInformacion("servicios", info)}
            />
            <FormularioAccesoVias
              onGuardar={(info) => guardarInformacion("accesoVias", info)}
            />
            <FormularioUsoActualTerreno
              onGuardar={(info) => guardarInformacion("usoActual", info)}
            />
            <FormularioPotencialValorizacion
              onGuardar={(info) =>
                guardarInformacion("potencialValorizacion", info)
              }
            />
            <FormularioSeguridadSector
              onGuardar={(info) => guardarInformacion("seguridadSector", info)}
            />
            <FormularioTelecomunicaciones
              onGuardar={(info) =>
                guardarInformacion("telecomunicaciones", info)
              }
            />
            <button type="submit">Calcular</button>
          </form>
          <div className="valorResultado">
            {prom !== null && !isNaN(prom) && <Resultado Prom={prom} />}
            <section className="valores">
              {infoTerreno && (
                <p>Tamaño del Terreno: {infoTerreno.tamTerreno}</p>
              )}
              {infoUbicacion && <p>Ubicación: {infoUbicacion.ubicacion}</p>}
              {infoEstrato && <p>Estrato: {infoEstrato.estrato}</p>}
              {infoTopografia && <p>Topografía: {infoTopografia.topografia}</p>}
              {infoServicios && <p>Servicios: {infoServicios.servicios}</p>}
              {infoAccesoVias && (
                <p>Acceso a Vías: {infoAccesoVias.accesoVias}</p>
              )}
              {infoUsoActual && <p>Uso Actual: {infoUsoActual.usoActual}</p>}
              {infoPotencialValorizacion && (
                <p>
                  Potencial de Valorización:
                  {infoPotencialValorizacion.potencialValorizacion}
                </p>
              )}
              {infoSeguridadSector && (
                <p>
                  Seguridad del Sector: {infoSeguridadSector.seguridadSector}
                </p>
              )}
              {infoTelecomunicaciones && (
                <p>
                  Infraestructura de Telecomunicaciones:
                  {infoTelecomunicaciones.telecomunicaciones}
                </p>
              )}
            </section>
          </div>
        </section>
        hola
      </main>
    </>
  );
}

export default PaginaPrincipal;
