import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

const UPDATED = "4 de agosto de 2026";

export const metadata: Metadata = {
  title: "Condiciones del Servicio — Stamply",
  description:
    "Términos y condiciones que regulan el uso de la plataforma Stamply.",
  alternates: { canonical: "https://stamply.cl/terminos" },
};

export default function TerminosPage() {
  return (
    <LegalShell
      title="Condiciones del Servicio"
      subtitle="Términos que regulan el uso de la plataforma Stamply."
      updated={UPDATED}
    >
      <p>
        Estas Condiciones del Servicio (&ldquo;Condiciones&rdquo;) regulan el acceso y uso de la
        plataforma <strong>Stamply</strong> (el &ldquo;Servicio&rdquo;), disponible en{" "}
        <a href="https://stamply.cl">stamply.cl</a> y{" "}
        <a href="https://app.stamply.cl">app.stamply.cl</a>. Al crear una cuenta o usar el Servicio,
        aceptas estas Condiciones. Si no estás de acuerdo, no debes usar el Servicio.
      </p>

      <h2 id="descripcion">1. Descripción del Servicio</h2>
      <p>
        Stamply es una plataforma digital orientada a receptores judiciales y equipos legales que
        permite gestionar causas, generar y firmar documentos, coordinar diligencias y utilizar
        integraciones opcionales con servicios de terceros como Google (Gmail y Google Drive).
      </p>

      <h2 id="elegibilidad">2. Cuentas y elegibilidad</h2>
      <ul>
        <li>Debes ser mayor de edad y tener capacidad legal para contratar.</li>
        <li>
          El acceso puede otorgarse por invitación o solicitud. Eres responsable de la información
          que proporcionas y de mantenerla actualizada.
        </li>
        <li>
          Eres responsable de resguardar tus credenciales y de toda actividad realizada bajo tu
          cuenta. Notifícanos ante cualquier uso no autorizado.
        </li>
      </ul>

      <h2 id="uso-aceptable">3. Uso aceptable</h2>
      <p>Al usar el Servicio, te comprometes a no:</p>
      <ul>
        <li>Infringir la ley aplicable ni derechos de terceros.</li>
        <li>Acceder sin autorización a sistemas, cuentas o datos ajenos.</li>
        <li>
          Interferir con el funcionamiento del Servicio, introducir código malicioso o intentar
          eludir sus medidas de seguridad.
        </li>
        <li>Usar el Servicio para fines fraudulentos o para enviar comunicaciones no solicitadas.</li>
      </ul>

      <h2 id="integraciones">4. Integraciones de terceros (Google)</h2>
      <p>
        El Servicio permite conectar cuentas de Google para enviar correos (Gmail) y respaldar
        documentos (Google Drive). Estas integraciones son opcionales y requieren tu autorización
        expresa. El uso de datos de Google se rige por nuestra{" "}
        <a href="/privacidad">Política de Privacidad</a>. Tu uso de los servicios de Google también
        está sujeto a los términos de Google. Puedes revocar el acceso en cualquier momento desde la
        aplicación o desde tu cuenta de Google.
      </p>

      <h2 id="propiedad">5. Propiedad intelectual</h2>
      <p>
        El Servicio, su software, diseño y marcas son propiedad de Stamply o de sus licenciantes.
        Los datos y documentos que tú cargas siguen siendo tuyos; nos otorgas una licencia limitada
        para procesarlos con el único fin de prestarte el Servicio.
      </p>

      <h2 id="planes">6. Planes y pagos</h2>
      <p>
        El Servicio puede ofrecerse bajo planes gratuitos o de pago. Cuando correspondan cargos, se
        informarán previamente. Salvo que la ley disponga lo contrario, los montos pagados no son
        reembolsables por periodos ya utilizados.
      </p>

      <h2 id="disponibilidad">7. Disponibilidad y cambios</h2>
      <p>
        Nos esforzamos por mantener el Servicio disponible, pero puede haber interrupciones por
        mantenimiento, actualizaciones o causas fuera de nuestro control. Podemos modificar,
        suspender o descontinuar funcionalidades, procurando avisar cuando el cambio sea relevante.
      </p>

      <h2 id="garantias">8. Exención de garantías</h2>
      <p>
        El Servicio se proporciona &ldquo;tal cual&rdquo; y &ldquo;según disponibilidad&rdquo;, sin
        garantías de ningún tipo, expresas o implícitas. Stamply no es un servicio de asesoría legal
        y no sustituye el criterio profesional del usuario.
      </p>

      <h2 id="responsabilidad">9. Limitación de responsabilidad</h2>
      <p>
        En la máxima medida permitida por la ley, Stamply no será responsable por daños indirectos,
        incidentales o consecuenciales, ni por pérdida de datos o lucro cesante derivados del uso o
        la imposibilidad de uso del Servicio.
      </p>

      <h2 id="terminacion">10. Terminación</h2>
      <p>
        Puedes dejar de usar el Servicio en cualquier momento. Podemos suspender o cancelar tu acceso
        si incumples estas Condiciones o si es necesario para proteger el Servicio o a otros
        usuarios.
      </p>

      <h2 id="ley">11. Ley aplicable</h2>
      <p>
        Estas Condiciones se rigen por las leyes de la República de Chile. Cualquier controversia se
        someterá a los tribunales competentes de Chile.
      </p>

      <h2 id="cambios">12. Cambios a estas Condiciones</h2>
      <p>
        Podemos actualizar estas Condiciones. Publicaremos la versión vigente en esta página y
        modificaremos la fecha de &ldquo;Última actualización&rdquo;. El uso continuado del Servicio
        implica la aceptación de los cambios.
      </p>

      <h2 id="contacto">13. Contacto</h2>
      <p>
        Para consultas sobre estas Condiciones, escríbenos a{" "}
        <a href="mailto:soporte@stamply.cl">soporte@stamply.cl</a>.
      </p>
    </LegalShell>
  );
}
