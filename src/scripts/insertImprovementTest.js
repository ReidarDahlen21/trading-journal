const { insertImprovement } = require("../services/improvementService");

const testInsert = async () => {
  const result = await insertImprovement({
    user: "ReidarDahlen",
    startDate: new Date("2024-01-17"),
    endDate: new Date("2024-03-21"),
    improvementsDescription: "Estrategia de scalping optimizada",
    improvementsDetail: `
      # Análisis Global de tu Journal de Trading

      A continuación, presento un análisis global de tu journal, resaltando patrones recurrentes (tanto negativos como positivos) y proponiendo posibles mejoras, tanto en el aspecto psicológico como en el técnico. Enfatizo las conductas que se repiten y las acciones recomendadas para cada situación:

      ---

      ## 1. Problemáticas repetidas y cómo solucionarlas

      ### 1.1. FOMO (Fear Of Missing Out)
      **Patrón**: Entrar en trades apresurados por miedo a “perder” un movimiento, especialmente tras haberte perdido una buena oportunidad previa o leer a otros (por ejemplo, Kish).
        
      **Consecuencias**:
      - Operaciones abiertas sin suficiente confluencia.  
      - Empeora si hay cierta bronca o ansiedad (“si no entro ya, me lo pierdo”).  
      - Más SL y, en consecuencia, frustración.

      **Solución**:
      - Define un *checklist* breve: si un setup no cumple al menos X confluencias (p. ej. bias HTF + Key Level claro + confirmación en m1/m5 + timing adecuado), **no entres**.  
      - Respira hondo cuando sientas ansiedad y revisa el plan antes de hacer clic.  
      - Aplica una “regla de pausa”: si sientes FOMO, te obligas a esperar 1-2 velas más para confirmar, o directamente te das 5-10 minutos de descanso.

      ---

      ### 1.2. TILT (operar bajo enojo o frustración)
      **Patrón**: Tomar varios trades sucesivos luego de una racha de SL o BEs, con el único fin de “recuperar” rápido. Se ve reflejado en comentarios de rabia, bronca, ganas de llorar, etc.

      **Consecuencias**:
      - Overtrading desenfrenado.  
      - SL seguidos por entrar sin plan.  
      - A veces ni pones el stop de manera correcta (incluso hay trades sin SL).

      **Solución**:
      - **Obligarte a parar** tras dos SL seguidos. Sal de la plataforma 15-20 minutos.  
      - Ten una rutina de “reset mental”: respirar, caminar un poco, re-leer el plan de trading.  
      - Recuerda que el trading es maratón, no sprint: no vas a “recuperar” en una sola operación.  
      - Utiliza alarmas o avisos que te recuerden: “Si llevo X operaciones malas seguidas, me quedo fuera el resto del día o me tomo mínimo 1 hora de descanso”.

      ---

      ### 1.3. Overtrading en horarios o condiciones poco claras
      **Patrón**:
      - Entrar en trades dentro de “mini Monday” (la primera hora/dos horas tras el fin de la sesión previa) sin confluencias.  
      - Operar demasiado viernes PM o a minutos del Equities Open sin confirmaciones claras.  
      - Abrir operación cada vez que notas cualquier pequeña señal, aunque no sea parte de tu estrategia principal.

      **Solución**:
      - Define en tu plan qué franjas horarias son válidas según tu estrategia (por ejemplo, “No opero en mini Monday si no hay un Bias HTF clarísimo con Key Levels clarísimos”).  
      - Mantén un máximo de operaciones al día o por bloque horario.  
      - Aplica la norma: “Operar solo si se cumplen al menos 2-3 condiciones de confluencia” (bias, Key Level, timing apropiado, estructura clara, etc.).  
      - Si notas que estás forzando entradas, cierra la plataforma un rato.

      ---

      ### 1.4. Ignorar el Bias de Higher Timeframe y el contexto (Premium/Discount)
      **Patrón**:
      - Buscas largos en zonas clarísimamente de Premium cuando la tendencia general viene bajista.  
      - Operas en contra de la liquidez que está más cerca (DOL que todavía no fue tomado), y luego el precio va justamente a barrerla.  
      - Entras en corto cuando hay confluencias bullish muy fuertes, etc.

      **Consecuencias**:
      - Stop Loss rápido, trades sin sentido o trades que exigen un SL enorme.  
      - Comentarios como “¿Por qué sigo buscando Long si el bias es netamente Bearish?”

      **Solución**:
      - Al comenzar tu sesión, determina de forma clara: “¿Hoy soy alcista o bajista según H1/H4? ¿Cuál es la liquidez/draw on liquidity más cercana?”.  
      - Marca en el gráfico Premium vs. Discount. Si vas a entrar en Long en Premium o en Short en Discount, necesitas razones MUY fuertes (y ni así siempre compensa).  
      - Repasa cada cierto tiempo si el bias se sigue cumpliendo o si hubo un cambio drástico.

      ---

      ### 1.5. Falta de paciencia en las confirmaciones
      **Patrón**:
      - Entras en la “punta” sin esperar confirmación de CSD (change of state of delivery) o sin un claro “zoom” en un Key Level.  
      - Operaciones tomadas 1 minuto antes del Equities Open, sin esperar velas de confirmación.

      **Solución**:
      - Incorpora la regla de “esperar confirmación en m1 o m5” cuando el setup viene de H1/H4, FVG, etc.  
      - Si detectas un FVG en m5, no entras “market” a la primera; esperas *prueba de rechazo* (p. ej. vela que cierra a favor).  
      - Evita impulsividad. La mayoría de los trades “demasiado rápidos” terminan en SL instantáneo.

      ---

      ### 1.6. Tomar trades ajenos (por comentarios de terceros)
      **Patrón**: 
      - Seguir a Kish u otros sin entender el porqué del trade.  
      - Termina en SL y te llena de bronca porque “no era ni mi idea”.

      **Solución**:
      - La regla de hierro: **no** entras a un trade que no entiendes al 100%.  
      - Si en un live alguien propone un trade, lo analizas con tu sistema y si te encaja, lo tomas. Si no, fuera.

      ---

      ## 2. Patrones negativos más influyentes
      1. **FOMO + TILT**: Claramente el mayor daño viene por sobre-operar en estado emocional negativo.  
      2. **Ir en contra del Bias**: Incluso reconoces en el journal que si hubieras mirado el H4/HTF bias, la operación no tenía sentido.  
      3. **Movimientos de Break Even prematuros**: En algunos casos vas BE demasiado rápido por miedo a perder, y luego el precio sí se mueve a tu favor. Te queda mucha bronca.  
      4. **No mover a BE cuando el trade no pinta bien**: Ocurre lo contrario: a veces mantienes SL completo cuando bastaba con poner BE si la volatilidad no aparece.

      El componente **emocional** resulta decisivo en casi todos estos errores.

      ---

      ## 3. Conductas positivas a reforzar
      1. **Cuando estás tranquilo**: Al tomar descansos o alejarte tras 1 o 2 malas operaciones, sueles volver con la cabeza más fría y aprovechar setups correctos.  
      2. **Uso del Key Level + Failed Expansion + confirmación**: Cuando esperas el “zoom” o “CSD” en 1m (en sintonía con un KL de 5m o H1), los resultados son buenos.  
      3. **Tomar parciales en lugares razonables**: Hay ocasiones en que 50+ puntos de ganancia sin parcial es arriesgado; cuando efectivamente tomas parciales, proteges capital y reduces ansiedad.  
      4. **Análisis diario del Bias**: Cuando lo respetas, sueles tener trades alineados, con menor probabilidad de SL abrupto.

      ---

      ## 4. Conclusión: ¿Más problemas psicológicos o técnicos?
      - **Principalmente psicológicos** (FOMO, TILT, ansiedad, sobreoperar, dejarse influir por otros).  
      - **La parte técnica** también requiere ajustes (evitar entrar en premium/discount opuesto sin confirmación, filtrar mejor los FVG OR, etc.). Sin embargo, la mayoría de tus SL vienen por no seguir tus propias reglas o por operar descontrolado tras un SL.

      **Recomendación principal**: Enfócate en el **dominio emocional**. Practica la pausa tras cada SL y define límites diarios de operaciones. Repasa tu plan antes de cada trade.

      ---

      ## 5. Análisis de las estrategias
      No hay “una” estrategia que sea estrictamente mala, sino:
      - Operas distintos modelos (Failed Expansion + Key Level, 2 Bar Pattern, Retracement FVG, 9:32 Sweep, etc.).  
      - Cuando aplicas tu modelo de manera coherente y en sintonía con el Higher Timeframe, obtienes resultados positivos y menos estrés.  
      - El problema surge en “mezclar” setups sin confluencias claras y, sobre todo, en impulsividad post-SL.

      **Lo que mejor te funciona** (por las entradas que acaban en Win o en parciales considerables):
      - **Failed Expansion + Key Level m1** con confirmación de estructura en la misma temporalidad.  
      - **Retracement FVG** cuando coincide con un Key Level relevante y el bias HTF es claro.  
      - El “Zoom” en un Key Level (cuando la vela cierra y confirma rechazo).  
      - El “9:32 Sweep” (cuando lo tomas sin dudar y con SL correcto).

      **Lo que peor te funciona**:
      - FVG OR sin confluencias.  
      - Operaciones contrarias al bias y/o en horas inadecuadas (mini Monday, viernes PM).  
      - Operar con TILT.

      ---

      ## Plan de acción recomendado

      ### 1. Reglas de Emoción / Gestión Psicológica
      - **Máximo 2 SL seguidos**: si pierdes dos veces seguidas, **obligatorio** 15-20 min de pausa (o cerrar la plataforma el resto de la sesión si el día fue muy estresante).  
      - **Checklist previo**: si no cumple al menos 2-3 confluencias (bias HTF, Key Level, confirmación m1/m5, timing correcto), no entres.  
      - **No sigas trades de otros** sin entenderlos.  
      - **Coloca alertas o recordatorios físicos** para no caer en TILT (un post-it que diga “Respira, revisa tu plan”).

      ### 2. Reglas Técnicas
      - Antes de iniciar la sesión, define el **Bias** (¿bullish, bearish, neutral?), marca Premium vs. Discount y la liquidez (DOL) más cercana.  
      - **No** entres en Long en Premium (o Short en Discount) a menos que haya confirmaciones muy fuertes.  
      - Espera **confirmación** (vela que rechace el FVG, FE + Key Level claro, etc.).  
      - Revisa la **hora**: evita operar sin fundamento sólido la primera vela del Equities Open, mini Monday, viernes PM, etc.

      ### 3. Manejo de las tomas parciales y Break Even
      - Define de antemano si a los 2:1 (o 3:1) vas a tomar parcial.  
      - Criterio claro para BE: “voy BE si el precio se mueve al menos X puntos a favor y da señales de consolidación”, o “mantengo el SL si el setup es muy fuerte”.  
      - Registra por qué motivo moviste a BE o no. Así verás patrones más concretos.

      ### 4. Seguimiento y ajuste
      - Cada semana, revisa tus trades. Pregúntate:
        - ¿Seguiste el plan de confluencias?  
        - ¿Respetaste tu límite de 2 SL seguidos?  
        - ¿Cómo manejaste BE y parciales?  
      - Ajusta progresivamente lo que veas que sigue fallando.

      ---

      ### Reflexión final
      El journal muestra un conocimiento técnico decente, con varios modelos interesantes (Failed Expansions, Key Levels, Retracement FVG, 9:32 sweep, etc.). Pero el mayor problema radica en **cómo y cuándo** decides ejecutarlos, impulsado por emociones y estrés.

      El **70-80% de tus errores** vienen de:
      - Operar con enojo,  
      - Salir de tu plan tras un SL,  
      - Meterte en trades sin confluencia por FOMO,  
      - Mover Stops y Parciales basándote en miedo en lugar de un criterio objetivo.

      Si logras **dominar tus emociones** (frenar a tiempo, re-chequear tus reglas y operar solo setups con sentido), vas a mejorar drásticamente tus resultados.

      ¡Ánimo y adelante! Este proceso de aprendizaje es normal. Con disciplina y un plan claro para manejar tu estado mental, vas a poder ver cambios muy notables en tus estadísticas.

    `
  });

  console.log("Resultado de la inserción:", result);
};

testInsert();
