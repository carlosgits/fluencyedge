
// GPT Prompt:
// Este código es una plantilla adaptable para ejercicios de enseñanza de español para hablantes de inglés. 
// Cada vez que se pase un tema nuevo (por ejemplo, artículos definidos, adjetivos, verbos, preposiciones, etc.), 
// ajusta el contenido del ejercicio (títulos, instrucciones, ejemplos, etc.) al nuevo tema.
// 1. Mantén el formato con las clases de Tailwind CSS para el estilo visual.
// 2. Cambia el título principal y los subtítulos según el tema proporcionado.
// 3. Actualiza las instrucciones y los ejemplos para reflejar el tema de la lección.
// 4. Asegúrate de adaptar las oraciones y los ejercicios de acuerdo con el nuevo tema (ej. género, conjugación, tiempos verbales, etc.).
// 5. Mantén la estructura visual coherente y clara para facilitar la enseñanza del español a hablantes de inglés.



export default function Component() {
  return (
    <div className="w-[800px] h-[1035px] bg-gray-50 p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">
        Spanish Definite Articles: Practice Exercises
      </h1>

      {/* Exercise 1: Complete the Sentence */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-300">
        <h2 className="text-xl font-bold mb-4 text-blue-800">Exercise 1: Complete the Sentence</h2>
        <p className="mb-4 text-gray-900 font-semibold">
          Fill in the blanks with the correct definite article (el, la, los, las):
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-black font-medium">
          <li>
            <span className="font-bold text-black">_____ sol</span> brilla en <span className="font-bold text-black">_____ cielo</span>. (The sun shines in the sky.)
          </li>
          <li>
            <span className="font-bold text-black">_____ niños</span> juegan en <span className="font-bold text-black">_____ parque</span>. (The children play in the park.)
          </li>
          <li>
            <span className="font-bold text-black">_____ flores</span> están en <span className="font-bold text-black">_____ jarrón</span>. (The flowers are in the vase.)
          </li>
          <li>
            <span className="font-bold text-black">_____ libros</span> están sobre <span className="font-bold text-black">_____ mesa</span>. (The books are on the table.)
          </li>
          <li>
            <span className="font-bold text-black">_____ gato</span> duerme en <span className="font-bold text-black">_____ sofá</span>. (The cat sleeps on the sofa.)
          </li>
        </ol>
      </div>

      {/* Exercise 2: Choose the Correct Article */}
      <div className="bg-blue-200 p-6 rounded-lg mb-6 border border-gray-300">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Exercise 2: Choose the Correct Article</h2>
        <p className="mb-4 text-gray-900 font-semibold">
          Select the correct article for each noun:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-black font-medium">
          <li>
            <span className="font-bold text-black">_____ agua</span> (el / la) - The water
          </li>
          <li>
            <span className="font-bold text-black">_____ problemas</span> (los / las) - The problems
          </li>
          <li>
            <span className="font-bold text-black">_____ mapa</span> (el / la) - The map
          </li>
          <li>
            <span className="font-bold text-black">_____ ciudades</span> (los / las) - The cities
          </li>
          <li>
            <span className="font-bold text-black">_____ día</span> (el / la) - The day
          </li>
        </ul>
      </div>

      {/* Exercise 3: Correct the Mistakes */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-300">
        <h2 className="text-xl font-bold mb-4 text-blue-800">Exercise 3: Correct the Mistakes</h2>
        <p className="mb-4 text-gray-900 font-semibold">Find and correct the mistakes in these sentences:</p>
        <ol className="list-decimal pl-6 space-y-4 text-black font-medium">
          <li>
            <span className="font-bold text-black">La perro</span> corre en el parque. (The dog runs in the park.)
          </li>
          <li>
            <span className="font-bold text-black">Los manzanas</span> están en la mesa. (The apples are on the table.)
          </li>
          <li>
            <span className="font-bold text-black">El flor</span> es roja. (The flower is red.)
          </li>
          <li>
            <span className="font-bold text-black">Las libro</span> son interesantes. (The books are interesting.)
          </li>
          <li>
            <span className="font-bold text-black">La sol</span> brilla en el cielo azul. (The sun shines in the blue sky.)
          </li>
        </ol>
      </div>

      {/* Exercise 4: Complete the Paragraph */}
      <div className="bg-blue-200 p-6 rounded-lg border border-gray-300">
        <h2 className="text-xl font-bold mb-4 text-blue-900">Exercise 4: Complete the Paragraph</h2>
        <p className="mb-4 text-gray-900 font-semibold">
          Fill in the blanks with the appropriate definite articles:
        </p>
        <p className="mb-2 text-black font-medium">
          En <span className="font-bold">_____ mañana</span>, María va a <span className="font-bold">_____ escuela</span>. Ella lleva <span className="font-bold">_____ mochila</span> con <span className="font-bold">_____ libros</span> y{" "}
          <span className="font-bold">_____ cuadernos</span>. Durante <span className="font-bold">_____ recreo</span>, juega con <span className="font-bold">_____ amigos</span> en <span className="font-bold">_____ patio</span>. Después de{" "}
          <span className="font-bold">_____ clases</span>, María regresa a <span className="font-bold">_____ casa</span>, donde hace <span className="font-bold">_____ tarea</span> y cena con <span className="font-bold">_____ familia</span>.
        </p>
        <p className="mt-4 text-sm text-gray-800">
          (In the morning, María goes to school. She carries a backpack with books and notebooks. During recess, she plays with friends in the playground. After classes, María returns home, where she does homework and has dinner with her
          family.)
        </p>
      </div>
    </div>
  );
}
