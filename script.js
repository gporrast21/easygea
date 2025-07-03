let currentChat = '';

function loadChat(type = 'sinDelivery') {
  currentChat = type;

  const userName = document.getElementById("userName")?.value || "Agente";
  const name = document.getElementById("clientName")?.value || "Cliente";
  const marcaTelefono = document.getElementById("marcaTelefono")?.value || "Marca";
  const modeloEquipo = document.getElementById("modeloEquipo")?.value || "Modelo Equipo";
  const almacenEquipo = document.getElementById("almacenEquipo")?.value || "GB Equipo";
  const bonus = document.getElementById("bonus")?.value || "";
  const cuotaInicial = document.getElementById("cuotaInicial")?.value || "";
  const cuotaMensual = document.getElementById("cuotaMensual")?.value || "";
  const financiamiento = document.getElementById("financiamiento")?.value || "";
  const planCliente = document.getElementById("planCliente")?.value || "Plan";
  const precioPlan = document.getElementById("precioPlan")?.value || "";
  const precioTotalEquipo = document.getElementById("precioTotalEquipo")?.value || "";
  const descuentoClaroPuntos = document.getElementById("descuentoClaroPuntos")?.value || "";
  const tarjetaBanco = document.getElementById("tarjetaBanco")?.value || "";
  const cuotaTarjeta = document.getElementById("cuotaTarjeta")?.value || "";
  const equipoOfertado = document.getElementById("equipoOfertado")?.value || "";
  const precioAccesorio = document.getElementById("precioAccesorio")?.value || "";
  const pmTotal = document.getElementById("pmTotal")?.value || "";
  const colorEquipoUno = document.getElementById("colorEquipoUno")?.value || "";
  const colorEquipoDos = document.getElementById("colorEquipoDos")?.value || "";
  const precioPromocionalPortabilidad = document.getElementById("precioPromocionalPortabilidad")?.value || "";
  const diaSemana = document.getElementById("diaSemana")?.value || "";
  const diaHoy = document.getElementById("diaHoy")?.value || "";
  const mesActual = document.getElementById("mesActual")?.value || "";
  const numeroCamara = document.getElementById("numeroCamara")?.value || "";
  const camaraPrincipal = document.getElementById("camaraPrincipal")?.value || "";
  const camaraAdicional = document.getElementById("camaraAdicional")?.value || "";
  const bateria = document.getElementById("bateria")?.value || "";
  const cargaRapida = document.getElementById("cargaRapida")?.value || "";
  const pulgadasPantalla = document.getElementById("pulgadasPantalla")?.value || "";
  const tasaRefresco = document.getElementById("tasaRefresco")?.value || "";
  const procesadorEquipo = document.getElementById("procesadorEquipo")?.value || "";
  const numeroNucleo = document.getElementById("numeroNucleo")?.value || "";
  const velocidadProcesador = document.getElementById("velocidadProcesador")?.value || "";

  const ramEquipo = document.getElementById("ramEquipo")?.value || "";


  const marcaTelefonoField = document.getElementById("marcaTelefonoField");
  const modeloEquipoField = document.getElementById("modeloEquipoField");
  const almacenEquipoField = document.getElementById("almacenEquipoField");
  const bonusField = document.getElementById("bonusField");
  const cuotaInicialField = document.getElementById("cuotaInicialField");
  const cuotaMensualField = document.getElementById("cuotaMensualField");
  const financiamientoField = document.getElementById("financiamientoField");
  const planClienteField = document.getElementById("planClienteField");
  const precioPlanField = document.getElementById("precioPlanField");
  const precioTotalEquipoField = document.getElementById("precioTotalEquipoField");
  const descuentoClaroPuntosField = document.getElementById("descuentoClaroPuntosField");
  const tarjetaBancoField = document.getElementById("tarjetaBancoField");
  const cuotaTarjetaField = document.getElementById("cuotaTarjetaField");
  const equipoOfertadoField = document.getElementById("equipoOfertadoField");
  const precioAccesorioField = document.getElementById("precioAccesorioField");
  const pmTotalField = document.getElementById("pmTotalField");
  const colorEquipoUnoField = document.getElementById("colorEquipoUnoField");
  const colorEquipoDosField = document.getElementById("colorEquipoDosField");
  const precioPromocionalPortabilidadField = document.getElementById("precioPromocionalPortabilidadField");
  const diaSemanaField = document.getElementById("diaSemanaField");
  const diaHoyField = document.getElementById("diaHoyField");
  const mesActualField = document.getElementById("mesActualField");
  const numeroCamaraField = document.getElementById("numeroCamaraField");
  const camaraPrincipalField = document.getElementById("camaraPrincipalField");
  const camaraAdicionalField = document.getElementById("camaraAdicionalField");
  const bateriaField = document.getElementById("bateriaField");
  const cargaRapidaField = document.getElementById("cargaRapidaField");
  const pulgadasPantallaField = document.getElementById("pulgadasPantallaField");
  const tasaRefrescoField = document.getElementById("tasaRefrescoField");
  const procesadorEquipoField = document.getElementById("procesadorEquipoField");
  const numeroNucleoField = document.getElementById("numeroNucleoField");
  const velocidadProcesadorField = document.getElementById("velocidadProcesadorField");
  const ramEquipoField = document.getElementById("ramEquipoField");




  // Mostrar/ocultar campos según el tipo de mensaje
  marcaTelefonoField.classList.toggle('hidden', !(type === 'preferenciaCliente' || type === 'equipoCuota' || type === 'equipoContado' || type === 'entidadBancaria' ));
  modeloEquipoField.classList.toggle('hidden', !(type === 'equipoCuota' || type === 'equipoContado' || type === 'entidadBancaria'));                                              
  almacenEquipoField.classList.toggle('hidden', !(type === 'equipoCuota' || type === 'equipoContado' || type === 'entidadBancaria'));
  bonusField.classList.toggle('hidden', !(type === 'equipoCuota' || type === 'equipoContado' || type === 'entidadBancaria'));
  cuotaInicialField.classList.toggle('hidden', type !== 'equipoCuota');
  cuotaMensualField.classList.toggle('hidden', !(type === 'equipoCuota' || type === 'entidadBancaria'));
  financiamientoField.classList.toggle('hidden', type !== 'equipoCuota');
  planClienteField.classList.toggle('hidden', !(type === 'equipoCuota' || type === 'equipoContado' || type === 'entidadBancaria'));
  precioPlanField.classList.toggle('hidden', type !== 'equipoCuota');
  precioTotalEquipoField.classList.toggle('hidden', !(type === 'equipoCuota' || type === 'equipoContado' || type === 'entidadBancaria'));
  descuentoClaroPuntosField.classList.toggle('hidden', type !== 'equipoContado');
  tarjetaBancoField.classList.toggle('hidden', type !== 'entidadBancaria');
  cuotaTarjetaField.classList.toggle('hidden', type !== 'entidadBancaria');
  equipoOfertadoField.classList.toggle('hidden', !(type === 'ofrecimientoAccesorio' || type === 'colorEquipo' || type === 'c_ram' || type === 'c_camara' || type === 'c_bateria' || type === 'c_pantalla' || type === 'c_procesador' || type === 'c_sinStock' ));
  precioAccesorioField.classList.toggle('hidden', type !== 'ofrecimientoAccesorio');
  pmTotalField.classList.toggle('hidden', type !== 'ofrecimientoPm');
  colorEquipoUnoField.classList.toggle('hidden', type !== 'colorEquipo');
  colorEquipoDosField.classList.toggle('hidden', type !== 'colorEquipo');
  precioPromocionalPortabilidadField.classList.toggle('hidden', !(type === 'conPortabilidad' || type === 'c_sinStock'));
  diaSemanaField.classList.toggle('hidden', type !== 'varios');
  diaHoyField.classList.toggle('hidden', type !== 'varios');
  mesActualField.classList.toggle('hidden', type !== 'varios');
  numeroCamaraField.classList.toggle('hidden', type !== 'c_camara');
  camaraPrincipalField.classList.toggle('hidden', type !== 'c_camara');
  camaraAdicionalField.classList.toggle('hidden', type !== 'c_camara');
  bateriaField.classList.toggle('hidden', type !== 'c_bateria');
  cargaRapidaField.classList.toggle('hidden', type !== 'c_bateria');
  pulgadasPantallaField.classList.toggle('hidden', type !== 'c_pantalla');
  tasaRefrescoField.classList.toggle('hidden', type !== 'c_pantalla');
  procesadorEquipoField.classList.toggle('hidden', type !== 'c_procesador');
  numeroNucleoField.classList.toggle('hidden', type !== 'c_procesador');
  velocidadProcesadorField.classList.toggle('hidden', type !== 'c_procesador');
  ramEquipoField.classList.toggle('hidden', type !== 'c_ram');
  




  const messages = {
    //SALUDO
    saludoOutbound: `•OPCIÓN 1\n\n🔓 ¡Desbloqueaste un descuentazo! 😱\n Hola, soy *${userName}* de Claro 👋  Aprovecha los precios increíbles que tenemos en equipos ¡Solo por tiempo limitado! ⏳\n ¿Te interesa alguno en especial o te doy una recomendación? 👀\n\n •OPCIÓN 2\n\n 🤑 ¡Ofertas que valen la pena! 📱✨\n Te saluda *${userName}* de Claro 👋 Esta semana tenemos descuentos en equipos solo para ti ¡Aprovecha hoy y renueva! 🎉\n ¿Ya sabes cuál quieres o te ayudo a elegir? 😎\n\n •OPCIÓN 3 (con una intro de intriga)\n\n 🤫 Esto no se lo contamos a todos ✨\n Te saluda *${userName}* de Claro 👋 Solo por esta semana tenemos descuentazos en equipos 📲 ¡Aprovecha hoy y renueva! 🔥\n ¿Ya tienes un equipo en mente o te ayudo a elegir? 👀\n\n •OPCIÓN 4 (delivery)\n\n🚚💨 Envío GRATIS en equipos\n Hola, soy *${userName}* de Claro 👋  Aprovecha los descuentos en equipos que tenemos para ti ¡Solo por tiempo limitado! ⏳\n ¿Te interesa alguno en especial o te doy una recomendación? 👀`,
    saludoInbound: `•OPCIÓN 1\n\n 🔓 ¡Desbloqueaste un descuentazo! 😱\n Hola, gracias por volver a comunicarte, soy *${userName}* de Claro 👋  Aprovecha los precios increíbles que tenemos en equipos ¡Solo por tiempo limitado! ⏳\n ¿Te interesa alguno en especial o te doy una recomendación? 👀\n\n •OPCIÓN 2\n\n 🤑 ¡Ofertas que valen la pena! 📱✨\n Gracias por volver a comunicarte, te saluda *${userName}* de Claro 👋 Esta semana tenemos descuentos en equipos solo para ti ¡Aprovecha hoy y renueva! 🎉\n ¿Ya sabes cuál quieres o te ayudo a elegir? 😎\n\n •OPCIÓN 3 (con una intro de intriga)\n\n 🤫 Esto no se lo contamos a todos ✨\n Gracias por volver a comunicarte, te saluda *${userName}* de Claro 👋 Solo por esta semana tenemos descuentazos en equipos 📲 ¡Aprovecha hoy y renueva! 🔥\n ¿Ya tienes un equipo en mente o te ayudo a elegir? 👀\n\n •OPCIÓN 4 (delivery)\n\n 🚚💨 Envío GRATIS en equipos\n Hola, gracias por volver a comunicarte, soy *${userName}* de Claro 👋  Aprovecha los descuentos en equipos que tenemos para ti ¡Solo por tiempo limitado! ⏳\n ¿Te interesa alguno en especial o te doy una recomendación? 👀`,

    //PREGUNTA FILTRO
    equipoCliente: '¿Coméntame cuál es la marca y modelo que estás usando actualmente?📲Para poder darte un teléfono más actual que el que tienes🙌',
    ubicacionCliente: '¡Genial! 😁 Actualmente, ¿te encuentras en *Lima* o *Provincia*? \n📍Indícame tu dirección, con el departamento, provincia y distrito 🗺',
    lineasAdicionales: 'Mientras evaluamos tu línea... ¿Sabías que puedes ahorrar dinero en tu línea móvil? 📲\n\n 📌 Si adquieres una *línea adicional* nueva o en *portabilidad* desde S/ 55.90, obtendrás un 50% de descuento en la línea de menor plan durante todo 1 año. (Sujeto a evaluación). 😱🙌 \n\n¿Aparte de este número, tienes otras líneas que NO sean de CLARO o gustarías una línea adicional?\n\n 🤔🥳🎉¡Aprovecha por 12 meses el 50% de descuento para tu línea adicional!🥳🎉, es decir, el plan de 55.90 lo podría pagar tan solo a 27.95 soles. Así tendrás un ahorro en tus gastos de servicio (sujeto a evaluación)🤑 y además de mejorar tu nivel crediticio🤩¡Anímate! No dejes pasar esta oportunidad. 🤩📱',
    preferenciaCliente: `Perfecto, y dime, ¿tienes alguna marca de su agrado como: Honor, Samsung, Iphone, Motorola, ZTE, VIVO, OPPO o Xiaomi? 🔍👀\n\n Excelente elección 🙌, ¿Y qué *características* te gustaría mejorar? Tal vez buscas mejor *cámara* 📷, más *RAM* 🧠, una *pantalla impresionante*📱 o más *memoria interna* 📲 o ¿Cuál de todas ellas prefieres?\n\n Excelente elección 🙌, ¿Y qué *tipo de uso* te gustaría darle a tu nuevo teléfono? Tal vez buscas *un equipo para fotos y videos* 📷, quizás *uno especialmente diseñado para jugar videojuegos * 🎮🧠, una *pantalla impresionante para ver películas *📱 o, por otro lado *para uso diario y trabajo*📲, ¿Qué uso le darás? \n\nPerfecto, y dime,  ¿deseas seguir trabajando con la marca ${marcaTelefono}? o prefieres evaluar otras marcas como Honor, Samsung, Iphone, Motorola, ZTE, VIVO, OPPO o Xiaomi? 🔍👀`,
    presupuestoCliente: `Excelente elección ${name} 💰, ¿Cuál es el monto que tienes en mente para obtener tu *nuevo equipo*? y con ello no excederme en tu presupuesto 🙌\n\n Recuerda que un equipo de calidad puede ser una inversión muy conveniente a largo plazo.`,
    preguntasAdicionales: `Además del modelo que me comentó, ¿has tenido otro modelo en mente? 📱 🤔 \n\n ¿Deseas verlo en cuotas sin intereses con tarjeta de crédito o al contado con un precio promocional con hasta 30% de descuento? 🙌👀 \n\n ¿Deseas verlo en cuotas con Claro o al contado con un precio promocional con hasta 30% de descuento? 🙌👀 \n\n Tengo estos increíbles equipos, ¿Cuál de los dos escoges?👀 \n\n ¿Cuál de estas opciones te gusta más?👀 \n\n ¿Deseas una gama media superior o gama top?🙌 \n\n ¿Deseas una gama económica o quizás una gama media?🙌 \n\n ¿Deseas una gama económica, una gama media o quizás una gama superior?🙌`,

    //TIEMPO DE ESPERA
    esperaBreve: `Un momento por favor ... Basándonos en el presupuesto que me mencionas, voy a buscar una alternativa que esté acorde al monto 🔍, por favor bríndame un momento ⏳ \n\n El financiamiento en cuotas o al contado depende de una evaluación crediticia, permíteme un momento para realizarla⏱️⏳. \n\n Muy bien, permíteme un momento por favor 😎. \n\n ¡Vamos a averiguarlo!, permíteme un momento por favor 🙌. \n\n ⏱️⏳ Permíteme unos minutos y enseguida estaré de vuelta contigo. ¡Muchas gracias! 🙌 \n\n ⏳🔍 Permíteme un momento más continuo evaluándote. ¡Gracias por tu paciencia! 🙌 \n\n *${name}* 📱⏱️ Por favor, dame unos minutos y en breve estaré listo para ayudarte. ¡Gracias por tu paciencia! 🙌`,
  
    //OFRECIMIENTO
    preOferta: `Gracias por tu espera✨, entiendo, personalmente te recomiendo este equipo que estoy más que seguro que cumplirá con todas tus expectativas🙌😎: \n\nGracias por tu espera✨, entiendo, considerando tus preferencias te recomiendo este equipo que estoy más que seguro que cumplirá con todas tus expectativas🙌😎:`,
    equipoCuota: `Excelentes noticias!!! \n\n Realizando la evaluación, aplicas al beneficio de *pago en cuotas*: \n📱Equipo: ${marcaTelefono} ${modeloEquipo} de ${almacenEquipo} ${bonus}\n📌 Cuota inicial: S/. ${cuotaInicial}\n🧾 Cuota mensual: S/. ${cuotaMensual}\n💳 Financiamiento: ${financiamiento} \n${planCliente} de internet para que navegues en "alta velocidad" 🤑 📞 llamadas y ✉️ SMS nacionales ilimitados.\n📹 ¡Claro Video Gratis por 24 meses!\n💰 Pago total mensual: S/.${precioPlan} (Plan + cuota mensual)\n💲 Precio Total Equipo: S/. ${precioTotalEquipo} `,
    equipoContado: `Excelentes noticias!!!\n\n Realizando la evaluación, aplicas al beneficio de *pago al contado*\n😃 Puedes llevarte el equipo de la siguiente manera:\n📱Equipo: ${marcaTelefono} ${modeloEquipo} de ${almacenEquipo} ${bonus}\n💲 Pago al contado: S/ ${precioTotalEquipo} *(Único pago)*\n💰 Descuento con Claro Puntos: ${descuentoClaroPuntos}\n${planCliente} 📞 llamadas y ✉️ SMS nacionales ilimitados.\n 📄 Contrato: 18 meses\n 📹 ¡Claro Video Gratis por 24 meses! `,
    entidadBancaria: `Excelentes noticias!!! \n\n Realizando la evaluación, aplicas al beneficio de *pago en cuotas sin intereses con ${tarjetaBanco}*\n😃 Puedes llevarte el equipo de la siguiente manera:\n📱Equipo: ${marcaTelefono} ${modeloEquipo} de ${almacenEquipo} \n💲 Pago total divisible en cuotas: S/ ${precioTotalEquipo} \n🧾 Número de cuotas: ${cuotaTarjeta}\n💳 Cuota mensual en tarjeta de crédito:S/. ${cuotaMensual}\n ${planCliente} 📞 llamadas y ✉️ SMS nacionales ilimitados.\n 📄 Contrato: 18 meses\n 📹 ¡Claro Video Gratis por 24 meses! `,
    ofrecimientoAccesorio:`${name}, gracias a que has adquirido el equipo ${equipoOfertado} se te está brindando la opción de que obtengas un accesorio a precio promocional de tan solo S/${precioAccesorio} y lo mejor es que te lo podemos enviar gratis a tu dirección.`,
    ofrecimientoPm:`Antes de ingresar tu renovación 📄, te comento algo muy importante: ¡Tu equipo es una inversión 💰 totalmente necesaria para tu día a día y, por lo tanto, debe ser protegida!! Es por ello que te presento Protección Móvil Claro 💪\n✅ Protege tu inversión por ${pmTotal} mensuales!\n✅ Usa tu nuevo celular con tranquilidad sabiendo que está protegido. 🛡️\n✅ Ahorra. No deberás pagar la totalidad de un nuevo equipo. 💵\n✅ No está sujeto a contratos. \n\n¿Protegemos tu nuevo celular? 😊🔒`,
    nodeseaPm: `¡Anímate! 😃 A todos nos ha pasado alguna vez que se nos ha caído el celular al suelo 📲💥, al agua 💦🌊, se nos ha quebrado la pantalla 📵😢 o hemos sufrido algún robo 🔒🚫. Por eso, es importante proteger tu nuevo móvil 🛡️, considerando que estás haciendo un esfuerzo para adquirirlo. 💪💰\n\n¡Perfecto, ${name}! No hay ningún problema. Si decides proteger tu nuevo celular, simplemente tienes que ponerte en contacto al 123 ☎️ o acercarte a uno de nuestros centros de atención 🏢. Tienes hasta 30 días a partir de la recepción de tu equipo para hacerlo. 📱⏰`,
  
     //PRE CIERRE
    delivery: `🤩 Y lo mejor es que contamos con entrega a través de *Delivery totalmente gratuito sujeto a cobertura. \n\n*¿Te gustaría que te lo llevemos a tu casa o a tu trabajo?\n\n🚚⌛ ¿En qué horario prefieres recibir la visita del delivery? ¿Por la mañana de 9 a.m. a 1 p.m. ☀️ o por la tarde de 2 p.m. a 6 p.m. 🌙?\n\nPara validar la cobertura de entrega por delivery compárteme tu dirección exacta con algunas referencias o envíametu ubicación actual de la siguiente forma 📍 🤗🚀`,
    sinDelivery:`${name} ¡Te cuento algo importante! 📍📲 En estos momentos, no tenemos cobertura en la dirección que nos proporcionaste. Pero no te preocupes, *¡tenemos una solución!* Acércate a alguno de nuestros centros de atención ubicados en:\n\n-\n\n-\n\n¿Cuál de los centros de atención te queda más cerca?, Solo necesito que me confirmes la hora en la que puedas ir, para así generarte una cita y evitar que hagas largas colas. ¡Estamos aquí para ayudarte! 😉📅`,
    ventaCac: `🤩 Y lo mejor es que contamos con recojo a través de nuestros centros de atención al cliente y priorizaremos tu atención con una cita personalizada. \n\n¿Te gustaría que te programe tu cita por la mañana o por la tarde?`,
    colorEquipo:`*¡${name}!* Sabes, lo mejor es que tengo disponible el equipo ${equipoOfertado} en dos colores distintos. Cuéntame, ¿prefieres que lo ingrese en color ${colorEquipoUno} o ${colorEquipoDos}? 🎨📱`,
    conPortabilidad:`Entiendo! 👍 Pero con nosotros obtendrás un *ahorro* en el valor del plan a diferencia de tu operador actual, es decir solo pagarás *S/ ${precioPromocionalPortabilidad}* durante *12 meses* ¡O tal vez puedas obtener una línea adicional para compartirla con un ser querido que necesite mantenerse en contacto! 🤝`,
    conLineanueva: `¡Te evaluamos sin compromiso! 📝 Puedes regalarle la línea a un familiar 👨‍👩‍👧‍👦 o puedes mantener la segunda línea para tu trabajo 💼📱 y utilizar la que tienes actualmente para tu familia. ¡Tú decides! 😊👍`,
    contacto: `🌟 ¡Gracias por confirmar tu pedido! 🥳 En 10 minutos me pondré en contacto contigo desde nuestra central 123 📞. ¡Es importante contestar para programar la entrega de tu nuevo celular! 🚚✨\n\nPor tu seguridad 🔒 realizaremos una rápida verificación de tus datos para confirmar que eres el titular. Además, te indicaremos las condiciones acordadas y, si estás de acuerdo, solo tienes que responder con un ¡SÍ ACEPTO! ✅`,
    varios:`El equipo te sale a inicial 0!!!😱😱 ¿Te lo mandamos a casa o lo recoges en tienda? 👀 \n\n Precio promocional por hoy ${diaSemana} ${diaHoy} de ${mesActual} 😱😱 ¿Te lo mandamos a casa o lo recoges en tienda? 👀\n\n De acuerdo a la evaluación realizada en nuestro sistema actualmente solo puedes renovar con modalidad al contado, sin embargo, si tienes tarjeta de crédito podemos hacer un financiamiento hasta 24 cuotas sin intereses y a 0 inicial 😱😱. ¿Tienes alguna tarjeta de crédito?🙌👀\n\n De acuerdo a la evaluación realizada en nuestro sistema actualmente solo puedes renovar con modalidad al contado, sin embargo, te comento que tenemos convenio con los siguientes bancos si deseas adquirir un equipo en cuotas sin intereses y a 0 inicial 😱😱 con tarjeta de crédito:\n🔴 Scotiabank: En 3, 6, 9, 12, 18 y 36 cuotas sin intereses.\n🟢Interbank: En 12, 18 y 24 cuotas sin intereses.\n🔵 BCP: En 3, 6, 9, 12, 18 y 24 cuotas sin intereses.\n🟡 BBVA: En 3, 6, 9, 12, 15, 18 y 24 cuotas sin intereses.\n🟠Financiera Oh: En 2, 6 y 18 cuotas sin intereses.\n🟣Cencosud: En 12 y 18 cuotas sin intereses.\n🟤Diners: En 2 a 12 cuotas sin intereses.\n O con cualquier otra tarjeta de crédito de tu preferencia consultando con tu banco sobre los intereses. ¿Qué tarjeta de crédito cuentas para poder evaluarte? ✍\n\n*${name} * 👋✨ El *precio especial* que te estamos otorgando al *contado* será un *pago único* y lo mejor es que lo podrás financiar *en cuotas sin intereses* 🤩💰 *con las tarjetas de crédito ¡BBVA, BCP, Cencosud, Diners Club, Financiera OH, Interbank o Scotiabank! * 🙌💳 (equipos seleccionados) Para verificar si cumples con los requisitos de esta campaña de cuotas sin intereses 🥳 coméntame ¿tienes tarjeta de crédito de los bancos mencionados?`,

    //CARACTERISTICAS ESPECIALES
    c_camara:`**${name}* te comento que el nuevo *${equipoOfertado}* incluye *${numeroCamara}* cámaras en el lado posterior del equipo, cuya cámara principal de ${camaraPrincipal} MP 📸 que te permite capturar fotos *panorámicas, retrato y grabar con detalles espectaculares*, 😱 además una cámara de ${camaraAdicional} MP, ambas cámaras incluyen un flash ideal para *fotografías nocturnas*. 🌃🔝`,
    c_bateria:`*${name}* La capacidad de la batería del *${equipoOfertado}*, que es de ${bateria} mAh, garantiza una *duración suficiente para todo el día*, si se utiliza de forma moderada. Además, este dispositivo ofrece una *función de carga rápida de ${cargaRapida} W*, lo que permite recargar la batería en un corto período de tiempo. 😉👌`,
    c_pantalla: `*${name}* El *${equipoOfertado}* ofrece una experiencia visual envolvente con su generosa pantalla de ${pulgadasPantalla} y una tasa de refresco de ${tasaRefresco} Hz que *garantiza animaciones fluidas*. Su calidad de imagen impresionante, con amplia gama de colores, hace que tus fotos, videos y redes sociales favoritas se vean *simplemente espectaculares*. 😉👌`,
    c_procesador: `*${name}* El procesador del *${equipoOfertado}* es un ${procesadorEquipo} de ${numeroNucleo} núcleos con una velocidad de procesamiento de ${velocidadProcesador} GHz, lo que *garantiza un excelente rendimiento* para ejecutar varias aplicaciones simultáneamente, sin retrasos. Además, su compatibilidad con las *redes XG* proporciona una experiencia de uso excepcional. 👌😉`,
    c_ram: `*${name}* El ${equipoOfertado} tiene una memoria RAM de *${ramEquipo} GB*, eso quiere decir que podrás ejecutar más aplicaciones en simultáneo sin que se ralentice. Esto significa que podrás cambiar entre aplicaciones de manera más fluida y realizar *multitareas* sin problemas. 🧠💪`,
  
    //ARGUMENTOS
    c_descuentoOperador: `Es importante considerar por qué un operador te ofrece beneficios adicionales, como descuentos o bonos 🤔. No siempre estos beneficios reflejan la calidad del servicio. 🚨 \n\nEn nuestro caso, somos reconocidos por Osiptel como líderes en navegación 🌐 y brindamos la mejor cobertura a nivel nacional 🇵🇪, diferenciándonos de otras operadoras. 🏆📶`,
    c_contadoNo: `*${name}* comprendo tu preocupación sobre la cuota inicial del equipo 📲, pero recuerda que, al realizar este pago, logramos mensualidades más económicas. 🤗 Lo que se traduce como un ahorro adicional para ti. 📈💰 \n\n Si aún tienes inquietudes, puedo ofrecerte la mejor opción que se adecue a tus necesidades y presupuesto, 🤩 Estoy aquí para ayudarte 🙌`,
    c_precioEquipo: `*${name}* es importante tener en cuenta algunos aspectos antes de tomar una decisión. 😉 \n\n 📌 Somos reconocidos por Osiptel como líderes en navegación 🌐 otorgando la mejor cobertura a nivel nacional 🇵🇪, Recuerda que también te ofrecemos beneficios especiales como Claro Club 🎁, Claro Música 🎶, Claro Video 📽, Millas Latam ✈ a través de Claro puntos. 💰 \n\n Voy a revisar la oferta que recibiste y buscar una alternativa que se ajuste a tus necesidades y presupuesto 🔎. Estoy aquí para garantizar que tomes la mejor decisión. 🤗`,
    c_Retail: `*${name}* entiendo que el equipo en tiendas Retail pueda costar menos, pero recuerda que ⚠, al comprar nuestro equipo, ante cualquier inconveniente 🪛 te ofrecemos una garantía por 12 meses.  \n\n A diferencia de las plataformas de tiendas Retail, 🫣 donde los equipos generalmente son vendidos por terceros sin garantía directa, 📉 nosotros te brindamos la tranquilidad 😌 de tener una compra directa y atención especializada. 🤩 \n\n Estoy aquí para asegurar que obtengas el mejor equipo celular. 🤗✨`,
    c_cuotaInicial: `*${name}* comprendo tu preocupación sobre la cuota inicial del equipo 📲, pero recuerda que, al realizar este pago, logramos mensualidades más económicas. 🤗 Lo que se traduce como un ahorro adicional para ti. 📈💰 \n\n Si aún tienes inquietudes, puedo ofrecerte la mejor opción que se adecue a tus necesidades y presupuesto, 🤩 Estoy aquí para ayudarte 🙌`,
    c_sinStock: `*${name}* comprendo tu interés en obtener ese equipo en específico. Sin embargo, no lo tenemos en stock, permíteme ofrecerte algunas alternativas similares que tenemos disponible en estos momentos, por ejemplo: ${equipoOfertado} a tan solo S/ ${precioPromocionalPortabilidad} 💻🔄`,
    c_cambioPromocion: `*${name}*, así es, esa fue la promoción que estaba disponible ese día y lo ideal hubiera sido aprovecharla. Actualmente, el equipo que deseas sigue en promoción en comparación con su precio real. ⏳⚡️Ten en cuenta que las promociones tienen un tiempo limitado y generalmente no duran más de 24 horas. Es posible que mañana ya no esté disponible y vuelva a su precio original. ¡No dejes pasar esta oportunidad! 🎁🚀 Aprovecha esta promoción mientras aún está vigente. ¡No te arrepentirás! 😊📱 `,
    c_permanencia: `*¡${name}!* 👋 ¡No te preocupes¡, recuerda que nuestra campaña de *Renovación WhatsApp*✅ te brinda *precios diferenciados* 💰. \n\nAdemás, tener el plan por 12 o 18 meses te brinda una variedad de beneficios especiales como *Claro Club 🎁, Claro Música 🎶, Claro Video 📽, Millas Latam* ✈ a través de *Claro puntos.*`,
    c_accesorioaContado: `${name} entiendo tu negativa, sin embargo, este accesorio está regularmente a un precio mayor, a ti se te está brindando un descuento especial y podrías aprovechar en regalárselo a un familiar o a una amistad.`,
    c_convenioBanco: `*¡${name}!* 👋✨ El *precio especial* que te estamos otorgando al *contado* será un *pago único* y lo mejor es que lo podrás financiar *en cuotas sin intereses* 🤩💰 *con las tarjetas de crédito ¡BBVA, BCP, Cencosud, Diners Club, Financiera OH, Interbank o Scotiabank!* 🙌💳 (equipos seleccionados)  \n\nPara verificar si cumples con los requisitos de esta campaña de cuotas sin intereses 🥳 coméntame ¿tienes tarjeta de crédito de los bancos mencionados?`,
    c_catalogox: `ANTIBAJA \n ¡Puedes probar nuestro servicio y estamos seguros de que una vez que experimentes sus beneficios, te quedarás con nosotros por mucho tiempo! 🌟😃\n\n CLIENTE REFUTA FALTA DEL CARGADOR\n📱 Los nuevos celulares Samsung y iPhone *solo viene con el accesorio del cable.* Para reducir residuos y ser más sostenibles 🌍, además de ofrecer precios más atractivos 💰.\n\n CLIENTE PIDE CELULARES GRATIS\n ¡Hola! 📱✨ Aunque no ofrecemos celulares gratis, tenemos una oferta increíble: hasta un 30% de descuento en modelos seleccionados y ¡entrega gratuita previa validación de cobertura! 🚚💨 No pierdas la oportunidad de conseguir el celular que deseas a un precio fantástico. ¿Te interesa algún modelo en particular o te gustaría que te recomiende una oferta especial? 😊\n\n CLIENTE PIDE CATÁLOGO\n ${name}, Nuestra atención es 100% personalizada para ello. Me encantaría saber ¿cuál es la característica principal que buscas 🧐 y si tienes un presupuesto establecido? 💰 para así poder recomendarte el equipo perfecto que se ajuste a tus necesidades. 👍`,

    //BENEFICIOS
    c_beneficios: `CLAROCLUB \n Te invito a descargar nuestra aplicación *CLARO CLUB* desde la *Play Store* 🎮📲 o *App Store* 🍏📱! Podrás acceder a un amplio catálogo de descuentos 🛍️ en miles de establecimientos✨💳 ¡No pierdas la oportunidad de disfrutar de increíbles descuentos y beneficios adicionales! 😍🔥\n\nCLARODRIVE\n¡Recuerda que puedes disfrutar de *CLARO DRIVE*, donde obtendrás *25GB* de almacenamiento gratuito en la nube! 🌥️📂 Además, tienes la opción de adquirir hasta *1TB* de almacenamiento para guardar todos tus archivos, fotos, videos y mucho más. 📷📁💾`,

    //REVOCATORIA
    c_revocatoria: `Recuerda que puedes cancelar la autorización para recibir llamadas de ofertas de nuestra parte 📞💬, accediendo a nuestro sitio web o comunicándote directamente con nuestro servicio al cliente 📲📞. Estamos comprometidos a respetar tu decisión y brindarte la mejor experiencia posible con nuestros productos y servicios. 😊🙏`,

     //Asesor No Disponible
    c_asesornoready: `${name}, por inconvenientes técnicos estaré derivando la comunicación con otro compañero para que continúe con su atención y no desaproveche nuestras excelentes promociones en equipos 📱 🥳 \n\n Actualmente, tenemos un inconveniente técnico en nuestro sistema de evaluación, por lo que apenas se resuelva, te daré el precio del equipo 🙏😊. \n\n ¡Buenas tardes!!, disculpa la demora, hubo un inconveniente con el sistema de Claro, pero ya ha sido superado y ya estoy aquí para ayudarte.🙏😊 \n\n ¡Gracias por tu espera! 😄 En estos momentos estamos experimentando dificultades técnicas en nuestro sistema. En cuanto se solucionen, nos comunicaremos contigo para poder ayudarte con la evaluación. ¡Apreciamos mucho tu comprensión! 🙏🔧`,
 
    //DERIVACIONES
    c_derivaciones: `¡Hola ${name}! Para que puedas recibir una asesoría especializada sobre el estado de tu servicio 📶🔍, te sugerimos que te comuniques al 123☎️ o al 📞0800-00123 desde una línea fija. Este canal es exclusivo para ventas de equipos y nuestro equipo estará encantado de brindarte toda la ayuda que necesitas. 💻`,

    //BLOQUE POR DEUDA
    c_bloqueoDeuda: `📱${name}, validamos que actualmente cuentas con un importe pendiente de pago ¡No te preocupes! Puedes pagarlo desde donde te encuentres a través de tu banca móvil o de billeteras digitales 💳 \n\n Escríbenos cuando hayas realizado el pago ¡Tu nuevo equipo te está esperando! 🤩 ¡no desaproveches esta excelente promoción!`,

    //CLIENTE NO RESPONDE
    c_clientenoresponde: `5 MINUTOS \n😄📱 ¡Nos encanta seguir en contacto contigo! ¡Estamos esperando con ansias tu respuesta! 😊\n\n15 MINUTOS \n⏰⚡️Si estás ocupado ahora, no hay problema. ¡No dudes en escribirnos cuando tengas tiempo! Estaremos encantados de mostrarte las promociones disponibles para ti. 😊🎉 Te atendió *{userName}*. ¡Que tengas un excelente día! 🌟🙌`,

    //DESPEDIDA
    c_despedidaVenta: `*${name}*, ¡Fue un placer atenderte y gracias por tu tiempo! 😊 Si en el futuro tienes alguna pregunta o consulta, no dudes en preguntar por mí. También *puedes recomendar a tus familiares o amigos 👨‍👩‍👧‍👦 que deseen renovar sus dispositivos* ¡Estoy aquí para ayudarte! Te atendió *{userName}*, ¡hasta pronto! 🥳`,
    c_despedidaNoVenta: `**${name}** 😃 Recuerda que siempre puedes escribirnos aquí para obtener más información sobre nuestras ofertas y promociones. ¡Pregunta por mí *{userName}* y estaré encantado de ayudarte!, También *puedes recomendar a tus familiares o amigos 👨‍👩‍👧‍👦 que deseen renovar sus dispositivos*. ¡Que tengas un excelente día y gracias por tu tiempo! 🌟📱`,
    
    //RECUPERAR VENTA
    c_recuperarVentas: `Buenos tardes!!, Soy ${name} de Claro 🙌👀 Verifico que no se pudo concretar la entrega del equipo cuando se generó la reservación. Cuéntame, ¿Cómo podemos ayudarte para que puedas disfrutar tu equipo? 😊`,

  }

     const titleMap = {
    saludoOutbound: "🗣️ Saludos Outbound",
    saludoInbound:"🗣️  Saludos Inbound",

    equipoCliente:"🔍  Equipo del Cliente",
    ubicacionCliente: "🔍  Ubicación del Cliente",
    lineasAdicionales: "🔍  Lineas Adicionales",
    preferenciaCliente: "🔍  Preferencias del cliente",
    presupuestoCliente: "🔍  Presupuesto del Cliente",
    preguntasAdicionales: "🔍  Preguntas Adicionales",

    esperaBreve: "⏳ Mensajes de Espera",

    preOferta: "📢 Pre - Oferta",
    equipoCuota: "💳 Equipo a Cuotas",
    equipoContado: "📢 Equipo al Contado",
    entidadBancaria: "📢 Con entidad Bancaria",
    ofrecimientoAccesorio: "📢 Ofrecimiento de Accesorio",
    ofrecimientoPm: "📢 Ofrecimiento de PM",
    nodeseaPm: "📢 No desea Protección Móvil",

    delivery: "✅ delivery ",
    sinDelivery: "✅  Sin Delivery",
    ventaCac: "✅  Para venta CAC",
    colorEquipo: "✅  Color de Equipo",
    conPortabilidad: "✅  Con Portabilidad",
    conLineanueva: "✅  Con linea nueva",
    contacto: "✅  Contacto",
    varios: "✅  Varios",

    c_camara: "📊  Cámara ",
    c_bateria: "📊   Batería",
    c_procesador: "📊   Pantalla",
    c_procesador: "📊   Procesador",
    c_ram: "📊   Ram",

    c_descuentoOperador: "🧠  Descuento Operador",
    c_contadoNo: "🧠  No quiere contado",
    c_precioEquipo: "🧠  Precio de equipo",
    c_Retail: "🧠  Prefiere comprar en Retail",
    c_cuotaInicial: "🧠  Cuota Inicial",
    c_sinStock: "🧠  Sin sctock",
    c_cambioPromocion: "🧠  Cambio de promoción",
    c_permanencia: "🧠  No quiere contado",
    c_accesorioaContado: "🧠  Accesorio al contado",
    c_convenioBanco: "🧠  Convenio con el Banco",
    c_catalogox: "🧠  Otros",

    c_beneficios: "🤩  Claro Club y Claro Drive",
    c_revocatoria: "⚖️ Revocatoria de Consentimiento",
    c_asesornoready: "📵 Asesor no Disponible",
    c_derivaciones: "🔀 Derivaciones",
    c_bloqueoDeuda: "🚫 Bloqueo de Deuda",
    c_clientenoresponde: "🙈 Cliente no Responde",
    c_despedidaVenta: "👋 Despedida Venta",
    c_despedidaNoVenta: "👋 Despedida No Venta",
    c_recuperarVentas: "♻️ Recuperar Ventas",


  };

  document.getElementById("messageBox").textContent = messages[type] || "Mensaje no disponible.";
  document.getElementById("sectionTitle").textContent = titleMap[type] || "Mensaje Generado";

  setActiveButton(type);
}

