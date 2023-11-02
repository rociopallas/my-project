<!-- Home page -->
<script>
  import calendarImg from "../asset/calendarImg.png";
  import PublicFooter from "../components/publicFooter.svelte";
  import PublicHeader from "../components/publicHeader.svelte";
</script>

<PublicHeader />

<!-- welcome section -->
<div class="mt-20 mb-36">
  <div class="hero">
    <div
      class="hero-content flex-col justify-between lg:flex-row w-full h-full"
    >
      <div class="w-1/2">
        <h1 class="text-5xl font-bold">Bienvenido a Iris!</h1>
        <p class="py-6">
          La solución integral que tu pequeña o mediana empresa necesita para
          simplificar la gestión de reservas. Ya sea que dirijas una peluquería,
          un salón de belleza, una casa de tatuajes, consultorio médico, o
          cualquier otro tipo de negocio que requiera de citas o reservas,
          estamos aquí para ayudarte a automatizar y mejorar tu proceso.
        </p>
        <button class="w-40 mt-4 py-2 text-white bg-violeta hover:shadow-md hover:opacity-80 rounded-lg">Registrarse</button>
      </div>
      <img src={calendarImg} alt="" class="w-1/2" />
    </div>
  </div>
</div>

<!-- what we offer section -->
<div class="mt-40 mb-28 flex flex-col gap-4 items-center justify-center">
  <h1 class="text-5xl font-bold">¿Qué ofrecemos?</h1>
  <div class="grid grid-cols-4 gap-4 px-10 mt-5">
    <div class="card bordered w-92 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Reservas en línea fáciles</h2>
        <p>
          Deja que tus clientes hagan reservas en línea en tan solo unos clics,
          las 24 horas del día, los 7 días de la semana. Olvídate de las
          llamadas telefónicas, mensajes, y correos electrónicos interminables.
        </p>
      </div>
    </div>
    <div class="card bordered w-92 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Calendario centralizado</h2>
        <p>
          Mantén un calendario centralizado de todas tus reservas y citas. Nunca
          más tendrás que preocuparte por la superposición de horarios o la
          falta de comunicación.
        </p>
      </div>
    </div>
    <div class="card bordered w-92 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Recordarios automatizados</h2>
        <p>
          Reduce las ausencias y los olvidos con recordatorios automatizados vía
          correo electrónico o mensaje por whatsApp.
        </p>
      </div>
    </div>
    <div class="card bordered w-92 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Personalización</h2>
        <p>
          Ajusta la plataforma a las necesidades específicas de tu negocio.
          Configura los servicios, horarios y disponibilidad de acuerdo a tus
          preferencias.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- why choose us section -->
<div class="mt-40 mb-28 flex flex-col gap-4 items-center justify-center">
  <h1 class="text-5xl font-bold">¿Por qué elegirnos?</h1>
  

</div>

<!-- footer -->
<PublicFooter />
