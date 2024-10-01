import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function Component() {
  const lessonTitle = "Spanish Verb Conjugation"
  const keyPoints = [
    "Regular verbs follow predictable patterns",
    "Irregular verbs have unique conjugations",
    "Tenses affect verb endings",
    "Subject pronouns often determine conjugation"
  ]
  const examples = [
    { spanish: "Yo hablo", english: "I speak" },
    { spanish: "Tú comes", english: "You eat" },
    { spanish: "Ella escribe", english: "She writes" }
  ]
  const nextSteps = [
    "Practice with more verbs",
    "Try conjugating in different tenses",
    "Use verbs in full sentences"
  ]

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-[#0070b3] mb-8 text-center">
          Wrap Up: {lessonTitle}
        </h1>

        <div className="space-y-8">
          <div className="bg-[#f8ebe0] rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#254460] mb-4 flex items-center">
              Key Takeaways
            </h2>
            <ul className="space-y-2">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#0070b3] font-bold mr-2">•</span>
                  <span className="text-[#254460]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#99c6e1] rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#254460] mb-4 flex items-center">
              Quick Examples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {examples.map((example, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow flex justify-between items-center">
                  <span className="text-[#0070b3] font-semibold">{example.spanish}</span>
                  <ArrowRightIcon className="w-4 h-4 text-[#254460] mx-2" />
                  <span className="text-[#254460]">{example.english}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#254460] rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <ArrowRightIcon className="w-6 h-6 mr-2" />
              Next Steps
            </h2>
            <ul className="space-y-2">
              {nextSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#99c6e1] font-bold mr-2">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-[#254460] italic">
          Remember, consistent practice is key to mastering {lessonTitle.toLowerCase()}!
        </p>
      </div>
    </div>
  )
}


Crearas componentes de React estaticos repito deben ser paginas estaticas con diseno y ya para un un profesor de inglés especializado en enseñar español a hablantes de inglés. Tu tarea es redactar una nueva versión de unos folletos educativos en inglés, asegurando que el contenido sea completamente original y único, sin recurrir a traducciones literales ni plagios de ninguna forma. Tu principal objetivo es reescribir el material de manera creativa, manteniendo la esencia del contenido educativo, pero con un enfoque totalmente nuevo y diferente al original.

Instrucciones para el trabajo:
Diseño y colores:
Diseño original: El nuevo diseño debe ser completamente distinto al original, tanto en estilo como en disposición visual. No se permite replicar ninguna forma, distribución, ni estilo preexistente.
Crea desde cero: Usa formas innovadoras como espirales, diseños dinámicos o formas  para asegurar que el diseño sea visualmente original y atractivo.
Colores específicos:

Organización única: Rediseña la disposición de los títulos y las secciones de manera que sean completamente distintas y más fáciles de seguir que en el material original, asegurando una presentación visualmente innovadora.
Estilo del texto:
Reescritura creativa: Evita cualquier traducción literal o similaridad con el texto original. La nueva versión debe ser completamente original y reescrita desde cero. El contenido debe ser reformulado en tus propias palabras, manteniendo la esencia educativa, pero con un estilo renovado y diferente.

Ejemplo: Si el original dice "Ana es de México", reescríbelo de forma única, como: "Pedro es de Honduras". La idea es cambiar nombres, ubicaciones o ejemplos, manteniendo la estructura educativa, pero evitando el uso de los mismos datos.

Tono formal y accesible: Usa un tono claro, formal pero accesible, dirigido a hablantes de inglés que están aprendiendo español.

Humor opcional: Solo si se te solicita explícitamente, agrega un toque creativo o humorístico. De lo contrario, mantén un tono formal y profesional.

Estructura única: Cambia la estructura visual del contenido en cada sección para que el formato sea completamente diferente al del original, pero igual de claro y fácil de entender.

Títulos atractivos: Crea títulos llamativos y originales que capten la atención del lector, evitando cualquier parecido o replicación directa de los títulos originales.