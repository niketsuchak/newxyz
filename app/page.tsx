import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Wind, Shield, Zap, Factory } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: "rydair-b-series",
    name: "RydAiR B Series",
    description:
      "High-performance electrostatic air filtration system designed for commercial and industrial applications.",
    features: ["Advanced electrostatic technology", "Low maintenance", "High efficiency filtration"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "ry2500b-ul",
    name: "RY2500B UL",
    description: "Compact electrostatic filter perfect for small to medium-sized commercial kitchens and workshops.",
    features: ["UL certified", "Compact design", "Easy installation"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "ry5000b-ul",
    name: "RY5000B UL",
    description: "Mid-range electrostatic filter system offering excellent performance for medium-scale operations.",
    features: ["Enhanced capacity", "Energy efficient", "Robust construction"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "ry7500b-ul",
    name: "RY7500B UL",
    description:
      "Heavy-duty electrostatic filter designed for large-scale industrial applications and high-volume environments.",
    features: ["Maximum capacity", "Industrial grade", "Superior performance"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

const clients = [
  { name: "Industrial Corp", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Kitchen Solutions", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Manufacturing Ltd", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Restaurant Group", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Factory Systems", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Commercial Kitchens", logo: "/placeholder.svg?height=80&width=120" },
]

export default function HomePage() {
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
              <Link href="#products" className="text-gray-700 hover:text-blue-600 font-medium">
                Products
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <Link href="#clients" className="text-gray-700 hover:text-blue-600 font-medium">
                Clients
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                Advanced Air Filtration Technology
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Clean Air Solutions for Industrial Excellence
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Leading provider of electrostatic air filtration systems for commercial kitchens, workshops, and
                industrial facilities. Experience superior air quality with our innovative technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="#products">Explore Products</a>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="#contact">Get Quote</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Electrostatic Air Filter System"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Electrostatic Filters?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our advanced electrostatic technology delivers superior air filtration performance with minimal
              maintenance requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Electrostatic Technology</h4>
              <p className="text-gray-600">Advanced electrostatic charging removes particles with 99% efficiency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Low Maintenance</h4>
              <p className="text-gray-600">Washable filters reduce operating costs and environmental impact</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Industrial Grade</h4>
              <p className="text-gray-600">Built for demanding commercial and industrial environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Product Range</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrostatic air filtration solutions for every application, from small workshops to large
              industrial facilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="mb-4">{product.description}</CardDescription>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/products/${product.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-600 mb-8">
                Ready to improve your air quality? Contact our team for expert consultation and customized filtration
                solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">sales@airverclean.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">+65 6741 5800</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <span className="text-gray-700">
                    61 Kaki Bukit Ave 1, #03-19
                    <br />
                    Shun Li Industrial Park
                    <br />
                    Singapore 417943
                  </span>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@company.com" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your air filtration needs..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to serve a diverse range of clients across various industries, from commercial kitchens to
              large manufacturing facilities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={80}
                  className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
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
                <Link href="#products" className="text-gray-400 hover:text-white block">
                  Products
                </Link>
                <Link href="#contact" className="text-gray-400 hover:text-white block">
                  Contact
                </Link>
                <Link href="#clients" className="text-gray-400 hover:text-white block">
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
