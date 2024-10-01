import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Component() {
  const paymentMethods = [
    { name: "name of image here", image: "put an istockimage here"},
    { name: "name of image here", image: "put an istockimage here"},
    { name: "name of image here", image: "put an istockimage here" },
    { name: "name of image here", image: "put an istockimage here"},
  ]

  return (
    <div className="mt-20 w-full max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-2 gap-8">
        {paymentMethods.map((method, index) => (
          <div key={index} className="space-y-3">
            <Card className="overflow-hidden ">
              <CardContent className="p-0 relative">
                <img
                  src={method.image}
                  alt={`Ilustración de ${method.name}`}
                  className="w-full h-60 object-cover"
                />
              
              </CardContent>
            </Card>
            <Input 
              type="text" 
              className=" border-t-0 border-x-0 border-b-2 border-black rounded-none focus:ring-0 focus:border-black"
            />
          </div>
        ))}
      </div>
    </div>
  )
}