function setActiveButton(type) {
  const allButtons = document.querySelectorAll("button[id^='btn-']");
  allButtons.forEach(btn => {
    if (btn.id === `btn-${type}`) {
      btn.classList.add("text-red-500", "font-semibold");
      btn.classList.remove("text-gray-400");
    } else {
      btn.classList.remove("text-red-500", "font-semibold");
      btn.classList.add("text-gray-400");
    }
  });
}

function copyMessage() {
  const msg = document.getElementById("messageBox").textContent;
  navigator.clipboard.writeText(msg).then(() => {
    alert("Mensaje copiado al portapapeles");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const camposReactivos = ["userName", 
                          "clientName", 
                          "modeloEquipo", 
                          "almacenEquipo", 
                          "bonus", 
                          "cuotaInicial", 
                          "cuotaMensual", 
                          "financiamiento", 
                          "planCliente",
                          "precioPlan",
                          "precioTotalEquipo",
                          "descuentoClaroPuntos",
                          "tarjetaBanco",
                          "cuotaTarjeta",
                          "equipoOfertado",
                          "precioAccesorio",
                          "pmTotal",
                          "colorEquipoUno",
                          "colorEquipoDos", 
                          "precioPromocionalPortabilidad", 
                          "diaSemana",
                          "diaHoy",
                          "mesActual",
                          "numeroCamara",
                          "camaraPrincipal",
                          "camaraAdicional",
                          "bateria",
                          "cargaRapida",
                          "pulgadasPantalla",
                          "tasaRefresco",
                          "ramEquipo",




                        ];
  camposReactivos.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => {
        if (currentChat) loadChat(currentChat);
      });
    }
  });

  const marcaTelefono = document.getElementById("marcaTelefono");
  if (marcaTelefono) {
    marcaTelefono.addEventListener("change", () => {
      if (currentChat) loadChat(currentChat);
    });
  }

  loadChat(currentChat);
});

