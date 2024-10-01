import { Card } from "@/components/ui/card"
import { BookOpen, CheckCircle2, Circle } from "lucide-react"

interface OptionProps {
  text: string;
  isCorrect: boolean;
}

interface QuestionProps {
  question: string;
  options: OptionProps[];
}

interface ChooseRightOptionProps {
  title: string;
  instructions: string;
  questions: QuestionProps[];
}

const defaultProps: ChooseRightOptionProps = {
  title: "Choose the Right Option",
  instructions: "Select the correct Spanish translation for each English phrase. This exercise will help you practice essential vocabulary.",
  questions: [
    {
      question: "How do you say 'Hello' in Spanish?",
      options: [
        { text: "Hola", isCorrect: true },
        { text: "Adiós", isCorrect: false },
        { text: "Gracias", isCorrect: false },
        { text: "Por favor", isCorrect: false }
      ]
    },
    {
      question: "Which phrase means 'Good morning'?",
      options: [
        { text: "Buenas noches", isCorrect: false },
        { text: "Buenos días", isCorrect: true },
        { text: "Buenas tardes", isCorrect: false },
        { text: "Buen provecho", isCorrect: false }
      ]
    }
  ]
}

const ChooseRightOption: React.FC<ChooseRightOptionProps> = ({ 
  title = defaultProps.title, 
  instructions = defaultProps.instructions, 
  questions = defaultProps.questions 
}) => {
  return (
    <Card className="mt-20 w-full max-w-3xl mx-auto p-8 bg-gradient-to-br from-[#99c6e1] to-white shadow-lg rounded-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-[#0070b3]"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#f8ebe0] rounded-full -mb-16 -mr-16 opacity-50"></div>
      
      <h2 className="text-3xl font-bold text-[#254460] mb-6 flex items-center justify-center">
        <BookOpen className="mr-3 text-[#0070b3]" />
        {title}
      </h2>
      
      <Card className="bg-white p-4 mb-8 rounded-lg shadow-inner">
        <p className="text-[#254460] text-center italic">{instructions}</p>
      </Card>
      
      {questions.length > 0 ? (
        <div className="space-y-8">
          {questions.map((q, qIndex) => (
            <Card key={qIndex} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0070b3]">
              <h3 className="text-xl font-semibold text-[#254460] mb-4">
                {qIndex + 1}. {q.question}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.options.map((option, oIndex) => (
                  <div 
                    key={oIndex} 
                    className={`p-4 rounded-lg flex items-center justify-between ${
                      option.isCorrect ? 'bg-green-100' : 'bg-[#f8ebe0]'
                    }`}
                  >
                    <span className="text-[#254460]">{option.text}</span>
                    {option.isCorrect ? (
                      <CheckCircle2 className="text-green-500" />
                    ) : (
                      <Circle className="text-[#99c6e1]" />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-[#254460] text-center">No questions available.</p>
        </Card>
      )}
    </Card>
  )
}

export default function ChooseRightOptionUnique() {
  return <ChooseRightOption {...defaultProps} />
}