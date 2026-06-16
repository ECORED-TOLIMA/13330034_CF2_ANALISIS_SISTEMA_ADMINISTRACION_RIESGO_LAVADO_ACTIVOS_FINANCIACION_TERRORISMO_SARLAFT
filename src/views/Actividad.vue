<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> reconocer y aplicar los conceptos fundamentales del SARLAFT en situaciones relacionadas con la prevención del lavado de activos y la financiación del terrorismo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué significa la sigla SARLAFT?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sistema de Análisis del Riesgo Financiero y Tributario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistema de Administración de Recursos Financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema de Regulación de Activos y Fondos Territoriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Este sistema permite gestionar el riesgo de lavado de activos y financiación del terrorismo mediante controles dentro de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Cuál es el objetivo principal del SARLAFT?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar las utilidades de las organizaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Prevenir y controlar el lavado de activos y la financiación del terrorismo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Controlar únicamente las operaciones financieras internacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir los impuestos empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Su finalidad es prevenir y detectar riesgos de LA/FT mediante la implementación de políticas y controles internos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: 'El lavado de activos consiste en:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Invertir dinero en mercados financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar cuentas bancarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ocultar el origen ilícito de recursos para darles apariencia de legalidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Controlar el flujo de caja de una empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Se trata de ocultar el origen ilegal del dinero para que parezca provenir de actividades legítimas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué es la financiación del terrorismo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La financiación de empresas en crisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La inversión en proyectos sociales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La transferencia de recursos entre empresas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La recolección o provisión de fondos para apoyar actividades terroristas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Consiste en aportar o gestionar recursos para apoyar actividades terroristas, sin importar si el dinero es legal o ilegal.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Cuál de los siguientes es un riesgo asociado al LA/FT?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Riesgo reputacional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Riesgo climático.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Riesgo ambiental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Riesgo geográfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Este riesgo afecta la imagen de la organización cuando se asocia con actividades ilícitas o pierde credibilidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué entidad en Colombia recibe reportes de operaciones sospechosas?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'DIAN.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'UIAF.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ministerio de Educación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Banco Mundial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Esta entidad analiza reportes para identificar posibles operaciones relacionadas con actividades ilícitas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'Una operación inusual es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una transacción que no corresponde al comportamiento habitual del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una operación realizada en efectivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una transacción internacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una operación de bajo valor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Este tipo de operación genera alerta porque se aparta del comportamiento esperado del cliente y requiere análisis para descartar posibles riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'Una operación sospechosa es:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una operación realizada en moneda extranjera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una transacción bancaria diaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una transferencia entre cuentas propias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una operación que puede estar relacionada con lavado de activos o financiación del terrorismo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Se considera sospechosa cuando existen señales que indican posible relación con actividades ilegales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Quién es el responsable de supervisar el SARLAFT en una organización?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Oficial de cumplimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Contador público.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gerente de ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Supervisor de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Esta figura se encarga de supervisar y garantizar el cumplimiento del sistema dentro de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué organismo internacional establece recomendaciones contra el lavado de activos?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ONU.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'GAFI.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'OMC.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'OEA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Este organismo define estándares internacionales para prevenir el lavado de activos y la financiación del terrorismo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál de los siguientes es un elemento del SARLAFT?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicidad institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estrategia comercial',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Políticas de administración del riesgo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Plan de marketing.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las políticas orientan cómo la organización gestiona y controla los riesgos asociados al LA/FT.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'Los procedimientos de control permiten:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar y monitorear operaciones sospechosas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar las ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar el posicionamiento de marca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir los gastos administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Estos procedimientos permiten identificar, analizar y monitorear operaciones que pueden representar riesgos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La infraestructura tecnológica en SARLAFT sirve para:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar recursos humanos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Monitorear y analizar transacciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La tecnología facilita el seguimiento y análisis de transacciones para detectar posibles irregularidades.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'El riesgo reputacional se relaciona con:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La pérdida de confianza del público en la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El aumento de los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La reducción de ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La rotación del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Este riesgo se refleja en la pérdida de confianza de clientes, aliados o la sociedad en la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'El riesgo legal ocurre cuando:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuyen las utilidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumenta la competencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una organización incumple normas o regulaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se incrementan los gastos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Se presenta cuando la organización incumple normas o regulaciones establecidas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'El riesgo operativo puede generarse por:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Errores en procesos internos o fallas en sistemas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Publicidad negativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bajos ingresos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambios en el mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Este riesgo surge por fallas en procesos, errores humanos o problemas en los sistemas internos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'El riesgo de contagio se presenta cuando:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se pierden clientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se reduce la productividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se disminuyen las inversiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una organización se ve afectada por relaciones con terceros involucrados en actividades ilícitas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Ocurre cuando una organización se ve afectada por su relación con terceros vinculados a actividades ilícitas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'La capacitación del personal en SARLAFT permite:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fortalecer la prevención del lavado de activos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el número de empleados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar las ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La capacitación permite que el personal identifique riesgos y actúe de manera preventiva frente al LA/FT.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'La divulgación de la información en SARLAFT busca:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que los colaboradores conozcan las políticas y procedimientos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Promocionar productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la publicidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir los gastos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Busca que los colaboradores conozcan y apliquen las políticas y procedimientos del sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es uno de los propósitos del SARLAFT en las organizaciones?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer los mecanismos de prevención y control frente al LA/FT.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el número de empleados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejorar las campañas publicitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Su propósito es fortalecer la prevención y el control de riesgos asociados al lavado de activos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