// fin

function copyMessage() {
  const msg = document.getElementById("messageBox").textContent;
  navigator.clipboard.writeText(msg).then(() => {
    alert("Mensaje copiado al portapapeles");
  });
}

function toggleSubmenu(id) {
  const allSubmenus = [
    'saludosSubmenu', 'filtroSubmenu', 'esperaSubmenu', 'ofrecimientoSubmenu',
    'precierreSubmenu', 'caracteristicasSubmenu', 'argumentosSubmenu', 'beneficiosSubmenu',
    'revocatoriaSubmenu', 'asesorSubmenu', 'derivacionesSubmenu', 'bloqueoSubmenu',
    'norespondeSubmenu', 'despedidaSubmenu', 'recuperarSubmenu'
  ];

  const sectionTitles = {
    saludosSubmenu: "🗣️ Mensajes de Saludo",
    filtroSubmenu: "🔍 Preguntas de Filtro",
    esperaSubmenu: "⏳ Mensajes de Espera",
    ofrecimientoSubmenu: "📢 Ofrecimientos",
    precierreSubmenu: "✅ Pre Cierres",
    caracteristicasSubmenu: "📊 Características",
    argumentosSubmenu: "🧠 Argumentos",
    beneficiosSubmenu: "🤩 Beneficios",
    revocatoriaSubmenu: "⚖️ Revocatoria de Consentimiento",
    asesorSubmenu: "📵 Asesor no Disponible",
    derivacionesSubmenu: "🔀 Derivaciones",
    bloqueoSubmenu: "🚫 Bloqueo de Deuda",
    norespondeSubmenu: "🙈 Cliente no Responde",
    despedidaSubmenu: "👋 Despedida",
    recuperarSubmenu: "♻️ Recuperar Ventas"
  };

  allSubmenus.forEach(sub => {
    const el = document.getElementById(sub);
    if (el) {
      if (sub === id) {
        el.classList.toggle("hidden");
      } else {
        el.classList.add("hidden");
      }
    }
  });

  const h2 = document.getElementById("sectionTitle");
  h2.textContent = sectionTitles[id] || "Mensaje Generado";
}

document.addEventListener("DOMContentLoaded", () => {
  const campos = ["userName", "clientName"];
  campos.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener("input", () => {
        if (currentChat) {
          loadChat(currentChat);
        }
      });
    }
  });

  const marcaTelefono = document.getElementById("marcaTelefono");
  if (marcaTelefono) {
    marcaTelefono.addEventListener("change", () => {
      if (currentChat === "preferenciaCliente") {
        loadChat(currentChat);
      }
    });
  }

  loadChat(currentChat);
});



function recargarPagina() {
  location.reload();
}
