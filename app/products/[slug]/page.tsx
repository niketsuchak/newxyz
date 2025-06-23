import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Wind, Gauge, Settings, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = {
  "rydair-b-series": {
    name: "RydAiR B Series",
    description:
      "The RydAiR B Series represents the pinnacle of electrostatic air filtration technology, designed for demanding commercial and industrial environments where superior air quality is essential.",
    longDescription:
      "Our flagship RydAiR B Series combines advanced electrostatic precipitation technology with robust construction to deliver unmatched performance in air filtration. This system is engineered to handle high-volume air processing while maintaining exceptional efficiency and reliability.",
    specifications: {
      "Air Volume": "Up to 10,000 CFM",
      Efficiency: "99.5% @ 0.3 microns",
      "Power Consumption": "2.5 kW",
      Dimensions: '48" x 24" x 36"',
      Weight: "180 lbs",
      "Operating Temperature": "-10°C to 60°C",
      "Maintenance Interval": "3-6 months",
    },
    features: [
      "Advanced electrostatic precipitation technology",
      "Self-cleaning ionizing wires",
      "Washable aluminum collection plates",
      "Digital control panel with diagnostics",
      "Low pressure drop design",
      "Corrosion-resistant construction",
      "Easy maintenance access panels",
    ],
    applications: [
      "Large commercial kitchens",
      "Industrial manufacturing facilities",
      "Automotive paint booths",
      "Metalworking shops",
      "Food processing plants",
      "Chemical processing facilities",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    howItWorks:
      "The RydAiR B Series uses a two-stage electrostatic precipitation process. In the first stage, particles are electrically charged as they pass through ionizing wires. In the second stage, these charged particles are attracted to oppositely charged collection plates, effectively removing them from the air stream.",
  },
  "ry2500b-ul": {
    name: "RY2500B UL",
    description:
      "UL-certified compact electrostatic filter designed for small to medium-sized commercial applications, offering reliable performance with easy installation and maintenance.",
    longDescription:
      "The RY2500B UL is specifically engineered for smaller commercial spaces that require professional-grade air filtration without compromising on performance. Its compact design and UL certification make it ideal for restaurants, small workshops, and commercial kitchens.",
    specifications: {
      "Air Volume": "Up to 2,500 CFM",
      Efficiency: "98.5% @ 0.3 microns",
      "Power Consumption": "0.8 kW",
      Dimensions: '24" x 18" x 20"',
      Weight: "65 lbs",
      "Operating Temperature": "0°C to 50°C",
      "Maintenance Interval": "2-4 months",
    },
    features: [
      "UL listed for safety compliance",
      "Compact footprint design",
      "Easy-access collection plates",
      "LED status indicators",
      "Quiet operation (<55 dB)",
      "Stainless steel construction",
      "Simple installation process",
    ],
    applications: [
      "Small commercial kitchens",
      "Restaurant exhaust systems",
      "Small workshops",
      "Retail food preparation",
      "Coffee roasting facilities",
      "Small manufacturing operations",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    howItWorks:
      "The RY2500B UL employs a single-stage electrostatic process optimized for smaller air volumes. Contaminated air passes through charged plates that simultaneously charge and collect particles, providing efficient filtration in a compact design.",
  },
  "ry5000b-ul": {
    name: "RY5000B UL",
    description:
      "Mid-range UL-certified electrostatic filter system offering enhanced capacity and energy efficiency for medium-scale commercial and light industrial applications.",
    longDescription:
      "The RY5000B UL bridges the gap between compact and industrial-scale filtration systems. With enhanced capacity and advanced features, it's perfect for medium-sized operations that need reliable, efficient air filtration.",
    specifications: {
      "Air Volume": "Up to 5,000 CFM",
      Efficiency: "99.0% @ 0.3 microns",
      "Power Consumption": "1.5 kW",
      Dimensions: '36" x 20" x 28"',
      Weight: "110 lbs",
      "Operating Temperature": "-5°C to 55°C",
      "Maintenance Interval": "3-5 months",
    },
    features: [
      "UL certified for commercial use",
      "Enhanced collection capacity",
      "Energy-efficient operation",
      "Modular design for easy service",
      "Advanced control system",
      "Robust aluminum construction",
      "Integrated safety features",
    ],
    applications: [
      "Medium commercial kitchens",
      "Light manufacturing facilities",
      "Automotive service centers",
      "Printing operations",
      "Woodworking shops",
      "Laboratory exhaust systems",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    howItWorks:
      "The RY5000B UL features an enhanced two-stage electrostatic process with improved collection efficiency. The system uses optimized electric fields to ensure maximum particle capture while maintaining low energy consumption.",
  },
  "ry7500b-ul": {
    name: "RY7500B UL",
    description:
      "Heavy-duty UL-certified electrostatic filter engineered for large-scale industrial applications and high-volume environments requiring maximum filtration capacity.",
    longDescription:
      "The RY7500B UL represents our most powerful standard unit, designed for the most demanding industrial applications. With maximum capacity and superior performance, it handles the toughest air filtration challenges.",
    specifications: {
      "Air Volume": "Up to 7,500 CFM",
      Efficiency: "99.8% @ 0.3 microns",
      "Power Consumption": "2.0 kW",
      Dimensions: '42" x 22" x 32"',
      Weight: "150 lbs",
      "Operating Temperature": "-10°C to 65°C",
      "Maintenance Interval": "4-6 months",
    },
    features: [
      "Maximum filtration capacity",
      "Industrial-grade construction",
      "Advanced diagnostic system",
      "High-efficiency collection plates",
      "Automated cleaning cycles",
      "Explosion-proof options available",
      "Remote monitoring capability",
    ],
    applications: [
      "Large industrial facilities",
      "Heavy manufacturing plants",
      "Chemical processing operations",
      "Large commercial kitchens",
      "Pharmaceutical manufacturing",
      "Power generation facilities",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    howItWorks:
      "The RY7500B UL utilizes a high-performance two-stage electrostatic precipitation system with advanced plate geometry for maximum collection efficiency. The system includes automated monitoring and self-diagnostic capabilities for optimal performance.",
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AirVerClean</h1>
                <p className="text-sm text-gray-600">Electrostatic Air Filtration</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/#products" className="text-gray-700 hover:text-blue-600 font-medium">
                Products
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <Link href="/#clients" className="text-gray-700 hover:text-blue-600 font-medium">
                Clients
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/#products" className="text-blue-600 hover:text-blue-800">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Professional Grade</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{product.description}</p>
              <p className="text-gray-700 mb-8">{product.longDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="/#contact">Request Quote</a>
                </Button>
                <Button variant="outline" size="lg">
                  Download Specs
                </Button>
              </div>
            </div>
            <div>
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Images */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Product Views</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {product.images.slice(1).map((image, index) => (
              <div key={index}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-full"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {index === 0 ? "Front View" : index === 1 ? "Side View" : "Top View"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Electrostatic Precipitation Process</h3>
                    <p className="text-gray-700 mb-4">{product.howItWorks}</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 text-sm font-bold">1</span>
                        </div>
                        <span className="text-sm text-gray-600">Air intake and pre-filtration</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 text-sm font-bold">2</span>
                        </div>
                        <span className="text-sm text-gray-600">Particle charging stage</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 text-sm font-bold">3</span>
                        </div>
                        <span className="text-sm text-gray-600">Collection and clean air output</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="How electrostatic filtration works"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Typical Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.applications.map((application, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gauge className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{application}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Improve Your Air Quality?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our experts today for a customized solution and detailed quote for the {product.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <a href="/#contact">Get Quote</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              Call +65 6741 5800
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Wind className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AirVerClean</span>
              </div>
              <p className="text-gray-400 mb-4">
                Leading provider of electrostatic air filtration systems for commercial and industrial applications.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="text-gray-400 hover:text-white block">
                  Home
                </Link>
                <Link href="/#products" className="text-gray-400 hover:text-white block">
                  Products
                </Link>
                <Link href="/#contact" className="text-gray-400 hover:text-white block">
                  Contact
                </Link>
                <Link href="/#clients" className="text-gray-400 hover:text-white block">
                  Clients
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>61 Kaki Bukit Ave 1, #03-19</p>
                <p>Shun Li Industrial Park</p>
                <p>Singapore 417943</p>
                <p>Phone: +65 6741 5800</p>
                <p>Email: sales@airverclean.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AirVerClean. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
