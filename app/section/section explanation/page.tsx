import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="mt-20 w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />
      
      {/* Burbujas decorativas */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-300 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-300 rounded-full opacity-20 translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-16 h-16 bg-purple-300 rounded-full opacity-20 translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-20 h-20 bg-indigo-300 rounded-full opacity-20 -translate-x-1/2" />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-300 rounded-full opacity-20" />
      <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-pink-300 rounded-full opacity-20" />
      <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-orange-300 rounded-full opacity-20" />
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 tracking-tight">Name of the section</h2>
        <div className="flex flex-col space-y-6">
          <div className="bg-white bg-opacity-70 rounded-lg p-6 shadow-md">
            <p className="text-gray-700 text-lg leading-relaxed">
             Introduce here what is thee section about
            </p>
          </div>
          <Card className="bg-gradient-to-r from-yellow-200 to-orange-200 p-4 inline-block rounded-lg shadow-md self-start">
            <p className="text-indigo-800 font-semibold text-lg">change this for a phrase to motivate short very short</p>
          </Card>
        </div>
      </div>
      
      {/* Burbujas adicionales para equilibrar el diseño */}
      <div className="absolute bottom-1/2 right-1/6 w-8 h-8 bg-teal-300 rounded-full opacity-20" />
      <div className="absolute top-2/3 left-1/3 w-6 h-6 bg-red-300 rounded-full opacity-20" />
      <div className="absolute top-1/6 right-1/2 w-10 h-10 bg-purple-400 rounded-full opacity-20" />
    </div>
  )
}