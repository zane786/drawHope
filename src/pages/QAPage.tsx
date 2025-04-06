import React from 'react';
import { QrCode, Recycle, HeartHandshake, Package } from 'lucide-react';

function QAPage() {
  return (
    <div className="pt-16">
      <div className="bg-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Learn more about how Draw Hope makes a difference in children's lives and communities.
          </p>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <div className="border-b border-gray-200 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <Package className="h-8 w-8 text-rose-500" />
              <h2 className="text-2xl font-semibold text-gray-900">What's included in my purchase?</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Each purchase includes a premium deck of playing cards featuring the children's artwork on the card backs. 
              The deck comes in a beautifully designed box that tells the story of the project.
            </p>
            <p className="text-gray-600">
              Inside the box, you'll find a special thank you card from the child artist whose work is featured on your cards. 
              This personal connection helps you see the direct impact of your purchase.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <QrCode className="h-8 w-8 text-rose-500" />
              <h2 className="text-2xl font-semibold text-gray-900">How can I learn more about the child I'm helping?</h2>
            </div>
            <p className="text-gray-600">
              Each thank you card includes a unique QR code that links to a special page about the child artist. 
              You'll learn about their story, their dreams, and how your purchase is helping them achieve their goals. 
              This creates a meaningful connection between you and the child you're supporting.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <Recycle className="h-8 w-8 text-rose-500" />
              <h2 className="text-2xl font-semibold text-gray-900">How are the cards made?</h2>
            </div>
            <p className="text-gray-600">
              Our cards are produced using high-quality recycled materials, demonstrating our commitment to environmental 
              sustainability. We use eco-friendly inks and packaging materials to minimize our environmental impact while 
              maintaining premium quality.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <HeartHandshake className="h-8 w-8 text-rose-500" />
              <h2 className="text-2xl font-semibold text-gray-900">What's the community impact?</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Draw Hope creates positive change at multiple levels. The cards are produced in communities facing economic 
              challenges, providing fair-wage employment opportunities to local workers. This approach ensures that your 
              purchase creates impact beyond just supporting the children's education.
            </p>
            <p className="text-gray-600">
              Each deck sold contributes to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>Supporting a child's education and development</li>
              <li>Creating fair-wage employment in struggling communities</li>
              <li>Promoting sustainable manufacturing practices</li>
              <li>Building connections between donors and recipients</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QAPage;