import { Sun } from 'lucide-react';

const pronouns = ['Yo', 'Tú', 'Él/Ella/Usted', 'Nosotros(as)', 'Ustedes', 'Ellos/Ellas'];
const endings = {
  AR: ['aría', 'arías', 'aría', 'aríamos', 'arían', 'arían'],
  ER: ['ería', 'erías', 'ería', 'eríamos', 'erían', 'erían'],
  IR: ['iría', 'irías', 'iría', 'iríamos', 'irían', 'irían'],
};
const verbs = {
  Bailar: ['bailaría', 'bailarías', 'bailaría', 'bailaríamos', 'bailarían', 'bailarían'],
  Comer: ['comería', 'comerías', 'comería', 'comeríamos', 'comerían', 'comerían'],
  Vivir: ['viviría', 'vivirías', 'viviría', 'viviríamos', 'vivirían', 'vivirían'],
};

export default function ConditionalTable() {
  return (
    <div className="text-slate-900 min-h-screen bg-gray-200 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="bg-blue-600 p-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">¿Qué harías tú en esta situación?</h1>
          <div className="flex items-center bg-white rounded-full px-3 py-1">
            <Sun className="text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold">Conjugación</span>
          </div>
        </div>

        {/* Explicación del condicional */}
        <div className="bg-gray-100 p-4">
          <h2 className="text-lg font-semibold">Understanding the Conditional Tense in Spanish</h2>
          <p className="mt-2">
            In Spanish, the conditional tense is used to express what *would* happen or what someone *would do* under certain circumstances. It's similar to the use of <strong>"would"</strong> in English. For example:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Yo bailaría</strong> - I would dance</li>
            <li><strong>Él comería</strong> - He would eat</li>
            <li><strong>Nosotros viviríamos</strong> - We would live</li>
          </ul>
          <p className="mt-2">
            The conjugation in Spanish involves adding specific endings to the verb stem, depending on whether the verb ends in <strong>-AR</strong>, <strong>-ER</strong>, or <strong>-IR</strong>. Below, you'll see how to conjugate common verbs in the conditional tense.
          </p>
        </div>

        <div className="bg-yellow-400 p-3">
          <h2 className="text-lg font-semibold">Verbos en Condicional</h2>
        </div>

        <div className="p-5">
          {/* Tabla con terminaciones de -AR, -ER, -IR */}
          <table className="w-full mb-6">
            <thead className="bg-gray-300">
              <tr>
                <th className="p-3 text-left">Pronombre</th>
                <th className="p-3 text-left">-AR</th>
                <th className="p-3 text-left">-ER</th>
                <th className="p-3 text-left">-IR</th>
              </tr>
            </thead>
            <tbody>
              {pronouns.map((pronoun, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-medium">{pronoun}</td>
                  <td className="p-3">{endings.AR[idx]}</td>
                  <td className="p-3">{endings.ER[idx]}</td>
                  <td className="p-3">{endings.IR[idx]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tabla con verbos específicos */}
          <table className="w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className="p-3 text-left">Pronombre</th>
                <th className="p-3 text-left">Bailar</th>
                <th className="p-3 text-left">Comer</th>
                <th className="p-3 text-left">Vivir</th>
              </tr>
            </thead>
            <tbody>
              {pronouns.map((pronoun, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-medium">{pronoun}</td>
                  <td className="p-3">{verbs.Bailar[idx]}</td>
                  <td className="p-3">{verbs.Comer[idx]}</td>
                  <td className="p-3">{verbs.Vivir[idx]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
