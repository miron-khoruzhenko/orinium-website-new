// Это простой компонент, который имитирует внешний вид вашей формы
export default function ContactFormSkeleton() {
  return (
    <section id="contact" className="py-24 bg-black text-white animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skeleton для заголовка */}
        <div className="h-12 w-1/3 bg-gray-700 rounded-md mb-16"></div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skeleton для карты */}
          <div className="border border-gray-700 p-8">
            <div className="h-8 w-1/2 bg-gray-700 rounded-md mb-4"></div>
            <div className="h-6 w-full bg-gray-700 rounded-md mb-6"></div>
            <div className="aspect-video bg-gray-800 rounded-md"></div>
          </div>
          {/* Skeleton для полей формы */}
          <div className="space-y-6">
            <div className="h-14 w-full bg-gray-700 rounded-md"></div>
            <div className="h-14 w-full bg-gray-700 rounded-md"></div>
            <div className="h-14 w-full bg-gray-700 rounded-md"></div>
            <div className="h-36 w-full bg-gray-700 rounded-md"></div>
            <div className="h-16 w-full bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  )
}